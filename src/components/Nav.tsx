"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

function linkClass(active: boolean) {
  return active
    ? "text-violet-400"
    : "text-zinc-400 transition-colors hover:text-zinc-100";
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden items-center gap-6 sm:flex">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm ${linkClass(pathname === item.href)}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Toggle menu"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 sm:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-white/5 bg-zinc-950/95 backdrop-blur-md sm:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm ${linkClass(pathname === item.href)}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-violet-600 px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export function Logo() {
  return (
    <Link href="/" className="font-mono text-sm font-medium text-zinc-100">
      {profile.name.split(" ")[0].toLowerCase()}
      <span className="text-violet-400">.dev</span>
    </Link>
  );
}
