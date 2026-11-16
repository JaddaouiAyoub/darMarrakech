import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small uppercase label, e.g. "Découvrez". */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** "dark" for dark surfaces, "light" for cream surfaces. */
  tone?: "dark" | "light";
  align?: "center" | "left";
  /** Heading level; sections default to h2. */
  as?: "h1" | "h2" | "h3";
  /** Id on the heading, for aria-labelledby on the parent section. */
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  align = "center",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const centered = align === "center";

  return (
    <div className={cn("flex flex-col gap-3", centered ? "items-center text-center" : "items-start", className)}>
      {eyebrow && (
        <p className={cn("eyebrow flex items-center gap-3", isDark ? "text-gold" : "text-bronze")}>
          {centered && <span aria-hidden="true" className="h-px w-6 bg-current opacity-70 sm:w-8" />}
          {eyebrow}
          <span aria-hidden="true" className="h-px w-6 bg-current opacity-70 sm:w-8" />
        </p>
      )}
      <Heading
        id={id}
        className={cn(
          "text-[2rem] sm:text-4xl lg:text-5xl",
          centered && "mx-auto max-w-3xl",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg",
            centered && "mx-auto",
            isDark ? "text-muted" : "text-cocoa",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
