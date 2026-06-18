"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

type ProfileImageProps = {
  size?: number;
  neon?: boolean;
};

export function ProfileImage({ size = 120, neon = false }: ProfileImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div
          className="relative flex h-full w-full items-center justify-center rounded-full border-[0.8rem] border-white bg-[#5db9ee] font-semibold text-[#262525]"
          style={{ fontSize: size * 0.28 }}
        >
          {profile.initials}
        </div>
      </div>
    );
  }

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {neon && (
        <div
          className="absolute -inset-3 rounded-full bg-[#3877ff]/25 blur-lg"
          aria-hidden
        />
      )}
      <Image
        src={profile.image}
        alt={profile.name}
        width={size}
        height={size}
        className={`relative h-full w-full rounded-full border-[0.8rem] border-white object-cover ${neon ? "neon-glow" : ""}`}
        priority
        onError={() => setError(true)}
      />
    </div>
  );
}
