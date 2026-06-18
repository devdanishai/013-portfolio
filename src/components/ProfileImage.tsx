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
          className="relative flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-[#5db9ee] font-semibold text-[#262525]"
          style={{ fontSize: size * 0.32 }}
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
          className="absolute -inset-4 animate-pulse-glow rounded-full bg-[#3877ff]/30 blur-xl"
          aria-hidden
        />
      )}
      <Image
        src={profile.image}
        alt={profile.name}
        width={size}
        height={size}
        className={`relative rounded-full border-4 border-white object-cover ${neon ? "neon-glow" : ""}`}
        priority
        onError={() => setError(true)}
      />
    </div>
  );
}

export function ProfileHero() {
  return (
    <div className="relative flex h-full min-h-[420px] w-full items-center justify-center">
      <div
        className="absolute aspect-square w-[min(38rem,90%)] rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent 50%, #262525 50%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <ProfileImage size={280} neon />
      </div>
    </div>
  );
}
