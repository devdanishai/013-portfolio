import type { Project } from "@/data/projects";

function spanClass(span?: Project["span"]) {
  if (span === "wide") return "sm:col-span-2";
  if (span === "tall") return "sm:row-span-2";
  return "";
}

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? "a" : "div";
  const linkProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.05] ${spanClass(project.span)} ${project.href ? "cursor-pointer" : ""}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        {project.href && (
          <span className="shrink-0 text-zinc-600 transition-colors group-hover:text-violet-400">
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
            className="rounded-full bg-violet-500/10 px-2.5 py-0.5 font-mono text-xs text-violet-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

export function BentoGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
