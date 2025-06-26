import { Onest } from 'next/font/google';
import React from 'react';
const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
});

export default function Hero() {
  return (
    <section className="bg-[#010080] px-4 py-20 text-white">
      <div className="mx-auto flex w-full flex-col items-center space-y-10 text-center">
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
          About Us
        </h1>
        <p className="max-w-3xl text-base leading-relaxed font-normal sm:text-xl">
          Ridot Software Academy is a forward-thinking learning platform
          designed to empower women and teenagers—particularly young, unmarried
          females—with the essential digital skills they need to unlock new
          opportunities in technology and beyond. We pride ourselves on creating
          a welcoming and inclusive community where learners can grow, innovate,
          and realize their full potential.
        </p>
      </div>
    </section>
  );
}
