import Link from "next/link";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.links.github, icon: "⌥" },
  { label: "Kaggle", href: profile.links.kaggle, icon: "K" },
  { label: "LinkedIn", href: profile.links.linkedin, icon: "in" },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-8 lg:flex">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="social-icon text-xl font-semibold"
          title={social.label}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
