"use client";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import MeetTheTeam from "./components/MeetTheTeam";
import { Navbar } from "./components/ui/Navbar";
import Banner from "./components/ui/Banner";
import { navItems } from "./data";

export default function Home() {
  return (
    <main>
      <Navbar navItems={navItems} />
      <Banner />
      <Hero />
      <About />
      <MeetTheTeam />
      <Events />
      <Gallery />
      <JoinUs />
    </main>
  );
}