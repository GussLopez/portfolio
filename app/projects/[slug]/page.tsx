import { allProjects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiGithub } from "react-icons/fi";

interface ProjectPropsPage {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPropsPage) {
  const { slug } = await params;
  const project = allProjects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    notFound();
  }

  return (
    <main className="container max-w-3xl mx-auto px-8 py-4">
      <div className="py-4">
        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-all duration-300 group w-fit"
        >
          <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
          Back
        </Link>
      </div>
      <div className="grid gap-12">
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          <p className="text-muted-foreground mt-4">{project.quote}</p>

          <div className="flex justify-between items-center mt-3 text-muted-foreground">
            <span className="text-sm">
              {project.published?.toLocaleDateString("es-MX", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <div className="flex items-center gap-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="hover:text-white transition-colors p-1">
                  <FiGithub className="size-4" />
                </Link>
              )}
              <Link
                href={project.href}
                target="_blank"
                className="hover:text-white transition-colors group p-1">
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-border/50 rounded-lg overflow-hidden">
          <img
            src={project.preview}
            alt="Project Preview"
            className="w-full h-auto"
          />
        </div>


        <article className="grid gap-4">
          <h2 className="article-heading">Project Overview</h2>
          <p className="article-p">
            <strong>{project.title}</strong> {project.p1}
          </p>
          {project.p2 && <p className="article-p">{project.p2}</p>}

          <h2 className="article-heading">Características Principales</h2>
          <div className="grid gap-6">
            {project.characteristics?.map((char, i) => (
              <div
                key={i}
                className="border-l border-border pl-4"
              >
                <h3 className="font-medium text-base">
                  {i + 1}. {char.characteristic}
                </h3>

                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {char.desc}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}
