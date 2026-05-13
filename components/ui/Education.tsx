import { useTranslation } from "react-i18next";
import { Separator } from "./separator";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Education() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: .3, ease: "easeIn" }}
      className="container max-w-3xl mx-auto px-8 py-4 mt-10"
    >
      <h2 className="text-xl font-medium">Education</h2>
      <div className="flex gap-5 mt-4">
        <div className="flex flex-col relative">
          <div className="absolute inset-[-5.5px] mt-4.5 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800" />
          <div className="absolute inset-[-5.5px] mt-29.5 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800" />
          <Separator orientation="vertical" className="h-full w-px" />
        </div>
        <div className="mt-1.5">
          <div>
            <span className="text-xs font-mono text-muted-foreground">2025 - Present</span>
            <div>
              <p className="text-lg font-bold">Software Engineering</p>
              <div>
                <a
                  href={'https://utcancun.edu.mx'}
                  target="_blank"
                  className="flex w-fit items-center gap-1 mt-2 text-sm text-muted-foreground group hover:text-black dark:hover:text-white transition-colors duration-300">
                  Universidad Tecnológica de Cancún
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-101"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-xs font-mono text-muted-foreground">2023 - 2025</span>
            <div>
              <p className="text-lg font-bold">Senior University Technician</p>
              <div>
                <a
                  href={'https://utcancun.edu.mx'}
                  target="_blank"
                  className="flex w-fit items-center gap-1 mt-2 text-sm text-muted-foreground group hover:text-black dark:hover:text-white transition-colors duration-300">
                  Universidad Tecnológica de Cancún
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-101"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
