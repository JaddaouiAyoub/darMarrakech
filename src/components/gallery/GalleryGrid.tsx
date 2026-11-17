"use client";

import { Expand } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { GalleryCategory, GalleryImage } from "@/types";
import { Lightbox } from "./Lightbox";

type GalleryGridProps = {
  images: GalleryImage[];
  categories: { id: GalleryCategory; label: string }[];
};

type Filter = GalleryCategory | "all";

/** Filterable masonry gallery; each photo opens the lightbox. */
export function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? images : images.filter((item) => item.category === filter)),
    [filter, images],
  );
  const close = useCallback(() => setOpenIndex(null), []);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "Tout", count: images.length },
    ...categories.map((c) => ({ ...c, count: images.filter((i) => i.category === c.id).length })),
  ];

  return (
    <>
      <div role="group" aria-label="Filtrer la galerie" className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors duration-300 ease-elegant",
                active
                  ? "border-gold bg-gold text-ink"
                  : "border-gold/25 text-white/85 hover:border-gold/60 hover:text-gold-light",
              )}
            >
              {f.label}
              <span className={cn("text-xs", active ? "text-ink/70" : "text-muted")}>{f.count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} photos affichées
      </p>

      <AnimatePresence mode="wait">
        <motion.ul
          key={filter}
          className="mt-10 columns-1 gap-4 min-[480px]:columns-2 lg:columns-3 lg:gap-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {visible.map((item, index) => (
            <li key={item.id} className="mb-4 break-inside-avoid lg:mb-5">
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Agrandir : ${item.caption}`}
                className="group relative block w-full overflow-hidden rounded-xl ring-1 ring-gold/15 focus-visible:ring-2 focus-visible:ring-gold-light"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 480px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={item.image.blurDataURL}
                  className="h-auto w-full transition-transform duration-700 ease-elegant group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-end justify-between bg-linear-to-t from-ink/85 via-ink/10 to-transparent p-4 opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
                >
                  <span className="text-left font-serif text-lg text-white">{item.caption}</span>
                  <Expand className="size-5 shrink-0 text-gold-light" />
                </span>
              </button>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <Lightbox items={visible} index={openIndex} onClose={close} onIndexChange={setOpenIndex} />
    </>
  );
}
