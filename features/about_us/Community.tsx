import Svg1 from '@/components/svgs/Svg1';
import Svg2 from '@/components/svgs/Svg2';
import Svg3 from '@/components/svgs/Svg3';
import Svg4 from '@/components/svgs/Svg4';
import Svg5 from '@/components/svgs/Svg5';
import Svg6 from '@/components/svgs/Svg6';
import React from 'react';

export default function Community() {
  return (
    <div className="relative bg-[#010080] px-6 py-30 lg:px-10 lg:py-24 xl:px-20 overflow-hidden">
      <Svg1 className="absolute top-3 left-3 sm:top-22 sm:left-2 sm:z-20 lg:h-25 lg:w-25 lg:top-15" />
      <Svg1 className="absolute top-3 left-3 hidden sm:top-[75%] sm:left-[65%] sm:z-20 sm:block lg:h-25 lg:w-25" />
      <Svg2 className="absolute top-3 right-0 sm:top-25 sm:right-2 sm:z-20 lg:h-25 lg:w-25 lg:top-15" />
      <Svg2 className="absolute top-3 right-0 hidden sm:top-[74%] sm:right-[65%] sm:block sm:rotate-90 lg:h-25 lg:w-25" />
      <Svg3 className="absolute top-1/2 left-0 z-0 sm:top-6/10 sm:left-1 sm:z-20 sm:rotate-30 lg:h-25 lg:w-25  lg:top-5/10" />
      <Svg3 className="absolute top-1/2 right-0 z-0 rotate-150 sm:top-[73%] sm:right-2 sm:z-20 sm:h-13 sm:w-13 sm:rotate-30 lg:h-25 lg:w-25" />
      <Svg4 className="absolute bottom-5 left-2 sm:top-[45%] sm:left-11/12 lg:h-25 lg:w-25" />
      <Svg5 className="absolute right-2 bottom-5 sm:right-[92%] sm:bottom-[17%] lg:h-25 lg:w-25 lg:bottom-10" />
      <Svg6 className="absolute hidden sm:top-21 sm:right-1/2 sm:left-1/2 sm:block sm:-translate-x-1/2 lg:h-25 lg:w-25 lg:top-10" />

      <div className="relative z-10 rounded-3xl bg-purple-50 px-4 py-12">
        <h3 className="text-center text-xl leading-7 font-semibold text-zinc-900 sm:text-4xl sm:leading-[48px] lg:m-auto lg:w-[75%] lg:text-5xl lg:leading-[58px] lg:font-bold">
          Join Our Community
        </h3>
        <p className="mt-2 text-center text-sm leading-tight font-normal text-gray-700 sm:mt-4 sm:text-base sm:leading-normal lg:m-auto lg:mt-6 lg:w-[75%] lg:text-xl lg:leading-7">
          Be a part of a dynamic and inspiring community of learners, mentors,
          and professionals. Together, we are breaking barriers and building a
          future where everyone can succeed in tech.
        </p>
        <div className="mt-8 flex flex-col items-center sm:mt-12 sm:mb-4 sm:flex-row sm:gap-2 sm:px-16">
          <input
            type="text"
            className="mx-auto w-9/10 rounded-md bg-white p-2 text-sm shadow-sm outline-0 sm:px-6 sm:py-3"
            placeholder="Enter email"
          />
          <button className="mt-6 rounded-md bg-[#010080] px-6 py-3 text-sm leading-tight font-normal text-stone-50 sm:mt-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
