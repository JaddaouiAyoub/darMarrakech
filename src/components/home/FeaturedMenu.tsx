import { ArrowRight } from "lucide-react";
import { MenuCard } from "@/components/menu/MenuCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredMenuItems } from "@/data/menu";

export function FeaturedMenu() {
  return (
    <section
      aria-labelledby="specialites-title"
      className="bg-zellige-light bg-cream pt-16 pb-20 text-ink sm:pt-20 lg:pt-24 lg:pb-28"
    >
      <Container>
        <Reveal className="relative">
          <SectionHeading
            id="specialites-title"
            tone="light"
            eyebrow="Découvrez"
            title="Nos Spécialités"
            subtitle="Un voyage culinaire au cœur du Maroc."
          />
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <Button href="/menu" variant="link-dark" trailingIcon={<ArrowRight />}>
              Voir tout le menu
            </Button>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {featuredMenuItems.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 0.08}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-cocoa">Prix indicatifs en dirhams (MAD).</p>

        <div className="mt-8 flex justify-center lg:hidden">
          <Button href="/menu" variant="outline-dark" size="lg" trailingIcon={<ArrowRight />}>
            Voir tout le menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
