import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function Vision() {
  return (
    <div className="w-full bg-gradient-to-b from-[#fbd0d8] to-[#fff6f8] px-6 py-10 shadow-sm sm:py-14 lg:flex lg:items-center lg:gap-6 lg:px-10 lg:py-20 xl:px-20">
      <div className="lg:w-1/2">
        <h3 className="mb-2 text-xl leading-7 font-semibold text-zinc-950 sm:text-5xl sm:leading-[58px] sm:font-bold xl:mb-8">
          Vision
        </h3>
        <p className="mb-4 text-sm leading-tight font-medium text-zinc-900 sm:text-base sm:leading-snug lg:text-xl lg:leading-7 lg:font-semibold">
          To become Africa’s leading hub for technology education and
          innovation, especially for women in tech. <br />
          What We Do:
        </p>
        <ul className="mb-10 space-y-4 text-sm">
          <li className="flex items-start gap-2">
            <div className="mt-1 rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <div className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Provide hands-on training in:
              <ul className="mt-2 ml-4 list-disc space-y-1">
                <li>Data Analytics & Data Science</li>
                <li>Web Development (Front-End & Back-End)</li>
                <li>Digital Marketing</li>
                <li>Product Design</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Offer tech solutions to businesses
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Build professional websites
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Deliver digital marketing services
            </p>
          </li>
        </ul>
      </div>

      <div className="relative h-80 w-full flex-1 pr-4 lg:w-1/2">
        <div className="absolute top-4 left-4 z-0 h-80 w-full rounded-xl border-4 border-dashed border-red-600 shadow-md"></div>
        <Image
          className="z-10 rounded-xl object-cover"
          src="/vision-image.jpg"
          alt="about-us-img"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
