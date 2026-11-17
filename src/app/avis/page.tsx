import { ArrowRight, CalendarDays, MessageSquareText } from "lucide-react";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { SampleNotice } from "@/components/reviews/SampleNotice";
import { StarRating } from "@/components/reviews/StarRating";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { reservationLink } from "@/data/restaurant";
import { getRatingSummary, testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Avis",
  description: "Les avis et témoignages de nos convives sur leur expérience chez Dar Marrakech.",
};

const averageFormatter = new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export default function ReviewsPage() {
  const summary = getRatingSummary();
  const reviews = [...testimonials].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  return (
    <>
      <PageIntro
        eyebrow="Témoignages"
        title="Ils parlent de nous"
        description="Ce que nos convives retiennent de leur passage chez Dar Marrakech."
      />

      <div className="bg-zellige-light bg-cream py-14 text-ink sm:py-16 lg:py-20">
        <Container>
          {summary.allSamples && <SampleNotice />}

          {/* Rating summary */}
          <Reveal className="mt-10">
            <section
              aria-labelledby="note-title"
              className="mx-auto grid max-w-4xl gap-8 rounded-2xl border border-sand bg-white p-7 shadow-soft sm:p-10 md:grid-cols-[auto_1fr] md:gap-12"
            >
              <div className="flex flex-col items-center justify-center text-center md:border-r md:border-sand md:pr-12">
                <h2 id="note-title" className="eyebrow text-bronze">
                  Note moyenne
                </h2>
                <p className="mt-3 font-serif text-6xl text-ink">
                  {averageFormatter.format(summary.average)}
                  <span className="text-2xl text-cocoa"> / 5</span>
                </p>
                <StarRating value={summary.average} size="lg" className="mt-3" />
                <p className="mt-3 text-sm text-cocoa">
                  Sur {summary.total} avis{summary.allSamples && " d'exemple"}
                </p>
              </div>

              <div>
                <h3 className="sr-only">Répartition des notes</h3>
                <ul className="space-y-3">
                  {summary.distribution.map(({ stars, count }) => {
                    const percent = summary.total ? Math.round((count / summary.total) * 100) : 0;
                    return (
                      <li key={stars} className="grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-3 text-sm">
                        <span className="text-cocoa">
                          {stars} étoile{stars > 1 && "s"}
                        </span>
                        <span
                          role="meter"
                          aria-valuemin={0}
                          aria-valuemax={summary.total}
                          aria-valuenow={count}
                          aria-label={`${count} avis à ${stars} étoile${stars > 1 ? "s" : ""}`}
                          className="h-2.5 overflow-hidden rounded-full bg-sand"
                        >
                          <span className="block h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
                        </span>
                        <span className="text-right font-medium text-ink tabular-nums">{count}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </Reveal>

          {/* All reviews */}
          <section aria-labelledby="liste-avis-title" className="mt-16">
            <h2 id="liste-avis-title" className="text-center text-3xl sm:text-4xl">
              Tous les avis
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {reviews.map((review, index) => (
                <Reveal as="li" key={review.id} delay={(index % 3) * 0.06}>
                  <ReviewCard review={review} />
                </Reveal>
              ))}
            </ul>
          </section>
        </Container>
      </div>

      {/* Contact CTA */}
      <section aria-labelledby="avis-cta-title" className="bg-zellige border-t border-gold/15 py-20 lg:py-24">
        <Container size="narrow" className="flex flex-col items-center text-center">
          <Ornament />
          <h2 id="avis-cta-title" className="mt-6 text-3xl sm:text-4xl">
            Vous êtes venu chez nous ?
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Votre avis compte. Partagez votre expérience ou posez-nous vos questions, nous vous répondrons avec
            plaisir.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg" icon={<MessageSquareText />} trailingIcon={<ArrowRight />}>
              Nous contacter
            </Button>
            <Button href={reservationLink.href} size="lg" variant="outline" icon={<CalendarDays />}>
              Réserver une table
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
