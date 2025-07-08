import Hero from '@/features/about_us/Hero';
import Mission from '@/features/about_us/Mission';
import Vision from '@/features/about_us/Vision';
import WhoWeAre from '@/features/about_us/WhoWeAre';
import WhyChooseUs from '@/features/about_us/WhyChooseUs';
import Team from '@/features/about_us/Team';
import React from 'react';
import Faqs from '@/features/about_us/Faqs';
import Community from '@/features/about_us/Community';
import { onest } from '@/fonts';

export default function About() {
  return (
    <main className={`${onest.variable} mx-auto w-full lg:min-w-5xl`}>
      <Hero />
      <WhoWeAre />
      <Mission />
      <Vision />
      <WhyChooseUs />
      <Team />
      <Faqs />
      <Community />
    </main>
  );
}
