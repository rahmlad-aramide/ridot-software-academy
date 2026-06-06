import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/db';
import Enrollment from '@/models/Enrollment';
import { calculatePayment } from '@/config/courses';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

// Helper to verify user token
async function getUserIdFromToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    return decoded?.userId || null;
  } catch (err) {
    return null;
  }
}

export async function GET() {
  try {
    await dbConnect();
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const enrollment = await Enrollment.findOne({ userId });
    return NextResponse.json({ enrollment }, { status: 200 });
  } catch (error: any) {
    console.error('Get enrollment error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const {
      fullName,
      email,
      phone,
      expectedCompletionMonth,
      twitterHandle,
      linkedInHandle,
      paymentOption,
      careerPath,
      expectations,
    } = data;

    // Validate fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !twitterHandle ||
      !linkedInHandle ||
      !paymentOption ||
      !careerPath ||
      !expectations
    ) {
      return NextResponse.json(
        { error: 'Please fill in all required fields marked with *' },
        { status: 400 },
      );
    }

    // Calculate required amount
    let paymentDetails;
    try {
      paymentDetails = calculatePayment(careerPath, paymentOption);
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }

    const { amountToPay } = paymentDetails;
    const paymentReference = `RSA_REF_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 8)}`;

    // Find or update enrollment
    let enrollment = await Enrollment.findOne({ userId });

    if (enrollment) {
      // If payment is already completed, do not allow changing enrollment
      if (enrollment.paymentStatus === 'completed') {
        return NextResponse.json(
          { error: 'You are already enrolled.' },
          { status: 400 },
        );
      }

      // Update existing pending enrollment
      enrollment.fullName = fullName;
      enrollment.email = email;
      enrollment.phone = phone;
      enrollment.expectedCompletionMonth = expectedCompletionMonth || '';
      enrollment.twitterHandle = twitterHandle;
      enrollment.linkedInHandle = linkedInHandle;
      enrollment.paymentOption = paymentOption;
      enrollment.careerPath = careerPath;
      enrollment.expectations = expectations;
      enrollment.paymentReference = paymentReference;
      await enrollment.save();
    } else {
      // Create new enrollment
      enrollment = await Enrollment.create({
        userId,
        fullName,
        email,
        phone,
        expectedCompletionMonth: expectedCompletionMonth || '',
        twitterHandle,
        linkedInHandle,
        paymentOption,
        careerPath,
        expectations,
        paymentReference,
        paymentStatus: 'pending',
      });
    }

    // Initialize Paystack payment
    const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Developer testing mock flow
    if (!paystackSecret || paystackSecret.startsWith('sk_test_placeholder')) {
      console.log('--- Developer Sandbox Mode: Mocking Paystack Redirect ---');
      const mockRedirectUrl = `${appUrl}/dashboard?mock_payment=true&reference=${paymentReference}`;
      return NextResponse.json(
        { authorization_url: mockRedirectUrl, isMock: true },
        { status: 200 },
      );
    }

    const paystackResponse = await fetch(
      'https://api.paystack.co/transaction/initialize',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${paystackSecret}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: Math.round(amountToPay * 100), // in kobo
          reference: paymentReference,
          callback_url: `${appUrl}/dashboard`,
          metadata: {
            enrollmentId: enrollment._id.toString(),
          },
        }),
      },
    );

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok || !paystackData.status) {
      console.error('Paystack initialization failed:', paystackData);
      return NextResponse.json(
        {
          error:
            paystackData.message || 'Payment service initialization failed',
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { authorization_url: paystackData.data.authorization_url, isMock: false },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('Submit enrollment error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
