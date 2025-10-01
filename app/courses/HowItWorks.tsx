const howItWork = [
  {
    id: '1',
    content:
      'We provide the essential skills needed to kickstart your career as a product designer. Over 10 weeks of flexible online training, you’ll learn to think, design, and solve real-world UI/UX challenges. Sessions are held 2-3 times a week, making it ideal for beginners to intermediate learners looking to master product design',
    bgColor: 'bg-[rgb(43,43,208)]',
    shadowColor: 'bg-[rgb(225,225,255)]',
  },

  {
    id: '2',
    content:
      'We start by exploring the fundamental principles of effective design and gradually apply key techniques such as wireframing, low and high-fidelity prototyping, usability testing, and user interface design. ',
    bgColor: 'bg-[rgb(239,93,168)]',
    shadowColor: 'bg-[rgb(252,221,236)]',
  },

  {
    id: '3',
    content:
      "You'll master the essentials of teamwork, enhance your communication skills, and collaborate effectively with web development teams to design, refine, maintain, and execute cross-functional UI/UX projects successfully.By the end of the program, you'll have a strong portfolio showcasing intuitive digital products.",
    bgColor: 'bg-[rgb(34,197,94)]',
    shadowColor: 'bg-[rgb(220,252,231)]',
  },
];

export default function HowItWorks() {
  return (
    <div className="xs:pt-[70px] xs:pb-[70px] pt-[50px] pb-[50px]">
      <h1 className="xs:px-6 px-5 text-[32px] font-semibold md:px-8 md:text-5xl lg:px-20 xl:text-[40px]">
        How it works
      </h1>
      <div className="xs:space-y-2 flex flex-col justify-center md:flex-row">
        {howItWork.map(({ id, content, bgColor, shadowColor }, index) => (
          <div
            key={index}
            className="xs:px-6 flex items-center gap-8 px-5 pt-[20px] text-center md:flex-col md:pt-[50px]"
          >
            <div className="relative">
              <div
                className={`absolute top-[10px] left-[13px] z-0 h-[70px] w-[70px] rounded-[10px] ${shadowColor}`}
              ></div>
              <div
                className={`relative z-10 flex h-[70px] w-[70px] items-center justify-center rounded-[10px] ${bgColor}`}
              >
                <p className="text-4xl font-bold text-white">{id}</p>
              </div>
            </div>
            <div>
              <p className="xs:text-base xs:text-left text-gray w-full text-left text-sm md:max-w-[304px] md:text-center md:text-base lg:max-w-[363px]">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
