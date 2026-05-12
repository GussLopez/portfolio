import TechStack from "@/components/stack/tech-stack";
import * as motion from "motion/react-client";

export default function StackPage() {

  return (
    <main className="container max-w-3xl mx-auto px-8 py-8 grid grid-cols-1 gap-4">
      <motion.h1
        initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: .3, ease: "easeIn" }}
        className="article-heading tracking-[0.01em]"
      >Mis stack y herramientas favoritas</motion.h1>

      <TechStack />
    </main>
  )
}
