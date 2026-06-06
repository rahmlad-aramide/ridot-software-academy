'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { calculatePayment, COURSES_CONFIG } from '@/config/courses';
import {
  MdOutlinePayment,
  MdArrowForward,
  MdOutlineError,
} from 'react-icons/md';

const careerPaths = [
  'Frontend Web development',
  'Data science',
  'Product Design',
  'Video Editing',
  'Digital Marketing',
  'Data Analytics',
];

export default function EnrollPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [expectedCompletionMonth, setExpectedCompletionMonth] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');
  const [linkedInHandle, setLinkedInHandle] = useState('');
  const [paymentOption, setPaymentOption] = useState<'full' | 'part'>('full');
  const [careerPath, setCareerPath] = useState('Frontend Web development');
  const [expectations, setExpectations] = useState('');

  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Dynamic pricing states
  const [pricing, setPricing] = useState<any>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        if (!res.ok || !data.user) {
          // Redirect to signup if not authenticated
          router.push('/signup');
          return;
        }

        setUser(data.user);
        setEmail(data.user.email); // Prefill email

        // Check if user already has an enrollment
        const enrollRes = await fetch('/api/enroll');
        const enrollData = await enrollRes.json();

        if (enrollData?.enrollment) {
          if (enrollData.enrollment.paymentStatus === 'completed') {
            // Already paid, send to dashboard
            router.push('/dashboard');
            return;
          } else {
            // Pre-fill existing pending enrollment data
            const e = enrollData.enrollment;
            setFullName(e.fullName || '');
            setPhone(e.phone || '');
            setExpectedCompletionMonth(e.expectedCompletionMonth || '');
            setTwitterHandle(e.twitterHandle || '');
            setLinkedInHandle(e.linkedInHandle || '');
            setPaymentOption(e.paymentOption || 'full');
            setCareerPath(e.careerPath || 'Frontend Web development');
            setExpectations(e.expectations || '');
          }
        }
      } catch (err) {
        console.error('Auth verification failed:', err);
        router.push('/signup');
      } finally {
        setLoadingUser(false);
      }
    }

    checkAuth();
  }, [router]);

  // Recalculate price when careerPath or paymentOption changes
  useEffect(() => {
    if (careerPath && paymentOption) {
      try {
        const calculation = calculatePayment(careerPath, paymentOption);
        setPricing(calculation);
      } catch (err) {
        setPricing(null);
      }
    }
  }, [careerPath, paymentOption]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

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
      setError('Please fill in all required fields marked with *');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          expectedCompletionMonth,
          twitterHandle,
          linkedInHandle,
          paymentOption,
          careerPath,
          expectations,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enrollment');
      }

      // Success - Redirect to Paystack Checkout URL
      if (data.authorization_url) {
        router.push(data.authorization_url);
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during submission.');
      setSubmitting(false);
    }
  };

  if (loadingUser) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[rgb(1,0,128)] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <main className="relative min-h-[calc(100vh-76px)] bg-radial from-[rgba(235,240,255,0.8)] to-[rgba(255,255,255,1)] px-4 py-12">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 -z-10 h-64 w-64 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 -z-10 h-64 w-64 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

      <div className="mx-auto max-w-2xl rounded-2xl border border-[rgba(226,232,240,0.8)] bg-white p-6 shadow-[0_8px_30px_rgba(2,1,129,0.05)] backdrop-blur-md md:p-10">
        <div className="border-b border-gray-100 pb-6 text-center">
          <h1 className="text-3xl font-extrabold text-[rgb(1,0,128)]">
            Enrollment Details
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the form below to complete your registration and secure
            your spot.
          </p>
        </div>

        {error && (
          <div className="mt-6 flex animate-pulse items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-600">
            <MdOutlineError className="mt-0.5 shrink-0 text-xl" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Section 1: Basic Information */}
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-gray-800">1. Basic Info</h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="First and Last Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled
                  value={email}
                  className="mt-2 block w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 p-3 text-sm text-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={'ng'}
                  value={phone}
                  onChange={setPhone}
                  inputClass="!w-full !rounded-lg !border !border-gray-200 !bg-gray-50/50 !py-6 !pl-12 !pr-4 !text-sm focus:!border-[rgb(43,43,208)] focus:!bg-white focus:!ring-2 focus:!ring-[rgba(43,43,208,0.2)]"
                  containerClass="w-full"
                  enableSearch={false}
                />
              </div>

              <div>
                <label
                  htmlFor="expectedMonth"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Expected Month of Completion
                </label>
                <input
                  id="expectedMonth"
                  type="text"
                  placeholder="e.g. December 2026"
                  value={expectedCompletionMonth}
                  onChange={(e) => setExpectedCompletionMonth(e.target.value)}
                  className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Social Media handles */}
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-gray-800">
              2. Professional Profiles
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="twitter"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Twitter Handle <span className="text-red-500">*</span>
                </label>
                <input
                  id="twitter"
                  type="text"
                  required
                  placeholder="@username"
                  value={twitterHandle}
                  onChange={(e) => setTwitterHandle(e.target.value)}
                  className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-semibold text-gray-700"
                >
                  LinkedIn Handle <span className="text-red-500">*</span>
                </label>
                <input
                  id="linkedin"
                  type="text"
                  required
                  placeholder="linkedin.com/in/username"
                  value={linkedInHandle}
                  onChange={(e) => setLinkedInHandle(e.target.value)}
                  className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3: Academy Track & Expectations */}
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-gray-800">
              3. Program Selection
            </h2>

            <div>
              <label
                htmlFor="careerPath"
                className="block text-sm font-semibold text-gray-700"
              >
                Career Path <span className="text-red-500">*</span>
              </label>
              <select
                id="careerPath"
                value={careerPath}
                onChange={(e) => setCareerPath(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
              >
                {careerPaths.map((path) => (
                  <option key={path} value={path}>
                    {path}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="expectations"
                className="block text-sm font-semibold text-gray-700"
              >
                What are your expectations from the training?{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="expectations"
                required
                rows={4}
                placeholder="What do you hope to achieve or learn..."
                value={expectations}
                onChange={(e) => setExpectations(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Payment Option <span className="text-red-500">*</span>
              </label>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <label
                  className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none ${paymentOption === 'full' ? 'border-[rgb(1,0,128)] bg-blue-50/30' : 'border-gray-200'}`}
                >
                  <input
                    type="radio"
                    name="paymentOption"
                    value="full"
                    checked={paymentOption === 'full'}
                    onChange={() => setPaymentOption('full')}
                    className="sr-only"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">
                      Full Payment
                    </span>
                    <span className="mt-1 text-xs text-gray-500">
                      Pay 100% upfront
                    </span>
                  </div>
                </label>

                <label
                  className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none ${paymentOption === 'part' ? 'border-[rgb(1,0,128)] bg-blue-50/30' : 'border-gray-200'}`}
                >
                  <input
                    type="radio"
                    name="paymentOption"
                    value="part"
                    checked={paymentOption === 'part'}
                    onChange={() => setPaymentOption('part')}
                    className="sr-only"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">
                      Part Payment
                    </span>
                    <span className="mt-1 text-xs text-gray-500">
                      Pay 30% upfront, 70% balance
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Premium Pricing Dynamic Calculator Display */}
            {pricing && (
              <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <h4 className="text-sm font-bold text-[rgb(1,0,128)]">
                  Payment Breakdown
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Course Fee:</span>
                    <span className="font-semibold text-gray-900">
                      ₦{pricing.totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Duration:</span>
                    <span className="font-medium text-gray-900">
                      {pricing.course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Format:</span>
                    <span className="font-medium text-gray-900">
                      {pricing.course.format}
                    </span>
                  </div>
                  <hr className="border-blue-100/70" />
                  <div className="flex justify-between text-base font-bold text-gray-900">
                    <span className="text-[rgb(1,0,128)]">Due Now:</span>
                    <span className="text-[rgb(1,0,128)]">
                      ₦{pricing.amountToPay.toLocaleString()}
                    </span>
                  </div>
                  {pricing.balance > 0 && (
                    <div className="mt-2 flex justify-between rounded-lg border border-amber-100 bg-amber-50 p-2.5 text-xs font-medium text-amber-700">
                      <span>Remaining Balance (70%):</span>
                      <span className="font-bold">
                        ₦{pricing.balance.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[rgb(1,0,128)] px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
          >
            {submitting ? 'Redirecting to checkout...' : 'Proceed to Payment'}
            {!submitting && <MdOutlinePayment className="text-lg" />}
          </button>
        </form>
      </div>
    </main>
  );
}
