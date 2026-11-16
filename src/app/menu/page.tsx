import { ArrowRight, CalendarDays, Info } from "lucide-react";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { DietaryBadges } from "@/components/menu/DietaryBadges";
import { MenuCategory } from "@/components/menu/MenuCategory";
import { MenuFilters } from "@/components/menu/MenuFilters";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { getItemsByCategory, menuCategories } from "@/data/menu";
import { reservationLink } from "@/data/restaurant";
import type { DietaryLabel } from "@/types";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "La carte de Dar Marrakech : entrées, salades marocaines, couscous, tajines, grillades, pastillas, desserts et boissons. Prix en dirhams (MAD).",
};

const legend: DietaryLabel[] = ["vegetarien", "vegan", "sans-gluten", "epice"];

export default function MenuPage() {
  return (
    <>
      <PageIntro
        eyebrow="La carte"
        title="Notre Menu"
        description="Un voyage culinaire au cœur du Maroc, des entrées parfumées aux douceurs au miel."
      />

      <MenuFilters categories={menuCategories.map(({ id, label }) => ({ id, label }))} />

      <div className="bg-zellige-light bg-cream text-ink">
        <Container className="py-12 sm:py-16 lg:py-20">
          {/* Legend and pricing note */}
          <div className="flex flex-col items-center gap-4 text-center">
            <DietaryBadges labels={legend} variant="full" className="justify-center" />
            <p className="flex max-w-2xl items-start gap-2 text-left text-sm text-cocoa sm:items-center">
              <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bronze sm:mt-0" />
              Carte et prix indicatifs en dirhams (MAD), susceptibles d&apos;évoluer selon les saisons. En cas
              d&apos;allergie, merci de nous en informer.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-20 lg:mt-16 lg:gap-24">
            {menuCategories.map((category, index) => (
              <MenuCategory
                key={category.id}
                category={category}
                items={getItemsByCategory(category.id)}
                index={index}
              />
            ))}
          </div>
        </Container>
      </div>

      <section aria-labelledby="menu-cta-title" className="bg-zellige border-t border-gold/15 py-20 lg:py-24">
        <Container size="narrow" className="flex flex-col items-center text-center">
          <Ornament />
          <h2 id="menu-cta-title" className="mt-6 text-3xl sm:text-4xl">
            Envie de goûter à notre carte ?
          </h2>
          <p className="mt-4 text-muted">Réservez votre table et laissez-vous guider par nos spécialités.</p>
          <div className="mt-8">
            <Button href={reservationLink.href} size="lg" icon={<CalendarDays />} trailingIcon={<ArrowRight />}>
              Réserver une table
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
