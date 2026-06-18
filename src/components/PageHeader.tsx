import { FadeIn } from "@/components/FadeIn";

type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden px-6 pb-12 pt-16 sm:pt-20">
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label mb-3">{label}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="gradient-text">{title}</span>
          </h1>
        </FadeIn>
        {description && (
          <FadeIn delay={200}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {description}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
