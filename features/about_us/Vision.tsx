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
          To be Africa’s best trainer of ICT skills, idea generator and tech
          schemer for women. <br />
          What We Do:
        </p>
        <ul className="mb-10 space-y-4 text-sm">
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 mt-1 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Hands-On Training: Practical, project-based courses in software
              development, web design, and other in-demand digital skills such
              as; data analysis, data science, digital marketing, product
              design.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 mt-1 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Customized Programs: Tailored courses designed for businesses and
              individuals looking to upskill or reskill.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 mt-1 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Mentorship & Support: Guidance from industry professionals who are
              committed to seeing our learners succeed.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-md border bg-gray-900 p-0.5 mt-1 text-white">
              <FaCheck fontSize={12} />
            </div>
            <p className="flex-1 text-sm leading-tight font-medium text-zinc-600 sm:text-base sm:leading-normal lg:text-xl lg:leading-7 lg:font-normal">
              Real-World Exposure: Opportunities to work on live projects and
              collaborate with tech savvies to gain real-world experience.
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
