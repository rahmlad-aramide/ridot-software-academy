import Image from 'next/image';
import Section from '@/app/courses/frontend-development/section';
import HowItWorks from '@/app/courses/HowItWorks';
import SucessStories from '@/app/courses/swiper/SucessStories';
import Faqs from '@/features/about_us/Faqs';

export default function Page() {
  return (
    <main>
      <div className="relative w-full h-[590px] xs:h-[650px] md:h-[530px]">
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src="/front-end-image.png"
            alt="front-end-image"
            quality={100}
            fill
            sizes="100vw"
            priority
          />
          <div className="bg-opacity-0 absolute inset-0 bg-[rgba(0,0,0,0.75)]"></div>
        </div>
        <div className="absolute top-0 flex w-full flex-col space-y-5 px-[20px] pt-[50px] text-white xs:max-w-[600px] md:max-w-[700px] md:px-0 xs:px-[30px] xs:pt-[80px] md:pt-[60px] md:pl-[40px] lg:pl-[80px]">
          <h1 className="xs:text-5xl text-[40px] leading-tight font-bold md:text-6xl">
            Front-end Development
          </h1>
          <p className="xs:text-2xl text-sm md:text-xl">
            Let&apos;s help you become a professional Front-End Web Developer. You&apos;ll
            gain all the essential skills needed to build interactive and
            responsive web applications while creating an impressive portfolio.
            Learn the fundamentals of HTML, CSS, JavaScript, React, and modern
            front-end development techniques, along with deployment using
            platforms like Vercel.
          </p>
          <button
            type="button"
            className="mt-5 w-[103px] rounded-md bg-[rgb(1,0,128)] px-4 py-2 text-sm hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="relative z-10 -mt-[60px] xs:-mt-[80px] md:-mt-[40px]">
        <div className="mx-auto flex max-w-[288px] xs:max-w-[430px] md:max-w-[698px] flex-col rounded-[10px] bg-white p-[24px] text-base text-[rgb(1,0,128)] shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[15px] md:flex-row md:gap-5">
          <div className="xs:space-y-2 xs:flex-row xs:gap-5 flex flex-col space-y-5 md:flex-col">
            <p className="font-bold">
              Duration: <span className="font-normal">12 weeks</span>
            </p>
            <p className="font-bold">
              Days: <span className="font-normal">2-3 times a week</span>
            </p>
          </div>
          <div className="xs:space-y-2 xs:flex-row xs:gap-5 mt-5 flex flex-col space-y-5 md:mt-0 md:flex-col">
            <p className="font-bold">
              Start Date: <span className="font-normal">March 2025</span>
            </p>
            <p className="font-bold">
              End Date: <span className="font-normal">May 2025</span>
            </p>
          </div>
          <div className="xs:space-y-2 xs:flex-row xs:gap-5 mt-5 flex flex-col space-y-5 md:mt-0 md:flex-col">
            <p className="font-bold">
              Mode: <span className="font-normal">Online</span>
            </p>
            <p className="font-bold">
              Level:{' '}
              <span className="font-normal">Beginner to Intermediate</span>
            </p>
          </div>
        </div>
      </div>

      <Section />
      <HowItWorks />
      <SucessStories />
      <Faqs />
    </main>
  );
}
