"use client";

import type { Project } from "@/data/projects";
import { FadeIn } from "./FadeIn";

function spanClass(span?: Project["span"]) {
  if (span === "wide") return "sm:col-span-2";
  if (span === "tall") return "sm:row-span-2";
  return "";
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const Wrapper = project.href ? "a" : "div";
  const linkProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <FadeIn delay={index * 80}>
      <Wrapper
        {...linkProps}
        className={`glass glass-interactive group flex h-full flex-col rounded-2xl p-6 ${spanClass(project.span)} ${project.href ? "cursor-pointer" : ""}`}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-violet-300">
            {project.title}
          </h3>
          {project.href && (
            <span className="shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-400">
              ↗
            </span>
          )}
        </div>
        <p className="flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-xs text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {!project.href && (
          <p className="mt-4 text-xs text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100">
            Case study coming soon
          </p>
        )}
      </Wrapper>
    </FadeIn>
  );
}

export function BentoGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
