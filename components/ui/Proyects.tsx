import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Separator } from "./separator";
import { projects } from "@/data/projects";
import { Tooltip, TooltipContent, TooltipTrigger } from "../animate-ui/components/animate/tooltip";
import { motion } from "motion/react";


export default function Proyects() {

  return (
    <motion.section
      initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: .3, ease: "easeIn" }}
      className="container max-w-3xl mx-auto px-8 py-4 mt-10"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Projects</h2>
        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-all duration-300 group"
        >
          More
          <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </Link>
      </div>

      <div className="mt-6">
        <Separator className="h-px w-full bg-muted" />

        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: .3, ease: "easeIn", delay: .2 * (i + 1) }}
            key={project.title}
          >
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div className="lg:flex gap-5 items-center w-full">
                  <Link
                    href={project.href}
                    target="_blank"
                    className="flex items-center gap-1 group"
                  >
                    <h3 className="text-lg tracking-wide font-semibold truncate">
                      {project.title}
                    </h3>

                    <ArrowUpRight className="size-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>

                  <div className="flex justify-between items-center w-full mt-4 lg:mt-0">
                    <div className="flex gap-2">
                      {project.technologies.map((tech, index) => {
                        const Icon = tech.icon;

                        return (
                          <Tooltip key={index}>
                            <TooltipTrigger>
                              <span
                                className="flex justify-center items-center w-8 h-8 border border-input rounded-md"
                              >
                                <Icon
                                  size={20}
                                  className={`size-5 ${tech.className}`}
                                />
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              {tech.name}
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="p-2 border border-input rounded-md group"
                    >
                      <ArrowRight className="size-4 opacity-70 group-hover:opacity-100 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:max-w-3/4 mt-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
            <Separator className="h-px w-full bg-muted" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}