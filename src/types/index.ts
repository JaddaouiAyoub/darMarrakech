export type NavItem = {
  label: string;
  href: string;
};

/**
 * A piece of business information that may not be known yet.
 * `placeholder: true` means the value must be replaced before going live
 * and is rendered with a visible "à confirmer" marker.
 */
export type BusinessValue = {
  value: string;
  placeholder: boolean;
};

export type OpeningHours = {
  days: string;
  hours: string;
  placeholder: boolean;
};

export type SocialNetwork = "instagram" | "facebook";

export type SocialLink = {
  network: SocialNetwork;
  label: string;
  /** null until the real profile URL is provided. */
  href: string | null;
};

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
};

export type MenuCategoryId =
  | "entrees"
  | "salades"
  | "couscous"
  | "tajines"
  | "grillades"
  | "pastillas"
  | "desserts"
  | "boissons";

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
};

export type DietaryLabel = "vegetarien" | "vegan" | "sans-gluten" | "epice";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  /** Price in MAD. Sample values — easy to edit in src/data/menu.ts. */
  price: number;
  image: ImageAsset;
  category: MenuCategoryId;
  /** Optional short badge shown on the card, e.g. "Spécialité". */
  badge?: string;
  dietary?: DietaryLabel[];
  featured?: boolean;
  available?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  /** 1 to 5. */
  rating: number;
  review: string;
  /** ISO date (YYYY-MM-DD). */
  date?: string;
  /** True for demonstration content — must never be presented as a verified review. */
  sample: boolean;
};

export type GalleryCategory = "restaurant" | "cuisine" | "ambiance" | "evenements";

export type GalleryImage = {
  id: string;
  image: ImageAsset;
  category: GalleryCategory;
  /** Short caption shown on hover. */
  caption: string;
};
