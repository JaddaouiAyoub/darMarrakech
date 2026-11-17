import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  /** 0 to 5; decimals are rounded to the nearest half for display. */
  value: number;
  size?: "sm" | "lg";
  /** Colour of empty stars: "light" for cream surfaces, "dark" for dark ones. */
  tone?: "light" | "dark";
  className?: string;
};

const formatter = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });

export function StarRating({ value, size = "sm", tone = "light", className }: StarRatingProps) {
  const rounded = Math.round(value * 2) / 2;
  const iconSize = size === "lg" ? "size-6" : "size-4";

  return (
    <div role="img" aria-label={`Note : ${formatter.format(value)} sur 5`} className={cn("flex gap-1", className)}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(Math.max(rounded - i, 0), 1); // 0, 0.5 or 1
        return (
          <span key={i} aria-hidden="true" className={cn("relative inline-flex", iconSize)}>
            <Star className={cn("absolute inset-0 size-full", tone === "light" ? "text-sand" : "text-gold/25")} strokeWidth={1.5} />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className={cn("fill-gold text-gold", iconSize)} strokeWidth={1.5} />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
