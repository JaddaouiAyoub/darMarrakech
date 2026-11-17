"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  CalendarCheck,
  ChevronDown,
  LoaderCircle,
  Minus,
  Pencil,
  Plus,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { reservationSettings, services } from "@/data/reservation";
import { submitReservationRequest } from "@/lib/submissions";
import { cn } from "@/lib/utils";
import { localISODate, reservationSchema, type ReservationFormValues } from "@/lib/validations";
import { FormField, fieldAria, inputClasses } from "./FormField";

const { minGuests, maxGuests, maxDaysAhead, maxRequestLength } = reservationSettings;

const DEFAULTS = { name: "", phone: "", email: "", date: "", time: "", guests: 2, requests: "" };

const longDate = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

/** Today's local date, only on the client (the page is prerendered at build time). */
const subscribeNoop = () => () => {};
function useClientDateBounds() {
  const min = useSyncExternalStore(subscribeNoop, () => localISODate(), () => undefined);
  const max = useSyncExternalStore(subscribeNoop, () => localISODate(maxDaysAhead), () => undefined);
  return { min, max };
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return longDate.format(new Date(y, m - 1, d));
}

export function ReservationForm() {
  const [request, setRequest] = useState<ReservationFormValues | null>(null);
  const summaryRef = useRef<HTMLHeadingElement>(null);
  const { min, max } = useClientDateBounds();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(reservationSchema),
    defaultValues: DEFAULTS,
    mode: "onTouched",
  });

  const guests = useWatch({ control, name: "guests" });
  const requestsLength = useWatch({ control, name: "requests" })?.length ?? 0;

  // Move focus to the summary when it appears, so screen readers announce it.
  useEffect(() => {
    if (request) summaryRef.current?.focus();
  }, [request]);

  function stepGuests(step: number) {
    const current = Number.isFinite(guests) ? guests : minGuests;
    const next = Math.min(Math.max(current + step, minGuests), maxGuests);
    setValue("guests", next, { shouldValidate: true, shouldDirty: true });
  }

  const onSubmit = handleSubmit(async (values) => {
    const result = await submitReservationRequest(values);
    if (result.status === "sent") {
      // Future integration: show the service's real confirmation here.
      toast.success("Demande envoyée", { description: "Le restaurant reviendra vers vous pour confirmer." });
      reset(DEFAULTS);
      return;
    }
    setRequest(values);
    toast.info("Demande prête — non transmise", {
      description: "La réservation en ligne n'est pas encore activée. Aucune table n'est réservée.",
      duration: 8000,
    });
  });

  /* ------------------------------------------------------------------ */
  /*  Request summary (no backend: nothing is booked)                    */
  /* ------------------------------------------------------------------ */
  if (request) {
    const rows: [string, string][] = [
      ["Date", formatDate(request.date)],
      ["Heure", request.time.replace(":", " h ")],
      ["Personnes", `${request.guests} ${request.guests > 1 ? "personnes" : "personne"}`],
      ["Nom", request.name],
      ["Téléphone", request.phone],
      ["E-mail", request.email],
    ];
    if (request.requests) rows.push(["Demandes particulières", request.requests]);

    return (
      <div role="status" className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
            <CalendarCheck aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </span>
          <div>
            <h3 ref={summaryRef} tabIndex={-1} className="text-2xl text-ink outline-none sm:text-3xl">
              Récapitulatif de votre demande
            </h3>
            <p className="mt-1 text-sm text-cocoa">Vérifiez les informations ci-dessous.</p>
          </div>
        </div>

        <div className="flex gap-3 rounded-xl border border-red-800/25 bg-red-50 p-4 text-sm text-ink">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-red-800" />
          <div>
            <p className="font-semibold text-red-900">Demande non transmise — aucune réservation n&apos;est confirmée.</p>
            <p className="mt-1 text-cocoa">
              La réservation en ligne n&apos;est pas encore activée sur ce site : cette demande n&apos;a été envoyée ni
              au restaurant, ni à un service de réservation. Pour réserver, merci de contacter directement le
              restaurant dès que ses coordonnées seront publiées.
            </p>
          </div>
        </div>

        <dl className="divide-y divide-sand rounded-xl border border-sand bg-white">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-4">
              <dt className="text-sm text-cocoa">{label}</dt>
              <dd className="font-medium break-words text-ink first-letter:uppercase">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setRequest(null)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[0.9375rem] font-medium text-gold-light transition-colors hover:bg-umber"
          >
            <Pencil aria-hidden="true" className="size-4" />
            Modifier la demande
          </button>
          <button
            type="button"
            onClick={() => {
              reset(DEFAULTS);
              setRequest(null);
            }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/70 px-6 text-[0.9375rem] font-medium text-ink transition-colors hover:border-bronze hover:text-bronze"
          >
            <RotateCcw aria-hidden="true" className="size-4" />
            Nouvelle demande
          </button>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /*  Form                                                               */
  /* ------------------------------------------------------------------ */
  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="reservation-required-note" className="flex flex-col gap-6">
      <p id="reservation-required-note" className="text-xs text-cocoa">
        Les champs marqués d&apos;un <span className="text-bronze">*</span> sont obligatoires.
      </p>

      {/* When */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-4 text-bronze">Votre table</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="reservation-date" label="Date" required error={errors.date?.message}>
            <input
              type="date"
              min={min}
              max={max}
              className={inputClasses}
              {...fieldAria("reservation-date", errors.date?.message)}
              {...register("date")}
            />
          </FormField>

          <FormField
            id="reservation-time"
            label="Heure"
            required
            error={errors.time?.message}
            hint={reservationSettings.placeholderHours ? "Horaires de service indicatifs, à confirmer." : undefined}
          >
            <div className="relative">
              <select
                className={cn(inputClasses, "appearance-none pr-11")}
                {...fieldAria("reservation-time", errors.time?.message, reservationSettings.placeholderHours)}
                {...register("time")}
              >
                <option value="" disabled>
                  Choisissez un horaire
                </option>
                {services.map((service) => (
                  <optgroup key={service.id} label={service.label}>
                    {service.slots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot.replace(":", " h ")}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-cocoa"
              />
            </div>
          </FormField>
        </div>

        <FormField id="reservation-guests" label="Nombre de personnes" required error={errors.guests?.message}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => stepGuests(-1)}
              disabled={guests <= minGuests}
              aria-label="Retirer une personne"
              aria-controls="reservation-guests"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-sand bg-white text-ink transition-colors hover:border-bronze disabled:opacity-40"
            >
              <Minus aria-hidden="true" className="size-4" />
            </button>
            <div className="w-24">
              <input
                type="number"
                inputMode="numeric"
                min={minGuests}
                max={maxGuests}
                className={cn(inputClasses, "text-center text-lg font-semibold tabular-nums")}
                {...fieldAria("reservation-guests", errors.guests?.message)}
                {...register("guests", { valueAsNumber: true })}
              />
            </div>
            <button
              type="button"
              onClick={() => stepGuests(1)}
              disabled={guests >= maxGuests}
              aria-label="Ajouter une personne"
              aria-controls="reservation-guests"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-sand bg-white text-ink transition-colors hover:border-bronze disabled:opacity-40"
            >
              <Plus aria-hidden="true" className="size-4" />
            </button>
          </div>
        </FormField>
        {guests >= maxGuests && !errors.guests && (
          <p className="-mt-2 text-sm text-cocoa">
            Plus de {maxGuests} personnes ?{" "}
            <Link href="/contact" className="font-medium text-bronze underline underline-offset-4 hover:text-ink">
              Contactez-nous
            </Link>{" "}
            pour une réservation de groupe.
          </p>
        )}
      </fieldset>

      <hr className="border-sand" />

      {/* Who */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-4 text-bronze">Vos coordonnées</legend>

        <FormField id="reservation-name" label="Nom complet" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Votre nom"
            className={inputClasses}
            {...fieldAria("reservation-name", errors.name?.message)}
            {...register("name")}
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="reservation-phone" label="Téléphone" required error={errors.phone?.message}>
            <input
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+212 6 00 00 00 00"
              className={inputClasses}
              {...fieldAria("reservation-phone", errors.phone?.message)}
              {...register("phone")}
            />
          </FormField>

          <FormField id="reservation-email" label="Adresse e-mail" required error={errors.email?.message}>
            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="vous@exemple.com"
              className={inputClasses}
              {...fieldAria("reservation-email", errors.email?.message)}
              {...register("email")}
            />
          </FormField>
        </div>

        <FormField
          id="reservation-requests"
          label="Demandes particulières"
          error={errors.requests?.message}
          hint={`Allergies, anniversaire, chaise haute… (${requestsLength}/${maxRequestLength})`}
        >
          <textarea
            rows={4}
            maxLength={maxRequestLength}
            placeholder="Précisez-nous vos besoins"
            className={cn(inputClasses, "resize-y")}
            {...fieldAria("reservation-requests", errors.requests?.message, true)}
            {...register("requests")}
          />
        </FormField>
      </fieldset>

      <p className="rounded-xl bg-white/70 p-4 text-xs leading-relaxed text-cocoa ring-1 ring-sand">
        Information : la réservation en ligne n&apos;est pas encore activée. Ce formulaire vérifie votre demande et
        en affiche le récapitulatif, mais ne la transmet pas au restaurant.
      </p>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-[0.9375rem] font-semibold text-ink shadow-gold transition-colors duration-300 hover:bg-gold-light disabled:cursor-wait disabled:opacity-80 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Vérification…
            </>
          ) : (
            <>
              <CalendarCheck aria-hidden="true" className="size-4" />
              Vérifier ma demande
            </>
          )}
        </button>
      </div>
    </form>
  );
}
