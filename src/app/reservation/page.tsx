import { Clock, Info, Users, UtensilsCrossed, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/media";
import { reservationSettings, services } from "@/data/reservation";

export const metadata: Metadata = {
  title: "Réserver une table",
  description:
    "Préparez votre demande de réservation chez Dar Marrakech : date, horaire, nombre de convives et demandes particulières.",
};

function InfoBlock({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </span>
      <div className="text-sm leading-relaxed text-muted">
        <h3 className="font-sans text-base font-semibold text-white">{title}</h3>
        <div className="mt-1">{children}</div>
      </div>
    </li>
  );
}

export default function ReservationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Réservation"
        title="Votre table vous attend"
        description="Réservez votre expérience culinaire chez Dar Marrakech."
      />

      <div className="bg-zellige bg-ink py-14 sm:py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Practical information */}
          <Reveal className="order-last flex flex-col gap-10 lg:order-none lg:col-span-5">
            <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block">
              <div aria-hidden="true" className="shape-arch absolute inset-0 translate-x-4 translate-y-4 border border-gold/35" />
              <div className="shape-arch relative size-full overflow-hidden shadow-card">
                <Image
                  src={images.tableChandelles.src}
                  alt={images.tableChandelles.alt}
                  fill
                  sizes="(min-width: 1024px) 24rem, 0px"
                  placeholder="blur"
                  blurDataURL={images.tableChandelles.blurDataURL}
                  className="object-cover"
                />
              </div>
            </div>

            <section aria-labelledby="infos-title">
              <h2 id="infos-title" className="text-3xl">
                Informations pratiques
              </h2>
              <ul className="mt-6 space-y-6">
                <InfoBlock icon={Clock} title="Services">
                  <ul>
                    {services.map((service) => (
                      <li key={service.id}>
                        {service.label} : {service.slots[0].replace(":", " h ")} –{" "}
                        {service.slots[service.slots.length - 1].replace(":", " h ")}
                      </li>
                    ))}
                  </ul>
                  {reservationSettings.placeholderHours && (
                    <div className="mt-2 -ml-2">
                      <PlaceholderTag />
                    </div>
                  )}
                </InfoBlock>
                <InfoBlock icon={Users} title="Groupes">
                  Jusqu&apos;à {reservationSettings.maxGuests} personnes via ce formulaire. Au-delà,{" "}
                  <Link href="/contact" className="text-gold underline underline-offset-4 hover:text-gold-light">
                    contactez-nous
                  </Link>{" "}
                  pour organiser votre venue.
                </InfoBlock>
                <InfoBlock icon={UtensilsCrossed} title="Demandes particulières">
                  Allergies, régime alimentaire, occasion spéciale : indiquez-le dans votre demande.
                </InfoBlock>
              </ul>
            </section>

            <p className="flex gap-3 rounded-xl border border-gold/25 bg-espresso p-4 text-sm leading-relaxed text-muted">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
              <span>
                <strong className="font-semibold text-white">Réservation en ligne bientôt disponible.</strong> Ce
                formulaire prépare et vérifie votre demande, mais la confirmation d&apos;une table nécessite la mise en
                place d&apos;un service de réservation. Aucune demande n&apos;est transmise pour le moment.
              </span>
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <section aria-labelledby="demande-title" className="rounded-2xl bg-cream p-6 text-ink shadow-card sm:p-8 lg:p-10">
              <h2 id="demande-title" className="text-3xl sm:text-4xl">
                Votre demande
              </h2>
              <p className="mt-3 mb-8 text-cocoa">Quelques informations suffisent pour préparer votre venue.</p>
              <ReservationForm />
            </section>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
