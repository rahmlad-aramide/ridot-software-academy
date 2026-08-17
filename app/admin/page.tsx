import { redirect } from 'next/navigation';
import { getCurrentUser, hasRole } from '@/lib/auth';
import AdminClient from './AdminClient';

export default async function AdminPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  if (!hasRole(user.role, ['admin', 'super_admin'])) {
    redirect('/dashboard');
  }

  return <AdminClient role={user.role} />;
}
