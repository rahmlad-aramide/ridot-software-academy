import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/db';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

export async function getCurrentUser() {
  await dbConnect();

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  let decoded: any;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }

  if (!decoded?.userId) return null;

  const user = await User.findById(decoded.userId).select('-password');
  if (!user) return null;

  return {
    id: user._id.toString(),
    email: user.email,
    role: user.role || 'user',
  };
}

export function hasRole(
  role: string | undefined,
  allowedRoles: Array<'user' | 'admin' | 'super_admin'>,
) {
  const normalizedRole = (role || 'user') as 'user' | 'admin' | 'super_admin';
  return allowedRoles.includes(normalizedRole);
}
