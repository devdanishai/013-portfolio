import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return projects
    .filter((p) => p.highlights?.length)
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);

  if (!project || !project.highlights?.length) {
    notFound();
  }

  return (
    <>
      <PageHeader
        label="Project"
        title={project.title}
        description={project.subtitle ?? project.description}
      />
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="glass rounded-2xl p-8">
          <p className="leading-relaxed text-zinc-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#5db9ee]/20 bg-[#5db9ee]/10 px-3 py-1 text-xs text-[#5db9ee]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="glass mt-8 rounded-2xl p-8">
          <h2 className="section-label mb-6">Key contributions</h2>
          <ul className="space-y-4">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-zinc-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5db9ee]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/projects" className="btn-outline rounded-lg px-5 py-2 text-sm font-medium">
            ← All projects
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-lg px-5 py-2 text-sm font-medium"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );
}
