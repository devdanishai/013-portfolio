"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";

export function ProjectScreenshots({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState<ProjectImage | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  return (
    <>
      <div className="glass mt-8 rounded-2xl p-8">
        <h2 className="section-label mb-2">Screenshots</h2>
        <p className="mb-6 text-xs text-zinc-500">Click any image to enlarge</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {images.map((image, index) => {
            const desktop = image.layout === "desktop";
            return (
              <figure
                key={image.src}
                className="overflow-hidden rounded-xl border border-white/5 bg-black/20"
              >
                <button
                  type="button"
                  onClick={() => setActive(image)}
                  className="group relative block w-full cursor-zoom-in"
                  aria-label={`Enlarge screenshot: ${image.alt}`}
                >
                  <div
                    className={`relative w-full ${
                      desktop ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[9/19]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={
                        desktop
                          ? "object-contain bg-[#111] transition-opacity group-hover:opacity-90"
                          : "object-cover object-top transition-opacity group-hover:opacity-90"
                      }
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </button>
                {image.caption && (
                  <figcaption className="px-4 py-3 text-center text-sm text-zinc-400">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-3"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 z-10 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            Close
          </button>

          <div
            className="flex h-full w-full max-h-[96vh] max-w-[98vw] flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[88vh] w-full max-w-[98vw]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="98vw"
                priority
              />
            </div>
            {active.caption && (
              <p className="mt-2 shrink-0 text-center text-sm text-zinc-400">{active.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
