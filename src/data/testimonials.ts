import type { Testimonial } from "@/types";

/*
 * DEMONSTRATION CONTENT — these are not real customer reviews.
 * Every entry is flagged `sample: true` and the UI labels them as examples.
 * Replace with genuine, verifiable reviews before launch.
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
];
