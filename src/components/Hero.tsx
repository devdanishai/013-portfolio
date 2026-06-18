import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ProfileHero, ProfileImage } from "@/components/ProfileImage";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.links.github, icon: "⌥" },
  { label: "Kaggle", href: profile.links.kaggle, icon: "K" },
  { label: "LinkedIn", href: profile.links.linkedin, icon: "in" },
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-10vh)]">
      <div className="flex min-h-[calc(100vh-10vh)] flex-col lg:flex-row">
        {/* Left — 70% */}
        <div className="flex flex-1 lg:w-[70%]">
          {/* Social icons — inline like old site */}
          <div className="hidden shrink-0 flex-col items-center justify-center gap-10 pl-10 pr-2 lg:flex">
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

          {/* Content */}
          <div className="flex flex-1 flex-col justify-center px-8 py-16 sm:px-12 lg:px-10 lg:py-20">
            <FadeIn>
              <p className="text-xl text-white sm:text-2xl">
                Hi! I am <span className="accent-text">{profile.name}</span>
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="mt-2 text-4xl font-bold leading-tight text-[#5db9ee] sm:text-5xl lg:text-[4rem]">
                {profile.title}
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-6 max-w-[38rem] text-base leading-[1.8] text-white sm:text-[1.1rem]">
                {profile.heroBio}
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-8">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-lg px-6 py-3 text-[1.1rem] font-medium"
                >
                  Hire Me
                </Link>
                <Link
                  href="/projects"
                  className="btn-outline inline-flex items-center justify-center rounded-lg px-6 py-3 text-[1.1rem] font-medium"
                >
                  View Project
                </Link>
              </div>
            </FadeIn>

            {/* Mobile social + photo */}
            <FadeIn delay={400}>
              <div className="mt-10 flex justify-center gap-8 lg:hidden">
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
              <div className="mt-10 flex justify-center lg:hidden">
                <ProfileImage size={200} neon />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right — 30% */}
        <div className="hero-right-panel relative hidden overflow-hidden lg:flex lg:w-[30%]">
          <ProfileHero />
        </div>
      </div>
    </section>
  );
}
