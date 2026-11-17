import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { StarRating } from "./StarRating";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });

/** Customer review card (cream surfaces). Sample reviews are labelled as such. */
export function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-sand bg-white p-7 shadow-soft">
      <Quote aria-hidden="true" className="absolute top-6 right-6 size-8 text-gold/30" />
      <StarRating value={review.rating} />
      <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-ink">« {review.review} »</blockquote>
      <figcaption className="mt-6 border-t border-sand pt-4 text-sm">
        <span className="font-semibold text-ink">{review.name}</span>
        {review.date && (
          <span className="text-cocoa">
            {" "}
            · <time dateTime={review.date}>{dateFormatter.format(new Date(review.date))}</time>
          </span>
        )}
        {review.sample && <span className="mt-1 block text-xs text-cocoa italic">Exemple de démonstration</span>}
      </figcaption>
    </figure>
  );
}
