import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/** Visible disclaimer shown wherever demonstration reviews are displayed. */
export function SampleNotice({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "mx-auto flex w-fit items-center gap-2 rounded-full border border-bronze/30 bg-white/60 px-4 py-2 text-xs text-cocoa",
        className,
      )}
    >
      <Info aria-hidden="true" className="size-4 shrink-0 text-bronze" />
      Avis d&apos;exemple — contenu de démonstration, en attendant les avis de nos clients.
    </p>
  );
}
