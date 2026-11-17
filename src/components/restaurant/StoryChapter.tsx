import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import type { StoryChapter as StoryChapterType } from "@/data/story";
import { cn } from "@/lib/utils";

type StoryChapterProps = {
  chapter: StoryChapterType;
  index: number;
};

/** Editorial row: arched photograph and text, alternating sides on desktop. */
export function StoryChapter({ chapter, index }: StoryChapterProps) {
  const reversed = index % 2 === 1;
  const titleId = `${chapter.id}-title`;

  return (
    <section id={chapter.id} aria-labelledby={titleId} className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className={cn("relative lg:col-span-5", reversed && "lg:order-2 lg:col-start-8")}>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className={cn(
              "shape-arch absolute inset-0 border border-gold/35",
              reversed ? "-translate-x-4 translate-y-4" : "translate-x-4 translate-y-4",
            )}
          />
          <div className="shape-arch relative size-full overflow-hidden shadow-card">
            <Image
              src={chapter.image.src}
              alt={chapter.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 90vw"
              placeholder="blur"
              blurDataURL={chapter.image.blurDataURL}
              className="object-cover"
            />
          </div>
          {chapter.detailImage && (
            <div
              className={cn(
                "absolute -bottom-8 hidden aspect-[4/3] w-1/2 overflow-hidden rounded-xl shadow-card ring-4 ring-ink sm:block",
                reversed ? "-left-8" : "-right-8",
              )}
            >
              <Image
                src={chapter.detailImage.src}
                alt={chapter.detailImage.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 12rem"
                placeholder="blur"
                blurDataURL={chapter.detailImage.blurDataURL}
                className="object-cover"
              />
            </div>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1} className={cn("lg:col-span-6", reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
        <p className="eyebrow flex items-center gap-3 text-gold">
          <span className="font-serif text-base tracking-normal text-gold-light">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
          {chapter.eyebrow}
        </p>
        <h2 id={titleId} className="mt-5 text-[2rem] sm:text-4xl lg:text-5xl">
          {chapter.title}
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/85">
          {chapter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
