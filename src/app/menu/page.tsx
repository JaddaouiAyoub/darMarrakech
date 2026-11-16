import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Menu",
};

// Placeholder — full content is implemented in a later phase.
export default function Page() {
  return (
    <PageIntro
      eyebrow="La carte"
      title="Notre Menu"
      description="Un voyage culinaire au cœur du Maroc."
    >
      <p className="mt-8 text-sm text-muted italic">Cette page est en cours de préparation.</p>
    </PageIntro>
  );
}
