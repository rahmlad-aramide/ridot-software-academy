'use client';

import React, { useEffect, useState } from 'react';
import { MdCheckCircle, MdRefresh, MdSearch } from 'react-icons/md';

type AdminRole = 'admin' | 'super_admin';

export default function AdminClient({ role }: { role: AdminRole }) {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  const [adminMessage, setAdminMessage] = useState('');

  const loadEnrollments = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/enrollments');
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to load enrollments');
      }

      setEnrollments(data.enrollments || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load enrollments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnrollments();
  }, []);

  const confirmPayment = async (id: string) => {
    setSavingId(id);
    setError('');

    try {
      const res = await fetch(`/api/admin/enrollments/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to confirm payment');
      }

      setEnrollments((current) =>
        current.map((item) => (item._id === id ? data.enrollment : item)),
      );
    } catch (err: any) {
      setError(err.message || 'Failed to confirm payment');
    } finally {
      setSavingId(null);
    }
  };

  const createAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminMessage('');
    setError('');

    if (!adminEmail || !adminPassword) {
      setError('Email and password are required');
      return;
    }

    setCreatingAdmin(true);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: adminEmail,
          password: adminPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create admin');
      }

      setAdminMessage(
        `Admin account created for ${data.user.email}. Role: ${data.user.role}`,
      );
      setAdminEmail('');
      setAdminPassword('');
    } catch (err: any) {
      setError(err.message || 'Failed to create admin');
    } finally {
      setCreatingAdmin(false);
    }
  };

  const filteredEnrollments = enrollments.filter((enrollment) => {
    const haystack = [
      enrollment.fullName,
      enrollment.email,
      enrollment.phone,
      enrollment.careerPath,
      enrollment.paymentReference,
      enrollment.paymentStatus,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(query.toLowerCase());
  });

  const pendingCount = enrollments.filter(
    (enrollment) => enrollment.paymentStatus !== 'completed',
  ).length;

  return (
    <main className="min-h-[calc(100vh-76px)] bg-[linear-gradient(180deg,rgba(235,240,255,0.8)_0%,rgba(255,255,255,1)_45%,rgba(248,250,252,1)_100%)] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(2,1,129,0.05)]">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[rgb(1,0,128)] uppercase">
                Admin
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
                Enrollment Payments
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-gray-500">
                Review enrollment records, confirm bank transfers, and inspect
                the basic payment data stored in the database.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="text-xs font-medium text-gray-500">Total</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">
                  {enrollments.length}
                </div>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                <div className="text-xs font-medium text-amber-700">
                  Pending
                </div>
                <div className="mt-1 text-2xl font-bold text-amber-700">
                  {pendingCount}
                </div>
              </div>
            </div>
          </div>

          {role === 'super_admin' && (
            <form
              onSubmit={createAdmin}
              className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    New Admin Email
                  </label>
                  <input
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition outline-none focus:border-[rgb(43,43,208)]"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    New Admin Password
                  </label>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition outline-none focus:border-[rgb(43,43,208)]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={creatingAdmin}
                  className="inline-flex items-center justify-center rounded-xl bg-[rgb(1,0,128)] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {creatingAdmin ? 'Creating...' : 'Create Admin'}
                </button>
              </div>
              {adminMessage && (
                <p className="mt-3 text-sm font-medium text-emerald-700">
                  {adminMessage}
                </p>
              )}
            </form>
          )}

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <MdSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, email, phone, reference, or status"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-10 text-sm transition outline-none focus:border-[rgb(43,43,208)] focus:bg-white"
              />
            </div>
            <button
              onClick={loadEnrollments}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <MdRefresh className="text-lg" />
              Refresh
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[rgb(1,0,128)] border-t-transparent" />
          </div>
        ) : (
          <div className="grid gap-5">
            {filteredEnrollments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center text-sm text-gray-500">
                No enrollments found.
              </div>
            ) : (
              filteredEnrollments.map((enrollment) => (
                <article
                  key={enrollment._id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(2,1,129,0.04)]"
                >
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                    <div className="space-y-3">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {enrollment.fullName}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {enrollment.email}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-[rgb(1,0,128)]">
                          {enrollment.careerPath}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                          {enrollment.paymentOption}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                          {enrollment.paymentMode}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 font-semibold ${
                            enrollment.paymentStatus === 'completed'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          {enrollment.paymentStatus}
                        </span>
                      </div>

                      <div className="grid gap-3 text-sm text-gray-600 md:grid-cols-2">
                        <div>
                          <span className="font-semibold text-gray-900">
                            Phone:
                          </span>{' '}
                          {enrollment.phone}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            Reference:
                          </span>{' '}
                          {enrollment.paymentReference}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            Amount Paid:
                          </span>{' '}
                          ₦{Number(enrollment.amountPaid || 0).toLocaleString()}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            Student ID:
                          </span>{' '}
                          {enrollment.studentId || 'Not assigned'}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:min-w-[220px] lg:items-end">
                      <button
                        onClick={() => confirmPayment(enrollment._id)}
                        disabled={
                          enrollment.paymentStatus === 'completed' ||
                          savingId === enrollment._id
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[rgb(1,0,128)] px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <MdCheckCircle className="text-lg" />
                        {savingId === enrollment._id
                          ? 'Confirming...'
                          : enrollment.paymentStatus === 'completed'
                            ? 'Confirmed'
                            : 'Confirm Payment'}
                      </button>
                      <p className="max-w-[220px] text-right text-xs text-gray-500">
                        Confirming will mark the payment as completed and
                        generate a student ID if one is missing.
                      </p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}
