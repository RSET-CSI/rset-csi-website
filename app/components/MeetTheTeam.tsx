import React from "react";
import { Tabs } from "./ui/tabs";

interface TeamMember {
  src: string;
  name: string;
}

interface Team {
  name: string;
  lead?: { src: string; name: string };
  members: TeamMember[];
}

const MeetTheTeam: React.FC = () => {
  const teams: Team[] = [
    {
      name: "Core Team",
      members: [
        { src: "/images/c1.jpg", name: "President<br />Niya Poulose" },
        { src: "/images/c2.JPG", name: "Vice President<br />Thomas John" },
        { src: "/images/c3.jpg", name: "Secretary<br />Savio Sunny" },
        {
          src: "/images/c4.jpg",
          name: "Joint Secretary<br />Theresa Jose",
        },
        { src: "/images/c5.jpg", name: "Treasurer<br />Niyatha V S" },
      ],
    },
    {
      name: "Technical Team",
      lead: { src: "/images/techlead.png", name: "Geevarghese Reji<br />Lead" },
      members: [
        { src: "/images/tech1.jpg", name: "George Emmanuel Thomas" },
        { src: "/images/tech2.jpg", name: "Alan Joseph" },
        { src: "/images/tech3.jpeg", name: "Reuben Simon" },
        { src: "/images/tech4.jpg", name: "Ashley K Alex" },
        { src: "/images/tech5.jpg", name: "Abhishek Joby" },
      ],
    },
    {
      name: "Marketing Team",
      lead: {
        src: "/images/marklead.jpeg",
        name: "Nikitha Sarah John<br />Lead",
      },
      members: [
        { src: "/images/mark1.jpg", name: "Basil Sabu" },
        { src: "/images/mark2.jpeg", name: "Sagar S" },
        { src: "/images/mark3.jpeg", name: "Janet Eldo" },
      ],
    },
    {
      name: "Operations Team",
      lead: { src: "/images/oplead.jpg", name: "Ebin Jose<br />Lead" },
      members: [
        { src: "/images/op1.PNG", name: "Arya K" },
        { src: "/images/op2.JPG", name: "Suraj Panickar" },
        { src: "/images/op3.jpg", name: "Gayatri Binoj" },
      ],
    },
    {
      name: "Documentation Team",
      lead: { src: "/images/doclead.jpg", name: "Priya Anto<br />Lead" },
      members: [
        { src: "/images/doc1.jpg", name: "P S Ashna Parveen" },
        { src: "/images/doc2.jpg", name: "Anushri Dileep" },
        { src: "/images/doc3.jpg", name: "Eby J Kavungal" },
      ],
    },
    {
      name: "Creative Team",
      lead: { src: "/images/crlead.jpeg", name: "David Justin<br />Lead" },
      members: [
        { src: "/images/cr1.webp", name: "Adith S" },
        { src: "/images/cr2.jpg", name: "J V Keerthi" },
        { src: "/images/cr3.jpg", name: "Jose Chemmanoor" },
        { src: "/images/cr4.jpg", name: "Madhav Menon" },
      ],
    },
  ];

  const tabs = teams.map((team) => ({
    title: team.name,
    value: team.name,
    content: (
      <div className="p-6">
        <div className="flex flex-wrap justify-center gap-6">
          {team.lead && (
            <div className="text-center">
              <div
                className="w-36 h-36 rounded-lg overflow-hidden mb-3"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src={team.lead.src}
                  alt={`${team.name} Lead`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p
                className="text-lg font-semibold text-center"
                dangerouslySetInnerHTML={{ __html: team.lead.name }}
              />
            </div>
          )}
          {team.members.map((member) => (
            <div key={member.name} className="text-center">
              <div
                className="w-36 h-36 rounded-lg overflow-hidden mb-3"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
              <p
                className="text-sm font-medium text-white"
                dangerouslySetInnerHTML={{ __html: member.name }}
              />
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section
      className="py-16 text-white min-h-screen relative"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(187, 108, 230, 0.4) 10%, rgba(187, 108, 230, 0) 40%),
          radial-gradient(circle at bottom right, rgba(56, 72, 241, 0.4) 15%, rgba(56, 72, 241, 0) 40%),
          linear-gradient(to bottom right, #0a041c, #0a041c)
        `,
      }}
      id="team"
    >
      <h2 className="text-5xl font-extrabold text-center mb-10">
        Meet The <span className="text-[#ef43cf]">Team</span>
      </h2>
      <div className="max-w-6xl mx-auto">
        <Tabs
          tabs={tabs}
          containerClassName="rounded-xl"
          tabClassName="text-white border-b-2 border-transparent hover:border-[#3848f1]"
          contentClassName="rounded-xl p-8 bg-[rgba(17,25,40,0.4)] backdrop-blur-lg backdrop-saturate-150 border border-[rgba(255,255,255,0.125)]"
        />
      </div>
    </section>
  );
};

export default MeetTheTeam;
