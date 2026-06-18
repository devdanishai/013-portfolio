import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 font-mono text-sm text-violet-400">About</h2>
        <p className="mb-8 max-w-2xl text-2xl font-semibold text-zinc-100">
          Building intelligent systems that ship.
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
          {profile.bio}
        </p>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 font-mono text-sm text-violet-400">Skills</h2>
        <p className="mb-8 text-2xl font-semibold text-zinc-100">
          Tools & technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-violet-500/30 hover:text-zinc-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
