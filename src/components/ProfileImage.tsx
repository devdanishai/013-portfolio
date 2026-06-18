"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

export function ProfileImage({ size = 120 }: { size?: number }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div
          className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-violet-600/60 to-cyan-500/60 blur-md"
          aria-hidden
        />
        <div
          className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 font-semibold text-white ring-2 ring-white/20"
          style={{ fontSize: size * 0.32 }}
        >
          {profile.initials}
        </div>
      </div>
    );
  }

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        className="absolute -inset-1 animate-pulse-glow rounded-full bg-gradient-to-br from-violet-500/50 to-cyan-400/40 blur-md"
        aria-hidden
      />
      <Image
        src={profile.image}
        alt={profile.name}
        width={size}
        height={size}
        className="relative rounded-full object-cover ring-2 ring-white/20 ring-offset-2 ring-offset-[#030712]"
        priority
        onError={() => setError(true)}
      />
    </div>
  );
}
