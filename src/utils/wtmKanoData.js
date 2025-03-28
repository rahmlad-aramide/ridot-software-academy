import check from "../assets/icons/check.svg";

export const pricingData = [
  {
    title: "Data Analytics",
    subtitle:
      "Data analytics is the process of examining and interpreting data to extract meaningful insights, identify trends and make inform decisions.",
    duration: "12 Weeks",
    times: "Twice a week",
    installments: "70% down payment",
    price: 120000,
    discountPrice: 75000,
    prices: [
      { percent: "30%", price: 75000 * 0.3 },
      { percent: "70%", price: 75000 * 0.7 },
      { percent: "Full", price: 75000 },
    ],
    discount: null,
    priceBg: "#00CA72",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "37.5%",
    link: "/",
    desc: [
      {
        title: "Week 1: Introduction to Data Analysis",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "What is Data Analysis?",
      },
      {
        icon: check,
        text: "Overview of SQL, Excel, Python, and Power BI in Data Analysis",
      },
      {
        icon: check,
        text: "Understanding data types, structure, and workflow",
      },
      {
        icon: check,
        text: "Installing necessary tools (MySQL/SQLite, Python environment, Excel, Power BI)",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Setting up the tools and exploring sample datasets",
      },
      {
        space: true,
      },
      {
        title: "Week 2: Data Cleaning and Manipulation in Excel",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Basics of Excel: Interface, shortcuts, and formulas",
      },
      {
        icon: check,
        text: "Sorting, filtering, and conditional formatting",
      },
      {
        icon: check,
        text: "Data cleaning techniques (removing duplicates, handling missing values)",
      },
      {
        icon: check,
        text: "Using pivot tables for data summarization",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Cleaning and summarizing a raw dataset",
      },
      {
        space: true,
      },
      {
        title: "Week 3: Advanced Excel for Data Analysis",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Data validation and lookup functions (VLOOKUP, HLOOKUP, XLOOKUP)",
      },
      {
        icon: check,
        text: "Advanced formulas: IF, AND, OR, nested functions",
      },
      {
        icon: check,
        text: "Introduction to Excel charts and visualization",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Creating interactive dashboards in Excel",
      },
      {
        space: true,
      },
      {
        title: "Week 4: Introduction to SQL",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Basics of relational databases and SQL syntax",
      },
      {
        icon: check,
        text: "SELECT, WHERE, ORDER BY, and LIMIT",
      },
      {
        icon: check,
        text: "Filtering data with comparison and logical operators",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Querying a sample database to retrieve specific information",
      },
      {
        space: true,
      },
      {
        title: "Week 5: Intermediate SQL",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Aggregate functions (COUNT, SUM, AVG, MIN, MAX)",
      },
      {
        icon: check,
        text: "GROUP BY and HAVING clauses",
      },
      {
        icon: check,
        text: "Joining tables: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Writing complex queries with multiple joins",
      },
      {
        space: true,
      },
      {
        title: "Week 6: Python for Data Analysis (Part 1)",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Introduction to Python and Jupyter Notebook",
      },
      {
        icon: check,
        text: "Data structures in Python: Lists, tuples, dictionaries",
      },
      {
        icon: check,
        text: "Working with libraries: Pandas and NumPy",
      },
      {
        icon: check,
        text: "Importing datasets (CSV, Excel)",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Analyzing a dataset using Pandas",
      },
      {
        space: true,
      },
      {
        title: "Week 7: Python for Data Analysis (Part 2)",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Data cleaning with Pandas",
      },
      {
        icon: check,
        text: "Exploratory Data Analysis (EDA)",
      },
      {
        icon: check,
        text: "Basic data visualization with Matplotlib and Seaborn",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Creating charts and graphs to summarize insights",
      },
      {
        space: true,
      },
      {
        title: "Week 8: Advanced Python for Data Analysis",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Handling large datasets efficiently",
      },
      {
        icon: check,
        text: "Writing custom functions for data transformation",
      },
      {
        icon: check,
        text: "Advanced visualizations with Seaborn",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Developing a Python-based EDA report",
      },
      {
        space: true,
      },
      {
        title: "Week 9: Introduction to Power BI",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Power BI interface and workflow",
      },
      {
        icon: check,
        text: "Connecting to data sources",
      },
      {
        icon: check,
        text: "Creating tables, visuals, and basic dashboards",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Importing a dataset and creating a simple dashboard",
      },
      {
        space: true,
      },
      {
        title: "Week 10: Intermediate Power BI",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "DAX (Data Analysis Expressions): Basic formulas and calculations",
      },
      {
        icon: check,
        text: "Creating relationships between tables",
      },
      {
        icon: check,
        text: "Interactive filters and slicers",
      },
      {
        icon: check,
        text: "Publishing and sharing reports",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Building a multi-page dashboard with filters",
      },
      {
        space: true,
      },
      {
        title: "Week 11: Data Analysis Project",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Combining tools: Using SQL, Excel, Python, and Power BI together",
      },
      {
        icon: check,
        text: "Designing a data analysis workflow for a real-world problem",
      },
      {
        icon: check,
        text: "Communicating insights effectively",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Start a capstone project: Analyze a dataset and create reports",
      },
      {
        space: true,
      },
      {
        title: "Week 12: Capstone Project Presentations",
      },
      {
        subtitle: "Topics Covered:",
      },
      {
        icon: check,
        text: "Refining your analysis and visualization",
      },
      {
        icon: check,
        text: "Preparing a presentation of your findings",
      },
      {
        icon: check,
        text: "Feedback and Q&A session with peers/instructor",
      },
      {
        subtitle: "Hands-on Practice:",
      },
      {
        icon: check,
        text: "Present capstone projects and receive feedback",
      },
      {
        space: true,
      },
      {
        title: "Key Deliverables:",
      },
      {
        icon: check,
        text: "Weekly assignments and quizzes",
      },
      {
        icon: check,
        text: "A final capstone project integrating all tools",
      },
      {
        subtitle: "TOOLS; PowerBI, SQL, Excel, Python",
      },
    ],
  },
  {
    title: "Data Science",
    subtitle:
      "Data science focuses on extracting insights and knowledge from complex data using statistical, analytical, and programming methods, to inform decision-making and predictions.",
    duration: "12 Weeks",
    times: "2-3 times a week (Flexible)",
    installments: "70% down payment",
    price: 120000,
    discountPrice: 75000,
    prices: [
      { percent: "30%", price: 75000 * 0.3 },
      { percent: "70%", price: 75000 * 0.7 },
      { percent: "Full", price: 75000 },
    ],
    discount: null,
    priceBg: "#0085FF",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "37.5%",
    link: "/",
    desc: [
      {
        subtitle: "MODULE 1:",
      },
      {
        icon: check,
        text: "Introduction to Data Science & Python",
      },
      {
        subtitle: "MODULE 2:",
      },
      {
        icon: check,
        text: " Data Collection & Cleaning ",
      },
      {
        subtitle: "MODULE 3:",
      },
      {
        icon: check,
        text: "Data Visualization & Storytelling",
      },
      {
        subtitle: "MODULE 4:",
      },
      {
        icon: check,
        text: "Introduction to Machine Learning",
      },
      {
        subtitle: "MODULE 5:",
      },
      {
        icon: check,
        text: "Working with Databases & SQL",
      },
      {
        subtitle: "MODULE 6:",
      },
      {
        icon: check,
        text: "Real-World Projects & Career Development",
      },
      {
        space: true,
      },
      {
        title: "Final Outcome:",
      },
      {
        icon: check,
        text: "Hands-on project portfolio to showcase to employers.",
      },
      {
        icon: check,
        text: "Certificate of Completion from Ridot Software Academy.",
      },
      {
        icon: check,
        text: "Job-ready skills in data analysis, visualization, and machine learning",
      },
      {
        note: "This is a simple outline of the course structure, the overall view would be seen upon completing registration. ",
      },
    ],
  },
  {
    title: "Frontend Web Development",
    subtitle:
      "Front-end engineers work on the design interface of a website. They mostly work with designers to make beautiful and fast websites.",
    duration: "12 weeks",
    times: " 2-3 times a week, (flexible)",
    installments: "70% down payment",
    price: 80000,
    discountPrice: 60000,
    prices: [
      { percent: "30%", price: 60000 * 0.3 },
      { percent: "70%", price: 60000 * 0.7 },
      { percent: "Full", price: 60000 },
    ],
    discount: null,
    priceBg: "#A25DDC",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        subtitle: "MODULE 1:",
      },
      {
        icon: check,
        text: "Introduction to Front-End Development- (html, css, in overview)",
      },
      {
        subtitle: "MODULE 2:",
      },
      {
        icon: check,
        text: "Styling with CSS",
      },
      {
        subtitle: "MODULE 3:",
      },
      {
        icon: check,
        text: "JavaScript for Interactivity",
      },
      {
        subtitle: "MODULE 4:",
      },
      {
        icon: check,
        text: "Front-End Development with React.js",
      },
      {
        subtitle: "MODULE 5:",
      },
      {
        icon: check,
        text: "Advanced Front-End Techniques",
      },
      {
        subtitle: "MODULE 6:",
      },
      {
        icon: check,
        text: "Deployment & Career Preparation",
      },
      {
        space: true,
      },
      {
        title: "Final Outcome:",
      },
      {
        icon: check,
        text: "Hands-on portfolio with real-world front-end projects.",
      },
      {
        icon: check,
        text: "Certificate of Completion from Ridot Software Academy.",
      },
      {
        icon: check,
        text: "Job-ready skills in front-end web development.",
      },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "No subtitle",
    duration: "10 weeks",
    times: " 2-3 times a week, (flexible)",
    installments: "70% down payment",
    price: 100000,
    discountPrice: 70000,
    prices: [
      { percent: "30%", price: 70000 * 0.3 },
      { percent: "70%", price: 70000 * 0.7 },
      { percent: "Full", price: 70000 },
    ],
    discount: null,
    priceBg: "#00CA72",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        subtitle: "MODULE 1:",
      },
      {
        icon: check,
        text: " Introduction to Back-End Development",
      },
      {
        subtitle: "MODULE 2:",
      },
      {
        icon: check,
        text: "Programming with JavaScript & Node.js",
      },
      {
        subtitle: "MODULE 3:",
      },
      {
        icon: check,
        text: "Working with Databases (SQL & NoSQL)",
      },
      {
        subtitle: "MODULE 4:",
      },
      {
        icon: check,
        text: "RESTful APIs & Authentication",
      },
      {
        subtitle: "MODULE 5:",
      },
      {
        icon: check,
        text: "Advanced Back-End Concepts",
      },
      {
        subtitle: "MODULE 6:",
      },
      {
        icon: check,
        text: "Deployment & Career Preparation",
      },
      {
        space: true,
      },
      {
        title: "Final Outcome:",
      },
      {
        icon: check,
        text: "Hands-on project portfolio showcasing back-end APIs & applications.",
      },
      {
        icon: check,
        text: "Certificate of Completion from Ridot Software Academy.",
      },
      {
        icon: check,
        text: "Job-ready skills in back-end development & API management.",
      },
      {
        note: "This is a simple outline of the course structure, the overall view would be seen upon completing registration.",
      },
    ],
  },
  {
    title: "Product Design",
    subtitle:
      "Product design deals with the design of user interface and experience of a website for a better performance.",
    duration: "10 weeks",
    times: " 2-3 times a week, (flexible)",
    installments: "70% down payment",
    price: 60000,
    discountPrice: 45000,
    prices: [
      { percent: "30%", price: 45000 * 0.3 },
      { percent: "70%", price: 45000 * 0.7 },
      { percent: "Full", price: 45000 },
    ],
    discount: null,
    priceBg: "#0085FF",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        subtitle: "MODULE 1:",
      },
      {
        icon: check,
        text: "Introduction to Product Design",
      },
      {
        subtitle: "MODULE 2:",
      },
      {
        icon: check,
        text: "User Research & Competitive Analysis",
      },
      {
        subtitle: "MODULE 3:",
      },
      {
        icon: check,
        text: "UX Design Fundamentals",
      },
      {
        subtitle: "MODULE 4:",
      },
      {
        icon: check,
        text: "UI Design & Visual Aesthetics",
      },
      {
        subtitle: "MODULE 5:",
      },
      {
        icon: check,
        text: "Prototyping & Usability Testing",
      },
      {
        subtitle: "MODULE 6:",
      },
      {
        icon: check,
        text: "Career Preparation & Portfolio Building",
      },
      {
        note: "This is a simple outline of the course structure, the overall view would be seen upon completing registration.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    subtitle:
      "Digital marketing deals with the electronic form of selling, advertising of goods and services across several online platforms.",
    duration: "10 Weeks (Part-Time) / 6 Weeks (Full-Time)",
    times: "2-3 times a week(flexible)",
    installments: "70% down payment",
    price: 50000,
    discountPrice: 35000,
    prices: [
      { percent: "30%", price: 15000 },
      { percent: "70%", price: 35000 },
      { percent: "Full", price: 50000 },
    ],
    discount: null,
    priceBg: "#A25DDC",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        subtitle: "MODULE 1:",
      },
      {
        icon: check,
        text: " Introduction to Digital Marketing",
      },
      {
        subtitle: "MODULE 2:",
      },
      {
        icon: check,
        text: " Social Media Marketing (SMM)",
      },
      {
        subtitle: "MODULE 3:",
      },
      {
        icon: check,
        text: "Search Engine Optimization (SEO)",
      },
      {
        subtitle: "MODULE 4:",
      },
      {
        icon: check,
        text: "Pay-Per-Click (PPC) Advertising",
      },
      {
        subtitle: "MODULE 5:",
      },
      {
        icon: check,
        text: "Email & Content Marketing",
      },
      {
        subtitle: "MODULE 6:",
      },
      {
        icon: check,
        text: "Analytics & Conversion Optimization",
      },
      {
        subtitle: "MODULE 7:",
      },
      {
        icon: check,
        text: " Digital Marketing Strategy & Career Growth",
      },
      {
        space: true,
      },
      {
        title: "Final Outcome:",
      },
      {
        icon: check,
        text: "Hands-on project portfolio showcasing marketing campaigns.",
      },
      {
        icon: check,
        text: "Certificate of Completion from Ridot Software Academy.",
      },
      {
        icon: check,
        text: "Job-ready skills in digital marketing strategy, social media, SEO, and PPC advertising.",
      },
      {
        note: "This is a simple outline of the course structure, the overall view would be seen upon completing registration.",
      },
    ],
  },
];
