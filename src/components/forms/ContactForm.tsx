"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Info, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/submissions";
import { cn } from "@/lib/utils";
import { contactSchema, contactSubjects } from "@/lib/validations";
import { FormField, fieldAria, inputClasses } from "./FormField";

type Outcome = "idle" | "not-configured" | "sent";

export function ContactForm() {
  const [outcome, setOutcome] = useState<Outcome>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(async (values) => {
    setOutcome("idle");
    const result = await submitContactMessage(values);

    if (result.status === "sent") {
      setOutcome("sent");
      reset();
      toast.success("Message envoyé", { description: "Merci ! Nous vous répondrons rapidement." });
      return;
    }

    // No backend yet: the form is valid but nothing was transmitted. Say so clearly.
    setOutcome("not-configured");
    toast.info("Formulaire valide — message non envoyé", {
      description: "L'envoi en ligne n'est pas encore activé. Votre message n'a pas été transmis.",
      duration: 8000,
    });
  });

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="contact-required-note" className="flex flex-col gap-5">
      <p id="contact-required-note" className="text-xs text-cocoa">
        Les champs marqués d&apos;un <span className="text-bronze">*</span> sont obligatoires.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="contact-name" label="Nom complet" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Votre nom"
            className={inputClasses}
            {...fieldAria("contact-name", errors.name?.message)}
            {...register("name")}
          />
        </FormField>

        <FormField id="contact-email" label="Adresse e-mail" required error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="vous@exemple.com"
            className={inputClasses}
            {...fieldAria("contact-email", errors.email?.message)}
            {...register("email")}
          />
        </FormField>
      </div>

      <FormField id="contact-subject" label="Sujet" required error={errors.subject?.message}>
        <div className="relative">
          <select
            defaultValue=""
            className={cn(inputClasses, "appearance-none pr-11")}
            {...fieldAria("contact-subject", errors.subject?.message)}
            {...register("subject")}
          >
            <option value="" disabled>
              Choisissez un sujet
            </option>
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-cocoa" />
        </div>
      </FormField>

      <FormField
        id="contact-message"
        label="Message"
        required
        error={errors.message?.message}
        hint="10 caractères minimum."
      >
        <textarea
          rows={6}
          placeholder="Votre message…"
          className={cn(inputClasses, "resize-y")}
          {...fieldAria("contact-message", errors.message?.message, "10 caractères minimum.")}
          {...register("message")}
        />
      </FormField>

      {outcome === "not-configured" && (
        <div role="status" className="flex gap-3 rounded-xl border border-bronze/30 bg-cream p-4 text-sm text-ink">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-bronze" />
          <div>
            <p className="font-semibold">Votre message n&apos;a pas été envoyé.</p>
            <p className="mt-1 text-cocoa">
              Le formulaire est correctement rempli, mais l&apos;envoi en ligne n&apos;est pas encore activé sur ce
              site. Votre texte est conservé ci-dessus : merci de nous contacter directement par téléphone ou par
              e-mail dès que nos coordonnées seront publiées.
            </p>
          </div>
        </div>
      )}

      {outcome === "sent" && (
        <p role="status" className="rounded-xl border border-gold/40 bg-cream p-4 text-sm font-medium text-ink">
          Merci ! Votre message a bien été envoyé.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 text-[0.9375rem] font-medium text-gold-light shadow-soft transition-colors duration-300 hover:bg-umber disabled:cursor-wait disabled:opacity-80 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Vérification…
            </>
          ) : (
            <>
              <Send aria-hidden="true" className="size-4" />
              Envoyer le message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
