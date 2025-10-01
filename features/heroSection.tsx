import AnimatedLogo from './animatedLogo';
import { useFormStore } from '@/app/useFormStore';
import PopupForm from '@/features/enrollPopUp';

export default function HeroSection() {
  const { isFormOpen, closeForm, openForm } = useFormStore();
  return (
    <div className="flex flex-col items-center justify-center gap-20 pt-10 pb-20 md:gap-7 md:px-5 lg:flex-row lg:gap-15 lg:px-10">
      <div className="mx-auto w-full max-w-[650px] space-y-6 px-5 text-center md:text-left">
        <h1 className="xs:text-5xl text-[32px] leading-tight font-bold md:text-[36px] lg:text-6xl lg:leading-[70px]">
          Empowering{' '}
          <span className="text-[rgb(43,43,208)]">Women & Teenagers</span>{' '}
          Through Tech Education
        </h1>
        <p className="xs:text-2xl text-gray text-center text-sm md:text-justify md:text-base lg:text-xl">
          We are harnessing technology, especially AI to unlock opportunities
          and create a brighter future. We are dedicated to empowering women and
          teenagers with the skills and knowledge needed to thrive in the
          digital world.
        </p>

        <button
          type="button"
          onClick={openForm}
          className="bg-primary xs:py-3 mt-5 w-full rounded px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none md:max-w-[121px]"
        >
          Enroll Now
        </button>
      </div>

      <div className="flex w-full justify-center lg:w-1/2">
        <AnimatedLogo />
      </div>
      <PopupForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}
