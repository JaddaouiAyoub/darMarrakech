import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Avis",
};

// Placeholder — full content is implemented in a later phase.
export default function Page() {
  return (
    <PageIntro
      eyebrow="Témoignages"
      title="Ils parlent de nous"
      description="Ce que nos convives retiennent de leur expérience."
    >
      <p className="mt-8 text-sm text-muted italic">Cette page est en cours de préparation.</p>
    </PageIntro>
  );
}
