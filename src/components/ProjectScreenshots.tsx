import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

export function ProjectScreenshots({ images }: { images: ProjectImage[] }) {
  return (
    <div className="glass mt-8 rounded-2xl p-8">
      <h2 className="section-label mb-6">Screenshots</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((image) => {
          const desktop = image.layout === "desktop";
          return (
          <figure key={image.src} className="overflow-hidden rounded-xl border border-white/5 bg-black/20">
            <div
              className={`relative w-full ${desktop ? "aspect-video" : "aspect-[9/19]"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={
                  desktop
                    ? "object-contain bg-[#111]"
                    : "object-cover object-top"
                }
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            {image.caption && (
              <figcaption className="px-4 py-3 text-center text-xs text-zinc-400">
                {image.caption}
              </figcaption>
            )}
          </figure>
          );
        })}
      </div>
    </div>
  );
}
