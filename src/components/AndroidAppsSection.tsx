import Link from "next/link";
import type { Project } from "@/data/projects";

export function AndroidAppsSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="mb-6">
        <p className="section-label mb-2">Android Apps</p>
        <h2 className="text-xl font-semibold text-white">Mobile products</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Shipped Android apps built for real-world daily use.
        </p>
      </div>

      <div className="space-y-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href ?? `/projects/${project.id}`}
            className="glass glass-interactive group flex items-start justify-between gap-4 rounded-xl p-5"
          >
            <div className="min-w-0">
              <p className="font-medium text-white transition-colors group-hover:text-[#5db9ee]">
                {project.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {project.oneLiner ?? project.subtitle ?? project.description}
              </p>
            </div>
            <span className="shrink-0 pt-0.5 text-sm text-zinc-600 transition-colors group-hover:text-[#5db9ee]">
              View →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
