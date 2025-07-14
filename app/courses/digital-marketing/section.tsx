import Image from 'next/image';

const digitalMarketing = [
  {
    module: 'Module 1',
    heading: 'Introduction to Digital Marketing',
    content:
      "This module provides an overview of digital marketing, its importance in today's business landscape, and the various channels used to reach target audiences. Students will learn key concepts such as inbound vs. outbound marketing, customer journey mapping, and marketing funnels. The module also introduces essential digital marketing tools and trends shaping the industry.",
    image: '/dm-image-one.png',
  },

  {
    module: 'Module 2',
    heading: 'Social Media Marketing (SMM)',
    content:
      'Social media is a powerful tool for brand awareness and engagement. This module covers strategies for leveraging platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok to connect with audiences. Students will learn content creation, audience targeting, community management, and paid social advertising to maximize reach and engagement.',
    image: '/dm-image-two.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white',
  },

  {
    module: 'Module 3',
    heading: 'Search Engine Optimization (SEO)',
    content:
      'SEO is crucial for driving organic traffic to websites. This module covers on-page and off-page SEO techniques, keyword research, link building, and technical SEO. Students will learn how search engines rank websites, optimize content for better visibility, and use tools like Google Search Console and Ahrefs to improve search rankings.',
    image: '/dm-image-three.png',
  },

  {
    module: 'Module 4',
    heading: 'Pay-Per-Click(PPC) Advertising',
    content:
      'Paid advertising is an essential part of digital marketing. This module introduces students to PPC campaigns using platforms like Google Ads and Meta Ads. Topics include keyword bidding, ad copywriting, audience targeting, A/B testing, and budget optimization to create cost-effective campaigns that generate leads and conversions.',
    image: '/dm-image-four.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white'
  },

  {
    module: 'Module 5',
    heading: 'Email & Content Marketing',
    content:
      'Building relationships with customers through valuable content is key to digital marketing success. This module focuses on content marketing strategies, blog writing, video marketing, and email marketing best practices. Students will learn how to create compelling email campaigns, segment audiences, and use automation tools to drive engagement and customer retention.',
    image: '/dm-image-five.png',
  },

  {
    module: 'Module 6',
    heading: 'Analytics & Conversion Optimization',
    content:
      'Measuring and optimizing marketing performance is essential for success. This module covers Google Analytics, social media insights, and conversion tracking tools to analyze campaign effectiveness. Students will learn how to interpret data, set key performance indicators (KPIs), and optimize landing pages and funnels for higher conversion rates.',
    image: '/dm-image-six.png',
    bgColor: 'bg-[rgb(1,0,128)]',
    textColor: 'text-white'
  },
];

export default function section() {
  return (
    <div className="h-full w-full">
      {digitalMarketing.map(
        ({ module, heading, content, image, bgColor, textColor}, index) => (
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
                <p className={`text-[12px] font-semibold text-[rgb(0,0,90)] ${textColor}`}>
                  {module}
                </p>
                <h2 className={`text-[20px] xs:text-[32px] md:text-[32px] font-semibold text-[rgb(0,0,90)] ${textColor}`}>
                  {heading}
                </h2>
                <p className={`text-sm xs:text-base md:text-[24px] text-gray ${textColor}`}>
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
