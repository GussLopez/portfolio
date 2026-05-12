import TechStack from "@/components/stack/tech-stack";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Stack | Gustavo López Alvarado',
  description: 'Explora el stack tecnológico que utilizo para desarrollar aplicaciones web modernas, escalables y enfocadas en rendimiento, experiencia de usuario y diseño atractivo.'
}

export default function StackPage() {

  return (
    <main className="container max-w-3xl mx-auto px-8 py-8 min-h-[80vh]">
      <div className="grid grid-cols-1 gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: .3, ease: "easeIn" }}
          className="article-heading tracking-[0.01em]"
        >Mis stack y herramientas favoritas</motion.h1>

        <TechStack />
      </div>
    </main>
  )
}
