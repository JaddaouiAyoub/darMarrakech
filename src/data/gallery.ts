import { images } from "@/data/media";
import type { GalleryCategory, GalleryImage } from "@/types";

/*
 * Gallery images.
 * These are royalty-free stock photographs used as ILLUSTRATIONS until the
 * restaurant's own photography is available (see IMAGE_CREDITS.md).
 * Captions describe the photograph, never claim it shows Dar Marrakech itself.
 */

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "restaurant", label: "Restaurant" },
  { id: "cuisine", label: "Cuisine" },
  { id: "ambiance", label: "Ambiance" },
  { id: "evenements", label: "Événements" },
];

export const galleryImages: GalleryImage[] = [
  // Restaurant — architecture and décor
  { id: "zellige-courtyard", image: images.zelligeCourtyard, category: "restaurant", caption: "Arcades et stuc sculpté" },
  { id: "riad-courtyard", image: images.riadCourtyard, category: "restaurant", caption: "Le patio d'un riad" },
  { id: "fontaine-zellige", image: images.fontaineZellige, category: "restaurant", caption: "Fontaine en zellige" },
  { id: "plafond-sculpte", image: images.plafondSculpte, category: "restaurant", caption: "Plafond en cèdre sculpté" },
  { id: "porte-sculptee", image: images.porteSculptee, category: "restaurant", caption: "Porte traditionnelle" },
  { id: "motif-zellige", image: images.motifZellige, category: "restaurant", caption: "L'art du zellige" },

  // Cuisine
  { id: "tagine-zellige", image: images.tagineZellige, category: "cuisine", caption: "Tajine servi à table" },
  { id: "couscous-royal", image: images.couscousRoyal, category: "cuisine", caption: "Couscous aux légumes" },
  { id: "tajine-kefta", image: images.tajineKefta, category: "cuisine", caption: "Tajine de kefta" },
  { id: "pastilla", image: images.pastilla, category: "cuisine", caption: "Pastilla traditionnelle" },
  { id: "tajine-table", image: images.tajineTable, category: "cuisine", caption: "Saveurs mijotées" },
  { id: "chebakia", image: images.chebakia, category: "cuisine", caption: "Chebakia au miel" },

  // Ambiance
  { id: "hero-interior", image: images.heroInterior, category: "ambiance", caption: "Lumière tamisée" },
  { id: "lanterns", image: images.lanterns, category: "ambiance", caption: "Lanternes ciselées" },
  { id: "lanterne-ciselee", image: images.lanterneCiselee, category: "ambiance", caption: "Jeux d'ombre et de lumière" },
  { id: "mint-tea", image: images.mintTea, category: "ambiance", caption: "Le rituel du thé" },
  { id: "the-patisseries", image: images.thePatisseries, category: "ambiance", caption: "Thé et douceurs" },
  { id: "moroccan-table", image: images.moroccanTable, category: "ambiance", caption: "L'art de recevoir" },

  // Événements
  { id: "table-chandelles", image: images.tableChandelles, category: "evenements", caption: "Dîner aux chandelles" },
  { id: "repas-partage", image: images.repasPartage, category: "evenements", caption: "Repas à partager" },
  { id: "reception-soiree", image: images.receptionSoiree, category: "evenements", caption: "Réceptions en soirée" },
  { id: "lanternes-jardin", image: images.lanternesJardin, category: "evenements", caption: "Soirées sous les lanternes" },
];

/** Four-image selection shown on the home page. */
export const galleryPreview: GalleryImage[] = ["zellige-courtyard", "tagine-zellige", "moroccan-table", "lanterns"].map(
  (id) => galleryImages.find((item) => item.id === id)!,
);
