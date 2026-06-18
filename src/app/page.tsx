import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";
import { ExploreCards } from "@/components/ExploreCards";
import { Hero } from "@/components/Hero";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="mb-2 font-mono text-sm text-violet-400">
                Featured
              </h2>
              <p className="text-2xl font-semibold text-zinc-100">
                Selected projects
              </p>
            </div>
            <Link
              href="/projects"
              className="shrink-0 text-sm text-zinc-500 transition-colors hover:text-violet-400"
            >
              View all →
            </Link>
          </div>
          <BentoGrid projects={featured} />
        </div>
      </section>
      <ExploreCards />
    </>
  );
}
