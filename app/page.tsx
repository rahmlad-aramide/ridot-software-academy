import Image from 'next/image'
import WhyChooseRidot from '@/features/whyChooseRidot';

export default function Home() {
  return <main className="min-h-screen">
<div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-7 lg:gap-15 md:px-5 lg:px-15 pt-10 pb-20'>
    <div className=" space-y-6 w-full max-w-[288px] xs:max-w-[530px] md:max-w-[470px] lg:max-w-[650px] text-left">
    <h1 className="text-[40px] xs:text-5xl md:text-6xl font-bold leading-tight md:leading-[70px]">Empowering <span className="text-[rgb(43,43,208)]">Women & Teenagers</span> Through Tech Education</h1>
    <p className="text-base xs:text-[20px] md:text-[20px] text-gray">We are harnessing technology, especially AI to unlock opportunities and create a brighter future. We are dedicated to empowering women and teenagers with the skills and knowledge needed to thrive in the digital world.</p>
    
    <button
                type="button"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 text-center mt-5"
              >
                Enroll Now
              </button>
    </div>
    
    <div className='relative w-full max-w-[288px] h-[288px] xs:max-w-[527px] xs:h-[527px] md:h-[450px] md:max-w-[440px] lg:max-w-[532px] lg:h-[532px]'>
         <Image
          className="rounded-[20px] object-cover"
          src="/home-image.png"
          alt="home-image"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
    </div>
    </div>

    <WhyChooseRidot />

    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 lg:gap-7 pt-[50px] md:px-5 lg:px-20'>
      <div className='relative w-full max-w-[288px] h-[537px] xs:max-w-[528px] xs:h-[537px] md:h-[475px] md:max-w-[460px] lg:max-w-[560px] lg:h-[575px]'>
       <Image
          className="rounded-[20px] object-cover"
          src="/choose-image.png"
          alt="image"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
    </div>
    
    <div className='space-y-5 w-full max-w-[288px] xs:max-w-[528px] md:max-w-[480px] lg:max-w-[559px] mx-auto'>
      
      <h1 className='font-bold text-xl xs:text-[40px] md:text-[42px] leading-tight relative'>
        Breaking Tech Barriers for {' '}
    <span className="relative inline-block">
      Women
      
      <span className="absolute left-0 top-full -translate-y-[6px]">
    <div className='relative h-[9px] md:w-[151px] lg:w-[171px] '>
       <Image
          className="object-cover"
          src="/Vector.png"
          alt="image"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
    </div>
    </span>
    </span>
    </h1>
    <p className='text-sm xs:text-xl pt-5'>Our brand is dedicated to eliminating technological phobia among women, providing them with the confidence and skills needed to thrive in the digital world. We offer hands-on training, mentorship, and a supportive community to encourage more women to explore and build successful careers in tech.</p>
    <button
                type="button"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 text-center mt-5"
              >
                Enroll Now
              </button>
    

    </div>
      

      </div>
    
    </main>;
}
