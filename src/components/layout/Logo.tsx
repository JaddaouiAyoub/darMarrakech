import Link from "next/link";
import { brand } from "@/data/restaurant";
import { cn } from "@/lib/utils";

/** Rosette mark: an eight-pointed star enclosing a second, rotated star. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g strokeWidth="1.6">
        <rect x="10" y="10" width="28" height="28" rx="1.5" />
        <rect x="10" y="10" width="28" height="28" rx="1.5" transform="rotate(45 24 24)" />
      </g>
      <g strokeWidth="1.1" opacity="0.85">
        <rect x="17" y="17" width="14" height="14" transform="rotate(22.5 24 24)" />
        <rect x="17" y="17" width="14" height="14" transform="rotate(67.5 24 24)" />
      </g>
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** Click handler, e.g. to close the mobile menu. */
  onNavigate?: () => void;
};

/** Brand lock-up linking to the home page. */
export function Logo({ className, onNavigate }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${brand.name} — accueil`}
      className={cn("group inline-flex min-h-11 items-center gap-3", className)}
    >
      <LogoMark className="size-10 shrink-0 text-gold transition-transform duration-700 ease-elegant group-hover:rotate-45 lg:size-12" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.375rem] text-white lg:text-[1.625rem]">{brand.name}</span>
        <span className="mt-1.5 text-[0.625rem] font-medium tracking-[0.28em] text-muted uppercase lg:text-[0.6875rem]">
          {brand.subtitle}
        </span>
      </span>
    </Link>
  );
}
