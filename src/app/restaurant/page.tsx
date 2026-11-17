import { ArrowRight, HandHeart, Leaf, Sparkles, Star, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { PageIntro } from "@/components/layout/PageIntro";
import { StoryChapter } from "@/components/restaurant/StoryChapter";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MoroccanStar } from "@/components/ui/MoroccanStar";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { atmosphere, interiorImages, storyChapters, values, valuesImage } from "@/data/story";

export const metadata: Metadata = {
  title: "Notre Restaurant",
  description:
    "L'histoire de Dar Marrakech : une maison dédiée à la cuisine marocaine authentique, à son patrimoine, à ses gestes et à l'art de recevoir.",
};

const valueIcons: Record<(typeof values)[number]["icon"], LucideIcon> = {
  authenticite: Star,
  fraicheur: Leaf,
  generosite: Sparkles,
  hospitalite: HandHeart,
};

export default function RestaurantPage() {
  return (
    <>
      <PageIntro
        eyebrow="Notre Restaurant"
        title="Plus qu'un restaurant, une invitation au voyage"
        description="Plongez dans l'univers authentique du Maroc, où traditions et saveurs se rencontrent pour une expérience unique."
      />

      {/* History, culinary heritage, chef and kitchen */}
      <div className="bg-zellige bg-ink py-20 sm:py-24 lg:py-32">
        <Container className="flex flex-col gap-24 lg:gap-36">
          {storyChapters.map((chapter, index) => (
            <StoryChapter key={chapter.id} chapter={chapter} index={index} />
          ))}
        </Container>
      </div>

      {/* Atmosphere */}
      <section aria-labelledby="atmosphere-title" className="relative isolate overflow-hidden py-28 sm:py-36 lg:py-44">
        <Image
          src={atmosphere.image.src}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={atmosphere.image.blurDataURL}
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/65" />
        <Container size="narrow">
          <Reveal className="flex flex-col items-center text-center">
            <MoroccanStar className="size-8 text-gold" />
            <h2 id="atmosphere-title" className="eyebrow mt-6 text-gold">
              {atmosphere.eyebrow}
            </h2>
            <blockquote className="mt-6 font-serif text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
              « {atmosphere.quote} »
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Interior photographs */}
      <section aria-labelledby="interieur-title" className="bg-espresso py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              id="interieur-title"
              eyebrow="Le décor"
              title="Un écrin d'artisanat marocain"
              subtitle="Bois sculpté, zellige, stuc et lanternes : l'inspiration de notre décor."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {interiorImages.map((image, index) => (
              <Reveal
                as="li"
                key={image.src}
                delay={index * 0.06}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-gold/15"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                  className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                />
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Button href="/galerie" variant="outline" size="lg" trailingIcon={<ArrowRight />}>
              Découvrir notre galerie
            </Button>
          </div>
        </Container>
      </section>

      {/* Values and philosophy */}
      <section aria-labelledby="valeurs-title" className="bg-zellige-light bg-cream py-20 text-ink sm:py-24 lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              id="valeurs-title"
              tone="light"
              align="left"
              eyebrow="Nos valeurs"
              title="Une philosophie de l'accueil"
              subtitle="Quatre principes guident chaque service, de la cuisine à la salle."
            />
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-2xl shadow-soft lg:block">
              <Image
                src={valuesImage.src}
                alt={valuesImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 0px"
                placeholder="blur"
                blurDataURL={valuesImage.blurDataURL}
                className="object-cover"
              />
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {values.map((value, index) => {
              const Icon = valueIcons[value.icon];
              return (
                <Reveal
                  as="li"
                  key={value.title}
                  delay={index * 0.06}
                  className="rounded-2xl border border-sand bg-white p-7 shadow-soft"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-ink text-gold">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 text-2xl text-ink">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-cocoa">{value.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <ReservationCTA />
    </>
  );
}
