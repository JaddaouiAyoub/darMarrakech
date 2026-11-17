import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { SocialIcon } from "@/components/ui/SocialIcon";
import {
  brand,
  contact,
  legalNavigation,
  mainNavigation,
  openingHours,
  reservationLink,
  socialLinks,
} from "@/data/restaurant";
import { cn } from "@/lib/utils";
import type { BusinessValue } from "@/types";
import { CopyrightYear } from "./CopyrightYear";
import { Logo } from "./Logo";

function ColumnTitle({ children }: { children: ReactNode }) {
  return <h2 className="eyebrow mb-5 text-gold">{children}</h2>;
}

function ContactLine({ icon: Icon, label, item }: { icon: LucideIcon; label: string; item: BusinessValue }) {
  return (
    <li className="flex gap-3">
      <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
      <span>
        <span className="sr-only">{label} : </span>
        <span className={cn(item.placeholder && "italic text-muted")}>{item.value}</span>
        {item.placeholder && <PlaceholderTag />}
      </span>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-zellige relative mt-auto border-t border-gold/20 bg-espresso pb-24 text-sm text-white/85 lg:pb-0">
      <Ornament className="absolute inset-x-0 -top-2 bg-transparent" />

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm leading-relaxed text-muted">{brand.description}</p>
          <ul className="mt-6 flex gap-3" aria-label="Réseaux sociaux">
            {socialLinks.map((social) => (
              <li key={social.network}>
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <SocialIcon network={social.network} className="size-5" />
                  </a>
                ) : (
                  <span
                    title={`${social.label} — lien à venir`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-gold/15 text-gold/40"
                  >
                    <SocialIcon network={social.network} className="size-5" />
                    <span className="sr-only">{social.label} (lien à venir)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick navigation */}
        <nav aria-label="Navigation du pied de page" className="lg:col-span-2">
          <ColumnTitle>Navigation</ColumnTitle>
          <ul className="space-y-1">
            {[...mainNavigation, reservationLink].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="lg:col-span-3">
          <ColumnTitle>Contact</ColumnTitle>
          <ul className="space-y-4">
            <ContactLine icon={MapPin} label="Adresse" item={contact.address} />
            <ContactLine icon={Phone} label="Téléphone" item={contact.phone} />
            <ContactLine icon={Mail} label="E-mail" item={contact.email} />
          </ul>
        </div>

        {/* Opening hours */}
        <div className="lg:col-span-3">
          <ColumnTitle>Horaires</ColumnTitle>
          <ul className="space-y-4">
            {openingHours.map((slot) => (
              <li key={slot.days} className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  <span className="block font-medium text-white">{slot.days}</span>
                  <span className={cn(slot.placeholder && "italic text-muted")}>{slot.hours}</span>
                  {slot.placeholder && <PlaceholderTag />}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold/10">
        <Container className="flex flex-col items-center gap-3 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © <CopyrightYear /> {brand.name}. Tous droits réservés.
          </p>
          <ul className="flex gap-4">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-9 items-center hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
