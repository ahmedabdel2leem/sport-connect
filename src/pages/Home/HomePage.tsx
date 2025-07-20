"use client"
import HomeBanner from "@/components/home/HomeBanner";
import dynamic  from "next/dynamic";
const About = dynamic(() =>import('@/components/home/About'),{ssr: false})
const SportConnectSections = dynamic(() =>import('@/components/home/SportConnectSections'),{ssr: false})
export default function HomePage() {
  return (
    <main className="relative  ">
      <HomeBanner />
      <About />
        <SportConnectSections/>
    </main>
  );
}
