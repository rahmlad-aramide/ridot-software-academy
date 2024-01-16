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
    // {
    //   name: "Engr. AbdulLateef Olatayo",
    //   role: "CTO",
    //   linkedinUrl: "www.linkedin.com/in/engr-lateef-olatayo-0365a1165/",
    // },
    {
      name: "Islamiyah Omisola",
      role: "Product Designer",
      linkedinUrl: "https://www.linkedin.com/in/omisola-islamiyat-38a70515a",
      image: 'https://media.licdn.com/dms/image/C5603AQHhTEnhR6wbqA/profile-displayphoto-shrink_400_400/0/1644325489604?e=1710979200&v=beta&t=0f_hGv_PaxXDy3x-VeBorllTTM7DDuNgqXWPNq-HdpI'
    },
    {
      name: "Huswat Lawal",
      role: "Program Manager",
      linkedinUrl: "https://www.linkedin.com/in/huswatlawal/",
      image: 'https://res.cloudinary.com/dh4rm7b7b/image/upload/v1705436033/Ridot%20Team/IMG-20240116-WA0002_qrhows.jpg'
    },
    {
      name: "Abdrahman Oladimeji",
      role: "Frontend Engineer",
      linkedinUrl: "https://www.linkedin.com/in/rahmlad/",
      image: 'https://media.licdn.com/dms/image/D4D03AQGAi2jpDhc5Pg/profile-displayphoto-shrink_200_200/0/1681496829934?e=1710979200&v=beta&t=FA8s8pY28PnLXCCUBYkXtaqV98Geh3KD2M9Gu3dap0o'
    },
    // {
    //   name: "Abdrahman Oladimeji",
    //   role: "Frontend Engineer",
    //   linkedinUrl: "https://www.linkedin.com/in/rahmlad/",
    // },
    // {
    //   name: "Sarah",
    //   linkedinUrl: "https://www.linkedin.com/in/",
    // },
    {
      name: "Peculiar Babalola",
      linkedinUrl: "https://www.linkedin.com/in/peculiar-babalola",
      image: 'https://media.licdn.com/dms/image/D4E03AQF10LQkYkO95w/profile-displayphoto-shrink_200_200/0/1697642859456?e=1710979200&v=beta&t=MBa70egfboglUxTzy8F15YJjx-Z28D9b2UZeCDmvF8g'
    },
    {
      name: "Ayisat Adedokun",
      linkedinUrl: "https://www.linkedin.com/in/ayisatadedokun",
      image: 'https://media.licdn.com/dms/image/D4D03AQGQO1sDQVJ8WA/profile-displayphoto-shrink_200_200/0/1681555709317?e=1710979200&v=beta&t=arbc0MxDZFgUxxstXqBPuGulIvheifcBpD7eIIN7UuM'
    },
    // {
    //   name: "Mubarak Bello",
    //   linkedinUrl: "https://www.linkedin.com/in/",
    // },
    {
      name: "Afeez Lawal",
      linkedinUrl: "https://www.linkedin.com/in/lawal-afeez",
      image: 'https://media.licdn.com/dms/image/D4D03AQHSd0hUpuJgKQ/profile-displayphoto-shrink_200_200/0/1690731791974?e=1710979200&v=beta&t=Gjc3WveNSF6kEQjZugu0czjTLZo71qEtIac0hlSEldU'
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
