// Team.js
import { useState } from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const [teamMembers] = useState([
    {
      name: "Abibat Adeola Aderogba",
      role: "CEO",
      linkedinUrl: "https://www.linkedin.com/in/aderogba-abibat-b26a36174",
    },
    {
      name: "Engr. AbdulLateef Olatayo",
      role: "CTO",
      linkedinUrl: "www.linkedin.com/in/engr-lateef-olatayo-0365a1165/",
      image: '/Olatayo.jpg'
    },
    {
      name: "Islamiyah Omisola",
      role: "Product Designer",
      linkedinUrl: "https://www.linkedin.com/in/omisola-islamiyat-38a70515a",
      image: '/Islamiyat.jpg'
    },
    {
      name: "Abdrahman Oladimeji",
      role: "Frontend Engineer",
      linkedinUrl: "https://www.linkedin.com/in/rahmlad/",
      image: '/Rahmlad.JPG'
    },
    {
      name: "Huswat Lawal",
      role: "Program Manager",
      linkedinUrl: "https://www.linkedin.com/in/huswatlawal/",
      image: 'https://res.cloudinary.com/dh4rm7b7b/image/upload/v1705436033/Ridot%20Team/IMG-20240116-WA0002_qrhows.jpg'
    },
    {
      name: "Peculiar Babalola",
      linkedinUrl: "https://www.linkedin.com/in/peculiar-babalola",
      image: '/Peculiar.jpg'
    },
    {
      name: "Ayisat Adedokun",
      linkedinUrl: "https://www.linkedin.com/in/ayisatadedokun",
      image: '/Ayisat.jpg'
    },
    {
      name: "Mubarak Bello",
      linkedinUrl: "https://www.linkedin.com/in/mubarak-bello-219977231",
    },
    {
      name: "Afeez Lawal",
      linkedinUrl: "https://www.linkedin.com/in/lawal-afeez",
      image: '/Afees.jpg'
    },
    {
      name: "Adaobi Okerekeocha",
      linkedinUrl: "https://www.linkedin.com/in/adaobiokerekeocha",
      image: 'Adaobi.jpg'
    },
  ]);

  return (
    <>
      <div className="w-16 h-1 bg-secondary mb-2"></div>
      <h2 className="text-primary uppercase font-semibold text-xl">
        Our Management Team
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Team;
