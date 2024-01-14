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
    },
    {
      name: "Islamiyah Omisola",
      role: "Product Designer",
      linkedinUrl: "www.linkedin.com/in/omisola-islamiyat-38a70515a",
    },
    {
      name: "Huswat Lawal",
      role: "Program Manager",
      linkedinUrl: "https://www.linkedin.com/in/huswatlawal/",
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
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Team;
