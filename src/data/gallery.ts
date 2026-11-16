import { images } from "@/data/media";
import type { GalleryImage } from "@/types";

/* Gallery images. Stock photographs used as stand-ins — see IMAGE_CREDITS.md. */

export const galleryPreview: GalleryImage[] = [
  { id: "zellige-courtyard", image: images.zelligeCourtyard, category: "restaurant", caption: "Architecture traditionnelle" },
  { id: "tagine-zellige", image: images.tagineZellige, category: "cuisine", caption: "Saveurs du Maroc" },
  { id: "moroccan-table", image: images.moroccanTable, category: "ambiance", caption: "L'art de la table" },
  { id: "lanterns", image: images.lanterns, category: "ambiance", caption: "Lanternes ciselées" },
];
