import { Info } from "lucide-react";
import type { Metadata } from "next";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { galleryCategories, galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "L'univers de Dar Marrakech en images : architecture marocaine, cuisine traditionnelle, ambiance feutrée et réceptions.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="En images"
        title="Galerie"
        description="Architecture, saveurs et art de recevoir : l'atmosphère qui inspire Dar Marrakech."
      />

      <section aria-label="Photographies" className="bg-espresso py-14 sm:py-16 lg:py-20">
        <Container>
          <GalleryGrid images={galleryImages} categories={galleryCategories} />
          <p className="mx-auto mt-10 flex max-w-xl items-start justify-center gap-2 text-center text-xs text-muted">
            <Info aria-hidden="true" className="mt-px size-4 shrink-0 text-gold/70" />
            Photographies d&apos;illustration, en attendant les images de notre restaurant.
          </p>
        </Container>
      </section>

      <ReservationCTA />
    </>
  );
}
