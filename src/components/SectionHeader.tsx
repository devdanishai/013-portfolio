import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";
import { ExploreCards } from "@/components/ExploreCards";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";

export function SectionHeader({
  label,
  title,
  href,
  linkText,
}: {
  label: string;
  title: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <FadeIn>
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="section-label mb-2">{label}</p>
          <p className="text-2xl font-semibold text-zinc-100">{title}</p>
        </div>
        {href && linkText && (
          <Link
            href={href}
            className="shrink-0 text-sm text-zinc-500 transition-all hover:translate-x-0.5 hover:text-violet-400"
          >
            {linkText}
          </Link>
        )}
      </div>
    </FadeIn>
  );
}
