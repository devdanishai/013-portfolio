import { profile } from "@/data/profile";

const links = [
  {
    label: "GitHub",
    href: profile.links.github,
    description: "43+ repos — AI apps, RAG, FastAPI, Streamlit",
  },
  {
    label: "Kaggle",
    href: profile.links.kaggle,
    description: "Grandmaster profile & competition notebooks",
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    description: "Professional background & network",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    description: profile.email,
  },
];

export function ContactContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.05]"
          >
            <p className="mb-1 font-mono text-xs text-violet-400">
              {link.label}
            </p>
            <p className="text-lg font-semibold text-zinc-100 group-hover:text-violet-300 transition-colors">
              {link.label === "Email" ? "Send an email" : `Open ${link.label}`}
            </p>
            <p className="mt-2 text-sm text-zinc-500">{link.description}</p>
          </a>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-white/5 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 p-10 text-center sm:p-14">
        <p className="text-lg text-zinc-300">
          Open to consulting, collaborations, and full-time opportunities in
          AI/ML engineering.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex rounded-full bg-violet-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500"
        >
          Email me directly
        </a>
      </div>
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
