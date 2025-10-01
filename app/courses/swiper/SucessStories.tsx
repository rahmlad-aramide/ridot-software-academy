'use client';

import Card from '@/app/courses/swiper/cardComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function successStories() {
  const successStories = [
    {
      name: 'Ganiyu Sofiat',
      content:
        "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
    },

    {
      name: 'Ganiyu Sofiat',
      content:
        "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
    },

    {
      name: 'Ganiyu Sofiat',
      content:
        "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
    },

    {
      name: 'Ganiyu Sofiat',
      content:
        "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
    },
  ];

  return (
    <div className="xs:pb-20 bg-[rgb(255,228,228)] px-4 py-12 pt-10 pb-10 md:pt-20 md:pb-20">
      <div className="xs:px-10 mb-10 flex flex-col justify-center px-5 md:flex-row md:gap-[35px] lg:gap-[60px]">
        <h2 className="xs:text-[40px] mb-4 text-[20px] font-bold md:text-[48px]">
          Success Stories
        </h2>

        <p className="xs:text-base xs:w-[462px] text-sm md:w-[462px] md:text-[20px]">
          Meet some of our graduates who have transformed their lives and
          careers with Ridot Software Academy.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {successStories.map((stories, index) => (
          <SwiperSlide key={index}>
            <Card name={stories.name} content={stories.content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
