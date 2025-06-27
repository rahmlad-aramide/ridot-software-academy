import Image from 'next/image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Habibat Aderogba',
    image: '/hero-image.jpg',
    role: 'Founder',
  },
  {
    name: 'Habibat Aderogba',
    image: '/hero-image.jpg',
    role: 'Founder',
  },
  {
    name: 'Habibat Aderogba',
    image: '/hero-image.jpg',
    role: 'Founder',
  },
  {
    name: 'Habibat Aderogba',
    image: '/hero-image.jpg',
    role: 'Founder',
  },
  {
    name: 'Habibat Aderogba',
    image: '/hero-image.jpg',
    role: 'Founder',
  },
  {
    name: 'Habibat Aderogba',
    image: '/hero-image.jpg',
    role: 'Founder',
  },
];

export default function Team() {
  return (
    <div className="bg-purple-50 px-6 py-10 lg:px-10 lg:py-16 xl:px-20">
      <h1 className="py-4 text-center text-xl leading-7 font-semibold text-zinc-900 sm:text-4xl sm:leading-[48px] lg:text-5xl lg:leading-[58px]">
        Meet the Team
      </h1>
      <p className="text-center text-base leading-normal font-normal text-zinc-600 lg:m-auto lg:w-7/10">
        Our team is a passionate and energetic group of professionals dedicated
        to going above and beyond to deliver outstanding service.
      </p>
      <ul className="mt-2 flex flex-col gap-6 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-8 lg:mt-10 lg:grid-cols-3">
        {teamMembers.map((team, i) => (
          <li key={i} className="flex-1 rounded-xl bg-white p-2 shadow-sm">
            <div className="relative h-100 w-full">
              <Image
                className="z-10 rounded-md object-cover"
                src={team.image}
                alt="team-meremb-img"
                quality={100}
                fill
                sizes="100vw"
                priority
              />
              <span className="absolute right-6 -bottom-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-sky-600 text-blue-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.65047 15.7499H1.38516V5.23466H4.65047V15.7499ZM3.01605 3.80028C1.97191 3.80028 1.125 2.93544 1.125 1.8913C1.125 1.38976 1.32424 0.908763 1.67888 0.554121C2.03352 0.19948 2.51452 0.000244141 3.01605 0.000244141C3.51759 0.000244141 3.99859 0.19948 4.35323 0.554121C4.70787 0.908763 4.90711 1.38976 4.90711 1.8913C4.90711 2.93544 4.05984 3.80028 3.01605 3.80028ZM16.8715 15.7499H13.6132V10.6311C13.6132 9.41122 13.5886 7.84677 11.9155 7.84677C10.2178 7.84677 9.95766 9.17216 9.95766 10.5433V15.7499H6.69586V5.23466H9.82758V6.66903H9.87328C10.3092 5.84286 11.3741 4.97099 12.9628 4.97099C16.2675 4.97099 16.875 7.14716 16.875 9.97372V15.7499H16.8715Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-base leading-normal font-semibold text-[#010080]">
                {team.name}
              </h3>
              <p className="text-base leading-snug font-medium text-zinc-500">
                {team.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
