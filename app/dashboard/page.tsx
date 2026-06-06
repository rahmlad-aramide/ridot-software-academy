'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { calculatePayment } from '@/config/courses';
import {
  MdCheckCircle,
  MdPending,
  MdPrint,
  MdLaunch,
  MdSchool,
  MdPayment,
  MdAssignmentTurnedIn,
  MdInfo,
} from 'react-icons/md';

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<any>(null);
  const [enrollment, setEnrollment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [confirmingPayment, setConfirmingPayment] = useState(false);
  const [error, setError] = useState('');

  // Fetch auth and enrollment details
  const fetchDashboardData = async () => {
    try {
      const authRes = await fetch('/api/auth/me');
      const authData = await authRes.json();

      if (!authRes.ok || !authData.user) {
        router.push('/login');
        return;
      }
      setUser(authData.user);

      const enrollRes = await fetch('/api/enroll');
      const enrollData = await enrollRes.json();

      if (!enrollRes.ok || !enrollData.enrollment) {
        // No enrollment yet
        router.push('/enroll');
        return;
      }

      setEnrollment(enrollData.enrollment);
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
      setError('Failed to load account details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if redirecting back from a mock payment test flow
    const isMock = searchParams.get('mock_payment') === 'true';
    const reference = searchParams.get('reference');

    if (isMock && reference) {
      async function triggerMockWebhook() {
        setConfirmingPayment(true);
        try {
          // Fetch current enrollment details to calculate correct price
          const enrollRes = await fetch('/api/enroll');
          const enrollData = await enrollRes.json();
          if (!enrollRes.ok || !enrollData.enrollment) {
            throw new Error('Enrollment not found.');
          }

          const e = enrollData.enrollment;
          const { amountToPay } = calculatePayment(
            e.careerPath,
            e.paymentOption,
          );

          // Hit webhook API with mock payload
          const res = await fetch('/api/webhooks/paystack', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-mock-signature': 'true', // tell webhook to bypass sig check in sandbox
            },
            body: JSON.stringify({
              event: 'charge.success',
              data: {
                reference: reference,
                amount: Math.round(amountToPay * 100), // in kobo
              },
            }),
          });

          if (!res.ok) {
            throw new Error('Failed to confirm mock payment');
          }

          // Clear query params and reload
          router.replace('/dashboard');
          await fetchDashboardData();
        } catch (err: any) {
          console.error(err);
          setError('Failed to confirm mock payment in sandbox mode.');
          setLoading(false);
        } finally {
          setConfirmingPayment(false);
        }
      }
      triggerMockWebhook();
    } else {
      fetchDashboardData();
    }
  }, [router, searchParams]);

  const handlePrint = () => {
    window.print();
  };

  const handleRetryPayment = async () => {
    if (!enrollment) return;
    setLoading(true);
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enrollment),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      if (data.authorization_url) {
        router.push(data.authorization_url);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to re-initialize payment.');
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (loading || confirmingPayment) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[rgb(1,0,128)] border-t-transparent"></div>
        {confirmingPayment && (
          <p className="animate-pulse text-sm font-semibold text-gray-600">
            Confirming test payment and generating Student ID...
          </p>
        )}
      </div>
    );
  }

  const isCompleted = enrollment?.paymentStatus === 'completed';
  const pricing = enrollment
    ? calculatePayment(enrollment.careerPath, enrollment.paymentOption)
    : null;
  const balance = pricing ? pricing.balance : 0;

  return (
    <main className="min-h-screen bg-gray-50/50 px-4 py-12 md:px-8">
      {/* Receipt view stylesheet for print formatting */}
      <style jsx global>{`
        @media print {
          nav,
          footer,
          .no-print,
          button {
            display: none !important;
          }
          main {
            padding: 0 !important;
            background: white !important;
          }
          .print-container {
            border: none !important;
            box-shadow: none !important;
            max-width: 100% !important;
            padding: 0 !important;
          }
          .print-receipt-only {
            display: block !important;
          }
        }
      `}</style>

      <div className="print-container mx-auto max-w-5xl space-y-8">
        {/* Header - Hidden in Print */}
        <div className="no-print flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-[rgb(1,0,128)]">
              Student Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Welcome, {enrollment?.fullName.split(' ')[0]}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-max cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
          >
            Log Out
          </button>
        </div>

        {error && (
          <div className="no-print flex items-center gap-3 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-600">
            <MdInfo className="text-xl" />
            <span>{error}</span>
          </div>
        )}

        {/* 1. Status Tracker - Hidden in Print */}
        <div className="no-print rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800">
            Enrollment Progress
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-2">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[rgb(1,0,128)]">
                <MdCheckCircle className="text-2xl" />
              </div>
              <span className="mt-3 text-sm font-bold text-gray-800">
                Account Created
              </span>
              <span className="mt-0.5 text-xs text-gray-400">Step 1</span>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[rgb(1,0,128)]">
                <MdCheckCircle className="text-2xl" />
              </div>
              <span className="mt-3 text-sm font-bold text-gray-800">
                Details Submitted
              </span>
              <span className="mt-0.5 text-xs text-gray-400">Step 2</span>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${isCompleted ? 'bg-blue-100 text-[rgb(1,0,128)]' : 'bg-amber-100 text-amber-600'}`}
              >
                {isCompleted ? (
                  <MdCheckCircle className="text-2xl" />
                ) : (
                  <MdPending className="animate-spin text-2xl" />
                )}
              </div>
              <span className="mt-3 text-sm font-bold text-gray-800">
                Payment Verified
              </span>
              <span className="mt-0.5 text-xs text-gray-400">Step 3</span>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}
              >
                {isCompleted ? (
                  <MdSchool className="text-2xl" />
                ) : (
                  <MdSchool className="text-2xl" />
                )}
              </div>
              <span className="mt-3 text-sm font-bold text-gray-800">
                Enrollment Active
              </span>
              <span className="mt-0.5 text-xs text-gray-400">Step 4</span>
            </div>
          </div>
        </div>

        {/* Main Section: Profile & Financial Info */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column: Profile Card */}
          <div className="space-y-6 md:col-span-1">
            {/* Student Profile Card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="no-print border-b border-gray-100 pb-3 text-lg font-bold text-gray-800">
                Student Profile
              </h2>

              {/* Print Header */}
              <div className="mb-4 hidden border-b-2 border-gray-800 pb-4 text-center print:block">
                <h1 className="text-2xl font-bold text-gray-900">
                  RIDOT SOFTWARE ACADEMY
                </h1>
                <p className="text-xs text-gray-500">
                  Official Student Enrollment Receipt
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Full Name
                  </span>
                  <span className="text-base font-bold text-gray-900">
                    {enrollment?.fullName}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Email Address
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {enrollment?.email}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Phone
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {enrollment?.phone}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Career Path
                  </span>
                  <span className="text-sm font-bold text-[rgb(1,0,128)]">
                    {enrollment?.careerPath}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Student ID
                  </span>
                  <span className="font-mono text-sm font-bold text-gray-900">
                    {enrollment?.studentId || (
                      <span className="rounded border border-amber-100 bg-amber-50 px-2 py-0.5 font-sans text-xs text-amber-600">
                        Pending Payment Verification
                      </span>
                    )}
                  </span>
                </div>
                {enrollment?.expectedCompletionMonth && (
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      Expected Completion
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {enrollment.expectedCompletionMonth}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Next Steps: Community Links - Hidden in Print */}
            {isCompleted && (
              <div className="no-print space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="border-b border-gray-100 pb-3 text-base font-bold text-gray-800">
                  Next Steps
                </h3>

                <div className="space-y-3">
                  <a
                    href="https://join.slack.com/t/ridotsoftwareacademy/shared_invite/zt-3ulw63q1e-zDL3VtK0Ds0zoVXSEhJn8w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-indigo-100/50 bg-indigo-50/50 p-3.5 text-indigo-900 transition-all hover:bg-indigo-50"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">
                        Join Slack Workspace
                      </span>
                      <span className="mt-0.5 text-xs text-indigo-600">
                        Track updates and class work
                      </span>
                    </div>
                    <MdLaunch className="text-xl" />
                  </a>

                  <a
                    href="https://chat.whatsapp.com/FupNIonOCudAhmYQtTGjZY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-green-100/50 bg-green-50/50 p-3.5 text-green-900 transition-all hover:bg-green-50"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">
                        Join WhatsApp Community
                      </span>
                      <span className="mt-0.5 text-xs text-green-600">
                        Quick support and chat
                      </span>
                    </div>
                    <MdLaunch className="text-xl" />
                  </a>

                  <a
                    href="https://linktr.ee/Ridotsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-gray-200/50 bg-gray-50 p-3.5 text-gray-900 transition-all hover:bg-gray-100"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">
                        Follow Social Media
                      </span>
                      <span className="mt-0.5 text-xs text-gray-600">
                        Tech support & announcements
                      </span>
                    </div>
                    <MdLaunch className="text-xl" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Financial Section & Receipt details */}
          <div className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="text-lg font-bold text-gray-800">
                  Financial Summary
                </h2>
                <div className="no-print">
                  {isCompleted && (
                    <button
                      onClick={handlePrint}
                      className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
                    >
                      <MdPrint className="text-base" />
                      Print Receipt
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                {/* Pending State Banner */}
                {!isCompleted && (
                  <div className="no-print flex flex-col gap-4 rounded-xl border border-amber-100 bg-amber-50 p-5">
                    <div className="flex gap-3">
                      <MdPayment className="mt-0.5 shrink-0 text-3xl text-amber-600" />
                      <div>
                        <h4 className="text-sm font-bold text-amber-800">
                          Payment Required
                        </h4>
                        <p className="mt-1 text-xs text-amber-600">
                          Your enrollment is currently pending. Please complete
                          your upfront payment of{' '}
                          <strong className="text-amber-800">
                            ₦{pricing?.amountToPay.toLocaleString()}
                          </strong>{' '}
                          to activate your student profile and access course
                          materials or your dashboard.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleRetryPayment}
                      className="w-full rounded-lg bg-[rgb(1,0,128)] py-2.5 text-center text-sm font-bold text-white shadow transition-all hover:bg-blue-800"
                    >
                      Pay Now
                    </button>
                  </div>
                )}

                {/* Receipt Table */}
                <div className="overflow-hidden rounded-xl border border-gray-100">
                  <table className="w-full border-collapse text-left text-sm text-gray-500">
                    <thead className="bg-gray-50/70 text-xs font-bold text-gray-700 uppercase">
                      <tr>
                        <th className="px-6 py-4">Item Description</th>
                        <th className="px-6 py-4 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">
                            {enrollment?.careerPath} program
                          </div>
                          <div className="mt-0.5 text-xs text-gray-400">
                            Level: Beginner to Intermediate • Duration:{' '}
                            {pricing?.course.duration}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-gray-900">
                          ₦{pricing?.totalPrice.toLocaleString()}
                        </td>
                      </tr>
                      {/* Subtotals */}
                      <tr className="bg-gray-50/10">
                        <td className="px-6 py-4 text-right text-[10px] font-semibold text-gray-400 uppercase">
                          Payment Type
                        </td>
                        <td className="px-6 py-4 text-right font-medium text-gray-900 capitalize">
                          {enrollment?.paymentOption === 'part'
                            ? 'Part-Payment (30% Upfront)'
                            : 'Full Payment'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-right text-[10px] font-semibold text-gray-400 uppercase">
                          Amount Paid
                        </td>
                        <td className="px-6 py-4 text-right text-base font-bold text-green-700">
                          ₦{(enrollment?.amountPaid || 0).toLocaleString()}
                        </td>
                      </tr>
                      {enrollment?.paymentOption === 'part' && (
                        <tr className="bg-amber-50/20">
                          <td className="px-6 py-4 text-right text-xs font-semibold text-amber-700">
                            Remaining Balance (70%)
                          </td>
                          <td className="px-6 py-4 text-right text-sm font-bold text-amber-800">
                            ₦{balance.toLocaleString()}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 gap-4 rounded-xl border border-gray-100 bg-gray-50/30 p-5 text-xs md:grid-cols-2">
                  <div className="space-y-2">
                    <span className="block font-bold text-gray-700">
                      Transaction Reference
                    </span>
                    <span className="block font-mono break-all text-gray-500">
                      {enrollment?.paymentReference}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="block font-bold text-gray-700">
                      Payment Date
                    </span>
                    <span className="block text-gray-500">
                      {isCompleted
                        ? new Date(enrollment.updatedAt).toLocaleDateString(
                            undefined,
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            },
                          )
                        : 'Payment Pending'}
                    </span>
                  </div>
                </div>

                {/* Print Verification Footer */}
                <div className="mt-12 hidden border-t border-gray-300 pt-8 text-center text-xs text-gray-400 print:block">
                  <p>
                    This is a computer-generated enrollment receipt from Ridot
                    Software Academy.
                  </p>
                  <p className="mt-1">
                    Verification Code: {enrollment?.paymentReference}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
