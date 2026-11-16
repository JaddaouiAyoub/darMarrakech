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
