'use client';

import WhyChooseRidot from '@/features/whyChooseRidot';
import HeroSection from '@/features/heroSection';
import TechBarriers from '@/features/techBarriers';
import AllCourses from './courses/AllCourses';
import SuccessStories from './courses/swiper/SucessStories';
import Faqs from '@/features/about_us/Faqs';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhyChooseRidot />
      <TechBarriers />
      <AllCourses />
      <SuccessStories />
      <Faqs />
    </main>
  );
}
