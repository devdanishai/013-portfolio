import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const pages = [
  {
    href: "/about",
    label: "About",
    title: "Who I am",
    description: "Background, experience, and what drives my work in AI/ML.",
    accent: "from-[#3877ff]/10 to-transparent",
  },
  {
    href: "/projects",
    label: "Projects",
    title: "What I've built",
    description: "RAG chatbots, Kaggle solutions, ML pipelines, and AI web apps.",
    accent: "from-[#5db9ee]/10 to-transparent",
  },
  {
    href: "/skills",
    label: "Skills",
    title: "Tech stack",
    description: "ML, LLMs, Python, FastAPI, Next.js, and production tooling.",
    accent: "from-[#3877ff]/10 to-transparent",
  },
  {
    href: "/contact",
    label: "Contact",
    title: "Let's connect",
    description: "Reach out for collaborations, consulting, or opportunities.",
    accent: "from-[#5db9ee]/10 to-transparent",
  },
];

export function ExploreCards() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label mb-2">Explore</p>
          <p className="mb-10 text-2xl font-semibold text-zinc-100">
            Dive deeper
          </p>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((page, i) => (
            <FadeIn key={page.href} delay={i * 100} className="h-full">
              <Link
                href={page.href}
                className="glass glass-interactive group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${page.accent} opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div className="relative">
                  <p className="section-label mb-2">{page.label}</p>
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#5db9ee]">
                    {page.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {page.description}
                  </p>
                  <span className="mt-4 inline-block text-sm text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-[#5db9ee]">
                    Learn more →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
