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
          I'm <span className="font-bold">Guss</span>, a Software Engineering, studying at <a target="_blank" href={'https://utcancun.edu.mx'} className="pb-1 border-b border-transparent font-bold opacity-100 hover:border-foreground/60 transition-[border-color] duration-400">Universidad Tecnológica de Cancún</a> and a full-stack developer based in Cancún, Mexico. With over a year of hands-on experience, I enjoy building modern web applications and crafting clean, user-friendly interfaces. I'm passionate about turning ideas into efficient, scalable, and intuitive digital solutions.
        </motion.p>
      </div>
    </section>
  )
}
