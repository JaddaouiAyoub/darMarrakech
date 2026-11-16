"use client";

import { CalendarDays, Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { reservationLink } from "@/data/restaurant";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

const SCROLL_THRESHOLD = 24;

/**
 * Site header: transparent over the hero, solid dark once the page scrolls.
 * Desktop (≥ lg) shows the horizontal navigation; smaller screens use the drawer.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-elegant",
          scrolled
            ? "border-b border-gold/15 bg-ink shadow-soft"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-500 ease-elegant sm:px-6 lg:px-8",
            scrolled ? "h-header" : "h-header lg:h-24",
          )}
        >
          <Logo />

          <Navigation className="hidden lg:block" />

          <div className="flex items-center gap-2">
            {/* Wrapper controls visibility: the Button's own display class would override `hidden`. */}
            <div className="hidden sm:block">
              <Button href={reservationLink.href} icon={<CalendarDays />}>
                {reservationLink.label}
              </Button>
            </div>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center rounded-full text-gold transition-colors hover:text-gold-light lg:hidden"
            >
              <Menu aria-hidden="true" className="size-7" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} triggerRef={triggerRef} />
    </>
  );
}
