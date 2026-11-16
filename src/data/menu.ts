import { images } from "@/data/media";
import type { MenuCategory, MenuItem } from "@/types";

/*
 * Restaurant menu — static data for the MVP.
 * Prices are ILLUSTRATIVE SAMPLE VALUES in MAD and must be confirmed by the restaurant.
 * The complete menu (all categories) is added with the menu page.
 */

export const menuCategories: MenuCategory[] = [
  { id: "entrees", label: "Entrées" },
  { id: "salades", label: "Salades Marocaines" },
  { id: "couscous", label: "Couscous" },
  { id: "tajines", label: "Tajines" },
  { id: "grillades", label: "Grillades" },
  { id: "pastillas", label: "Pastillas" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

export const menuItems: MenuItem[] = [
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
    id: "tajine-poulet-citron",
    name: "Tajine Poulet Citron",
    description: "Poulet mijoté, citron confit et olives",
    price: 120,
    image: images.tajinePouletCitron,
    category: "tajines",
    featured: true,
  },
  {
    id: "tajine-kefta",
    name: "Tajine Kefta",
    description: "Boulettes de viande, sauce tomate et œufs",
    price: 110,
    image: images.tajineKefta,
    category: "tajines",
    featured: true,
  },
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
];

export const featuredMenuItems = menuItems.filter((item) => item.featured);
