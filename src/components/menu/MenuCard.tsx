import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import type { ImageAsset, MenuItem } from "@/types";

type MenuCardProps = {
  /** Cards are photographic, so the dish must have its own image. */
  item: MenuItem & { image: ImageAsset };
  /** `sizes` hint for the responsive image. */
  sizes?: string;
};

/** Photographic dish card: image with name, description and price overlaid. */
export function MenuCard({ item, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" }: MenuCardProps) {
  return (
    <article className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-espresso shadow-card ring-1 ring-gold/15 transition-[transform,box-shadow] duration-500 ease-elegant hover:-translate-y-1 hover:shadow-[0_28px_50px_-20px_rgb(22_15_10/0.75)] sm:aspect-[4/5]">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        blurDataURL={item.image.blurDataURL}
        className="-z-20 object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/45 to-transparent" />

      {item.badge && (
        <span className="absolute top-4 left-4 rounded-full bg-ink/75 px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.14em] text-gold-light uppercase ring-1 ring-gold/40">
          {item.badge}
        </span>
      )}

      <div className="p-5 text-center sm:p-6">
        <h3 className="font-serif text-2xl text-white">{item.name}</h3>
        <p className="mt-1.5 text-sm text-white/80">{item.description}</p>
        <p className="mt-3 font-semibold tracking-wide text-gold-light">
          <span className="sr-only">Prix : </span>
          {formatPrice(item.price)}
        </p>
      </div>
    </article>
  );
}
