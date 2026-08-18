'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MdEmail,
  MdArrowForward,
  MdOutlineError,
  MdCheckCircle,
  MdArrowBack,
} from 'react-icons/md';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Unable to send reset instructions.');
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100vh-76px)] items-center justify-center bg-radial from-[rgba(235,240,255,0.8)] to-[rgba(255,255,255,1)] px-4 py-16">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-100 opacity-60 blur-3xl"></div>

      <div className="w-full max-w-md rounded-2xl border border-[rgba(226,232,240,0.8)] bg-white p-8 shadow-[0_10px_30px_rgba(2,1,129,0.06)] backdrop-blur-md md:p-10">
        {!submitted ? (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-[rgb(1,0,128)]">
                Forgot Password?
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Enter the email address link with your account.
              </p>
            </div>

            {error && (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                <MdOutlineError className="mt-0.5 shrink-0 text-xl" />
                <span>{error}</span>
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <MdEmail className="text-lg" />
                  </div>

                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border border-gray-200 bg-gray-50/50 py-3 pr-4 pl-10 text-sm text-gray-900 transition-all focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[rgb(1,0,128)] px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}

                {!loading && <MdArrowForward className="text-lg" />}
              </button>

              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[rgb(43,43,208)] hover:underline"
                >
                  <MdArrowBack />
                  Back to Login
                </Link>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <MdCheckCircle className="text-4xl" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-gray-900">
              Check Your Email
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              If an account exists for{' '}
              <span className="font-semibold text-gray-700">{email}</span>, you
              will receive instructions to reset your password.
            </p>

            <p className="mt-3 text-xs text-gray-400">
              Don't forget to check your spam or junk folder.
            </p>

            <Link
              href="/login"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[rgb(1,0,128)] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-800"
            >
              <MdArrowBack />
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
