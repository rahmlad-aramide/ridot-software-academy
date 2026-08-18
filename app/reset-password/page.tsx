'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  MdLock,
  MdArrowForward,
  MdOutlineError,
  MdCheckCircle,
  MdArrowBack,
} from 'react-icons/md';
import { Eye, EyeOff } from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!token) {
      setError('Reset token is missing or invalid.');
      return;
    }

    if (!password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset password');
      }

      setSuccess(true);
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred while resetting password.');
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
        {!success ? (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-[rgb(1,0,128)]">
                Reset Password
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Create a new password for your Ridot Software Academy account.
              </p>
            </div>

            {error && (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                <MdOutlineError className="mt-0.5 shrink-0 text-xl" />
                <span>{error}</span>
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* New Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  New Password
                </label>

                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <MdLock className="text-lg" />
                  </div>

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-gray-200 bg-gray-50/50 py-3 pr-12 pl-10 text-sm text-gray-900 transition-all focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm New Password
                </label>

                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <MdLock className="text-lg" />
                  </div>

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full rounded-lg border border-gray-200 bg-gray-50/50 py-3 pr-12 pl-10 text-sm text-gray-900 transition-all focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                    aria-label={
                      showConfirmPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[rgb(1,0,128)] px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
              >
                {loading ? 'Resetting Password...' : 'Reset Password'}

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
              Password Reset Successful
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Your password has been reset successfully. You can now log in with
              your new password.
            </p>

            <Link
              href="/login"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[rgb(1,0,128)] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-800"
            >
              Go to Login
              <MdArrowForward />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
