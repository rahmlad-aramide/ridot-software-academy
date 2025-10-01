import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

const coursesSection = [
  {
    id: '1',
    course: 'Product Design',
    content:
      'Product design deals with the design of user interface and experience of a website for a better performance',
    image: '/product-design-img.png',
    link: '/courses/product-design',
  },

  {
    id: '2',
    course: 'Front-end Development',
    content:
      'Front-end engineers work on the design interface of a website. They mostly work with designers to make beautiful and fast websites',
    image: '/front-end-image.png',
    link: '/courses/frontend-development',
  },

  {
    id: '3',
    course: 'Digital Marketing',
    content:
      'Digital Marketing deals with the electronic form of selling, advertising of goods and services across several online platforms',
    image: '/digital-marketing-img.png',
    link: '/courses/digital-marketing',
  },

  {
    id: '4',
    course: 'Data Science/Machine Learning',
    content:
      'Data Science focuses on extracting insights and knowledge from complex data using statistical, analytical and programming methods, to inform decision-making and predictions.',
    image: '/data-science-img.png',
    link: '/courses/data-science',
  },

  {
    id: '5',
    course: 'Data Analysis',
    content:
      'Data Analysis focuses on cleaning and interpreting of data to discover useful information and support decision-making with the use of statistical tools and programming methods.',
    image: '/data-analysis-img.png',
    link: '/courses/data-analysis',
  },

  {
    id: '6',
    course: 'Back-End Development',
    content:
      'Back-end engineers work on the server-side of a website or application. They focus on how the site works behind the scenes..',
    image: '/back-end-image.png',
    link: '/courses/backend-development',
  },
];
export default function AllCourses() {
  return (
    <div className="pt-20 pb-20">
      <h1 className="px-5 pb-10 text-xl text-[20px] font-bold md:px-2 md:text-2xl md:text-[36px] lg:px-14 lg:text-3xl lg:text-[48px] xl:text-4xl">
        Courses
      </h1>
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-10 px-5 lg:grid-cols-3 lg:gap-14 lg:px-12">
        {coursesSection.map(({ id, course, content, image, link }) => (
          <div
            key={id}
            className="xs:max-w-[528px] xs:h-[391px] xs:px-5 xs:py-5 mx-auto h-[417px] w-full space-y-5 rounded-[12px] bg-white px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-[15px] md:h-[360px] md:max-w-[305px] md:space-y-2 md:px-3 md:pt-3 lg:h-[548px] lg:max-w-[363px] lg:space-y-5 lg:px-8 lg:py-10"
          >
            <div className="relative h-[170px] w-full md:h-[200px] lg:h-[240px]">
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
            <p className="xs:text-[12px] text-justify text-sm lg:text-[16px]">
              {content}
            </p>
            {link && (
              <Link
                href={link}
                className="mt-1 flex items-center justify-start gap-2 text-sm font-semibold text-[rgb(43,43,208)] transition-transform hover:translate-x-1 lg:text-base"
              >
                Learn more
                <MdArrowForward className="text-xl" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
