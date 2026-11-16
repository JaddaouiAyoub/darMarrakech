import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/media";
import { reservationLink } from "@/data/restaurant";

export function ReservationCTA() {
  return (
    <section aria-labelledby="reservation-title" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-36">
      <Image
        src={images.mintTea.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        blurDataURL={images.mintTea.blurDataURL}
        className="-z-20 object-cover object-[center_45%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/55" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-radial from-ink/40 to-ink/85" />

      <Container size="narrow">
        <Reveal className="flex flex-col items-center text-center">
          <Ornament />
          <h2 id="reservation-title" className="mt-8 text-4xl sm:text-5xl lg:text-6xl">
            Votre table vous attend.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/90">
            Réservez votre expérience culinaire chez Dar Marrakech.
          </p>
          <div className="mt-10">
            <Button href={reservationLink.href} size="lg" icon={<CalendarDays />} trailingIcon={<ArrowRight />}>
              Réserver maintenant
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
