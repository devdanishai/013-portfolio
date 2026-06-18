import { archiveCategories } from "@/data/archive";

export function ArchiveSection() {
  return (
    <section className="mt-20">
      <div className="mb-10">
        <p className="section-label mb-2">Archive</p>
        <h2 className="text-2xl font-semibold text-white">
          AI experiments &amp; demos
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Hands-on proof-of-concept apps built for learning and demonstration.
          Each repo includes setup notes and walkthrough videos in the README.
        </p>
      </div>

      <div className="space-y-12">
        {archiveCategories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-4 font-medium text-[#5db9ee]">{category.name}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project) => (
                <a
                  key={project.github}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-interactive group flex flex-col rounded-xl p-4"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-white group-hover:text-[#5db9ee] transition-colors">
                      {project.title}
                    </p>
                    <span className="shrink-0 text-xs text-zinc-600 transition-colors group-hover:text-[#5db9ee]">
                      ↗
                    </span>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#5db9ee]/15 bg-[#5db9ee]/5 px-2 py-0.5 text-[10px] text-[#5db9ee]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-zinc-600 transition-colors group-hover:text-zinc-400">
                    View on GitHub
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
