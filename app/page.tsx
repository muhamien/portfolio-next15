'use client'

import Hero from "@/components/home/Hero";
// import Experience from "@/components/home/Experience";
import ContributionCalendar from "@/components/home/ContributionCalendar";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      {/* <Experience /> */}
      <ContributionCalendar />
    </div>
  );
}
