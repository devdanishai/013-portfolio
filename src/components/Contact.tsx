import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.links.github },
  { label: "Kaggle", href: profile.links.kaggle },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 p-10 sm:p-14">
          <h2 className="mb-2 font-mono text-sm text-violet-400">Contact</h2>
          <p className="mb-4 text-2xl font-semibold text-zinc-100">
            Let&apos;s work together
          </p>
          <p className="mb-8 max-w-md text-zinc-400">
            Open to consulting, collaborations, and full-time opportunities in
            AI/ML engineering.
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition-colors hover:border-violet-500/40 hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
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
