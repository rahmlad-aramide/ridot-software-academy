import Image from 'next/image';

const dataScience = [
  {
    module: 'Module 1',
    heading: 'Introduction to Data Science & Python',
    content:
      'This module provides a foundational understanding of data science, exploring its key concepts, applications, and impact across industries. Learners are introduced to Python, the most popular programming language for data science, covering its basic syntax, libraries (such as NumPy and Pandas), and essential coding practices. By the end of this module, students will have a strong grasp of Python fundamentals and its role in analyzing and manipulating data.',
    image: '/ds-image-one.png',
  },

  {
    module: 'Module 2',
    heading: 'Data Collection & Cleaning',
    content:
      'Data is only as valuable as its quality, and this module delves into the processes of collecting, preprocessing, and cleaning raw data. Students will learn techniques for gathering data from multiple sources, including APIs, web scraping, and databases, while also addressing common issues such as missing values, inconsistencies, and duplicate records. The focus will be on using Python libraries like Pandas and Numpy to transform messy data into reliable datasets for analysis.',
    image: '/ds-image-two.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white',
  },

  {
    module: 'Module 3',
    heading: 'Data Visualization & Storytelling',
    content:
      'In this module, learners explore the art of data visualization and how to craft compelling narratives from data. Using libraries such as Matplotlib, Seaborn, and Plotly, students will create charts, graphs, and dashboards that effectively communicate insights. Emphasis will be placed on choosing the right visualizations for different types of data and audiences, ensuring that findings are presented in a clear, engaging, and impactful manner.',
    image: '/ds-image-three.png',
  },

  {
    module: 'Module 4',
    heading: 'Introduction to Machine Learning',
    content:
      'This module introduces the fundamental concepts of machine learning, covering supervised and unsupervised learning techniques. Students will learn about key algorithms, such as regression, classification, and clustering, while implementing them using popular Python libraries like Scikit-learn. Basic concepts of model evaluation, overfitting, and bias-variance tradeoff will also be covered, equipping learners with the skills to build and assess predictive models.',
    image: '/ds-image-four.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white',
  },

  {
    module: 'Module 5',
    heading: 'Working with Databases and SQL',
    content:
      'Understanding how to store, retrieve, and manipulate structured data is crucial for data science. This module focuses on relational databases and SQL, teaching students how to write queries to extract meaningful insights. Topics include database design, joins, indexing, and performance optimization, along with hands-on experience using SQL-based databases like MySQL and PostgreSQL. By the end of this module, learners will be proficient in managing large datasets efficiently.',
    image: '/ds-image-five.png',
  },

  {
    module: 'Module 6',
    heading: 'Real-World Projects & Career Development',
    content:
      'The final module is designed to bridge the gap between learning and practical application. Students will work on real-world projects, applying their knowledge to solve data-driven problems. Additionally, this module will cover essential career development topics, such as building a strong data science portfolio, networking, and interview preparation. By completing this module, learners will be well-equipped to enter the job market and excel in data science roles.',
    image: '/ds-image-two.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white',
  },
];

export default function section() {
  return (
    <div className="h-full w-full">
      {dataScience.map(
        ({ module, heading, content, image, bgColor, textColor }, index) => (
          <div
            key={index}
            className={`xs:p-5 xs:pt-[80px] xs:pb-[80px] w-full p-3 pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] ${bgColor}`}
          >
            <div
              className={`flex flex-col items-center gap-6 md:flex-row md:flex-row-reverse md:justify-center md:gap-10 md:px-0 lg:gap-30 lg:px-10`}
            >
              <div
                className={`xs:max-w-[528px] xs:h-[580px] relative h-[324px] w-full max-w-[272px] md:h-[467px] md:max-w-[440px] lg:h-[467px] lg:max-w-[440px]`}
              >
                <Image
                  className="object-cover rounded-[16px]"
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
                  className={`xs:text-base text-gray text-sm md:text-xl ${textColor}`}
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
