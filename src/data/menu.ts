import { images } from "@/data/media";
import type { DietaryLabel, MenuCategory, MenuItem } from "@/types";

/*
 * Restaurant menu — static data for the MVP.
 *
 * Dishes and prices are ILLUSTRATIVE SAMPLE CONTENT (prices in MAD) and must be
 * confirmed by the restaurant. Edit them here; the UI updates automatically.
 * Set `available: false` to show a dish as temporarily unavailable.
 */

export const menuCategories: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées",
    description: "Soupes et bouchées feuilletées pour ouvrir le repas.",
    image: images.soupeTerreCuite,
  },
  {
    id: "salades",
    label: "Salades Marocaines",
    description: "Le traditionnel assortiment de salades cuites et crues, à partager.",
    image: images.saladesMarocaines,
  },
  {
    id: "couscous",
    label: "Couscous",
    description: "Semoule roulée à la main et cuite à la vapeur, comme le veut la tradition.",
    image: images.heroDish,
  },
  {
    id: "tajines",
    label: "Tajines",
    description: "Mijotés lentement dans le plat en terre cuite qui leur donne leur nom.",
    image: images.tajinePruneaux,
  },
  {
    id: "grillades",
    label: "Grillades",
    description: "Viandes marinées aux épices et grillées au feu de bois.",
    image: images.grilladesKefta,
  },
  {
    id: "pastillas",
    label: "Pastillas",
    description: "Feuilles de brick croustillantes, entre sucré et salé.",
    image: images.pastilla,
  },
  {
    id: "desserts",
    label: "Desserts",
    description: "Pâtisseries au miel, aux amandes et à la fleur d'oranger.",
    image: images.patisseriesMarocaines,
  },
  {
    id: "boissons",
    label: "Boissons",
    description: "Thé à la menthe servi à la marocaine, jus frais et boissons chaudes.",
    image: images.theMenthe,
  },
];

