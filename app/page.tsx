'use client';

import Image from 'next/image';
import WhyChooseRidot from '@/features/whyChooseRidot';
import AllCourses from '@/app/courses/page';
import PopupForm from '@/features/enrollPopUp';
import { useFormStore } from '@/app/useFormStore';
import AnimatedLogo from '@/features/animatedLogo';

export default function Home() {
  const { isFormOpen, closeForm, openForm } = useFormStore();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center gap-20 pt-10 pb-20 md:gap-7 md:px-5 lg:flex-row lg:gap-15 lg:px-10">
        <div className="mx-auto w-full max-w-[650px] space-y-6 px-5 text-center md:text-left">
          <h1 className="xs:text-5xl text-[32px] leading-tight font-bold md:text-[36px] lg:text-6xl lg:leading-[70px]">
            Empowering{' '}
            <span className="text-[rgb(43,43,208)]">Women & Teenagers</span>{' '}
            Through Tech Education
          </h1>
          <p className="xs:text-2xl text-gray text-center text-sm md:text-justify md:text-base lg:text-xl">
            We are harnessing technology, especially AI to unlock opportunities
            and create a brighter future. We are dedicated to empowering women
            and teenagers with the skills and knowledge needed to thrive in the
            digital world.
          </p>

          <button
            type="button"
            onClick={openForm}
            className="bg-primary xs:py-3 mt-5 w-full rounded px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none md:max-w-[121px]"
          >
            Enroll Now
          </button>
        </div>

        <div className="flex w-full justify-center lg:w-1/2">
          <AnimatedLogo />
        </div>
      </div>

      <WhyChooseRidot />

      <div className="flex flex-col items-center justify-center gap-10 px-5 pt-[50px] pb-[20px] md:flex-row md:gap-6 md:px-10 lg:gap-7 lg:px-15">
        <div className="xs:h-[537px] relative mx-auto h-[537px] w-full rounded-[20px] shadow-[0_4px_20px_rgba(2,1,129,0.63)] backdrop-blur-[25px] md:h-[475px] lg:h-[575px]">
          <Image
            className="rounded-[20px] object-cover"
            src="/choose-image.png"
            alt="image"
            quality={100}
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className="mx-auto w-full space-y-5">
          <h1 className="xs:text-[40px] relative text-xl leading-tight font-bold md:text-[35px] lg:text-[42px]">
            Breaking Tech Barriers for{' '}
            <span className="relative inline-block">
              Women
              <span className="absolute top-full left-0 -translate-y-[3px]">
                <div className="relative h-[9px] md:w-[151px] lg:w-[160px]">
                  <Image
                    className="object-cover"
                    src="/Vector.png"
                    alt="A slightly-slant blue underline"
                    width={175}
                    height={13}
                  />
                </div>
              </span>
            </span>
          </h1>
          <p className="xs:text-xl pt-5 text-justify text-sm md:text-base lg:text-xl">
            Our brand is dedicated to eliminating technological phobia among
            women, providing them with the confidence and skills needed to
            thrive in the digital world. We offer hands-on training, mentorship,
            and a supportive community to encourage more women to explore and
            build successful careers in tech.
          </p>
          <button
            type="button"
            onClick={openForm}
            className="bg-primary mt-5 rounded px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Enroll Now
          </button>
        </div>
      </div>
      <AllCourses />
      <PopupForm isOpen={isFormOpen} onClose={closeForm} />
    </main>
  );
}
