import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-b from-[#ebd5d8]/20 to-[#fefbfc] px-6 py-10 sm:py-14 lg:flex lg:flex-row-reverse lg:items-center lg:gap-8 lg:px-10 lg:py-20 xl:px-20">
      <div className="lg:w-1/2">
        <h3 className="mb-4 text-xl leading-7 font-semibold text-zinc-950 sm:text-4xl sm:leading-[48px] lg:text-5xl lg:leading-[58px] lg:font-bold">
          Why Choose Ridot Software Academy?
        </h3>

        <ul className="mb-8 space-y-4">
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="text-sm leading-tight font-normal text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7">
              B2B Expertise: We partner with companies to create custom
              solutions that upskill teams and foster workplace innovation.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="text-sm leading-tight font-normal text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7">
              Focus on Impact: Our courses are designed with inclusivity and
              accessibility in mind, ensuring we reach those who need it most.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="text-sm leading-tight font-normal text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7">
              Support in Internship placement and job opportunities.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="text-sm leading-tight font-normal text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7">
              Community-Centric Approach: We are more than a learning platform;
              we are a supportive network that celebrates every milestone of our
              learners.
            </p>
          </li>
        </ul>
      </div>
      <div className="relative h-80 w-full flex-1 pr-4 sm:h-160 lg:h-120 lg:w-1/2 xl:h-140">
        <Image
          className="z-10 rounded-xl object-cover"
          src="/choose-image.png"
          alt="choose-img"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
