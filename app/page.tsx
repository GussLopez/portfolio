'use client'

import Experience from "@/components/ui/Experience";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import { useTranslation } from "react-i18next";
import "./i18n"
import Education from "@/components/ui/Education";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  return (
    <main className="relative py-4 md:py-6">
      <Header />
      <div className="grid grid-cols-1">
        <Hero />
        <Experience />
        <Education />
      </div>
    </main>
  );
}
