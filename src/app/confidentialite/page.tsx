import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

// Placeholder — full content is implemented in a later phase.
export default function Page() {
  return (
    <PageIntro
      eyebrow="Informations légales"
      title="Politique de confidentialité"
      description="Le texte de la politique de confidentialité sera publié prochainement."
    >
      <p className="mt-8 text-sm text-muted italic">Cette page est en cours de préparation.</p>
    </PageIntro>
  );
}
