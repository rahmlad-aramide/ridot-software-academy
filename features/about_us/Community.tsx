import Svg1 from '@/components/svgs/Svg1';
import Svg2 from '@/components/svgs/Svg2';
import Svg3 from '@/components/svgs/Svg3';
import Svg4 from '@/components/svgs/Svg4';
import Svg5 from '@/components/svgs/Svg5';
import Svg6 from '@/components/svgs/Svg6';
import React from 'react';
import Link from 'next/link';

export default function Community() {
  return (
    <div className="relative overflow-hidden bg-[#010080] px-6 py-30 lg:px-10 lg:py-24 xl:px-20">
      <Svg1 className="absolute top-3 left-3 sm:top-22 sm:left-2 sm:z-20 lg:top-15 lg:h-25 lg:w-25" />
      <Svg1 className="absolute top-3 left-3 hidden sm:top-[75%] sm:left-[65%] sm:z-20 sm:block lg:h-25 lg:w-25" />
      <Svg2 className="absolute top-3 right-0 sm:top-25 sm:right-2 sm:z-20 lg:top-15 lg:h-25 lg:w-25" />
      <Svg2 className="absolute top-3 right-0 hidden sm:top-[74%] sm:right-[65%] sm:block sm:rotate-90 lg:h-25 lg:w-25" />
      <Svg3 className="absolute top-1/2 left-0 z-0 sm:top-6/10 sm:left-1 sm:z-20 sm:rotate-30 lg:top-5/10 lg:h-25 lg:w-25" />
      <Svg3 className="absolute top-1/2 right-0 z-0 rotate-150 sm:top-[73%] sm:right-2 sm:z-20 sm:h-13 sm:w-13 sm:rotate-30 lg:h-25 lg:w-25" />
      <Svg4 className="absolute bottom-5 left-2 sm:top-[45%] sm:left-11/12 lg:h-25 lg:w-25" />
      <Svg5 className="absolute right-2 bottom-5 sm:right-[92%] sm:bottom-[17%] lg:bottom-10 lg:h-25 lg:w-25" />
      <Svg6 className="absolute hidden sm:top-21 sm:right-1/2 sm:left-1/2 sm:block sm:-translate-x-1/2 lg:top-10 lg:h-25 lg:w-25" />

      <div className="relative z-10 rounded-3xl bg-purple-50 px-4 py-12">
        <h3 className="text-center text-xl leading-7 font-semibold text-zinc-900 sm:text-4xl sm:leading-[48px] lg:m-auto lg:w-[75%] lg:text-5xl lg:leading-[58px] lg:font-bold">
          Join Our Community
        </h3>
        <p className="mt-2 text-center text-sm leading-tight font-normal text-gray-700 sm:mt-4 sm:text-base sm:leading-normal lg:m-auto lg:mt-6 lg:w-[75%] lg:text-xl lg:leading-7">
          Be a part of a dynamic and inspiring community of learners, mentors,
          and professionals. Together, we are breaking barriers and building a
          future where everyone can succeed in tech. Join our growing community
          of women in tech, tech beginners, data analysts & developers.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:mb-4 sm:flex-row">
          <Link
            href="https://chat.whatsapp.com/GisS6795f3n08Q3G6U7e4L"
            target="_blank"
            className="rounded-md bg-[#010080] px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Join Here
          </Link>
        </div>
      </div>
    </div>
  );
}
