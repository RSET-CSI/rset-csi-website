"use client";
import React from "react";
import Link from "next/link";
import { smoothScrollTo } from "@/utils/smoothscroll"; // Adjust the import path as needed
import CountdownTimer from "../components/ui/CountdownTimer";

const topics = [
  {
    title: "AI for Social Good",
    description:
      "AI-powered solutions for societal challenges like poverty alleviation, accessible healthcare, or any other relevant issues.",
  },
  {
    title: "Digital Inclusion and Literacy",
    description:
      "Platforms to help elderly or rural populations adapt to digital technologies and bridge the digital divide.",
  },
  {
    title: "Cybersecurity and Data Privacy",
    description:
      "Solutions for phishing detection, secure identity verification, or encrypted messaging platforms.",
  },
  {
    title: "Open Innovation",
    description: "Here you can submit a project of your choice.",
  },
];

const collaborators = [
  {
    name: "CIO Klub",
    logo: "/images/CIO_Logo.PNG", // Replace with actual logo path
    description:
      "CIO Klub, established in 2008, is India's largest non-profit association of Chief Information Officers (CIOs). Its mission is to share and enhance knowledge on technological advancements and explore better business solutions for the IT community. CIO Klub's members represent diverse industries, including manufacturing, BFSI, services, pharma and healthcare, retail, real estate, and construction.",
  },
  {
    name: "FCG (First Consulting Group)",
    logo: "/images/FCG_Logo.jpeg", // Replace with actual logo path
    description:
      "FCG is an IT consulting and software development company specializing in web and mobile applications. Their expertise includes frontend (React, TypeScript), backend (Node.js, Python), cloud platforms (GCP, AWS, Supabase), and databases (MongoDB, SQL, PostgreSQL). They focus on Agile methodologies and customer satisfaction.",
  },
];

const IdeathonPage = () => {
  return (
    <div
      className="min-h-screen py-20 px-4"
      style={{
        background: `radial-gradient(circle at center, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0) 60%),
  linear-gradient(to top, #000000, #000000 50%), 
  linear-gradient(to bottom, #000000, #000000 50%)`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-red-600 hover:text-red-800 mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Incubate 20<span className="text-red-700">25</span>
        </h1>

        {/* Navigation Links for Smooth Scrolling */}
        <div className="flex space-x-6 mb-6 overflow-x-auto whitespace-nowrap px-2 scrollbar-hide">
          <button
            onClick={() => smoothScrollTo("#rounds")}
            className="text-red-600 hover:underline"
          >
            Rounds
          </button>
          <button
            onClick={() => smoothScrollTo("#topics")}
            className="text-red-600 hover:underline"
          >
            Topics
          </button>
          <button
            onClick={() => smoothScrollTo("#guidelines")}
            className="text-red-600 hover:underline"
          >
            Guidelines
          </button>
          <button
            onClick={() => smoothScrollTo("#dates")}
            className="text-red-600 hover:underline"
          >
            Dates
          </button>
          <button
            onClick={() => smoothScrollTo("#prize")}
            className="text-red-600 hover:underline"
          >
            Prize
          </button>
          <button
            onClick={() => smoothScrollTo("#collaborators")}
            className="text-red-600 hover:underline"
          >
            Collaborators
          </button>
        </div>

        <div className="space-y-8">
          <section
            id="rounds"
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Competition Rounds
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Round 1: Abstract Submission
                </h3>
                <p className="text-gray-300">
                  Participants must submit an abstract of their project idea
                  based on the topics provided.
                </p>
                <p className="text-gray-300">
                  Problem statements are available on our website:{" "}
                  <a
                    href="https://www.rsetcsi.org"
                    className="text-red-700 hover:underline"
                    target="_blank"
                  >
                    www.rsetcsi.org
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Round 2: Project Development
                </h3>
                <p className="text-gray-300">
                  The top 15 teams from Round 1 will proceed to the next stage.
                  These teams will have one month to develop their project. On
                  March 15th, they will present their product to a judging
                  panel.
                </p>
              </div>
            </div>
          </section>

          <section
            id="topics"
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">Topics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">
                    {topic.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{topic.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="guidelines"
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              General Guidelines
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Team Size: 3-5 members</li>
              <li>
                Eligibility: Open to 1st, 2nd, 3rd, and 4th-year students from
                all branches (intercollege competition)
              </li>
              <li>
                Registration Fee:
                <ul className="list-none ml-6 mt-1">
                  <li>CSI Members: Free</li>
                  <li>Non-CSI Members: ₹30</li>
                </ul>
              </li>
              <li>Only one registration is required per team.</li>
            </ul>
          </section>

          <section
            id="dates"
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Important Dates
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="font-semibold">
                  Round 1 Submission Deadline:
                </span>{" "}
                February 10th, 2025
              </li>
              <li>
                <span className="font-semibold">Final Pitch Date:</span> March
                1st, 2025
              </li>
            </ul>
          </section>

          <section
            id="prize"
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">Prize Pool</h2>
            <p className="text-2xl font-bold text-white">₹10,000</p>
          </section>

          {/* Collaborators Section */}
          <section
            id="collaborators"
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Our Collaborators
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {collaborators.map((collab, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg flex flex-col items-center text-center"
                >
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="w-40 h-40 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {collab.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{collab.description}</p>
                </div>
              ))}
            </div>
          </section>
          <CountdownTimer />
          <div className="text-center pt-8">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSf6ONxz4NcmXVbX9TCOf2G6GlB1NXEJJwKtULKkoGUzade0tQ/viewform?usp=header",
                  "_blank"
                )
              }
              className="px-8 py-3 text-lg bg-red-700 hover:bg-red-900 text-white rounded-full transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeathonPage;
