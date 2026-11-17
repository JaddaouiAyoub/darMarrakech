import type { ContactFormValues } from "./validations";

/*
 * Form submission placeholders.
 *
 * No backend, e-mail service or reservation system is connected yet, so these
 * functions NEVER report a message as delivered. Replace the body with a real
 * integration (API route, form service, CRM…) and return { status: "sent" }.
 */

export type SubmissionResult = { status: "sent" } | { status: "not-configured" };

/** Short delay so the UI can show its loading state realistically. */
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitContactMessage(values: ContactFormValues): Promise<SubmissionResult> {
  void values; // will be sent to the future endpoint
  await wait(800);
  return { status: "not-configured" };
}
