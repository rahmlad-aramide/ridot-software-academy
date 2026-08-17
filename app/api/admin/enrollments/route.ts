import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enrollment from '@/models/Enrollment';
import { getCurrentUser, hasRole } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();

    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!hasRole(user.role, ['admin', 'super_admin'])) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const enrollments = await Enrollment.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ enrollments }, { status: 200 });
  } catch (error: any) {
    console.error('Admin enrollments fetch error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