export const dietaryLabels: Record<DietaryLabel, string> = {
  vegetarien: "Végétarien",
  vegan: "Végétalien",
  "sans-gluten": "Sans gluten",
  epice: "Épicé",
};

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: "harira",
    name: "Harira",
    description: "Soupe traditionnelle aux tomates, lentilles, pois chiches et herbes fraîches",
    price: 40,
    category: "entrees",
    dietary: ["vegetarien"],
  },
  {
    id: "bissara",
    name: "Bissara",
    description: "Velouté de fèves sèches, huile d'olive, cumin et paprika",
    price: 35,
    category: "entrees",
    dietary: ["vegan", "sans-gluten"],
  },
  {
    id: "briouates-viande",
    name: "Briouates à la viande",
    description: "Triangles croustillants farcis à la viande hachée épicée",
    price: 65,
    category: "entrees",
  },
  {
    id: "briouates-fromage",
    name: "Briouates au fromage",
    description: "Feuilles de brick croustillantes, fromage frais et herbes",
    price: 60,
    category: "entrees",
    dietary: ["vegetarien"],
  },

  // Salades marocaines
  {
    id: "zaalouk",
    name: "Zaalouk",
    description: "Caviar d'aubergines à la tomate, ail et coriandre",
    price: 45,
    category: "salades",
    dietary: ["vegan", "sans-gluten"],
  },
  {
    id: "taktouka",
    name: "Taktouka",
    description: "Poivrons grillés et tomates mijotés au cumin",
    price: 45,
    category: "salades",
    dietary: ["vegan", "sans-gluten"],
  },
  {
    id: "salade-marocaine",
    name: "Salade marocaine",
    description: "Tomates, concombres et oignons finement taillés, vinaigrette au citron",
    price: 40,
    category: "salades",
    dietary: ["vegan", "sans-gluten"],
  },
  {
    id: "assortiment-salades",
    name: "Assortiment de salades",
    description: "Sélection de salades cuites et crues du jour, pour deux personnes",
    price: 90,
    category: "salades",
    badge: "À partager",
    dietary: ["vegan", "sans-gluten"],
  },

  // Couscous
  {
    id: "couscous-royal",
    name: "Couscous Royal",
    description: "Semoule fine, légumes et viandes",
    price: 180,
    image: images.couscousRoyal,
    category: "couscous",
    badge: "Signature",
    featured: true,
  },
  {
    id: "couscous-sept-legumes",
    name: "Couscous aux sept légumes",
    description: "Semoule vapeur, bouillon parfumé et légumes de saison",
    price: 120,
    category: "couscous",
    dietary: ["vegetarien"],
  },
  {
    id: "couscous-tfaya",
    name: "Couscous Tfaya",
    description: "Poulet fondant, oignons caramélisés aux raisins secs et amandes",
    price: 160,
    category: "couscous",
  },

  // Tajines
  {
    id: "tajine-poulet-citron",
    name: "Tajine Poulet Citron",
    description: "Poulet mijoté, citron confit et olives",
    price: 120,
    image: images.tajinePouletCitron,
    category: "tajines",
    featured: true,
    dietary: ["sans-gluten"],
  },
  {
    id: "tajine-kefta",
    name: "Tajine Kefta",
    description: "Boulettes de viande, sauce tomate et œufs",
    price: 110,
    image: images.tajineKefta,
    category: "tajines",
    featured: true,
    dietary: ["epice", "sans-gluten"],
  },
  {
    id: "tajine-agneau-pruneaux",
    name: "Tajine d'agneau aux pruneaux",
    description: "Agneau confit, pruneaux caramélisés, amandes grillées et sésame",
    price: 160,
    image: images.tajinePruneaux,
    category: "tajines",
    badge: "Tradition",
    dietary: ["sans-gluten"],
  },
  {
    id: "tajine-legumes",
    name: "Tajine de légumes",
    description: "Légumes de saison mijotés aux épices douces et olives",
    price: 95,
    category: "tajines",
    dietary: ["vegan", "sans-gluten"],
  },

  // Grillades
  {
    id: "brochettes-kefta",
    name: "Brochettes de kefta",
    description: "Viande hachée aux herbes et aux épices, grillée au feu de bois",
    price: 110,
    category: "grillades",
    dietary: ["epice", "sans-gluten"],
  },
  {
    id: "brochettes-poulet",
    name: "Brochettes de poulet",
    description: "Poulet mariné au citron, paprika et cumin",
    price: 105,
    category: "grillades",
    dietary: ["sans-gluten"],
  },
  {
    id: "mechoui",
    name: "Méchoui d'agneau",
    description: "Épaule d'agneau rôtie lentement, cumin et sel aux herbes",
    price: 220,
    category: "grillades",
    badge: "Signature",
    dietary: ["sans-gluten"],
  },
  {
    id: "assortiment-grillades",
    name: "Assortiment de grillades",
    description: "Kefta, poulet et agneau, pour deux personnes",
    price: 240,
    category: "grillades",
    badge: "À partager",
    dietary: ["sans-gluten"],
  },

  // Pastillas
  {
    id: "pastilla",
    name: "Pastilla",
    description: "Spécialité traditionnelle marocaine",
    price: 90,
    image: images.pastilla,
    category: "pastillas",
    badge: "Tradition",
    featured: true,
  },
  {
    id: "pastilla-fruits-de-mer",
    name: "Pastilla aux fruits de mer",
    description: "Fruits de mer, vermicelles de riz, citron confit et harissa douce",
    price: 140,
    category: "pastillas",
    dietary: ["epice"],
  },

  // Desserts
  {
    id: "chebakia",
    name: "Chebakia",
    description: "Pâtisserie en fleur, frite puis enrobée de miel et de sésame",
    price: 40,
    image: images.chebakia,
    category: "desserts",
    dietary: ["vegetarien"],
  },
  {
    id: "assortiment-patisseries",
    name: "Assortiment de pâtisseries",
    description: "Cornes de gazelle, ghriba et briouates au miel",
    price: 60,
    image: images.patisseriesMarocaines,
    category: "desserts",
    dietary: ["vegetarien"],
  },
  {
    id: "pastilla-au-lait",
    name: "Pastilla au lait",
    description: "Feuilles croustillantes, crème à la fleur d'oranger et amandes",
    price: 55,
    category: "desserts",
    dietary: ["vegetarien"],
  },
  {
    id: "oranges-cannelle",
    name: "Oranges à la cannelle",
    description: "Oranges fraîches, eau de fleur d'oranger et cannelle",
    price: 35,
    category: "desserts",
    dietary: ["vegan", "sans-gluten"],
  },

  // Boissons
  {
    id: "the-menthe",
    name: "Thé à la menthe",
    description: "Thé vert et menthe fraîche, servi à la théière",
    price: 25,
    image: images.theMenthe,
    category: "boissons",
    dietary: ["vegan", "sans-gluten"],
  },
  {
    id: "jus-orange",
    name: "Jus d'orange pressé",
    description: "Oranges fraîchement pressées",
    price: 30,
    category: "boissons",
    dietary: ["vegan", "sans-gluten"],
  },
  {
    id: "jus-avocat",
    name: "Jus d'avocat",
    description: "Avocat, lait et une touche de miel",
    price: 35,
    category: "boissons",
    dietary: ["vegetarien", "sans-gluten"],
  },
  {
    id: "cafe-epices",
    name: "Café aux épices",
    description: "Café parfumé à la cannelle, au gingembre et à la cardamome",
    price: 25,
    category: "boissons",
    dietary: ["vegan", "sans-gluten"],
  },
  {
    id: "eau-minerale",
    name: "Eau minérale",
    description: "Plate ou gazeuse",
    price: 15,
    category: "boissons",
    dietary: ["vegan", "sans-gluten"],
  },
];

/** Dishes highlighted on the home page. Featured dishes must have a photograph. */
export const featuredMenuItems = menuItems.filter(
  (item): item is MenuItem & { image: NonNullable<MenuItem["image"]> } => Boolean(item.featured && item.image),
);

export function getItemsByCategory(categoryId: MenuCategory["id"]) {
  return menuItems.filter((item) => item.category === categoryId);
}
