'use client';

import WhyChooseRidot from '@/features/whyChooseRidot';
import HeroSection from '@/features/heroSection';
import TechBarriers from '@/features/techBarriers';
import AllCourses from './courses/AllCourses';
import SuccessStories from './courses/swiper/SucessStories';
import Faqs from '@/features/about_us/Faqs';
import { useFormStore } from './useFormStore';
import PopupForm from '@/features/enrollPopUp';

export default function Home() {
  const { isFormOpen, closeForm } = useFormStore();
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhyChooseRidot />
      <TechBarriers />
      <AllCourses />
      <SuccessStories />
      <Faqs />

      <PopupForm isOpen={isFormOpen} onClose={closeForm} />
    </main>
  );
}
