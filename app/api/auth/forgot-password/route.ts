import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dbConnect from '@/lib/db';
import User from '@/models/User';

const resend =
  process.env.RESEND_API_KEY &&
  !process.env.RESEND_API_KEY.startsWith('re_placeholder')
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 },
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (user) {
      const resetToken = crypto.randomBytes(32).toString('hex');
      const hashedToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

      user.resetPasswordToken = hashedToken;
      user.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000);
      await user.save();

      const appUrl =
        process.env.NEXT_PUBLIC_APP_URL ||
        new URL(req.url).origin ||
        'http://localhost:3000';
      const resetUrl = `${appUrl}/reset-password?token=${resetToken}`;
      const fromEmail = process.env.EMAIL_FROM || 'onboarding@resend.dev';

      if (resend) {
        await resend.emails.send({
          from: `Ridot Software Academy <${fromEmail}>`,
          to: normalizedEmail,
          subject: 'Reset your Ridot Software Academy password',
          html: `
            <p>Hello,</p>
            <p>We received a request to reset your Ridot Software Academy password.</p>
            <p><a href="${resetUrl}">Reset your password</a></p>
            <p>This link expires in 1 hour. If you did not request this, you can ignore this email.</p>
          `,
        });
      } else {
        console.log(`[PASSWORD RESET LINK] ${normalizedEmail}: ${resetUrl}`);
      }
    }

    return NextResponse.json(
      {
        message:
          'If an account exists for that email, reset instructions have been sent.',
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
