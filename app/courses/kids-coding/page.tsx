import Image from 'next/image';
import HowItWorks from '@/app/courses/HowItWorks';
import SucessStories from '@/app/courses/swiper/SucessStories';
import Faqs from '@/features/about_us/Faqs';

export default function Page() {
  return (
    <main>
      <div className="xs:h-[600px] relative h-[520px] w-full md:h-[530px]">
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src="/logo.jpeg"
            alt="kids-coding-img"
            quality={100}
            fill
            sizes="100vw"
            priority
          />
          <div className="bg-opacity-0 absolute inset-0 bg-[rgba(0,0,0,0.75)]"></div>
        </div>
        <div className="xxs:px-[30px] xs:pt-[70px] absolute top-0 flex w-full flex-col space-y-5 px-[20px] pt-[50px] text-white md:max-w-[780px] md:px-0 md:pt-[100px] md:pl-[80px] lg:pl-[120px]">
          <h1 className="xs:text-5xl text-[36px] leading-tight font-bold md:text-6xl">
            Kids Coding Program
          </h1>
          <p className="xs:text-2xl text-sm md:text-xl">
            Early exposure to technology and coding for teenagers and kids.
            Build a strong foundation in tech through fun and interactive projects.
          </p>
          <button
            type="button"
            className="mt-5 w-max rounded-md bg-[rgb(1,0,128)] px-6 py-2 text-sm font-semibold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Enroll Your Child Now
          </button>
        </div>
      </div>

      <div className="xs:-mt-[80px] relative z-10 -mt-[150px] md:-mt-[60px]">
        <div className="xs:max-w-[430px] mx-auto flex max-w-[288px] flex-col rounded-[10px] bg-white p-[24px] text-base text-[rgb(1,0,128)] shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[15px] md:max-w-[698px] md:flex-row md:gap-5">
          <div className="xs:space-y-2 xs:flex-row xs:gap-5 flex flex-col space-y-5 md:flex-col">
            <p className="font-bold">
              Target: <span className="font-normal">Teenagers & Kids</span>
            </p>
            <p className="font-bold">
              Keywords: <span className="font-normal">coding for kids, teenagers in tech</span>
            </p>
          </div>
          <div className="xs:space-y-2 xs:flex-row xs:gap-5 mt-5 flex flex-col space-y-5 md:mt-0 md:flex-col">
             <p className="font-bold">
              Outcome: <span className="font-normal">Early exposure to technology and coding</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 lg:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Course Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">HTML & CSS Basics</h3>
                  <p className="text-gray-600">Learn how to structure and style simple web pages.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">JavaScript Intro</h3>
                  <p className="text-gray-600">Bring websites to life with basic programming logic.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Scratch Programming</h3>
                  <p className="text-gray-600">Visual programming to understand logic and creativity.</p>
              </div>
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Fun Tech Projects</h3>
                  <p className="text-gray-600">Apply what you&apos;ve learned to build exciting small projects.</p>
              </div>
          </div>
      </div>

      <HowItWorks />
      <SucessStories />
      <Faqs />
    </main>
  );
}
