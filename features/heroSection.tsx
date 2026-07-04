import AnimatedLogo from './animatedLogo';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 py-20 md:gap-7 md:px-5 lg:flex-row lg:gap-15 lg:px-10">
      <div className="mx-auto w-full max-w-162.5 space-y-6 px-5 text-center md:text-left">
        <p className="text-primary bg-primary/5 border-primary/50 mx-auto w-fit rounded-full border px-3 py-1 text-sm leading-none font-semibold tracking-wider uppercase md:mx-0">
          Welcome to Ridot
        </p>

        <h1 className="xs:text-5xl text-[32px] leading-tight font-bold md:text-[36px] lg:text-5xl 2xl:text-6xl">
          Transform <span className="text-primary">Your Future</span> with
          Technology
        </h1>
        <p className="xs:text-2xl text-gray text-center text-sm md:text-justify md:text-base lg:text-xl">
          At Ridot Software Academy, we harness technology especially AI to
          equip women and teenagers with ind-demand tech skills needed to
          succeed in the tech ecosystem.
        </p>

        <Link
          href="/enroll"
          className="bg-primary xs:py-3 mt-5 block w-full rounded px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none md:max-w-max"
        >
          Start Your Tech Journey Today
        </Link>
      </div>

      <div className="flex w-full justify-center lg:w-1/2">
        <AnimatedLogo />
      </div>
    </div>
  );
}
