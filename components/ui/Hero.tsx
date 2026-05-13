import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="container max-w-3xl mx-auto px-8 py-4">
      <div>
        <motion.p
          initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          animate={{ opacity: .8, y: 0, filter: "blur(0px)" }}
          transition={{ duration: .3, ease: "easeIn" }}
          className="opacity-80 leading-8 py-4 font-light"
        >
          I'm <span className="font-bold">Guss</span>, currently a student at <a target="_blank" href={'https://utcancun.edu.mx'} className="pb-1 border-b border-transparent font-bold opacity-100 hover:border-foreground/60 transition-[border-color] duration-400">UT Cancún</a> studying Software Engeeniring from Cancún with +1 year of experience. I'm passionate about making clean UX/UI and building fullstack apps.
        </motion.p>
      </div>
    </section>
  )
}
