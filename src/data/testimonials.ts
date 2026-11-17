import type { Testimonial } from "@/types";

/*
 * DEMONSTRATION CONTENT — these are not real customer reviews.
 * Every entry is flagged `sample: true` and the UI labels them as examples.
 * Replace with genuine, verifiable reviews before launch (and set `sample: false`).
 */

export const testimonials: Testimonial[] = [
  {
    id: "exemple-1",
    name: "Sophie L.",
    rating: 5,
    review:
      "Un couscous royal d'une grande finesse et un accueil chaleureux. On se sent transporté au cœur de Marrakech.",
    date: "2026-09-14",
    sample: true,
  },
  {
    id: "exemple-2",
    name: "Karim B.",
    rating: 5,
    review:
      "Le tajine au citron confit était parfaitement équilibré. Le cadre, entre lanternes et zellige, est superbe.",
    date: "2026-10-02",
    sample: true,
  },
  {
    id: "exemple-3",
    name: "Claire M.",
    rating: 4,
    review:
      "Une pastilla généreuse et un thé à la menthe comme là-bas. Service attentionné, nous reviendrons en famille.",
    date: "2026-10-21",
    sample: true,
  },
  {
    id: "exemple-4",
    name: "Youssef A.",
    rating: 5,
    review:
      "Les saveurs de mon enfance : la harira est parfumée juste comme il faut et les pâtisseries sont faites maison.",
    date: "2026-08-30",
    sample: true,
  },
  {
    id: "exemple-5",
    name: "Isabelle R.",
    rating: 4,
    review:
      "Très belle découverte pour un dîner d'anniversaire. Le méchoui était fondant. Un peu d'attente au dessert un samedi soir.",
    date: "2026-09-27",
    sample: true,
  },
  {
    id: "exemple-6",
    name: "Thomas D.",
    rating: 5,
    review:
      "Ambiance feutrée, éclairage magnifique et des assiettes généreuses. Le tajine d'agneau aux pruneaux est un must.",
    date: "2026-10-11",
    sample: true,
  },
  {
    id: "exemple-7",
    name: "Nadia K.",
    rating: 3,
    review:
      "Cuisine savoureuse, mais la salle était bruyante ce soir-là. Je reviendrai plutôt en semaine pour en profiter pleinement.",
    date: "2026-07-19",
    sample: true,
  },
  {
    id: "exemple-8",
    name: "Marc et Léa",
    rating: 5,
    review:
      "Nous avons partagé l'assortiment de salades puis un couscous : tout était frais et délicatement épicé. Bravo à toute l'équipe.",
    date: "2026-11-02",
    sample: true,
  },
];

/** Reviews shown on the home page. */
export const featuredTestimonials = testimonials.slice(0, 3);

/** Average rating and per-star distribution, computed from the list above. */
export function getRatingSummary(list: Testimonial[] = testimonials) {
  const total = list.length;
  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: list.filter((t) => t.rating === stars).length,
  }));
  const average = total === 0 ? 0 : list.reduce((sum, t) => sum + t.rating, 0) / total;
  return { total, average, distribution, allSamples: list.every((t) => t.sample) };
}
