"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/types";

type LightboxProps = {
  items: GalleryImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const FOCUSABLE = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-screen image viewer.
 * Keyboard: ← / → to navigate, Esc to close, Tab cycles within the dialog.
 * Touch: swipe left / right. Focus returns to the opening thumbnail on close.
 */
export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (step: number) => {
      if (index === null || items.length === 0) return;
      setDirection(step);
      onIndexChange((index + step + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  // Latest callbacks, read by the keyboard handler without re-running the open/close effect.
  const goRef = useRef(go);
  const closeRef = useRef(onClose);
  useEffect(() => {
    goRef.current = go;
    closeRef.current = onClose;
  }, [go, onClose]);

  // Runs once per open/close: scroll lock, initial focus, keyboard, focus restore.
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goRef.current(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goRef.current(-1);
      } else if (event.key === "Tab" && dialog) {
        // Only visible controls: some buttons exist for mobile or desktop only.
        const nodes = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (node) => node.getClientRects().length > 0,
        );
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [open]);

  const item = index !== null ? items[index] : null;

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  }

  const navButton =
    "absolute top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-ink/70 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex";

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          ref={dialogRef}
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'images"
          className="fixed inset-0 z-[80] flex flex-col bg-ink/97"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top bar */}
          <div className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-6">
            <p className="text-sm text-muted" aria-live="polite">
              <span className="font-medium text-white">{index + 1}</span> / {items.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              data-autofocus
              aria-label="Fermer la visionneuse"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:border-gold hover:text-gold-light"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          {/* Image stage */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 sm:px-20">
            <button type="button" onClick={() => go(-1)} aria-label="Image précédente" className={`${navButton} left-4 sm:left-6`}>
              <ChevronLeft aria-hidden="true" className="size-6" />
            </button>

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.figure
                key={item.id}
                custom={direction}
                className="relative flex size-full items-center justify-center"
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: EASE }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
              >
                <div className="relative size-full max-h-full">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 640px) calc(100vw - 10rem), 100vw"
                    placeholder="blur"
                    blurDataURL={item.image.blurDataURL}
                    className="pointer-events-none object-contain select-none"
                    draggable={false}
                  />
                </div>
              </motion.figure>
            </AnimatePresence>

            <button type="button" onClick={() => go(1)} aria-label="Image suivante" className={`${navButton} right-4 sm:right-6`}>
              <ChevronRight aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Caption + mobile controls */}
          <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-4 sm:justify-center sm:px-6 sm:py-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Image précédente"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold sm:hidden"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <p className="text-center font-serif text-lg text-white sm:text-xl">{item.caption}</p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Image suivante"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold sm:hidden"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
