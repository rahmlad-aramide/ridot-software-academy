import { NextResponse } from 'next/server';
import crypto from 'crypto';
import dbConnect from '@/lib/db';
import Enrollment from '@/models/Enrollment';
import { Resend } from 'resend';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Initialize Resend
const resend =
  RESEND_API_KEY && !RESEND_API_KEY.startsWith('re_placeholder')
    ? new Resend(RESEND_API_KEY)
    : null;

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.text();
    const signature = req.headers.get('x-paystack-signature');

    const isPlaceholder =
      !PAYSTACK_SECRET_KEY ||
      PAYSTACK_SECRET_KEY.startsWith('sk_test_placeholder');

    // Verify webhook signature (unless placeholder key is in use and no signature is provided for easy mock testing)
    if (!isPlaceholder) {
      if (!signature) {
        return NextResponse.json(
          { error: 'Missing signature' },
          { status: 401 },
        );
      }
      const hash = crypto
        .createHmac('sha512', PAYSTACK_SECRET_KEY)
        .update(body)
        .digest('hex');

      if (hash !== signature) {
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 },
        );
      }
    } else {
      // Mock sandbox mode check
      const isMockSig = req.headers.get('x-mock-signature') === 'true';
      if (!isMockSig && signature && PAYSTACK_SECRET_KEY) {
        const hash = crypto
          .createHmac('sha512', PAYSTACK_SECRET_KEY)
          .update(body)
          .digest('hex');
        if (hash !== signature) {
          return NextResponse.json(
            { error: 'Invalid mock signature' },
            { status: 401 },
          );
        }
      }
    }

    const payload = JSON.parse(body);

    // We listen to charge.success
    if (payload.event === 'charge.success') {
      const { reference, amount } = payload.data;
      const amountPaid = amount / 100; // convert to NGN

      // Find the corresponding enrollment
      const enrollment = await Enrollment.findOne({
        paymentReference: reference,
      });

      if (enrollment) {
        if (enrollment.paymentStatus !== 'completed') {
          // Update status
          enrollment.paymentStatus = 'completed';
          enrollment.amountPaid = amountPaid;

          // Generate a custom Student ID: RSA-2026-XXXX
          const randomDigits = Math.floor(1000 + Math.random() * 9000);
          enrollment.studentId = `RSA-2026-${randomDigits}`;
          await enrollment.save();

          // Send welcome email
          await sendWelcomeEmail(enrollment);
        } else {
          console.log(
            `Enrollment with reference ${reference} is already completed.`,
          );
        }
      } else {
        console.error(
          `Enrollment not found for payment reference: ${reference}`,
        );
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}

async function sendWelcomeEmail(enrollment: any) {
  const firstName = enrollment.fullName.split(' ')[0] || enrollment.fullName;
  const careerPath = enrollment.careerPath;
  const careerPathUpper = careerPath.toUpperCase();

  const emailSubject = `WELCOME TO RIDOT SOFTWARE ACADEMY - ${careerPathUpper} PROGRAM`;

  // Email template content
  const emailHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff; color: #333333;">
      <div style="text-align: center; border-bottom: 2px solid #010080; padding-bottom: 20px; margin-bottom: 20px;">
        <h2 style="color: #010080; margin: 0; font-size: 24px; font-weight: 700; text-transform: uppercase;">Ridot Software Academy</h2>
      </div>

      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">Dear ${firstName},</p>

      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        <strong>Congratulations and welcome to Ridot Software Academy! 🎉</strong>
      </p>

      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        We’re excited to have you join our <strong>${careerPath}</strong> program. You are highly valued, and we look forward to an engaging and impactful learning experience with you.
      </p>

      <div style="background-color: #f7f9fc; border-left: 4px solid #010080; padding: 15px; margin: 20px 0; border-radius: 4px;">
        <p style="font-size: 16px; font-weight: 600; margin-top: 0; margin-bottom: 10px; color: #010080;">To get you started, please find the important links below:</p>
        
        <p style="margin-bottom: 12px; font-size: 15px; line-height: 1.5;">
          <strong>Slack Workspace</strong> (for tracking activities and updates):<br />
          <a href="https://join.slack.com/t/ridotsoftwareacademy/shared_invite/zt-3ulw63q1e-zDL3VtK0Ds0zoVXSEhJn8w" style="color: #2b2bd0; text-decoration: underline; font-weight: 500;">Join Slack Workspace</a>
        </p>
        <p style="font-size: 14px; color: #666666; margin-top: -8px; margin-bottom: 15px; font-style: italic;">
          Please download a Slack app on your device and install.
        </p>

        <p style="margin-bottom: 12px; font-size: 15px; line-height: 1.5;">
          <strong>WhatsApp Community</strong> (for quick communication and support):<br />
          <a href="https://chat.whatsapp.com/FupNIonOCudAhmYQtTGjZY" style="color: #2b2bd0; text-decoration: underline; font-weight: 500;">Join WhatsApp Community</a>
        </p>
      </div>

      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Also attached is the <strong>Students' Guide</strong>, which contains everything you need to navigate the program successfully.
      </p>

      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Follow Ridot's social media account to get tech support:<br />
        <a href="https://linktr.ee/Ridotsoftware" style="color: #2b2bd0; text-decoration: underline; font-weight: 500;">Follow us on social media</a>
      </p>

      <div style="background-color: #fffde7; border-left: 4px solid #fbc02d; padding: 15px; margin: 20px 0; border-radius: 4px; font-size: 15px; line-height: 1.5;">
        If you have any questions or need assistance at any point, feel free to reach out via this email or call/WhatsApp: <strong>+2347083143779</strong>.
      </div>

      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        We look forward to supporting your growth and success in <strong>${careerPath.toLowerCase()}</strong>.
      </p>

      <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; margin-top: 20px; font-size: 14px; color: #555555;">
        <p style="margin: 0; font-weight: 600;">Best regards,</p>
        <p style="margin: 4px 0 0 0;">Ridot Software Academy</p>
        <p style="margin: 2px 0 0 0; font-style: italic;">Co-founder</p>
      </div>
    </div>
  `;

  if (resend) {
    try {
      const fromEmail = process.env.EMAIL_FROM || 'onboarding@resend.dev';
      await resend.emails.send({
        from: `Ridot Software Academy <${fromEmail}>`,
        to: enrollment.email,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(
        `Welcome email successfully sent to ${enrollment.email} via Resend.`,
      );
    } catch (err) {
      console.error('Error sending welcome email via Resend API:', err);
      logFallbackEmail(enrollment.email, emailSubject, emailHtml);
    }
  } else {
    console.log(
      '--- Resend API Key is not set. Simulating Email Dispatch in Console ---',
    );
    logFallbackEmail(enrollment.email, emailSubject, emailHtml);
  }
}

function logFallbackEmail(to: string, subject: string, html: string) {
  console.log(
    '========================================================================',
  );
  console.log(`[EMAIL DISPATCH FALLBACK]`);
  console.log(`TO: ${to}`);
  console.log(`SUBJECT: ${subject}`);
  console.log(`BODY:`);
  // Strip tags for terminal logging readability
  const text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/\n\s*\n/g, '\n');
  console.log(text.trim());
  console.log(
    '========================================================================',
  );
}
