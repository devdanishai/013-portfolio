import Link from "next/link";
import { profile } from "@/data/profile";
import { ProfileImage } from "./ProfileImage";

export function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <ProfileImage size={200} />
          <div className="text-center lg:text-left">
            <p className="font-semibold text-zinc-100">{profile.name}</p>
            <p className="text-sm text-violet-400">{profile.title}</p>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-zinc-100">
              Building intelligent systems that ship
            </h2>
            <p className="leading-relaxed text-zinc-400">{profile.bio}</p>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-sm text-violet-400">
              Highlights
            </h3>
            <ul className="space-y-3">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
              See my work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition-colors hover:border-white/20 hover:text-zinc-100"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-white/5 bg-white/[0.03] p-6"
          >
            <h3 className="mb-4 font-mono text-sm text-violet-400">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/5 bg-zinc-900/50 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
