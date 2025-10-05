'use client';

import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'Can I change the course I initially registered for?',
    answer:
      "Yes, you can change the course you have registered for, but you're advised to consult one of the admins first.",
  },
  {
    id: 2,
    question: 'What is the duration of Ridot courses?',
    answer:
      'The duration of our courses varies depending on the program. Generally, our courses range from a few weeks to a few months, allowing you to learn at your own pace.',
  },
  {
    id: 3,
    question: 'Can I access course materials after I finish a program?',
    answer:
      "Yes, you'll have continued access to the course materials even after you've completed the program. This way, you can review and refresh your knowledge whenever needed.",
  },
  {
    id: 4,
    question: 'Do I need any specific software or hardware for the courses?',
    answer:
      "Our courses are designed to be accessible with basic computer requirements. You'll need a computer or laptop and a stable internet connection. Specific software requirements, if any, will be mentioned in the course details.",
  },
  {
    id: 5,
    question: 'Is there any financial aid or scholarships available?',
    answer:
      'We offer various financial aid options and scholarships to eligible students. Check our blog page for detailed information on the available opportunities.',
  },
  {
    id: 6,
    question: 'What kind of support do I receive during the course?',
    answer:
      "Our instructors and support team are dedicated to helping you succeed. You'll have access to discussion forums, live Q&A sessions, and personalized assistance to ensure a smooth learning experience.",
  },
];

export default function Faqs() {
  const [selectedQuesId, setSelectedQuesId] = useState<number | null>(null);
  const handleSelectedQues = (id: number) => {
    setSelectedQuesId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="bg-white px-6 py-10 lg:px-14 lg:py-16">
      <h1 className="text-center text-xl leading-7 font-semibold text-zinc-900 sm:text-4xl sm:leading-[48px] lg:text-5xl lg:leading-[48px] lg:font-bold xl:leading-[58px]">
        Frequently Asked Questions
      </h1>
      <ul className="mt-6 space-y-3 lg:mt-16">
        {faqs.map((faq) => (
          <li key={faq.id} className="rounded-xl bg-indigo-50 px-6 py-5">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h3
                  onClick={() => handleSelectedQues(faq.id)}
                  className="cursor-pointer text-sm leading-tight font-semibold text-zinc-900 sm:text-base sm:leading-normal lg:text-xl lg:leading-7"
                >
                  {faq.question}
                </h3>
                {selectedQuesId === faq.id && (
                  <p className="mt-2 text-sm leading-tight font-normal text-zinc-700">
                    {faq.answer}
                  </p>
                )}
              </div>
              <button
                className="cursor-pointer text-indigo-700"
                onClick={() => handleSelectedQues(faq.id)}
              >
                {selectedQuesId !== faq.id ? (
                  <FaPlus fontSize={18} />
                ) : (
                  <FaMinus fontSize={18} />
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
