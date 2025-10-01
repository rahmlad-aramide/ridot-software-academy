import Image from 'next/image';

const productDesign = [
  {
    module: 'Module 1',
    heading: 'Introduction to Product Design',
    content:
      'This module provides a foundational overview of product design, exploring its role in solving user problems and driving business success. Learners will understand the design process, from ideation to execution, and the key principles of human-centered design. It also introduces essential tools and methodologies used in the industry, setting the stage for deeper exploration in subsequent modules.',
    image: '/image-one.png',
  },

  {
    module: 'Module 2',
    heading: 'User Research & Competitive Analysis',
    content:
      'User research is the backbone of great product design. This module teaches students how to gather insights through qualitative and quantitative research methods, such as surveys, interviews, and user testing. Additionally, learners will conduct competitive analysis to understand market trends, user expectations, and how to position their products effectively. The goal is to ensure that design decisions are data-driven and aligned with user needs.',
    image: '/image-two.png',

    bgColor: 'bg-[rgb(239,239,255)]',
  },

  {
    module: 'Module 3',
    heading: 'UX Design Fundamentals',
    content:
      'This module focuses on the core principles of User Experience (UX) design, including information architecture, wireframing, and interaction design. Students will learn how to create user flows, structure content effectively, and design intuitive navigation systems. Emphasis will be placed on usability heuristics, accessibility, and creating experiences that are both functional and delightful.',
    image: '/image-three.png',
  },

  {
    module: 'Module 4',
    heading: 'UI Design & Visual Aesthetics',
    content:
      'Great design is not just functional but also visually appealing. In this module, students will explore User Interface (UI) design principles, including typography, color theory, layout, and design consistency. They will also get hands-on experience with industry-standard design tools like Figma or Adobe XD, learning how to create high-fidelity interfaces that enhance user engagement and brand identity.',
    image: '/image-four.png',
    bgColor: 'bg-[rgb(239,239,255)]',
  },

  {
    module: 'Module 5',
    heading: 'Prototyping and Usability Testing',
    content:
      'Before launching a product, designers must test and refine their work. This module covers the process of creating interactive prototypes and conducting usability tests to gather feedback. Students will use tools like Figma, InVision, or Axure to build realistic prototypes and learn how to analyze user interactions to improve design decisions. Iteration and refinement based on user feedback will be a key focus.',
    image: '/image-five.png',
  },

  {
    module: 'Module 6',
    heading: 'Career Preparation & Portfolio Building',
    content:
      'To succeed in the product design industry, a strong portfolio is essential. This final module guides students in crafting a compelling portfolio that showcases their skills and design process. Topics include personal branding, case study writing, networking, and job interview preparation. By the end of this module, learners will be equipped with the confidence and resources to land design roles and grow in their careers.',
    image: '/image-six.png',
    bgColor: 'bg-[rgb(239,239,255)]',
  },
];

export default function section() {
  return (
    <div className="h-full w-full">
      {productDesign.map(
        ({ module, heading, content, image, bgColor }, index) => (
          <div
            key={index}
            className={`xs:p-5 xs:pt-[80px] xs:pb-[80px] w-full p-3 pt-[80px] pb-[80px] ${bgColor}`}
          >
            <div
              className={`flex flex-col items-center gap-6 md:flex-row md:flex-row-reverse md:justify-center md:gap-10 md:px-0 lg:gap-30 lg:px-10`}
            >
              <div
                className={`xs:max-w-[430px] xs:h-[450px] relative h-[288px] w-full max-w-[280px] md:h-[395px] md:max-w-[380px] lg:h-[450px] lg:max-w-[430px]`}
              >
                <Image
                  className="object-cover"
                  src={image}
                  alt={`${module} image`}
                  quality={100}
                  fill
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="w-full space-y-2 text-left md:max-w-[470px] lg:max-w-[603px]">
                <p className="text-[12px] font-semibold text-[rgb(0,0,90)]">
                  {module}
                </p>
                <h2 className="xs:text-[32px] text-[20px] font-semibold text-[rgb(0,0,90)] md:text-[32px]">
                  {heading}
                </h2>
                <p className="xs:text-base text-gray text-sm md:text-[20px]">
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
