import { profile } from "@/data/profile";
import { ProfileImage } from "./ProfileImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.15)_0%,_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-14">
        <ProfileImage size={128} />
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <p className="mb-3 font-mono text-sm text-violet-400">
            {profile.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
              View projects
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-zinc-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-center"
          >
            <p className="text-xl font-semibold text-zinc-100">{stat.value}</p>
            <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
