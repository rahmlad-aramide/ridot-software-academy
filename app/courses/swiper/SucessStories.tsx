'use client'

import Card from '@/app/courses/swiper/cardComponent'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function successStories() {
 
const successStories = [
    {
        name: "Ganiyu Sofiat",
        content: "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
        
    },

    {
        name: "Ganiyu Sofiat",
        content: "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
        
    },

    {
        name: "Ganiyu Sofiat",
        content: "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
        
    },

    {
        name: "Ganiyu Sofiat",
        content: "I attended the 4-days Microsoft office workshop, and I must say- It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can't afford to miss.",
        
    },
]

  return (
    <div className='bg-[rgb(255,228,228)] py-12 px-4 pb-10 xs:pb-20 md:pb-20 pt-10 md:pt-20'>
            <div className='flex flex-col md:flex-row md:gap-[35px] lg:gap-[60px] justify-center mb-10 px-5 xs:px-10'>
            
            <h2 className='text-[20px] xs:text-[40px] md:text-[48px] font-bold mb-4'>Success Stories</h2>
            
            
                <p className='text-sm xs:text-base md:text-[20px] xs:w-[462px] md:w-[462px]'>
                    Meet some of our graduates who have transformed their lives and careers with Ridot Software Academy.
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
            <Card
    name={stories.name}
    content={stories.content} />
        </SwiperSlide>
      ))}
        
    </Swiper>
    </div>
  );
}

