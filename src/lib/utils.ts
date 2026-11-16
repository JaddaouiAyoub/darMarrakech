/**
 * Joins class names, skipping falsy values.
 * Kept dependency-free on purpose: components expose variants instead of
 * relying on class-conflict resolution.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const priceFormatter = new Intl.NumberFormat("fr-MA", {
  maximumFractionDigits: 0,
});

/** Formats a price in Moroccan dirhams, e.g. 180 → "180 MAD". */
export function formatPrice(amount: number): string {
  return `${priceFormatter.format(amount)} MAD`;
}
