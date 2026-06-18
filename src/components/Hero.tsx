import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/profile";
import { ProfileImage } from "./ProfileImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-28">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-14">
        <FadeIn>
          <ProfileImage size={140} />
        </FadeIn>
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <FadeIn delay={80}>
            <p className="section-label mb-3">{profile.title}</p>
          </FadeIn>
          <FadeIn delay={160}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{profile.name}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
              {profile.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={320}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                href="/projects"
                className="btn-primary rounded-full px-6 py-2.5 text-sm font-medium text-white"
              >
                View projects
              </Link>
              <Link
                href="/about"
                className="glass rounded-full px-6 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100"
              >
                About me
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={400 + i * 80}>
            <div className="glass rounded-2xl px-5 py-5 text-center">
              <p className="text-xl font-semibold gradient-text-subtle">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
