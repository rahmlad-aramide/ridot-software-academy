import Image from 'next/image';

const labels = [
  {
    desc: 'Inclusive Environment',
    content:
      'We foster a supportive and inclusive community where everyone can thrive.',
    image: '/label-one.png',
    backgroundImage: '/label-card.png',
  },

  {
    desc: 'Experienced Instructors',
    content: 'Learn from industry experts who are passionate about teaching.',
    image: '/label-two.png',
    backgroundImage: '/label-card.png',
  },

  {
    desc: 'Hands-On Learning',
    content:
      'Gain practical experience through real-world projects and collaborations.',
    image: '/label-three.png',
    backgroundImage: '/label-card.png',
  },

  {
    desc: 'Career Support',
    content:
      'Access mentorship, networking opportunities, and job placement assistance.',
    image: '/label-four.png',
    backgroundImage: '/label-card.png',
  },
];

export default function WhyChooseRidot() {
  const LongArrow = () => (
    <svg
      width="65"
      height="24"
      viewBox="0 0 80 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[rgb(1,0,128)]"
    >
      <line
        x1="0"
        y1="12"
        x2="78"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polyline
        points="70,6 80,12 70,18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="xs:px-6 bg-[rgb(247,247,255)] px-4 py-10 pt-[50px] md:pt-[80px] lg:pt-[120px] pb-[80px] md:px-10 md:pb-[100px]">
      <h1 className="xs:text-[40px] pb-12 xs:pl-3 text-xl font-bold md:text-5xl">
        Why Choose Ridot?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-7 lg:gap-12 md:pl-[150px] lg:pl-[310px]">
          {labels.map(({ desc, content, image}, i) => (
            <div key={i} className="relative">
              <div className="mx-auto xs:h-[220px] clip-top-right-notch xs:p-8 h-[204px] w-full space-y-3 px-5 pt-7 md:px-6">
                <div className="relative mb-5 h-[32px] w-[36px]">
                  <Image
                    className="object-cover"
                    src={image}
                    alt="image"
                    quality={100}
                    fill
                  />
                </div>
                <h3 className="xs:text-base text-base font-semibold md:text-xl">
                  {desc}
                </h3>
                <p className="xs:text-base text-sm md:text-base">{content}</p>
              </div>

              <div className="absolute top-[-11px] right-[-0] z-10">
                <LongArrow />
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
}
