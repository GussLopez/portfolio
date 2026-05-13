import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent } from "@/components/animate-ui/components/animate/tooltip";
import { TooltipTrigger } from "@/components/animate-ui/primitives/animate/tooltip";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects | Gustavo López Alvarado',
  description: 'Explore all my projects'
}

export default function Projects() {

  return (
    <main className="container max-w-3xl mx-auto py-4">
      <motion.section
        initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: .3, ease: "easeIn" }}
        className="container max-w-3xl mx-auto px-8 py-4 mt-10"
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-all duration-300 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
            Back
          </Link>
          <h2 className="text-sm font-medium">Projects</h2>
        </div>

        <div className="mt-6">
          <Separator className="h-px w-full bg-muted" />

          {allProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className="border-b border-border"
              initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .3, ease: "easeIn", delay: .1 * i }}
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
                        <ArrowUpRight className="size-4 opacity-70 group-hover:opacity-100 transition-all" />
                        <span className="sr-only">Open project</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pr-[20%] mt-4">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}
