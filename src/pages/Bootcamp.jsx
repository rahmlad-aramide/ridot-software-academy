import { Layout } from "../components";
import hero from "../assets/images/g4tb.jpg";
import { useState } from "react";
import { PaystackCheckout } from "../utils";

export default function Bootcamp() {
  const [selectedPrice, setSelectedPrice] = useState(16000);
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout>
      <section className="min-h-screen flex flex-col w-[calc(100%_-_32px)] sm:w-[calc(100%_-_50px)] md:w-[calc(100%_-_64px)] mx-auto tech-4-girls">
        <h2 className="text-primary flex mx-auto w-fit text-center mt-12 md:mt-20 py-[10px] px-5 border-y-[1.5px] text-xl md:text-[32px] font-semibold relative z-10">
          Tech For Girls
        </h2>
        <div className="font-gigaSans flex flex-col sm:flex-row justify-between pt-8 md:pt-14 max-w-[1200px] mx-auto text-primary relative z-10 sm:space-x-10">
          <div className="w-full sm:w-[45%] flex justify-center items-center relative">
            <div className="hidden sm:flex h-full bg-[url('./src/assets/images/g4tb.jpg')] filter blur-[8px] bg-opacity-40 w-full" />
            <img
              src={hero}
              alt="Tech for girls bootcamp flyer"
              className="w-full rounded-lg sm:absolute"
            />
          </div>
          <div className="flex flex-col pt-11 md:py-7 w-full sm:w-[55%] space-y-3">
            <p className="text-primary mt-3 md:mt-0">
              You are invited to register for Tech for Girls Summer BootCamp!
            </p>
            <p className="text-primary">
              Designed for young girls aged 8-18, this bootcamp offers an
              exciting opportunity to dive into the world of technology.
            </p>
            <p className="text-primary hidden">
              Participants will learn essential skills such as graphic design,
              animation, Microsoft Office, and coding.
            </p>
            <p className="text-primary">
              Our BootCamp aims to inspire the next generation of female tech
              leaders, fostering creativity, confidence, and a passion for
              innovation. Join us for a summer of learning, growth, and fun, and
              watch your tech dreams take flight!
            </p>
            <ul className="space-y-1">
              <h3 className="text-xl font-medium">Why Join Us?</h3>
              <li>
                1. Hands-On Learning: Get practical experience with the latest
                technologies and tools. Our curriculum covers everything from
                coding and web development to Animation, graphics design.
              </li>
              <li>
                2. Inspiring Mentors: Learn from successful women in tech who
                will guide and support you throughout the program. Their stories
                and advice will inspire you to reach for the stars.
              </li>
              <li>
                3. Build Your Network: Connect with like-minded girls who share
                your passion for technology. Create lasting friendships and a
                strong support network that will accompany you on your tech
                journey.
              </li>
            </ul>
            <ul className="space-y-1">
              <h3 className="text-xl font-medium">How to enroll 👇</h3>
              <li>
                Click the &apos;Enroll Now&apos; button below and make your payment, then
                upload your payment receipt in the registration form below.
              </li>
            </ul>
            <button
              onClick={() => setOpenModal(!openModal)}
              className="w-full rounded-lg bg-primary py-2 text-white text-sm transition duration-200 hover:scale-95 active:scale-100"
            >
              Enroll Now
            </button>
            <p className="hidden text-[#424E57] text-lg font-medium mb-3 md:mb-0 pt-4">
              For inquiries, contact us via:{" "}
              <a href="tel:++2347083143779">+234 708 314 3779</a>
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
      {openModal && selectedPrice !== null && (
        <div className="h-screen w-full fixed z-50 top-0 left-0 bg-black/30 backdrop-blur-sm flex justify-center">
          <PaystackCheckout
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            setOpenModal={setOpenModal}
          />
        </div>
      )}
    </Layout>
  );
}
