import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryPreview } from "@/data/gallery";
import { cn } from "@/lib/utils";

/*
 * Bento layout. Mobile: 2 columns. Desktop: tall tiles at both ends,
 * two landscape tiles stacked in the middle.
 */
const layout = [
  "row-span-2 lg:col-start-1 lg:row-start-1",
  "col-span-2 lg:col-start-2 lg:row-start-1",
  "col-span-2 lg:col-start-2 lg:row-start-2",
  "row-span-2 lg:col-start-4 lg:row-start-1",
];

export function GalleryPreview() {
  return (
    <section aria-labelledby="galerie-title" className="bg-espresso py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="galerie-title"
            eyebrow="En images"
            title="Un aperçu de notre univers"
            subtitle="Architecture, saveurs et art de recevoir : l'atmosphère que nous cultivons à chaque service."
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-12 lg:mt-14">
          <ul className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] sm:gap-4 lg:h-[38rem] lg:auto-rows-auto lg:grid-cols-4 lg:grid-rows-2">
            {galleryPreview.map((item, index) => (
              <li
                key={item.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl ring-1 ring-gold/15",
                  layout[index],
                  // Mobile order: tall, tall, wide, wide
                  index === 1 && "order-3 lg:order-none",
                  index === 2 && "order-4 lg:order-none",
                  index === 3 && "order-2 lg:order-none",
                )}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={item.image.blurDataURL}
                  className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="absolute bottom-3 left-4 font-serif text-base text-white sm:bottom-4 sm:text-lg">
                  {item.caption}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Button href="/galerie" variant="outline" size="lg" trailingIcon={<ArrowRight />}>
            Découvrir notre galerie
          </Button>
        </div>
      </Container>
    </section>
  );
}
