"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds before the animation starts (for light staggering). */
  delay?: number;
  /** Vertical offset in px the element rises from. */
  y?: number;
  /** "view" (default) reveals when scrolled into view; "mount" plays immediately (hero). */
  trigger?: "view" | "mount";
  as?: "div" | "li" | "article";
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Subtle fade-and-rise entrance. Transforms are dropped automatically when the
 * visitor prefers reduced motion (MotionConfig reducedMotion="user").
 */
export function Reveal({ children, className, delay = 0, y = 24, trigger = "view", as = "div" }: RevealProps) {
  const Component = motion[as];
  const target = { opacity: 1, y: 0 };
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      {...(trigger === "mount"
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "0px 0px -80px 0px" } })}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}
