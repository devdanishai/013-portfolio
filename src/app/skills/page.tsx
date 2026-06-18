import type { Metadata } from "next";
import { SkillsContent } from "@/components/About";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
  description: "Machine learning, LLMs, Python, FastAPI, Next.js, and production AI tooling.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        label="Skills"
        title="Tools & technologies"
        description="A focused stack for building, training, and deploying AI systems end to end."
      />
      <SkillsContent />
    </>
  );
}
