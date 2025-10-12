'use client'

import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";

export default function Home() {
  return (
    <div className="home-container mx-4">
      <Hero />
      <Experience />
    </div>
  );
}
