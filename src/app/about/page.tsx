import type { Metadata } from "next";
import { AboutContent } from "@/components/About";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: profile.bio,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Who I am"
        description="AI/ML engineer with 12+ years of experience building intelligent systems and shipping them to production."
      />
      <AboutContent />
    </>
  );
}
