import { Layout } from "../components";
import hero from '../assets/images/g4tb.jpg'

export default function Bootcamp() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col w-[calc(100%_-_32px)] sm:w-[calc(100%_-_50px)] md:w-[calc(100%_-_64px)] mx-auto">
        <h2 className="text-primary flex mx-auto w-fit text-center mt-[120px] md:mt-[140px] py-[10px] px-5 border-y-[1.5px] text-xl md:text-[32px] font-semibold relative z-10">
          Tech For Girls
        </h2>
        <div className="font-gigaSans flex flex-col sm:flex-row justify-between pt-8 md:pt-[80px] max-w-[922px] mx-auto text-primary relative z-10 sm:space-x-10">
          <div className="w-full sm:w-[45%] flex justify-center items-center">
            <img
              src={hero}
              alt="Tech for girls bootcamp flyer"
              className="w-full border border-fbc_blue-100 rounded-lg"
            />
          </div>
          <div className="flex flex-col pt-11 md:py-7 w-full sm:w-[55%] space-y-3">
            <p className="text-primary mt-3 md:mt-0">
            You are invited to register for Tech for Girls Summer BootCamp! 
            </p>
            <p className="text-primary">
            Designed for young girls aged 8-18, this bootcamp offers an exciting opportunity to dive into the world of technology.
            </p>
            <p className="text-primary">
            Participants will learn essential skills such as graphic design, animation, Microsoft Office, and coding. 
            </p>
            <p className="text-primary">
            Our BootCamp aims to inspire the next generation of female tech leaders, fostering creativity, confidence, and a passion for innovation. Join us for a summer of learning, growth, and fun, and watch your tech dreams take flight!
            </p>
            <p className="text-[#424E57] text-lg font-medium mb-3 md:mb-0 pt-4">
              Contact us via: <a href="tel:++2347083143779">+234 708 314 3779</a> 
            </p>
          </div>
        </div>
        <div className="pt-10 md:pt-[120px] pb-[211px]">
          <div className="flex justify-center rounded-xl border border-blue-200 bg-gray-100 max-w-[920px] mx-auto relative z-10 py-10">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeXqYTlHmqbUaPz6nDjL-B_ogfy2_Rl7srkvBcr31jLBF7ruA/viewform?embedded=true"
              width="640"
              height="790"
              className="w-full flex pr-1"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
