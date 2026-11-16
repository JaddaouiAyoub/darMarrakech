import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Notre Restaurant",
};

// Placeholder — full content is implemented in a later phase.
export default function Page() {
  return (
    <PageIntro
      eyebrow="Notre histoire"
      title="Notre Restaurant"
      description="Plus qu'un restaurant, une invitation au voyage."
    >
      <p className="mt-8 text-sm text-muted italic">Cette page est en cours de préparation.</p>
    </PageIntro>
  );
}
