import { ArrowRight, CalendarDays, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/media";
import { reservationLink } from "@/data/restaurant";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden lg:min-h-[50rem]">
      {/* Background: lantern-lit dining room */}
      <Image
        src={images.heroInterior.src}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={images.heroInterior.blurDataURL}
        className="-z-20 object-cover object-[30%_center] lg:object-center"
      />
      <div aria-hidden="true" className="scrim-hero absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-ink/80 to-transparent" />

      <Container className="relative flex flex-1 items-center pt-[calc(var(--spacing-header)+2.5rem)] pb-28 lg:pt-32 lg:pb-40">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal trigger="mount" y={16}>
              <p className="eyebrow text-gold">Saveurs authentiques du Maroc</p>
            </Reveal>
            <Reveal trigger="mount" delay={0.08}>
              <h1
                id="hero-title"
                className="mt-5 text-[2.75rem] leading-[1.02] min-[400px]:text-5xl sm:text-6xl lg:text-7xl 2xl:text-[5.25rem]"
              >
                Une expérience culinaire <span className="text-gold-light">inoubliable</span>
              </h1>
            </Reveal>
            <Reveal trigger="mount" delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
                Découvrez l&apos;art de la cuisine marocaine dans une ambiance chaleureuse et raffinée.
              </p>
            </Reveal>
            <Reveal trigger="mount" delay={0.24} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={reservationLink.href} size="lg" icon={<CalendarDays />} trailingIcon={<ArrowRight />}>
                Réserver une table
              </Button>
              <Button href="/menu" size="lg" variant="outline" icon={<UtensilsCrossed />}>
                Découvrir le menu
              </Button>
            </Reveal>
          </div>

          {/* Foreground dish (desktop) */}
          <Reveal trigger="mount" delay={0.2} y={32} className="relative hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
              <div aria-hidden="true" className="absolute -inset-5 rounded-full border border-gold/30" />
              <div aria-hidden="true" className="absolute -inset-10 rounded-full border border-gold/10" />
              <div className="relative size-full overflow-hidden rounded-full shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)] ring-1 ring-gold/50">
                <Image
                  src={images.heroDish.src}
                  alt={images.heroDish.alt}
                  fill
                  sizes="(min-width: 1024px) 30rem, 1px"
                  placeholder="blur"
                  blurDataURL={images.heroDish.blurDataURL}
                  className="scale-[1.18] object-cover object-[48%_55%]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
