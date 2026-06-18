import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ProfileImage } from "@/components/ProfileImage";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.links.github, icon: "⌥" },
  { label: "Kaggle", href: profile.links.kaggle, icon: "K" },
  { label: "LinkedIn", href: profile.links.linkedin, icon: "in" },
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-10vh)] overflow-hidden">
      {/* Right blue gradient panel */}
      <div
        className="hero-right-panel pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[30%] lg:block"
        aria-hidden
      />

      {/* Decorative ring + photo — sits on the 70/30 boundary like old site */}
      <div className="pointer-events-none absolute left-[70%] top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <div
          className="absolute left-1/2 top-1/2 aspect-square w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 50%, #262525 50%)",
          }}
          aria-hidden
        />
        <div className="relative flex items-center justify-center">
          <ProfileImage size={480} neon />
        </div>
      </div>

      {/* Left content */}
      <div className="relative z-20 flex min-h-[calc(100vh-10vh)] w-full lg:w-[70%]">
        {/* Social icons */}
        <div className="hidden w-20 shrink-0 flex-col items-center justify-center gap-12 pl-6 lg:flex xl:pl-10">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-icon text-2xl font-semibold"
              title={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 sm:px-10 lg:py-20 lg:pl-4 lg:pr-16">
          <FadeIn>
            <p className="text-xl text-white sm:text-2xl">
              Hi! I am <span className="accent-text">{profile.name}</span>
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-[#5db9ee] sm:text-5xl lg:text-[4rem]">
              {profile.title}
            </h1>
            <p className="mt-2 text-lg text-zinc-400">{profile.subtitle}</p>
            <p className="mt-3 inline-flex items-center rounded-full border border-[#5db9ee]/30 bg-[#5db9ee]/10 px-4 py-1 text-sm font-medium text-[#5db9ee]">
              #{profile.kagglePeakRank} Global Peak · Kaggle {profile.kagglePeakYear}
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-[38rem] text-base leading-[1.8] text-white sm:text-[1.1rem]">
              {profile.heroBio}
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="hero-buttons">
              <Link href="/contact" className="btn-primary rounded-lg px-6 py-3 text-[1.1rem] font-medium">
                Hire Me
              </Link>
              <Link href="/projects" className="btn-outline rounded-lg px-6 py-3 text-[1.1rem] font-medium">
                View Project
              </Link>
            </div>
          </FadeIn>

          {/* Mobile: social + photo */}
          <div className="lg:hidden">
            <FadeIn delay={400}>
              <div className="mt-10 flex justify-center gap-10">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-icon text-xl font-semibold"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="mt-10 flex justify-center">
                <ProfileImage size={280} neon />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
