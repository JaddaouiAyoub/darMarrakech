import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Galerie",
};

// Placeholder — full content is implemented in a later phase.
export default function Page() {
  return (
    <PageIntro
      eyebrow="En images"
      title="Galerie"
      description="L'atmosphère de Dar Marrakech en images."
    >
      <p className="mt-8 text-sm text-muted italic">Cette page est en cours de préparation.</p>
    </PageIntro>
  );
}
