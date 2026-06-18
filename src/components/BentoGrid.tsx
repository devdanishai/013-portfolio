"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

function spanClass(span?: Project["span"]) {
  if (span === "wide") return "sm:col-span-2";
  if (span === "tall") return "sm:row-span-2";
  return "";
}

function isInternal(href: string) {
  return href.startsWith("/");
}

function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const className = `glass glass-interactive group flex h-full min-h-[200px] flex-col rounded-2xl p-6 transition-opacity duration-700 ${spanClass(project.span)} ${visible ? "opacity-100" : "opacity-0"} ${project.href ? "cursor-pointer" : ""}`;

  const content = (
    <>
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#5db9ee]">
          {project.title}
        </h3>
        {project.href && (
          <span className="shrink-0 text-zinc-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#5db9ee]">
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
            className="rounded-full border border-[#5db9ee]/20 bg-[#5db9ee]/10 px-2.5 py-0.5 text-xs text-[#5db9ee]"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.href && (
        <p className="mt-4 text-xs text-zinc-600 opacity-0 transition-opacity group-hover:text-[#5db9ee] group-hover:opacity-100">
          {isInternal(project.href) ? "View case study →" : "View on GitHub →"}
        </p>
      )}
    </>
  );

  const style = { transitionDelay: `${index * 80}ms` };

  if (project.href && isInternal(project.href)) {
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} href={project.href} className={className} style={style}>
        {content}
      </Link>
    );
  }

  if (project.href) {
    return (
      <a
        ref={ref}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <div ref={ref} className={className} style={style}>
      {content}
    </div>
  );
}

export function BentoGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
