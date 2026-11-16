"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/types";

type MenuFiltersProps = {
  categories: Pick<MenuCategory, "id" | "label">[];
};

/**
 * Sticky category navigation for the menu page.
 * Highlights the category currently in view (scroll-spy) and keeps the active
 * pill visible inside the horizontally scrollable bar on small screens.
 */
export function MenuFilters({ categories }: MenuFiltersProps) {
  const [active, setActive] = useState(categories[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  // Scroll-spy: the active category is the last one whose top has passed the bar.
  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const threshold = window.innerHeight * 0.35;
        let current = sections[0]?.id;
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= threshold) current = section.id;
        }
        // At the very bottom of the page, highlight the last category.
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          current = sections[sections.length - 1]?.id;
        }
        if (current) setActive(current as MenuCategory["id"]);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [categories]);

  // Keep the active pill in view inside the bar, without scrolling the page.
  useEffect(() => {
    const list = listRef.current;
    const pill = list?.querySelector<HTMLElement>(`[data-category="${active}"]`);
    if (!list || !pill) return;
    const target = pill.offsetLeft - (list.clientWidth - pill.offsetWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Catégories du menu"
      className="sticky top-[var(--spacing-header)] z-30 border-y border-gold/15 bg-ink shadow-soft"
    >
      <ul
        ref={listRef}
        className="mx-auto flex max-w-7xl snap-x gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-6 lg:justify-center lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = category.id === active;
          return (
            <li key={category.id} className="snap-start">
              <a
                href={`#${category.id}`}
                data-category={category.id}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(category.id)}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium whitespace-nowrap transition-colors duration-300 ease-elegant",
                  isActive
                    ? "border-gold bg-gold text-ink"
                    : "border-gold/25 text-white/85 hover:border-gold/60 hover:text-gold-light",
                )}
              >
                {category.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
