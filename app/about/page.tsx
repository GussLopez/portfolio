'use client'
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <main className="container max-w-3xl mx-auto p-8">
      <div className="absolute -top-45 right-[1%] w-40 h-50 lg:w-70 lg:h-80 blur-3xl rounded-full bg-brand"></div>
      <div className="absolute -top-45 right-[10%] w-40 h-40 lg:w-70 lg:h-70 blur-3xl rounded-full bg-orange-400"></div>
      <div>
        <motion.h1
          className="text-6xl font-gilda"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .3, delay: 0.1 }}
        >Gus López</motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .3, delay: 0.2 }}
          className="text-6xl font-gilda"
        >Student & Full Stack </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .3, delay: 0.3 }}
          className="text-6xl font-gilda"
        >Developer</motion.h2>
      </div>
      <div className="mt-14 space-y-6 text-muted-foreground font-light">

        <motion.p
          initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: .3, ease: 'easeIn' }}
        >I'm a <span className="font-bold text-foreground">Full Stack Software Developer</span>, currently studying <span>Software Engineering</span> at {" "}
          <a target="_blank" href={'https://utcancun.edu.mx'} className="pb-1 border-b border-transparent font-bold hover:border-foreground/60 transition-all duration-400 hover:text-foreground">
            Universidad Tecnológica de Cancún
          </a> {" "}
          where I'm in my final four-month term before starting my professional internship.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: .3, ease: 'easeIn' }}
        >
          I've been working as a developer at {" "}
          <a target="_blank" href={'https://hisgroupcompany.com'} className="pb-1 border-b border-transparent font-bold hover:border-foreground/60 transition-all duration-400 hover:text-foreground">
            Hisgroup Company
          </a>{" "}
          for over a year, where I develop and maintain commercial web applications, work across both frontend and backend, and contribute to building solutions that help the company grow.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: .3, ease: 'easeIn' }}
        >I'm passionate about {" "}
          <span className="font-bold text-foreground">
            building software that is useful, maintainable, and enjoyable to use.
          </span>{" "}
          My main goal is to keep growing as a developer by learning new technologies, improving my problem-solving skills, and following good development practices.</motion.p>
      </div>
    </main>
  )
}
