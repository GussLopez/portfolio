'use client'

import Experience from "@/components/ui/Experience";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import "./i18n"
import Education from "@/components/ui/Education";
import Proyects from "@/components/ui/Proyects";

export default function Home() {
  
  return (
    <main className="relative py-4 md:py-6">
      <Header />
      <div className="grid grid-cols-1">
        <Hero />
        <Experience />
        <Education />
        <Proyects />
      </div>
    </main>
  );
}
