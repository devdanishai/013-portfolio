import type { Metadata } from "next";
import { ContactContent } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: "Get in touch for collaborations, consulting, or AI/ML opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's work together"
        description="Reach out via email, LinkedIn, GitHub, or Kaggle."
      />
      <ContactContent />
    </>
  );
}
