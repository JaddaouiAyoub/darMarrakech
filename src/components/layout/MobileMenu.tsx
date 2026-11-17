"use client";

import { ArrowRight, CalendarDays, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type RefObject } from "react";
import { Button } from "@/components/ui/Button";
import { Ornament } from "@/components/ui/Ornament";
import { brand, mainNavigation, reservationLink } from "@/data/restaurant";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { isActivePath } from "./Navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  /** Hamburger button — focus returns to it when the menu closes. */
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Full-screen navigation drawer for screens below `lg`. */
export function MobileMenu({ open, onClose, triggerRef }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock page scroll, trap focus, close on Escape, and restore focus on close.
  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (node) => node.getClientRects().length > 0,
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open, onClose, triggerRef]);

  // Close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 64rem)");
    const onChange = (event: MediaQueryListEvent) => event.matches && onClose();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="bg-zellige fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink lg:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-header shrink-0 items-center justify-between px-4 sm:px-6">
            <Logo onNavigate={onClose} />
            <button
              type="button"
              onClick={onClose}
              data-autofocus
              aria-label="Fermer le menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:border-gold hover:text-gold-light"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label="Navigation mobile" className="flex flex-1 flex-col px-4 pt-6 pb-8 sm:px-6">
            <ul className="flex flex-col">
              {mainNavigation.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-gold/10"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group flex min-h-14 items-center justify-between py-3 font-serif text-[1.75rem] transition-colors",
                        active ? "text-gold" : "text-white hover:text-gold-light",
                      )}
                    >
                      {item.label}
                      <ArrowRight
                        aria-hidden="true"
                        className={cn(
                          "size-5 transition-all duration-300",
                          active ? "text-gold" : "text-gold/40 group-hover:translate-x-1 group-hover:text-gold-light",
                        )}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="mt-auto flex flex-col items-center gap-6 pt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <Button
                href={reservationLink.href}
                onClick={onClose}
                size="lg"
                icon={<CalendarDays />}
                trailingIcon={<ArrowRight />}
                className="w-full"
              >
                {reservationLink.label}
              </Button>
              <Ornament />
              <p className="text-center text-sm text-muted">{brand.tagline}</p>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
