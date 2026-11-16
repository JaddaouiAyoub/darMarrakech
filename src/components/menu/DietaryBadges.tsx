import { Flame, Leaf, Sprout, WheatOff, type LucideIcon } from "lucide-react";
import { dietaryLabels } from "@/data/menu";
import { cn } from "@/lib/utils";
import type { DietaryLabel } from "@/types";

export const dietaryIcons: Record<DietaryLabel, LucideIcon> = {
  vegetarien: Leaf,
  vegan: Sprout,
  "sans-gluten": WheatOff,
  epice: Flame,
};

type DietaryBadgesProps = {
  labels: DietaryLabel[];
  /** "icon" shows compact icons (with accessible names); "full" adds the text. */
  variant?: "icon" | "full";
  className?: string;
};

export function DietaryBadges({ labels, variant = "icon", className }: DietaryBadgesProps) {
  if (labels.length === 0) return null;
  return (
    <ul className={cn("flex flex-wrap items-center gap-1.5", className)} aria-label="Informations alimentaires">
      {labels.map((label) => {
        const Icon = dietaryIcons[label];
        return (
          <li
            key={label}
            title={dietaryLabels[label]}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-bronze/25 text-bronze",
              variant === "icon" ? "size-7 justify-center" : "px-3 py-1 text-xs font-medium",
            )}
          >
            <Icon aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
            <span className={variant === "icon" ? "sr-only" : undefined}>{dietaryLabels[label]}</span>
          </li>
        );
      })}
    </ul>
  );
}
