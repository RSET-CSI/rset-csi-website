"use client";
import React from 'react';
import Link from 'next/link';

const topics = [
  {
    title: "AI for Social Good",
    description: "AI-powered solutions for societal challenges"
  },
  {
    title: "Digital Inclusion and Literacy",
    description: "Platforms to help elderly or rural populations"
  },
  {
    title: "Cybersecurity and Data Privacy",
    description: "Solutions for phishing detection"
  },
  {
    title: "Open Innovation",
    description: "Submit a project of your choice"
  }
];

const IdeathonPage = () => {
  return (
    <div className="min-h-screen py-20 px-4" style={{
      background: `
        radial-gradient(circle at top right, rgba(56, 72, 241, 0.4) 15%, rgba(56, 72, 241, 0) 40%),
        radial-gradient(circle at bottom left, rgba(187, 108, 230, 0.4) 10%, rgba(187, 108, 230, 0) 40%),
        linear-gradient(to top right, #0a041c, #0a041c)
      `
    }}>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#ef43cf] hover:text-[#d32eb6] mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">IdeaStorm 2024</h1>
        
        <div className="space-y-8">
          <section className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#3848f1] mb-4">Competition Rounds</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Round 1: Abstract Submission</h3>
                <p className="text-gray-300">Participants must submit an abstract of their project idea based on the topics provided.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Round 2: Project Development</h3>
                <p className="text-gray-300">The top 15 teams from Round 1 will proceed to the next stage. These teams will have one month to develop their project.</p>
              </div>
            </div>
          </section>

          <section className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#3848f1] mb-4">Topics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                  <p className="text-gray-300 text-sm">{topic.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#3848f1] mb-4">General Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Team Size: 3-5 members</li>
              <li>Eligibility: Open to 2nd, 3rd, and 4th-year students from all branches (intercollege competition)</li>
              <li>Registration Fee:
                <ul className="list-none ml-6 mt-1">
                  <li>CSI Members: Free</li>
                  <li>Non-CSI Members: ₹30</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#3848f1] mb-4">Important Dates</h2>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-semibold">Round 1 Submission Deadline:</span> February 10th, 2024</li>
              <li><span className="font-semibold">Final Pitch Date:</span> March 15th, 2024</li>
            </ul>
          </section>

          <section className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#3848f1] mb-4">Prize Pool</h2>
            <p className="text-2xl font-bold text-white">₹15,000</p>
          </section>

          <div className="text-center pt-8">
            <button
              onClick={() => window.open('https://forms.gle/Ki5KcqEmon7TU4cx6', '_blank')}
              className="px-8 py-3 text-lg bg-[#3848f1] hover:bg-[#2d3ac2] text-white rounded-full transition-colors"
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