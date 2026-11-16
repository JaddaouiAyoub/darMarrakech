import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { cn, formatPrice } from "@/lib/utils";
import type { MenuCategory as MenuCategoryType, MenuItem } from "@/types";
import { DietaryBadges } from "./DietaryBadges";

function MenuItemRow({ item }: { item: MenuItem }) {
  const unavailable = item.available === false;

  return (
    <li className={cn("group flex gap-4 py-5 sm:gap-5", unavailable && "opacity-55")}>
      {item.image && (
        <div className="relative size-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-sand sm:size-24">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="96px"
            placeholder="blur"
            blurDataURL={item.image.blurDataURL}
            className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-110"
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h3 className="font-serif text-xl text-ink sm:text-[1.375rem]">{item.name}</h3>
          <span aria-hidden="true" className="mb-1 hidden flex-1 border-b border-dotted border-bronze/40 sm:block" />
          <p className="ml-auto shrink-0 font-semibold whitespace-nowrap text-bronze sm:ml-0">
            <span className="sr-only">Prix : </span>
            {formatPrice(item.price)}
          </p>
        </div>

        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-cocoa">{item.description}</p>

        {(item.badge || item.dietary?.length || unavailable) && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {item.badge && (
              <span className="rounded-full bg-ink px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.12em] text-gold-light uppercase">
                {item.badge}
              </span>
            )}
            {unavailable && (
              <span className="rounded-full border border-cocoa/40 px-3 py-1 text-xs font-medium text-cocoa">
                Momentanément indisponible
              </span>
            )}
            {item.dietary && <DietaryBadges labels={item.dietary} />}
          </div>
        )}
      </div>
    </li>
  );
}

type MenuCategoryProps = {
  category: MenuCategoryType;
  items: MenuItem[];
  index: number;
};

/** One section of the carte: photographic banner followed by the list of dishes. */
export function MenuCategory({ category, items, index }: MenuCategoryProps) {
  const titleId = `${category.id}-title`;

  return (
    <section
      id={category.id}
      aria-labelledby={titleId}
      data-menu-category={category.id}
      className="scroll-mt-[4.5rem]"
    >
      <Reveal>
        <div className="relative isolate flex aspect-[16/9] items-end overflow-hidden rounded-2xl shadow-card sm:aspect-[21/9] lg:aspect-[3/1]">
          <Image
            src={category.image.src}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            placeholder="blur"
            blurDataURL={category.image.blurDataURL}
            className="-z-20 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink/90 via-ink/40 to-ink/10" />
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="eyebrow text-gold-light">{String(index + 1).padStart(2, "0")}</p>
            <h2 id={titleId} className="mt-2 text-3xl text-white sm:text-4xl lg:text-5xl">
              {category.label}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">{category.description}</p>
          </div>
        </div>
      </Reveal>

      <ul className="mt-4 grid divide-y divide-sand lg:grid-cols-2 lg:gap-x-14 lg:divide-y-0 lg:[&>li]:border-b lg:[&>li]:border-sand">
        {items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
