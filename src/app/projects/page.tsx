import type { Metadata } from "next";
import { ArchiveSection } from "@/components/ArchiveSection";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description:
    "Production AI systems, vehicle analytics, and archived GenAI demo experiments.",
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
          <p className="section-label mb-2">Production</p>
          <h2 className="text-xl font-semibold text-white">Featured work</h2>
        </div>
        <BentoGrid projects={projects} />
        <ArchiveSection />
      </div>
    </>
  );
}
