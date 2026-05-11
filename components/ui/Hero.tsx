import { motion } from "motion/react";
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="container max-w-3xl mx-auto px-8 py-4">
      <div>
        <motion.p
          initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          animate={{ opacity: .8, y: 0, filter: "blur(0px)" }}
          transition={{ duration: .3, ease: "easeIn" }}
          className="opacity-80 leading-8 py-4 font-light"
        >
          {t("im")} <span className="font-bold">Guss</span>, {t("currentStudy")} <a target="_blank" href={'https://utcancun.edu.mx'} className="pb-1 border-b border-transparent font-bold opacity-100 hover:border-foreground/60 transition-[border-color] duration-400">UT Cancún</a> {t("heroDescription")}
        </motion.p>
      </div>
    </section>
  )
}
