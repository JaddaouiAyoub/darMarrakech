import { ArrowRight } from "lucide-react";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { SampleNotice } from "@/components/reviews/SampleNotice";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredTestimonials } from "@/data/testimonials";

export function Testimonials() {
  const hasSamples = featuredTestimonials.some((t) => t.sample);

  return (
    <section aria-labelledby="avis-title" className="bg-zellige-light bg-cream py-20 text-ink sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="avis-title" tone="light" eyebrow="Témoignages" title="Ils parlent de nous" />
          {hasSamples && <SampleNotice className="mt-6" />}
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          {featuredTestimonials.map((review, index) => (
            <Reveal as="li" key={review.id} delay={index * 0.08}>
              <ReviewCard review={review} />
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
