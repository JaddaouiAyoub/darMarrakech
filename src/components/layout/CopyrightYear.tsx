import { cacheLife } from "next/cache";

/**
 * Current year for the copyright line.
 * Cached (Cache Components) so the footer stays statically prerendered;
 * refreshed at most daily.
 */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
