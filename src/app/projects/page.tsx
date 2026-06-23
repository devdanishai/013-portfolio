import type { Metadata } from "next";
import { AndroidAppsSection } from "@/components/AndroidAppsSection";
import { ArchiveSection } from "@/components/ArchiveSection";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";
import { getAndroidProjects, getFeaturedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description:
    "Production AI systems and archived GenAI demo experiments.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="What I've built"
        description="Production-grade AI systems and hands-on experiments across GenAI, RAG, CV, and NLP."
      />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-4">
          <p className="section-label mb-2">Featured</p>
          <h2 className="text-xl font-semibold text-white">
            Production &amp; selected demos
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Production-grade GenAI, RAG, and multimodal experiments.
          </p>
        </div>
        <BentoGrid projects={getFeaturedProjects()} />
        <AndroidAppsSection projects={getAndroidProjects()} />
        <ArchiveSection />
      </div>
    </>
  );
}
