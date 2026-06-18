import type { Metadata } from "next";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "AI web apps, Kaggle solutions, ML pipelines, and production systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="What I've built"
        description="From RAG chatbots and agentic systems to Kaggle competitions and full-stack AI products."
      />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <BentoGrid projects={projects} />
      </div>
    </>
  );
}
