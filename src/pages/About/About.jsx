// import { Link } from "react-router-dom"
import { Layout } from "../../components";
import about from "../../assets/images/about-image.jpg";

const About = () => {
  return (
    <Layout>
      <header className="h-[200px] md:h-[350px] w-full bg-acbg bg-contain bg-center bg-black/50 bg-blend-multiply flex justify-center items-center">
        <h1 className="text-white text-4xl md:text-7xl font-bold uppercase">
          About us
        </h1>
      </header>
      <section className="w-[90%] max-w-[1200px] mx-auto">
        <div className="mt-5 w-full sm:w-[80%] md:w-[70%] mx-auto">
          <div className="w-16 h-1 bg-secondary group-hover:bg-white mb-5 mt-10"></div>
          <h2 className="text-primary uppercase font-semibold text-xl">
            Who we are
          </h2>
          <div className="flex flex-col items-center mx-1">
            <p className="text-black/90 text-left text-sm md:text-base my-2.5">
              Ridot Software Academy is a private and profitable business with
              aim of equipping females (girls, ladies, women) with digital
              skills, focusing UI/UX design, digital marketing, web development,
              with a plan towards expanding the channel with time.
            </p>
            <p className="text-black/90 text-left text-sm md:text-base">
              The brand is in itself a unique one as it solves the problem of
              technological phobia in most females, it will enable and encourage
              women to start a career in tech while erasing the stereotyped
              mindset of “tech are for guys”.
            </p>
            <p className="text-black/90 text-left text-sm md:text-base my-2.5">
              Ridot Software Academy is registered under cooperate Affairs
              Commission with the registration No- 3478452. The startup aims to
              be the leading niche developer of software applications that
              transforms ideas into reality. Ridot Software Academy will provide
              high added value to the world of females irrespective of their
              biological background, exposure and ethics. The business is
              looking beyond the present stage of opportunities into global
              technological operations with our female products changing and
              transforming the phase of technological advancement.
            </p>
          </div>
        </div>
        <div className="my-5 bg-primary w-full h-[1px] hidden md:block"></div>
        <div className="relative flex flex-col md:flex-row justify-between mb-10 pt-5">
          <div className="w-full md:w-1/2">
            <div className="h-[320px] sm:h-[400px] md:h-full flex justify-center items-center relative ml-8">
              <img
                src={about}
                alt="About Ridot Software Academy"
                className="z-10 rounded-3xl animate-shake shadow-xl"
              />
              <div className="bg-secondary h-full w-full absolute rounded-3xl top-0 right-8 -z-10 shadow-xl"></div>
            </div>
          </div>
          <div className="relative z-40 w-full md:w-[50%] ml-0 md:ml-8 md:order-1 flex flex-col justify-center border-dotted border-secondary rounded-lg border-2 my-10 md:my-[52px] p-4 sm:p-5 md:p-10">
            <div className="relative z-40">
              <h2 className="text-primary uppercase font-semibold text-xl">
                Our Mission
              </h2>
              <p className="text-gray-900 text-sm md:text-base text-justify my-2.5 md:my-5">
                To produce students with distinct capabilities needed to succeed
                in the tech echo system.
              </p>
              <h2 className="text-primary uppercase font-semibold text-xl mt-5 md:mt-2.5">
                Our Vision
              </h2>
              <p className="text-gray-900 text-sm md:text-base text-justify my-2.5 md:my-5">
                To be Africa&rsquo;s leading digital skills trainer, idea
                generator and tech schemer for women.
              </p>
            </div>
          </div>
          <svg
            className="hidden md:block absolute z-30 bottom-8 -right-6"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="49"
            viewBox="0 0 42 49"
            fill="none"
          >
            <path
              d="M0.750268 0.684326L42.0003 24.5L0.750269 48.3157L0.750268 0.684326Z"
              className="fill-primary"
            />
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default About;
