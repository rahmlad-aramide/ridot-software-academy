import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const offers = [
  {
    title: 'Professional Website Development',
    description:
      'Get a modern, responsive website that represents your brand and converts visitors into paying customers.',
  },
  {
    title: 'Digital Marketing Services',
    description:
      'We help you reach the right audience, increase visibility, and grow your business online.',
  },
  {
    title: 'Facebook & Google Ads Management',
    description:
      'Run high-performing ad campaigns that drive traffic, leads, and sales.',
  },
  {
    title: 'Website Ranking (SEO)',
    description:
      'Improve your visibility on search engines and get discovered by more customers.',
  },
  {
    title: 'Training & Consultation',
    description:
      'Learn how to manage and scale your business using proven digital strategies.',
  },
];

const benefits = [
  'Attract more customers and increase sales',
  'Build credibility and trust',
  'Make your business accessible anytime, anywhere',
  'Showcase your brand, products, and services effectively',
];

export default function DigitalMarketingServices() {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-primary text-lg font-semibold uppercase tracking-wide">
            Digital Marketing & Website Services
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Grow Your Business with Smart Digital Solutions
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-500">
            What is a business without a website? In today’s digital world, your
            business needs more than just social media, it needs a strong online
            presence that attracts, converts, and retains customers.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-gray-600 italic">
            At Ridot, we don’t just teach tech, we help businesses grow through
            powerful digital marketing and web solutions.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">What We Offer</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="relative rounded-2xl bg-white p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-primary">{offer.title}</h4>
                <p className="mt-4 text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-primary p-8 lg:p-12 text-white shadow-xl">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-extrabold">
                Why Your Business Needs a Website
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                A professional business website helps you:
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/3 flex flex-col gap-4">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                 <p className="text-xl font-bold">Ready to grow?</p>
                 <p className="mt-2 text-blue-50">Contact us today for a free consultation.</p>
                 <button className="mt-6 w-full rounded-lg bg-white px-6 py-3 font-bold text-primary hover:bg-blue-50 transition-colors">
                    Get Started
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
