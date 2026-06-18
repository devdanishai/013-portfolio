import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ProfileHero, ProfileImage } from "@/components/ProfileImage";
import { SocialSidebar } from "@/components/SocialSidebar";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)]">
      <SocialSidebar />
      <div className="flex min-h-[calc(100vh-5rem)] flex-col lg:flex-row">
        {/* Left content — 70% */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 lg:w-[70%] lg:pl-20 lg:pr-8">
          <FadeIn>
            <p className="text-xl text-white md:text-2xl">
              Hi! I am <span className="accent-text">{profile.name}</span>
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-2 text-4xl font-bold text-[#5db9ee] md:text-5xl lg:text-6xl">
              {profile.title}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-xl text-base leading-8 text-white md:text-lg">
              {profile.heroBio}
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary rounded-lg px-6 py-3 text-base font-medium"
              >
                Hire Me
              </Link>
              <Link
                href="/projects"
                className="btn-outline rounded-lg px-6 py-3 text-base font-medium"
              >
                View Project
              </Link>
            </div>
          </FadeIn>

          {/* Mobile profile */}
          <FadeIn delay={400}>
            <div className="mt-12 flex justify-center lg:hidden">
              <ProfileImage size={180} neon />
            </div>
          </FadeIn>
        </div>

        {/* Right panel — 30% */}
        <div className="hero-right-panel hidden lg:flex lg:w-[30%]">
          <ProfileHero />
        </div>
      </div>
    </section>
  );
}
