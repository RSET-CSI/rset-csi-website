"use client";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import MeetTheTeam from "./components/MeetTheTeam";
import { Navbar } from "./components/ui/Navbar";
import { navItems } from "./data";

export default function Home() {
  return (
    <main>
      <Navbar navItems={navItems} />
      <Hero />
      <About />
      <MeetTheTeam />
      <Events />
      <Gallery />
      <JoinUs />
    </main>
  );
}
