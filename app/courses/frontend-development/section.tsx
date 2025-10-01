import Image from 'next/image';

const frontendDevelopment = [
  {
    module: 'Module 1',
    heading: 'Introduction to Front-End Development',
    content:
      'This module provides an overview of front-end development, covering the fundamentals of HTML and CSS. Students will learn how web pages are structured using HTML and styled with CSS, gaining a strong foundation in building responsive and accessible web interfaces. Key concepts such as semantic HTML, the box model, and basic layout techniques will be introduced.',
    image: '/fd-image-one.png',
  },

  {
    module: 'Module 2',
    heading: 'Styling with CSS',
    content:
      'In this module, students will dive deeper into CSS, exploring advanced styling techniques to enhance the visual appeal of web pages. Topics include flexbox, grid layouts, animations, transitions, and responsive design principles. Learners will also gain hands-on experience with CSS frameworks like Bootstrap or Tailwind CSS to speed up development.',
    image: '/fd-image-two.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white',
  },

  {
    module: 'Module 3',
    heading: 'Javascript for Interactivity',
    content:
      'JavaScript is essential for creating dynamic and interactive web experiences. This module introduces students to JavaScript fundamentals, including variables, functions, loops, and events. They will learn how to manipulate the DOM, handle user input, and implement interactive features such as form validation, modals, and API requests.',
    image: '/fd-image-three.png',
  },

  {
    module: 'Module 4',
    heading: 'Front-End Development with React.js',
    content:
      'Modern web applications rely on powerful frameworks like React.js. This module covers the core concepts of React, including components, props, state management, and the component lifecycle. Students will build interactive web applications using React, learning best practices for structuring and optimizing their code.',
    image: '/fd-image-four.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white',
  },

  {
    module: 'Module 5',
    heading: 'Advanced Front-End Techniques',
    content:
      'This module explores advanced front-end development concepts such as performance optimization, accessibility, and state management with tools like Redux or Context API. Students will also learn about authentication, API integration, and using third-party libraries to enhance functionality. The goal is to equip learners with the skills needed to build scalable and maintainable applications.',
    image: '/fd-image-five.png',
  },

  {
    module: 'Module 6',
    heading: 'Deployment & Career Preparation',
    content:
      'The final module focuses on deploying web applications and preparing for a career in front-end development. Students will learn how to host their projects using platforms like Netlify, Vercel, or GitHub Pages. Additionally, they will receive guidance on building a strong portfolio, writing resumes, and preparing for technical interviews to successfully enter the job market.',
    image: '/fd-image-six.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white',
  },
];

export default function section() {
  return (
    <div className="h-full w-full">
      {frontendDevelopment.map(
        ({ module, heading, content, image, bgColor, textColor }, index) => (
          <div
            key={index}
            className={`xs:p-5 xs:pt-[80px] xs:pb-[80px] w-full p-3 pt-[50px] pb-[40px] ${bgColor}`}
          >
            <div
              className={`flex flex-col items-center gap-6 md:flex-row md:flex-row-reverse md:justify-center md:gap-10 md:px-0 lg:gap-30 lg:px-10`}
            >
              <div
                className={`xs:max-w-[528px] xs:h-[400px] relative h-[324px] w-full max-w-[272px] md:h-[400px] md:max-w-[408px] lg:h-[400px] lg:max-w-[438px]`}
              >
                <Image
                  className="rounded-[16px] object-cover"
                  src={image}
                  alt={`${module} image`}
                  quality={100}
                  fill
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="w-full space-y-2 text-left md:max-w-[470px] lg:max-w-[603px]">
                <p
                  className={`text-[12px] font-semibold text-[rgb(0,0,90)] ${textColor}`}
                >
                  {module}
                </p>
                <h2
                  className={`xs:text-[32px] text-[20px] font-semibold text-[rgb(0,0,90)] md:text-[32px] ${textColor}`}
                >
                  {heading}
                </h2>
                <p
                  className={`xs:text-base text-gray text-sm md:text-[24px] ${textColor}`}
                >
                  {content}
                </p>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
