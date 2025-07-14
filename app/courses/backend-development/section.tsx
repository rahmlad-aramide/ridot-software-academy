import Image from 'next/image';

const backendDevelopment = [
  {
    module: 'Module 1',
    heading: 'Introduction to Back-End Development',
    content:
      'This module provides an overview of back-end development, covering its role in web applications and how it interacts with front-end technologies. Students will learn the fundamentals of server-side programming, key concepts like client-server architecture, databases, and APIs, and explore different back-end technologies used in modern development.',
    image: '/bd-image-one.png',
  },

  {
    module: 'Module 2',
    heading: 'Programming with Javascript & Node.js',
    content:
      'JavaScript is a powerful language for back-end development, and this module introduces students to server-side programming using Node.js. They will learn asynchronous programming, event-driven architecture, and how to build and manage server-side applications using Node.js and Express.js, setting the foundation for building scalable web applications.',
    image: '/bd-image-two.png',
    bgColor: 'bg-[rgb(239,239,255)]',
  },

  {
    module: 'Module 3',
    heading: 'Working with Databases (SQL & NoSQL)',
    content:
      'Databases are a crucial part of back-end development, and this module covers both SQL and NoSQL databases. Students will learn how to design, query, and manage relational databases using SQL (MySQL/PostgreSQL) and explore NoSQL databases like MongoDB for handling unstructured data. Topics such as CRUD operations, indexing, and data modeling will be emphasized.',
    image: '/bd-image-three.png',
  },

  {
    module: 'Module 4',
    heading: 'RESTful APIs & Authentication',
    content:
      'This module focuses on building RESTful APIs that allow applications to communicate efficiently. Students will learn API design principles, how to handle HTTP requests and responses, and implement authentication and authorization using JWT, OAuth, and session-based authentication. Security best practices will also be covered to protect user data.',
    image: '/bd-image-four.png',
    bgColor: 'bg-[rgb(255,228,228)]',
  },

  {
    module: 'Module 5',
    heading: 'Advanced Back-End Concepts',
    content:
      'In this module, students will explore advanced back-end development topics such as microservices architecture, WebSockets for real-time communication, caching strategies, and optimizing server performance. They will also learn about middleware, logging, and error handling to ensure robust and scalable applications.',
    image: '/bd-image-five.png',
  },

  {
    module: 'Module 6',
    heading: 'Deployment & Career Preparation',
    content:
      'The final module covers deploying back-end applications using platforms like Heroku, AWS, or DigitalOcean. Students will learn about CI/CD pipelines, Docker, and cloud-based solutions. Additionally, they will receive guidance on resume building, portfolio creation, and technical interview preparation to launch a successful career in back-end development.',
    image: '/bd-image-six.png',
    bgColor: 'bg-[rgb(239,239,255)]',
  },
];

export default function section() {
  return (
    <div className="h-full w-full">
      {backendDevelopment.map(
        ({ module, heading, content, image, bgColor }, index) => (
          <div
            key={index}
            className={`xs:p-5 xs:pt-[80px] xs:pb-[80px] w-full p-3 pt-[50px] pb-[30px] md:pt-[120px] md:pb-[120px] ${bgColor}`}
          >
            <div
              className={`flex flex-col items-center gap-6 md:flex-row md:flex-row-reverse md:justify-center md:gap-10 md:px-0 lg:gap-30`}
            >
              <div
                className={`xs:max-w-[528px] xs:h-[520px] relative h-[300px] w-full max-w-[300px] md:h-[467px] md:max-w-[440px] lg:h-[440px] lg:max-w-[440px]`}
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

              <div className="w-full space-y-2 text-left md:max-w-[470px] lg:max-w-[620px]">
                <p className="text-[12px] font-semibold text-[rgb(0,0,90)]">
                  {module}
                </p>
                <h2 className="xs:text-[32px] text-[20px] font-semibold text-[rgb(0,0,90)] md:text-[32px]">
                  {heading}
                </h2>
                <p className="xs:text-base text-gray text-sm md:text-2xl">
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
