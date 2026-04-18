import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

const coursesSection = [
  {
    id: '1',
    course: 'Data Analytics',
    content:
      'Learn how to analyze and interpret data using industry tools like Excel, SQL, Python, and Power BI. Become a job-ready Data Analyst.',
    image: '/data-analysis-img.png',
    link: '/courses/data-analysis',
  },

  {
    id: '2',
    course: 'Data Science',
    content:
      'Master data collection, visualization, and machine learning using Python and SQL to build a strong data science portfolio.',
    image: '/data-science-img.png',
    link: '/courses/data-science',
  },

  {
    id: '3',
    course: 'Front-End Web Development',
    content:
      'Build modern, responsive user interfaces using HTML, CSS, JavaScript, and React.js. Start your career as a Front-End Developer.',
    image: '/front-end-image.png',
    link: '/courses/frontend-development',
  },

  {
    id: '4',
    course: 'Back-End Development',
    content:
      'Focus on server-side logic, databases, and APIs using Node.js and SQL/NoSQL to build robust backend systems.',
    image: '/back-end-image.png',
    link: '/courses/backend-development',
  },

  {
    id: '5',
    course: 'Digital Marketing',
    content:
      'Master SEO, social media marketing, PPC, and email marketing to become a Digital Marketing Specialist.',
    image: '/digital-marketing-img.png',
    link: '/courses/digital-marketing',
  },

  {
    id: '6',
    course: 'Product Design (UI/UX)',
    content:
      'Learn user research, wireframing, and prototyping to create intuitive digital products and build a strong design portfolio.',
    image: '/product-design-img.png',
    link: '/courses/product-design',
  },

  {
    id: '7',
    course: 'Kids Coding Program',
    content:
      'Early exposure to technology and coding for teenagers and kids through HTML, CSS, JavaScript basics, and Scratch programming.',
    image: '/logo.jpeg',
    link: '/courses/kids-coding',
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
                alt="courses-image"
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
