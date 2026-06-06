'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  MdEmail,
  MdLock,
  MdArrowForward,
  MdOutlineError,
} from 'react-icons/md';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to log in');
      }

      // Check if they already have an enrollment
      const enrollCheckRes = await fetch('/api/enroll');
      const enrollCheckData = await enrollCheckRes.json();

      if (enrollCheckData?.enrollment) {
        router.push('/dashboard');
      } else {
        router.push('/enroll');
      }
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100vh-76px)] items-center justify-center bg-radial from-[rgba(235,240,255,0.8)] to-[rgba(255,255,255,1)] px-4 py-16">
      {/* Decorative colored blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-100 opacity-60 blur-3xl"></div>

      <div className="w-full max-w-md rounded-2xl border border-[rgba(226,232,240,0.8)] bg-white p-8 shadow-[0_10px_30px_rgba(2,1,129,0.06)] backdrop-blur-md md:p-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[rgb(1,0,128)]">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Log in to continue your enrollment or check your dashboard
          </p>
        </div>

        {error && (
          <div className="mt-6 flex animate-pulse items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-600">
            <MdOutlineError className="mt-0.5 shrink-0 text-xl" />
            <span>{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
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

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <MdLock className="text-lg" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50/50 py-3 pr-4 pl-10 text-sm text-gray-900 transition-all focus:border-[rgb(43,43,208)] focus:bg-white focus:ring-2 focus:ring-[rgba(43,43,208,0.2)] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[rgb(1,0,128)] px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Log In'}
            {!loading && <MdArrowForward className="text-lg" />}
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="font-semibold text-[rgb(43,43,208)] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
