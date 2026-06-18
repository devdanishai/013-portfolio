import Link from "next/link";

const pages = [
  {
    href: "/about",
    label: "About",
    title: "Who I am",
    description: "Background, experience, and what drives my work in AI/ML.",
  },
  {
    href: "/projects",
    label: "Projects",
    title: "What I've built",
    description: "RAG chatbots, Kaggle solutions, ML pipelines, and AI web apps.",
  },
  {
    href: "/skills",
    label: "Skills",
    title: "Tech stack",
    description: "ML, LLMs, Python, FastAPI, Next.js, and production tooling.",
  },
  {
    href: "/contact",
    label: "Contact",
    title: "Let's connect",
    description: "Reach out for collaborations, consulting, or opportunities.",
  },
];

export function ExploreCards() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 font-mono text-sm text-violet-400">Explore</h2>
        <p className="mb-10 text-2xl font-semibold text-zinc-100">
          Dive deeper
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.05]"
            >
              <p className="mb-2 font-mono text-xs text-violet-400">
                {page.label}
              </p>
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-violet-300 transition-colors">
                {page.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {page.description}
              </p>
              <span className="mt-4 inline-block text-sm text-zinc-600 transition-colors group-hover:text-violet-400">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
