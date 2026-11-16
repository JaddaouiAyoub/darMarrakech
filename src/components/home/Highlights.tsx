import { ChefHat, Heart, Leaf, Star, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const highlights: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Star,
    title: "Cuisine Authentique et Raffinée",
    description: "Les recettes de la tradition marocaine, sublimées avec élégance.",
  },
  {
    icon: ChefHat,
    title: "Chefs Expérimentés",
    description: "Un savoir-faire transmis et perfectionné au fil des années.",
  },
  {
    icon: Leaf,
    title: "Produits Frais et Locaux",
    description: "Des ingrédients choisis avec soin, au rythme des saisons.",
  },
  {
    icon: Heart,
    title: "Cadre Élégant et Convivial",
    description: "Un décor chaleureux pour partager des moments inoubliables.",
  },
];

/** Feature band that overlaps the bottom of the hero. */
export function Highlights() {
  return (
    <section
      aria-label="Nos engagements"
      className="relative z-10 -mt-24 bg-[linear-gradient(to_bottom,transparent_6rem,var(--color-cream)_6rem)]"
    >
      <Container>
        <Reveal>
          <ul className="border-hairline grid grid-cols-2 rounded-2xl bg-espresso/95 shadow-card lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <li
                key={title}
                className={cn(
                  "flex flex-col items-center gap-3 px-3 py-6 text-center sm:px-6 lg:flex-row lg:items-start lg:gap-4 lg:px-7 lg:py-8 lg:text-left",
                  index % 2 === 1 && "border-l border-gold/15",
                  index >= 2 && "border-t border-gold/15 lg:border-t-0",
                  index === 2 && "lg:border-l",
                )}
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h2 className="font-sans text-sm leading-snug font-semibold text-white sm:text-[0.9375rem]">{title}</h2>
                  <p className="mt-1.5 hidden text-sm leading-relaxed text-muted sm:block">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
