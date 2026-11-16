import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/** Opening banner for internal pages; clears the fixed header. */
export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="bg-zellige relative border-b border-gold/15 pt-[calc(var(--spacing-header)+3rem)] pb-14 lg:pt-[calc(6rem+4rem)] lg:pb-20">
      <Container size="narrow" className="flex flex-col items-center text-center">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{description}</p>}
        <Ornament className="mt-8" />
        {children}
      </Container>
    </section>
  );
}
