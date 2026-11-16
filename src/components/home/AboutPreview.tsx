import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MoroccanStar } from "@/components/ui/MoroccanStar";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/media";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-title" className="bg-zellige relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Text */}
        <Reveal className="lg:col-span-6 xl:col-span-5">
          <p className="eyebrow text-gold">À propos de Dar Marrakech</p>
          <h2 id="about-title" className="mt-4 text-[2rem] sm:text-4xl lg:text-5xl">
            Plus qu&apos;un restaurant, une invitation au voyage.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Plongez dans l&apos;univers authentique du Maroc, où traditions et saveurs se rencontrent pour une
            expérience unique.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Dar — « la maison » — dit tout de notre philosophie : recevoir chaque convive comme un hôte. Épices
            torréfiées, cuissons lentes au tajine, pâtisseries au miel et thé à la menthe servi avec cérémonie :
            chaque détail rend hommage à l&apos;hospitalité marocaine.
          </p>
          <div className="mt-10">
            <Button href="/restaurant" size="lg" trailingIcon={<ArrowRight />}>
              Notre histoire
            </Button>
          </div>
        </Reveal>

        {/* Arched photograph */}
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none xl:col-span-6 xl:col-start-7">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[28rem]">
            <div aria-hidden="true" className="shape-arch absolute -inset-3 border border-gold/40 sm:-inset-4" />
            <div aria-hidden="true" className="shape-arch absolute inset-0 translate-x-5 translate-y-5 bg-umber/60 sm:translate-x-8 sm:translate-y-8" />
            <div className="shape-arch relative size-full overflow-hidden shadow-card">
              <Image
                src={images.riadCourtyard.src}
                alt={images.riadCourtyard.alt}
                fill
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 28rem, 90vw"
                placeholder="blur"
                blurDataURL={images.riadCourtyard.blurDataURL}
                className="object-cover object-[center_35%]"
              />
            </div>
            <MoroccanStar
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 size-14 rounded-full bg-ink p-2.5 text-gold ring-1 ring-gold/40"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
