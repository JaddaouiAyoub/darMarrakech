import { cn } from "@/lib/utils";

/** Small "À confirmer" marker for business information not yet provided. */
export function PlaceholderTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "ml-2 inline-block rounded-full border border-gold/30 px-2 py-0.5 align-middle text-[0.625rem] font-medium tracking-wider text-gold/80 uppercase",
        className,
      )}
    >
      À confirmer
    </span>
  );
}
