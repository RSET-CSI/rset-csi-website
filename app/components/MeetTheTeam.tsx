// MeetTheTeam.tsx
import React from "react";
import { Tabs } from "./ui/tabs";
import { teams } from "../data"; // Importing the teams data from data.ts

const MeetTheTeam: React.FC = () => {
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
