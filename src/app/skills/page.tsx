import type { Metadata } from "next";
import { SkillsContent } from "@/components/About";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
  description:
    "RAG, LLM fine-tuning, agent workflows, multimodal AI, and production GenAI engineering.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        label="Skills"
        title="Tools & technologies"
        description="GenAI, RAG, agent architectures, and production LLM engineering at scale."
      />
      <SkillsContent />
    </>
  );
}
