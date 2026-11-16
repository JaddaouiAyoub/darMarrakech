import { ArrowRight, Info, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });

function Rating({ value }: { value: number }) {
  return (
    <div role="img" aria-label={`Note : ${value} sur 5`} className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("size-4", i < value ? "fill-gold text-gold" : "text-sand")}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const hasSamples = testimonials.some((t) => t.sample);

  return (
    <section aria-labelledby="avis-title" className="bg-zellige-light bg-cream py-20 text-ink sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="avis-title" tone="light" eyebrow="Témoignages" title="Ils parlent de nous" />
          {hasSamples && (
            <p className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-bronze/30 bg-white/60 px-4 py-2 text-xs text-cocoa">
              <Info aria-hidden="true" className="size-4 shrink-0 text-bronze" />
              Avis d&apos;exemple — contenu de démonstration, en attendant les avis de nos clients.
            </p>
          )}
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((t, index) => (
            <Reveal as="li" key={t.id} delay={index * 0.08}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-sand bg-white p-7 shadow-soft">
                <Quote aria-hidden="true" className="absolute top-6 right-6 size-8 text-gold/30" />
                <Rating value={t.rating} />
                <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-ink">
                  « {t.review} »
                </blockquote>
                <figcaption className="mt-6 border-t border-sand pt-4 text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  {t.date && (
                    <span className="text-cocoa">
                      {" "}
                      · <time dateTime={t.date}>{dateFormatter.format(new Date(t.date))}</time>
                    </span>
                  )}
                  {t.sample && <span className="mt-1 block text-xs text-cocoa italic">Exemple de démonstration</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button href="/avis" variant="link-dark" trailingIcon={<ArrowRight />}>
            Voir tous les avis
          </Button>
        </div>
      </Container>
    </section>
  );
}
