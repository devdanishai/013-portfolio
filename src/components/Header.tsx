import Link from "next/link";
import { Logo, Nav } from "./Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030712]/70 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <Nav />
        <Link
          href="/contact"
          className="btn-primary hidden rounded-full px-4 py-1.5 text-sm font-medium text-white sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
