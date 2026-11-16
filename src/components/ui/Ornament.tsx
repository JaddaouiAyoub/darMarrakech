import { cn } from "@/lib/utils";
import { MoroccanStar } from "./MoroccanStar";

type OrnamentProps = {
  className?: string;
  /** "dark" for dark surfaces (gold), "light" for cream surfaces (bronze). */
  tone?: "dark" | "light";
};

/** Elegant separator: hairline — khatam star — hairline. Purely decorative. */
export function Ornament({ className, tone = "dark" }: OrnamentProps) {
  const color = tone === "dark" ? "text-gold" : "text-bronze";
  return (
    <div aria-hidden="true" className={cn("flex items-center justify-center gap-3", color, className)}>
      <span className="h-px w-12 bg-linear-to-r from-transparent to-current opacity-60 sm:w-20" />
      <MoroccanStar className="size-4" />
      <span className="h-px w-12 bg-linear-to-l from-transparent to-current opacity-60 sm:w-20" />
    </div>
  );
}
