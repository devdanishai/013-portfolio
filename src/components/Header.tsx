import Link from "next/link";
import { Logo, Nav } from "./Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <Nav />
        <Link
          href="/contact"
          className="hidden rounded-full bg-violet-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-violet-500 sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
