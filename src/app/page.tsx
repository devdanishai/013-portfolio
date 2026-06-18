import { BentoGrid } from "@/components/BentoGrid";
import { ExploreCards } from "@/components/ExploreCards";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Featured"
            title="Production work"
            href="/projects"
            linkText="View all →"
          />
          <BentoGrid projects={featured} />
        </div>
      </section>
      <ExploreCards />
    </>
  );
}
