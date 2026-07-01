import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

export function ProjectScreenshots({ images }: { images: ProjectImage[] }) {
  const hasDesktop = images.some((image) => image.layout === "desktop");

  return (
    <div className="glass mt-8 rounded-2xl p-8">
      <h2 className="section-label mb-6">Screenshots</h2>
      <div
        className={`grid gap-8 ${hasDesktop ? "grid-cols-1" : "gap-6 sm:grid-cols-2"}`}
      >
        {images.map((image, index) => {
          const desktop = image.layout === "desktop";
          return (
            <figure
              key={image.src}
              className="overflow-hidden rounded-xl border border-white/5 bg-black/20"
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
                      ? "object-contain bg-[#111]"
                      : "object-cover object-top"
                  }
                  sizes={desktop ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                  priority={index === 0}
                />
              </div>
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
  );
}
