import type { BusinessValue, NavItem, OpeningHours, SocialLink } from "@/types";

/*
 * Restaurant identity and contact data.
 *
 * IMPORTANT: no real business information has been provided yet.
 * Every value flagged `placeholder: true` is rendered with a visible
 * "à confirmer" marker and must be replaced before launch.
 * Do not publish placeholder values in structured data (schema.org).
 */

export const brand = {
  name: "Dar Marrakech",
  subtitle: "Restaurant marocain",
  tagline: "Une expérience culinaire inoubliable.",
  description:
    "Découvrez l'art de la cuisine marocaine dans une ambiance chaleureuse et raffinée. Tradition, générosité et saveurs authentiques.",
} as const;

export const mainNavigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Notre Restaurant", href: "/restaurant" },
  { label: "Menu", href: "/menu" },
  { label: "Galerie", href: "/galerie" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
];

export const reservationLink: NavItem = {
  label: "Réserver une table",
  href: "/reservation",
};

export const legalNavigation: NavItem[] = [
  { label: "Politique de confidentialité", href: "/confidentialite" },
];

export const contact = {
  address: { value: "Adresse à communiquer", placeholder: true },
  phone: { value: "Téléphone à communiquer", placeholder: true },
  email: { value: "E-mail à communiquer", placeholder: true },
} satisfies Record<string, BusinessValue>;

export const openingHours: OpeningHours[] = [
  { days: "Lundi – Vendredi", hours: "Horaires à confirmer", placeholder: true },
  { days: "Samedi – Dimanche", hours: "Horaires à confirmer", placeholder: true },
];

export const socialLinks: SocialLink[] = [
  { network: "instagram", label: "Instagram", href: null },
  { network: "facebook", label: "Facebook", href: null },
];
