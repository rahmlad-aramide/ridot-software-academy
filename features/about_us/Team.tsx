import Image from 'next/image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Abibat Aderogba',
    image: '/hero-image.jpg',
    role: 'Founder',
    linkedin: 'https://www.linkedin.com/in/aderogba-abibat-b26a36174',
  },
  {
    name: 'Islamiyat Omisola',
    image: '/hero-image.jpg',
    role: 'Product Designer/Trainer',
    linkedin: 'https://www.linkedin.com/in/omisola-islamiyat-38a705151',
  },
  {
    name: 'Huswat Lawal',
    image: '/hero-image.jpg',
    role: 'Program Coordinator',
    linkedin: 'https://www.linkedin.com/in/huswatlawal',
  },
  {
    name: 'Afeez Lawal',
    image: '/hero-image.jpg',
    role: 'Back-end Engineer',
    linkedin: 'https://www.linkedin.com/in/lawal-afeez',
  },
  {
    name: 'Abdrahman Oladimeji',
    image: '/hero-image.jpg',
    role: 'Software Engineer',
    linkedin: 'https://linkedin.com/in/rahmlad',
  },
  {
    name: 'Mubaraq Bello',
    image: '/hero-image.jpg',
    role: 'Web developer/graphics designer',
    linkedin: 'https://linkedin.com/in/mubarak-bello-219977231',
  },
  {
    name: 'Abeeb Afolabi',
    image: '/hero-image.jpg',
    role: 'Data Scientist and Machine learning expert',
    linkedin: '#',
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
      <ul className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12">
        {teamMembers.map((team, i) => (
          <li
            key={i}
            className="flex-1 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image
                className="z-10 object-cover"
                src={team.image}
                alt={team.name}
                quality={100}
                fill
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-6 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#010080]">
                  {team.name}
                </h3>
                <p className="text-sm font-medium text-zinc-500">{team.role}</p>
              </div>
              {team.linkedin && team.linkedin !== '#' && (
                <Link
                  href={team.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a66c2] transition-colors hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
