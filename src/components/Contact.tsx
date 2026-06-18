import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/profile";

const links = [
  {
    label: "GitHub",
    href: profile.links.github,
    description: "43+ repos — AI apps, RAG, FastAPI, Streamlit",
    icon: "⌥",
  },
  {
    label: "Kaggle",
    href: profile.links.kaggle,
    description: "Grandmaster profile & competition notebooks",
    icon: "◈",
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    description: "Professional background & network",
    icon: "◎",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    description: profile.email,
    icon: "✉",
  },
];

export function ContactContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link, i) => (
          <FadeIn key={link.label} delay={i * 80}>
            <a
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass glass-interactive group block rounded-2xl p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#5db9ee]/20 bg-[#5db9ee]/10 text-sm text-[#5db9ee]">
                  {link.icon}
                </span>
                <p className="section-label">{link.label}</p>
              </div>
              <p className="text-lg font-semibold text-white transition-colors group-hover:text-[#5db9ee]">
                {link.label === "Email" ? "Send an email" : `Open ${link.label}`}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{link.description}</p>
            </a>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={350}>
        <div className="glass relative mt-10 overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3877ff]/10 via-transparent to-[#5db9ee]/10" />
          <p className="relative text-lg text-zinc-300">
            Open to consulting, collaborations, and full-time opportunities in
            AI/ML engineering.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary relative mt-6 inline-flex rounded-lg px-8 py-3 text-sm font-medium"
          >
            Email me directly
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-zinc-700">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
