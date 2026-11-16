"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/restaurant";
import { cn } from "@/lib/utils";

/** True when `href` is the current page or one of its sub-pages. */
export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Horizontal desktop navigation (≥ lg). */
export function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale" className={className}>
      <ul className="flex items-center gap-1 xl:gap-2">
        {mainNavigation.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors duration-300 ease-elegant",
                  active
                    ? "border-gold/70 text-white"
                    : "border-transparent text-white/85 hover:text-gold-light",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
