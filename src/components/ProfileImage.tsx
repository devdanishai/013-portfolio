"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

export function ProfileImage({ size = 120 }: { size?: number }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 font-semibold text-white ring-2 ring-white/10"
        style={{ width: size, height: size, fontSize: size * 0.32 }}
      >
        {profile.initials}
      </div>
    );
  }

  return (
    <Image
      src={profile.image}
      alt={profile.name}
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover ring-2 ring-white/10"
      priority
      onError={() => setError(true)}
    />
  );
}
