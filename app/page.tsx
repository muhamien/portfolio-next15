'use client'

import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import ContributionCalendar from "@/components/home/ContributionCalendar";
import LatestPost from "@/components/home/LatestPost";
import SpotifyPlaylist from "@/components/home/SpotifyPlaylist";
// import RecentlyPlayed from "@/components/home/RecentlyPlayed";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Experience />
      <LatestPost />
      <SpotifyPlaylist />
      {/* <RecentlyPlayed /> */}
      <ContributionCalendar />
    </div>
  );
}
