import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import SucessStories from '@/app/courses/swiper/SucessStories';
import Faqs from '@/features/about_us/Faqs';

const coursesSection = [
  {
    id: '1',
    course: 'Product Design',
    content:
      'Product design deals with the design of user interface and experience of a website for a better performance',
    image: '/hero-image.jpg',
    link: '/courses/product-design',    
  },

  {
    id: '2',
    course: 'Front-end Development',
    content:
      'Front-end engineers work on the design interface of a website. They mostly work with designers to make beautiful and fast websites',
    image: '/hero-image.jpg',
    link: '/courses/frontend-development',
  },

  {
    id: '3',
    course: 'Digital Marketing',
    content:
      'Digital Marketing deals with the electronic form of selling, advertising of goods and services across several online platforms',
    image: '/hero-image.jpg',
    link: 'courses/digital-marketing',
  },

  {
    id: '4',
    course: 'Data Science/Machine Learning',
    content:
      'Data Science focuses on extracting insights and knowledge from complex data using statistical, analytical and programming methods, to inform decision-making and predictions.',
    image: '/hero-image.jpg',
    link: '/courses/data-science',
  },

  {
    id: '5',
    course: 'Data Analysis',
    content:
      'Data Analysis focuses on cleaning and interpreting of data to discover useful information and support decision-making with the use of statistical tools and programming methods.',
    image: '/hero-image.jpg',
    link: 'courses/data-analysis',
  },

  {
    id: '6',
    course: 'Back-End Development',
    content:
      'Back-end engineers work on the server-side of a website or application. They focus on how the site works behind the scenes..',
    image: '/hero-image.jpg',
    link: '/courses/backend-development',
  },
];
export default function AllCoursesPage() {
  return (
    <main>
      <div className="pt-20 pb-20">
        <h1 className="xs:text-[34px] px-6 pb-10 text-[20px] font-bold md:px-2 md:text-[36px] lg:px-20 lg:text-[48px]">
          Courses
        </h1>
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-10 px-5 md:grid-cols-3 lg:gap-15 lg:px-20">
          {coursesSection.map(({ id, course, content, image, link }) => (
            <div
              key={id}
              className="mx-auto xs:max-w-[528px] xs:h-[391px] h-[417px] w-full space-y-5 rounded-[12px] bg-white px-5 py-5 xs:px-5 xs:py-5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-[15px] md:h-[360px] md:max-w-[305px] md:space-y-2 md:px-3 md:pt-3 lg:h-[548px] lg:max-w-[363px] lg:space-y-5 lg:px-8 lg:py-10"
            >
              <div className="relative w-full h-[170px] md:h-[200px] lg:h-[240px]">
                <Image
                  className="rounded-[12px] object-cover"
                  src={image}
                  alt="img"
                  quality={100}
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
              <h3 className="text-sm font-semibold md:text-[12px] md:font-bold lg:text-[18px]">
                {course}
              </h3>
              <p className="xs:text-[12px] text-sm lg:text-[16px]">{content}</p>
              {link && (
              <Link
                href={link}
                className="mt-1 flex items-center justify-start gap-2 text-sm font-semibold text-[rgb(43,43,208)] lg:text-base"
              >
                Learn more
                <MdArrowForward className="text-xl" />
              </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <SucessStories />
      <Faqs />
    </main>
  );
}
