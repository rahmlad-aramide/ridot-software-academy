'use client';

import Card from '@/app/courses/swiper/cardComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function SuccessStories() {
  const successStories = [
    {
      name: 'Ganiyu Sofiat',
      content:
        "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
    },

    {
      name: 'Mrs Joseph',
      content:
        'The training waas fantastic, educating and challenging. Thanks for the innovation to involve women in tech. More grease to your elbows.',
    },

    {
      name: 'Funmilola Aremu',
      content:
        "Real and interesting!  Not like those who only say what they can't do. I look forward to an impactful week with RIdot Software Academy.",
    },

    {
      name: 'Enitan Badmus',
      content:
        "Thank you so much Ridot Software Academy for this great opportunity you're giving females, this is once in a time privilege and thanks to our great tutors.",
    },

    {
      name: 'Precious Adenopo',
      content:
        'My sales within this short period with Ridot Software Academy has been high. I had new customers and the potential ones are maksing enquiries.',
    },

    {
      name: '---------',
      content:
        "Thanks for sharing your knowledge with us, before this class started, I was a novice, but now.. when giving thanks, I can't forget our great tutors",
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
