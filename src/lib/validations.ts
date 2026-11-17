import { z } from "zod";

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
