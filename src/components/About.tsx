import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/profile";
import { ProfileImage } from "./ProfileImage";

export function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <FadeIn>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <ProfileImage size={200} />
            <div className="text-center lg:text-left">
              <p className="font-semibold text-zinc-100">{profile.name}</p>
              <p className="text-sm text-violet-400">{profile.title}</p>
            </div>
          </div>
        </FadeIn>
        <div className="space-y-8">
          <FadeIn delay={100}>
            <div className="glass rounded-2xl p-8">
              <h2 className="mb-4 text-xl font-semibold gradient-text-subtle">
                Building intelligent systems that ship
              </h2>
              <p className="leading-relaxed text-zinc-400">{profile.bio}</p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="glass rounded-2xl p-8">
              <h3 className="section-label mb-4">Highlights</h3>
              <ul className="space-y-3">
                {profile.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="btn-primary rounded-full px-5 py-2 text-sm font-medium text-white"
              >
                See my work
              </Link>
              <Link
                href="/contact"
                className="glass rounded-full px-5 py-2 text-sm text-zinc-300 hover:text-zinc-100"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export function SkillsContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.skillCategories.map((category, i) => (
          <FadeIn key={category.name} delay={i * 100}>
            <div className="glass glass-interactive rounded-2xl p-6">
              <h3 className="section-label mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/5 bg-black/20 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-violet-500/30 hover:text-zinc-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
