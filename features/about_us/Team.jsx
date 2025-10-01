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
