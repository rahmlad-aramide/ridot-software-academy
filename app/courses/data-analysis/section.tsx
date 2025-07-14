import Image from 'next/image';

const dataAnalysis = [
  {
    module: 'Module 1',
    heading: 'Introduction to Data Analysis',
    content:
      'This module provides an overview of data analysis, its importance in decision-making, and the tools used in the industry. Students will learn key concepts such as data types, data structures, and the data analysis process. The module sets the foundation for working with data efficiently and drawing meaningful insights.',
    image: '/da-image-one.png',
  },

  {
    module: 'Module 2',
    heading: 'Data Cleaning and Manipulation in Excel',
    content:
      'This module provides an overview of data analysis, its importance in decision-making, and the tools used in the industry. Students will learn key concepts such as data types, data structures, and the data analysis process. The module sets the foundation for working with data efficiently and drawing meaningful insights.',
    image: '/da-image-two.png',
    bgColor: 'bg-[rgb(239,239,255)]',
    
  },

  {
    module: 'Module 3',
    heading: 'Advanced Excel for Data Analysis',
    content:
      'Building on the previous week, this session explores advanced Excel functionalities such as PivotTables, Power Query, advanced charting, and statistical functions. Students will learn how to automate tasks using macros and efficiently analyze large datasets with Excel’s built-in tools.',
    image: '/da-image-three.png',
  },

  {
    module: 'Module 4',
    heading: 'Introduction to SQL',
    content:
      'Structured Query Language (SQL) is essential for managing and querying databases. This week introduces SQL basics, including writing queries, filtering data, using SELECT statements, and understanding database structures. Students will gain hands-on experience querying real-world datasets.',
    image: '/da-image-four.png',
    bgColor: 'bg-[rgb(239,239,255)]',
    
  },

  {
    module: 'Module 5',
    heading: 'Intermediate SQL',
    content:
      'Building on the previous week, this session explores advanced Excel functionalities such as PivotTables, Power Query, advanced charting, and statistical functions. Students will learn how to automate tasks using macros and efficiently analyze large datasets with Excel’s built-in tools.',
    image: '/da-image-five.png',
  },

  {
    module: 'Module 6',
    heading: 'Python for Data Analysis I',
    content:
      'Python is a powerful language for data analysis. This week covers the basics, including Python syntax, working with libraries like Pandas and NumPy, and performing essential data operations such as reading, cleaning, and transforming datasets.',
    image: '/da-image-six.png',
    bgColor: 'bg-[rgb(239,239,255)]',
    
  },

   {
    module: 'Module 7',
    heading: 'Python for Data Analysis (Part 2)',
    content:
      'Continuing with Python, students will learn more advanced techniques, including data visualization with Matplotlib and Seaborn, exploratory data analysis (EDA), and statistical analysis to uncover patterns and insights in data.',
    image: '/da-image-seven.png',
    bgColor: 'bg-[rgb(239,239,255)]',
    
  },

  {
    module: 'Module 8',
    heading: 'Advanced Python for Data Analysis',
    content:
      'This week focuses on handling large datasets, automating workflows, and working with advanced data manipulation techniques. Students will also explore real-world applications of Python in data science, including working with APIs and web scraping.',
    image: '/da-image-eight.png',
    bgColor: 'bg-[rgb(239,239,255)]',
    
  },

  {
    module: 'Module 9',
    heading: 'Introduction to Power BI',
    content:
      'Power BI is a leading business intelligence tool used for data visualization and reporting. This week introduces students to Power BI’s interface, data modeling, dashboard creation, and basic visualization techniques to present data effectively.',
    image: '/da-image-nine.png',
    bgColor: 'bg-[rgb(239,239,255)]',
    
  },

  {
    module: 'Module 10',
    heading: 'Intermediate Power BI',
    content:
      'Building on the previous week, students will dive deeper into Power BI, learning about DAX (Data Analysis Expressions), advanced data transformations, creating interactive reports, and connecting to multiple data sources for dynamic reporting.',
    image: '/da-image-ten.png',
    bgColor: 'bg-[rgb(239,239,255)',
    
  },
];

export default function section() {
  return (
    <div className="h-full w-full">
      {dataAnalysis.map(
        ({ module, heading, content, image, bgColor}, index) => (
          <div
            key={index}
            className={`xs:p-5 xs:pt-[80px] xs:pb-[80px] w-full p-3 pt-[50px] pb-[40px] ${bgColor}`}
          >
            <div
              className={`flex flex-col items-center gap-6 md:flex-row md:flex-row-reverse md:justify-center md:gap-10 md:px-0 lg:gap-30 lg:px-10`}
            >
              <div
                className={`relative h-[304px] w-full max-w-[288px] xs:max-w-[528px] xs:h-[485px] md:h-[400px] md:max-w-[408px] lg:h-[400px] lg:max-w-[438px]`}
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
                <p className="text-[12px] font-semibold text-[rgb(0,0,90)]">
                  {module}
                </p>
                <h2 className="text-[20px] xs:text-[32px] md:text-[32px] font-semibold text-[rgb(0,0,90)]">
                  {heading}
                </h2>
                <p className="text-sm xs:text-base md:text-[24px] text-gray">
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
