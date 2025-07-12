'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showPhoneOneTooltip, setShowPhoneOneTooltip] = useState(false);
  const [showPhoneTwoTooltip, setShowPhoneTwoTooltip] = useState(false);

  const copyToClipboard = (text: string): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showCopyMessage(`"${text}" copied to your clipboard`);
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
      });
  };

  const showCopyMessage = (message: string): void => {
    const msgElement = document.getElementById('copy-message');
    if (!msgElement) return;
    msgElement.textContent = message;
    msgElement.classList.remove('hidden', 'opacity-0');
    msgElement.classList.add('opacity-100');

    setTimeout(() => {
      msgElement.classList.remove('opacity-100');
      msgElement.classList.add('opacity-0');
      setTimeout(() => {
        msgElement.classList.add('hidden');
      }, 300);
    }, 2000);
  };

  return (
    <div className="relative space-y-4">
      <p className="text-sm font-semibold text-[rgb(43,43,208)] md:text-base">
        Location: <span className="text-black">Lagos, Nigeria</span>
      </p>
      <p className="relative text-sm font-semibold text-[rgb(43,43,208)] md:text-base">
        Email:
        <span
          className="relative ml-1 cursor-pointer text-black hover:bg-blue-200"
          onMouseOver={() => setShowEmailTooltip(true)}
          onMouseLeave={() => setShowEmailTooltip(false)}
        >
          ridotsoftwareacademy@gmail.com
          {showEmailTooltip && (
            <div className="absolute bottom-5 left-0 z-50 mt-1 flex w-80 gap-x-4 rounded-md bg-black p-2 text-[12px] text-white">
              <p
                className="cursor-pointer"
                onClick={() =>
                  copyToClipboard('ridotsoftwareacademy@gmail.com')
                }
              >
                ✉️ Copy ridotsoftwareacademy...
              </p>

              <div className="border border-white"></div>
              <Link
                className="block cursor-pointer"
                href="mailto:ridotsoftwareacademy@gmail.com"
                target="_blank"
              >
                Send Mail
              </Link>
            </div>
          )}
        </span>
      </p>

      <p className="relative text-sm font-semibold text-[rgb(43,43,208)] md:text-base">
        Phone:
        <span
          className="relative ml-1 cursor-pointer text-black underline hover:bg-blue-200"
          onMouseOver={() => setShowPhoneOneTooltip(true)}
          onMouseLeave={() => setShowPhoneOneTooltip(false)}
        >
          +234-708-314-3779
          {showPhoneOneTooltip && (
            <div className="absolute bottom-4 z-50 mt-1 flex w-70 gap-x-4 rounded-md bg-black p-2 text-[12px] text-white">
              <p
                className="cursor-pointer"
                onClick={() => copyToClipboard('+2347083143779')}
              >
                📞 Copy +2347083143779
              </p>
              <div className="border border-white"></div>
              <Link className="block cursor-pointer" href="tel:+2347083143779">
                Call number
              </Link>
            </div>
          )}
        </span>
        <span
          className="relative ml-1 cursor-pointer text-black underline hover:bg-blue-200"
          onMouseOver={() => setShowPhoneTwoTooltip(true)}
          onMouseLeave={() => setShowPhoneTwoTooltip(false)}
        >
          +234-705-602-5175
          {showPhoneTwoTooltip && (
            <div className="absolute bottom-4 left-0 z-50 mt-1 flex w-70 gap-x-4 rounded-md bg-black p-2 text-[12px] text-white">
              <p
                className="cursor-pointer"
                onClick={() => copyToClipboard('+2347056025175')}
              >
                📞 Copy +2347056025175
              </p>
              <div className="border border-white"></div>
              <Link className="block cursor-pointer" href="tel:+2347056025175">
                Call number
              </Link>
            </div>
          )}
        </span>
      </p>
      <div
        id="copy-message"
        className="fixed bottom-5 left-10 hidden rounded bg-gray-800 px-4 py-2 text-sm text-white opacity-0 transition-opacity duration-300 md:left-100"
      ></div>
    </div>
  );
}
