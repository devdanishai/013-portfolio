type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden px-6 pb-12 pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.12)_0%,_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-sm text-violet-400">{label}</p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
