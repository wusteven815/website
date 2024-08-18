"use client";

import { ShootingStars } from "@/components/ShootingStars";
import { StarsBackground } from "@/components/StarsBackground";
import Experience from "@/components/landing/Experience";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <Hero />
        <StarsBackground />
        <ShootingStars className="motion-reduce:hidden" />
      </div>

      <div className="flex h-0.5 bg-neutral-700" />

      <div className="flex justify-center pt-12 pb-16 lg:py-32 min-h-screen">
        <div className="flex flex-col justify-center w-5/6 max-w-[1100px] gap-y-20">
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
}
