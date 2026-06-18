export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="animate-blob absolute -left-32 top-0 h-[550px] w-[550px] rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="animate-blob-delay-2 absolute -right-24 top-1/3 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[90px]" />
      <div className="animate-blob-delay-4 absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-violet-800/25 blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]/80" />
    </div>
  );
}
