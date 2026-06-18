import type { Metadata } from "next";
import { AboutContent } from "@/components/About";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: profile.bioExtended,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Who I am"
        description="Kaggle Grandmaster and LLM Systems Architect building production-grade GenAI systems that scale."
      />
      <AboutContent />
    </>
  );
}
