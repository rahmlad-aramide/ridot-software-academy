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
    prices: calculateInstallment(75000, [30, 70]),
    discount: null,
    priceBg: "#00CA72",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "37.5%",
    link: "/",
    desc: [
      {
        title: "MODULE 1",
      },
      {
        icon: check,
        text: "Introduction to Data Analysis",
      },
      {
        title: "MODULE 2",
      },
      {
        icon: check,
        text: "Data Cleaning and Manipulation in Excel",
      },
      {
        title: "MODULE 3",
      },
      {
        icon: check,
        text: "Advanced Excel for Data Analysis",
      },
      {
        title: "MODULE 4",
      },
      {
        icon: check,
        text: "Introduction to SQL",
      },
      {
        title: "MODULE 5",
      },
      {
        icon: check,
        text: "Intermediate SQL",
      },
      {
        title: "MODULE 6",
      },
      {
        icon: check,
        text: "Python for Data Analysis (Part 1)",
      },
      {
        title: "MODULE 7",
      },
      {
        icon: check,
        text: "Advanced Python for Data Analysis",
      },
      {
        title: "MODULE 8",
      },
      {
        icon: check,
        text: "Introduction to Power BI",
      },
      {
        title: "MODULE 9",
      },
      {
        icon: check,
        text: "Intermediate Power BI",
      },
      {
        title: "MODULE 10",
      },
      {
        icon: check,
        text: "Data Analysis Project",
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
        title: "TOOLS; PowerBI, SQL, Excel, Python",
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
    prices: calculateInstallment(75000, [30, 70]),
    discount: null,
    priceBg: "#0085FF",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "37.5%",
    link: "/",
    desc: [
      {
        title: "MODULE 1",
      },
      {
        icon: check,
        text: "Introduction to Data Science & Python",
      },
      {
        title: "MODULE 2",
      },
      {
        icon: check,
        text: " Data Collection & Cleaning ",
      },
      {
        title: "MODULE 3",
      },
      {
        icon: check,
        text: "Data Visualization & Storytelling",
      },
      {
        title: "MODULE 4",
      },
      {
        icon: check,
        text: "Introduction to Machine Learning",
      },
      {
        title: "MODULE 5",
      },
      {
        icon: check,
        text: "Working with Databases & SQL",
      },
      {
        title: "MODULE 6",
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
    prices: calculateInstallment(60000, [30, 70]),
    discount: null,
    priceBg: "#A25DDC",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        title: "MODULE 1",
      },
      {
        icon: check,
        text: "Introduction to Front-End Development- (html, css, in overview)",
      },
      {
        title: "MODULE 2",
      },
      {
        icon: check,
        text: "Styling with CSS",
      },
      {
        title: "MODULE 3",
      },
      {
        icon: check,
        text: "JavaScript for Interactivity",
      },
      {
        title: "MODULE 4",
      },
      {
        icon: check,
        text: "Front-End Development with React.js",
      },
      {
        title: "MODULE 5",
      },
      {
        icon: check,
        text: "Advanced Front-End Techniques",
      },
      {
        title: "MODULE 6",
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
    subtitle:
      "Backend development focuses on the logic and infrastructure behind a website or application that users don’t directly see, including databases, APIs, and server-side programming.",
    duration: "10 weeks",
    times: " 2-3 times a week, (flexible)",
    installments: "70% down payment",
    price: 100000,
    discountPrice: 70000,
    prices: calculateInstallment(70000, [30, 70]),
    discount: null,
    priceBg: "#00CA72",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        title: "MODULE 1",
      },
      {
        icon: check,
        text: " Introduction to Back-End Development",
      },
      {
        title: "MODULE 2",
      },
      {
        icon: check,
        text: "Programming with JavaScript & Node.js",
      },
      {
        title: "MODULE 3",
      },
      {
        icon: check,
        text: "Working with Databases (SQL & NoSQL)",
      },
      {
        title: "MODULE 4",
      },
      {
        icon: check,
        text: "RESTful APIs & Authentication",
      },
      {
        title: "MODULE 5",
      },
      {
        icon: check,
        text: "Advanced Back-End Concepts",
      },
      {
        title: "MODULE 6",
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
    prices: calculateInstallment(45000, [30, 70]),
    discount: null,
    priceBg: "#0085FF",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        title: "MODULE 1",
      },
      {
        icon: check,
        text: "Introduction to Product Design",
      },
      {
        title: "MODULE 2",
      },
      {
        icon: check,
        text: "User Research & Competitive Analysis",
      },
      {
        title: "MODULE 3",
      },
      {
        icon: check,
        text: "UX Design Fundamentals",
      },
      {
        title: "MODULE 4",
      },
      {
        icon: check,
        text: "UI Design & Visual Aesthetics",
      },
      {
        title: "MODULE 5",
      },
      {
        icon: check,
        text: "Prototyping & Usability Testing",
      },
      {
        title: "MODULE 6",
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
    prices: calculateInstallment(35000, [30, 70]),
    discount: null,
    priceBg: "#A25DDC",
    discountPriceBg: "#c7c7c7",
    buttonVal: "Enroll Now",
    percent: "42.86%",
    link: "/",
    desc: [
      {
        title: "MODULE 1",
      },
      {
        icon: check,
        text: " Introduction to Digital Marketing",
      },
      {
        title: "MODULE 2",
      },
      {
        icon: check,
        text: " Social Media Marketing (SMM)",
      },
      {
        title: "MODULE 3",
      },
      {
        icon: check,
        text: "Search Engine Optimization (SEO)",
      },
      {
        title: "MODULE 4",
      },
      {
        icon: check,
        text: "Pay-Per-Click (PPC) Advertising",
      },
      {
        title: "MODULE 5",
      },
      {
        icon: check,
        text: "Email & Content Marketing",
      },
      {
        title: "MODULE 6",
      },
      {
        icon: check,
        text: "Analytics & Conversion Optimization",
      },
      {
        title: "MODULE 7",
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

function calculateInstallment(actualPrice, discountPercentage = []) {
  const installments = [];
  discountPercentage.map((percentage) => {
    const discountPrice = (actualPrice * percentage) / 100;
    const installment = { percent: percentage + "%", price: discountPrice };
    installments.push(installment);
  });
  installments.push({ percent: "full", price: actualPrice });
  return installments;
}
