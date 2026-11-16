import { ArrowRight, CalendarDays, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";

/*
 * TEMPORARY design-system preview (Phase 2).
 * Replaced by the real home page in Phase 4.
 */

const swatches = [
  { name: "Deep Black", token: "ink", hex: "#160F0A", className: "bg-ink" },
  { name: "Dark Brown", token: "espresso", hex: "#24160F", className: "bg-espresso" },
  { name: "Warm Brown", token: "umber", hex: "#392316", className: "bg-umber" },
  { name: "Gold", token: "gold", hex: "#D9A441", className: "bg-gold" },
  { name: "Light Gold", token: "gold-light", hex: "#F4C66B", className: "bg-gold-light" },
  { name: "Cream", token: "cream", hex: "#F8F1E7", className: "bg-cream" },
  { name: "Muted Text", token: "muted", hex: "#B9AA99", className: "bg-muted" },
  { name: "Bronze", token: "bronze", hex: "#8A5C17", className: "bg-bronze" },
];

export default function DesignPreview() {
  return (
    <div>
      {/* Dark surface: hero typography and primary actions */}
      <section className="bg-zellige border-b border-gold/20 pt-36 pb-20 sm:pb-28 lg:pt-44">
        <Container>
          <p className="eyebrow text-gold">Saveurs authentiques du Maroc</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Une expérience culinaire <span className="text-gold">inoubliable</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Découvrez l&apos;art de la cuisine marocaine dans une ambiance chaleureuse et raffinée.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#" size="lg" icon={<CalendarDays />} trailingIcon={<ArrowRight />}>
              Réserver une table
            </Button>
            <Button href="#" size="lg" variant="outline" icon={<UtensilsCrossed />}>
              Découvrir le menu
            </Button>
          </div>
          <div className="mt-6">
            <Button href="#" variant="link" trailingIcon={<ArrowRight />}>
              Voir tout le menu
            </Button>
          </div>
        </Container>
      </section>

      {/* Card surfaces */}
      <section className="bg-espresso py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Couscous Royal", "Tajine Poulet Citron", "Pastilla"].map((name, i) => (
            <article key={name} className="border-hairline rounded-2xl bg-umber/60 p-6 shadow-card">
              <h3 className="text-2xl">{name}</h3>
              <p className="mt-2 text-sm text-muted">Carte de démonstration — surface « umber ».</p>
              <p className="mt-4 font-medium text-gold">{formatPrice([180, 120, 90][i])}</p>
            </article>
          ))}
        </Container>
      </section>

      {/* Cream surface: section heading and swatches */}
      <section className="bg-zellige-light bg-cream py-20 text-ink">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Découvrez"
            title="Nos Spécialités"
            subtitle="Un voyage culinaire au cœur du Maroc."
          />
          <Ornament tone="light" className="mt-8" />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {swatches.map((s) => (
              <li key={s.token} className="overflow-hidden rounded-xl border border-sand bg-white">
                <div className={`h-16 ${s.className}`} />
                <div className="p-3 text-sm">
                  <p className="font-medium">{s.name}</p>
                  <p className="text-cocoa">
                    {s.token} · {s.hex}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="#" variant="outline-dark">
              Notre histoire
            </Button>
            <Button href="#" variant="link-dark" trailingIcon={<ArrowRight />}>
              Découvrir notre galerie
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Réservation" title="Votre table vous attend." subtitle="Réservez votre expérience culinaire chez Dar Marrakech." />
          <Ornament className="mt-8" />
        </Container>
      </section>
    </div>
  );
}
