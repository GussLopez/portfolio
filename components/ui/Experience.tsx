import { ArrowUpRight } from "lucide-react";
import { Separator } from "./separator";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function Experience() {

  return (
    <motion.section
      initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: .3, ease: "easeIn" }}
      className="container max-w-3xl mx-auto px-8 py-4 mt-10"
    >
      <h2 className="text-xl font-medium">Experience</h2>
      <div className="flex gap-5 mt-4">
        <div className="flex flex-col relative">
          <div className="absolute inset-[-5.5px] mt-5 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800" />
          <Separator orientation="vertical" className="h-full w-px" />
        </div>
        <div className="mt-1.5">
          <span className="text-xs font-mono text-muted-foreground">2024 - Present</span>
          <div>
            <p className="text-lg font-bold">Software Developer</p>
            <div>
              <a
                href={'http://www.hisgroupcompany.com'}
                target="_blank"
                className="flex w-fit items-center gap-1 mt-2 text-sm text-muted-foreground group hover:text-black dark:hover:text-white transition-colors duration-300">
                Hisgroup Company
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-101"
                />
              </a>
              <p className="mt-2 text-sm leading-[1.58] dark:text-neutral-400">
                Developed and maintained two commercial web applications used by real clients, contributing across the full development lifecycle. I designed and implemented RESTful APIs using Node.js and Express, and modeled and managed relational databases with PostgreSQL. I built a complete order tracking system for clients, along with invoice upload and visualization features. Additionally, I developed a product management system with full CRUD operations. I also led the migration of the frontend from React to Next.js, improving overall performance and SEO optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
