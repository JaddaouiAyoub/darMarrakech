import { images } from "@/data/media";
import type { ImageAsset } from "@/types";

/*
 * Editorial content for the "Notre Restaurant" page.
 *
 * SAMPLE COPY to be reviewed by the restaurant. It deliberately avoids
 * unverifiable facts (founding date, chef's name, awards, figures).
 * Add those here once they are confirmed.
 */

export type StoryChapter = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: ImageAsset;
  /** Optional secondary image shown overlapping the main one (desktop). */
  detailImage?: ImageAsset;
};

export const storyChapters: StoryChapter[] = [
  {
    id: "histoire",
    eyebrow: "Notre histoire",
    title: "Une maison ouverte sur le Maroc",
    paragraphs: [
      "« Dar » signifie la maison. Dar Marrakech est né de l'envie de recréer l'atmosphère d'une demeure marocaine où l'on reçoit ses invités avec générosité, autour d'une table qui ne désemplit pas.",
      "Arcades, zellige, lanternes ciselées et bois sculpté : chaque détail du lieu rend hommage à l'artisanat marocain et invite à ralentir, le temps d'un repas.",
    ],
    image: images.medersaPatio,
  },
  {
    id: "patrimoine",
    eyebrow: "Patrimoine culinaire",
    title: "Des siècles de saveurs partagées",
    paragraphs: [
      "La cuisine marocaine est le fruit de rencontres : traditions berbères, influences arabes et andalouses, routes des épices venues d'Orient et d'Afrique.",
      "Ras el hanout, safran, cumin, cannelle, citron confit et eau de fleur d'oranger composent une palette aromatique unique, où le sucré et le salé se répondent avec équilibre.",
    ],
    image: images.soukEpices,
  },
  {
    id: "cuisine",
    eyebrow: "Le chef et la cuisine",
    title: "Le temps, ingrédient essentiel",
    paragraphs: [
      "En cuisine, on respecte les gestes transmis de génération en génération : semoule roulée à la main, mijotés lents dans le tajine en terre cuite, pâte à pastilla étirée feuille après feuille.",
      "Les épices sont dosées avec précision, les légumes suivent les saisons, et chaque plat prend le temps qu'il lui faut pour révéler toute sa profondeur.",
    ],
    image: images.cuissonTajine,
  },
];

export const atmosphere = {
  eyebrow: "L'atmosphère",
  quote: "Une lumière tamisée, le parfum des épices et le tintement des verres de thé : le voyage commence dès l'entrée.",
  image: images.heroInterior,
};

export const interiorImages: ImageAsset[] = [
  images.plafondSculpte,
  images.fontaineZellige,
  images.porteSculptee,
  images.lanterneCiselee,
];

export const values: { icon: "authenticite" | "generosite" | "fraicheur" | "hospitalite"; title: string; text: string }[] = [
  {
    icon: "authenticite",
    title: "Authenticité",
    text: "Des recettes fidèles à la tradition, préparées selon les techniques d'origine.",
  },
  {
    icon: "fraicheur",
    title: "Fraîcheur",
    text: "Des produits frais et de saison, travaillés chaque jour en cuisine.",
  },
  {
    icon: "generosite",
    title: "Générosité",
    text: "Des plats à partager, servis avec l'abondance propre à la table marocaine.",
  },
  {
    icon: "hospitalite",
    title: "Hospitalité",
    text: "Un accueil attentionné, pour que chaque convive se sente comme chez lui.",
  },
];

export const valuesImage = images.epicesIngredients;
