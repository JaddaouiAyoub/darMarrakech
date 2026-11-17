import { z } from "zod";
import { allSlots, reservationSettings } from "@/data/reservation";

/* Form schemas shared by the client-side forms. Messages are in French. */

export const contactSubjects = [
  "Renseignement",
  "Réservation de groupe",
  "Événement privé",
  "Retour d'expérience",
  "Autre",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Veuillez indiquer votre nom complet.")
    .max(80, "Le nom ne doit pas dépasser 80 caractères."),
  email: z.string().trim().min(1, "Veuillez indiquer votre adresse e-mail.").pipe(z.email("Adresse e-mail invalide.")),
  subject: z.enum(contactSubjects, "Veuillez choisir un sujet."),
  message: z
    .string()
    .trim()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(2000, "Votre message ne doit pas dépasser 2000 caractères."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/* -------------------------------------------------------------------------- */
/*  Reservation                                                                */
/* -------------------------------------------------------------------------- */

/** Local calendar date as "YYYY-MM-DD" (not UTC), optionally offset by `days`. */
export function localISODate(days = 0, from: Date = new Date()): string {
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate() + days);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Current local time as "HH:MM". */
function localTime(now: Date = new Date()): string {
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

// Accepts international or local formats: +212 6 12 34 56 78, 06-12-34-56-78, (06) 12…
const PHONE_PATTERN = /^\+?[\d\s().-]{8,20}$/;

export const reservationSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Veuillez indiquer votre nom complet.")
      .max(80, "Le nom ne doit pas dépasser 80 caractères."),
    phone: z
      .string()
      .trim()
      .min(1, "Veuillez indiquer votre numéro de téléphone.")
      .refine(
        (value) => PHONE_PATTERN.test(value) && value.replace(/\D/g, "").length >= 8,
        "Numéro de téléphone invalide.",
      ),
    email: z.string().trim().min(1, "Veuillez indiquer votre adresse e-mail.").pipe(z.email("Adresse e-mail invalide.")),
    date: z
      .string()
      .min(1, "Veuillez choisir une date.")
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Date invalide.")
      .refine((value) => value >= localISODate(), "La date ne peut pas être dans le passé.")
      .refine(
        (value) => value <= localISODate(reservationSettings.maxDaysAhead),
        "Merci de choisir une date dans les 12 prochains mois.",
      ),
    time: z.string().refine((value) => allSlots.includes(value), "Veuillez choisir un horaire."),
    guests: z
      .number("Veuillez indiquer le nombre de personnes.")
      .int("Veuillez indiquer un nombre entier.")
      .min(reservationSettings.minGuests, "Au moins 1 personne.")
      .max(
        reservationSettings.maxGuests,
        `Au-delà de ${reservationSettings.maxGuests} personnes, merci de nous contacter directement.`,
      ),
    requests: z
      .string()
      .trim()
      .max(
        reservationSettings.maxRequestLength,
        `Votre demande ne doit pas dépasser ${reservationSettings.maxRequestLength} caractères.`,
      ),
  })
  .superRefine((values, ctx) => {
    // A slot earlier today has already passed.
    if (values.date === localISODate() && values.time && values.time <= localTime()) {
      ctx.addIssue({ code: "custom", path: ["time"], message: "Ce créneau est déjà passé pour aujourd'hui." });
    }
  });

export type ReservationFormValues = z.infer<typeof reservationSchema>;
