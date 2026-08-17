import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enrollment from '@/models/Enrollment';
import { calculatePayment } from '@/config/courses';
import { getCurrentUser, hasRole } from '@/lib/auth';

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    await dbConnect();

    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!hasRole(user.role, ['admin', 'super_admin'])) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = params;
    const body = await req.json().catch(() => ({}));

    const enrollment = await Enrollment.findById(id);

    if (!enrollment) {
      return NextResponse.json(
        { error: 'Enrollment not found' },
        { status: 404 },
      );
    }

    if (enrollment.paymentStatus !== 'completed') {
      enrollment.paymentStatus = 'completed';

      const pricing = calculatePayment(
        enrollment.careerPath,
        enrollment.paymentOption,
      );

      enrollment.amountPaid = body.amountPaid ?? pricing.amountToPay;
      enrollment.studentId =
        enrollment.studentId ||
        `RSA-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      await enrollment.save();
    }

    return NextResponse.json({ enrollment }, { status: 200 });
  } catch (error: any) {
    console.error('Admin enrollment confirmation error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
