import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/profile";
import { ProfileImage } from "./ProfileImage";

export function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <FadeIn>
          <div className="flex flex-col items-center gap-4 lg:items-start lg:sticky lg:top-28">
            <ProfileImage size={200} neon />
            <div className="text-center lg:text-left">
              <p className="font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-[#5db9ee]">{profile.title}</p>
              <p className="mt-1 text-xs text-zinc-400">{profile.subtitle}</p>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={100}>
            <div className="glass rounded-2xl p-8">
              <h2 className="mb-4 text-xl font-semibold text-[#5db9ee]">
                {profile.bio}
              </h2>
              <p className="leading-relaxed text-zinc-300">
                {profile.bioExtended}
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                {profile.bioMission}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="glass rounded-2xl p-8">
              <h3 className="section-label mb-4">Core Focus Areas</h3>
              <ul className="space-y-3">
                {profile.focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5db9ee]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="glass rounded-2xl p-8">
              <h3 className="section-label mb-4">What I Deliver</h3>
              <ul className="space-y-3">
                {profile.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3877ff]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="glass rounded-2xl border-[#5db9ee]/20 p-8">
              <p className="text-base leading-relaxed text-zinc-300 italic">
                {profile.closingStatement}
              </p>
              <p className="mt-4 text-sm text-zinc-400">
                If you&apos;re building serious GenAI products and need
                production-level architecture, let&apos;s connect.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="btn-primary rounded-lg px-5 py-2 text-sm font-medium"
              >
                See my work
              </Link>
              <Link
                href="/contact"
                className="btn-outline rounded-lg px-5 py-2 text-sm font-medium"
              >
                Let&apos;s connect
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
                    className="rounded-xl border border-white/5 bg-black/20 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-[#5db9ee]/30 hover:text-white"
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
