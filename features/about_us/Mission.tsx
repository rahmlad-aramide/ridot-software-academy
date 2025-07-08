import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function Mission() {
  return (
    <div className="relative w-full px-6 lg:flex lg:items-center lg:gap-20 lg:px-10 lg:py-10 xl:px-20">
      <div className="relative h-80 w-full pr-4 lg:w-1/2">
        <div className="absolute top-4 left-4 z-0 h-80 w-full rounded-xl border-4 border-dashed border-[#010080] shadow-md"></div>
        <Image
          className="z-10 rounded-xl object-cover"
          src="/hero-image.jpg"
          alt="about-us-img"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="my-10 lg:my-0 lg:w-1/2">
        <h3 className="text-xl leading-7 font-semibold text-zinc-950 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[58px]">
          Mission
        </h3>
        <div className="">
          <div className="text-sm leading-tight font-medium text-zinc-900 sm:text-base sm:leading-snug lg:text-xl lg:leading-7">
            To empower women and teenagers with high-demand tech skills needed
            to succeed in the tech echo system. 
            <br />
            We aim to:
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="rounded-md border bg-gray-900 p-0.5 mt-1 text-white">
                <FaCheck fontSize={12} />
              </div>
              <div className="flex-1 justify-start text-sm leading-tight font-normal text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7">
                Empower Women and Youth: Providing access to life-changing
                digital skills for underserved demographics.
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="rounded-md border bg-gray-900 p-0.5 mt-1 text-white">
                <FaCheck fontSize={12} />
              </div>
              <div className="flex-1 justify-start text-sm leading-tight font-normal text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7">
                Bridge the Tech Gap: Offering industry-relevant training
                tailored to the needs of businesses and the evolving tech
                landscape.
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="rounded-md border bg-gray-900 p-0.5 mt-1 text-white">
                <FaCheck fontSize={12} />
              </div>
              <div className="flex-1 justify-start text-sm leading-tight font-normal text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7">
                Foster Confidence: Building a community that supports personal
                and professional growth for every learne
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
