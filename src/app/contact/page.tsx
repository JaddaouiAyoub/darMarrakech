import { CalendarDays, Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MoroccanStar } from "@/components/ui/MoroccanStar";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { Reveal } from "@/components/ui/Reveal";
import { contact, openingHours, reservationLink } from "@/data/restaurant";
import { cn } from "@/lib/utils";
import type { BusinessValue } from "@/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Dar Marrakech : adresse, téléphone, e-mail, horaires d'ouverture et formulaire de contact.",
};

function InfoItem({ icon: Icon, label, item }: { icon: LucideIcon; label: string; item: BusinessValue }) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </span>
      <div>
        <p className="eyebrow text-gold">{label}</p>
        <p className={cn("mt-1", item.placeholder ? "text-muted italic" : "text-white")}>
          {item.value}
          {item.placeholder && <PlaceholderTag />}
        </p>
      </div>
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nous écrire"
        title="Contact"
        description="Une question, une demande de groupe ou un événement privé ? Nous serons ravis de vous répondre."
      />

      <div className="bg-zellige bg-ink py-14 sm:py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Contact information */}
          <Reveal className="flex flex-col gap-10 lg:col-span-5">
            <section aria-labelledby="coordonnees-title">
              <h2 id="coordonnees-title" className="text-3xl sm:text-4xl">
                Nos coordonnées
              </h2>
              <ul className="mt-8 space-y-6">
                <InfoItem icon={MapPin} label="Adresse" item={contact.address} />
                <InfoItem icon={Phone} label="Téléphone" item={contact.phone} />
                <InfoItem icon={Mail} label="E-mail" item={contact.email} />
              </ul>
            </section>

            <section aria-labelledby="horaires-title" className="border-hairline rounded-2xl bg-espresso p-6 sm:p-7">
              <h2 id="horaires-title" className="flex items-center gap-3 text-2xl">
                <Clock aria-hidden="true" className="size-5 text-gold" strokeWidth={1.5} />
                Horaires d&apos;ouverture
              </h2>
              <dl className="mt-5 divide-y divide-gold/10">
                {openingHours.map((slot) => (
                  <div key={slot.days} className="flex flex-wrap items-center justify-between gap-2 py-3">
                    <dt className="font-medium text-white">{slot.days}</dt>
                    <dd className={cn(slot.placeholder ? "text-muted italic" : "text-white")}>
                      {slot.hours}
                      {slot.placeholder && <PlaceholderTag />}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Map placeholder — replaced by an embedded map once the address is confirmed */}
            <section
              aria-labelledby="plan-title"
              className="bg-zellige relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gold/30 bg-espresso p-6 text-center"
            >
              <MoroccanStar className="size-8 text-gold/60" />
              <h2 id="plan-title" className="mt-4 font-serif text-xl text-white">
                Plan d&apos;accès
              </h2>
              <p className="mt-2 max-w-xs text-sm text-muted">
                La carte interactive sera affichée dès que l&apos;adresse du restaurant sera confirmée.
              </p>
            </section>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <section
              aria-labelledby="formulaire-title"
              className="rounded-2xl bg-cream p-6 text-ink shadow-card sm:p-8 lg:p-10"
            >
              <h2 id="formulaire-title" className="text-3xl sm:text-4xl">
                Écrivez-nous
              </h2>
              <p className="mt-3 mb-8 text-cocoa">
                Pour réserver une table, utilisez plutôt notre{" "}
                <a href={reservationLink.href} className="font-medium text-bronze underline underline-offset-4 hover:text-ink">
                  page de réservation
                </a>
                .
              </p>
              <ContactForm />
            </section>
          </Reveal>
        </Container>
      </div>

      <section aria-label="Réservation" className="border-t border-gold/15 bg-espresso py-14">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-2xl text-white sm:text-3xl">Votre table vous attend.</p>
          <Button href={reservationLink.href} size="lg" icon={<CalendarDays />}>
            {reservationLink.label}
          </Button>
        </Container>
      </section>
    </>
  );
}
