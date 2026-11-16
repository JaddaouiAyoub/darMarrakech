import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-dark" | "link" | "link-dark";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  /** Icon rendered before the label (decorative). */
  icon?: ReactNode;
  /** Icon rendered after the label; nudges right on hover (decorative). */
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    keyof BaseProps | "href"
  >;

type ButtonAsButton = BaseProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    keyof BaseProps
  >;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group inline-flex shrink-0 select-none items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-elegant " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<Variant, string> = {
  /** Filled gold pill — "Réserver une table". */
  primary: "bg-gold text-ink shadow-gold hover:bg-gold-light active:translate-y-px",
  /** Light outline on dark surfaces — "Découvrir le menu". */
  outline:
    "border border-white/80 text-white hover:border-gold-light hover:text-gold-light active:translate-y-px",
  /** Dark outline on cream surfaces. */
  "outline-dark":
    "border border-ink/80 text-ink hover:border-bronze hover:text-bronze active:translate-y-px",
  /** Underlined text link on dark surfaces — "Voir tout le menu →". */
  link: "text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light hover:decoration-gold-light",
  /** Underlined text link on cream surfaces. */
  "link-dark":
    "text-bronze underline decoration-bronze/40 underline-offset-4 hover:text-ink hover:decoration-ink",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-[0.9375rem]",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: Pick<BaseProps, "variant" | "size" | "className"> = {}) {
  const isLink = variant === "link" || variant === "link-dark";
  return cn(base, variants[variant], isLink ? "min-h-11 px-0 text-sm" : sizes[size], className);
}

function Content({ icon, trailingIcon, children }: Pick<BaseProps, "icon" | "trailingIcon" | "children">) {
  return (
    <>
      {icon && (
        <span aria-hidden="true" className="inline-flex [&>svg]:size-[1.1em]">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {trailingIcon && (
        <span
          aria-hidden="true"
          className="inline-flex transition-transform duration-300 ease-elegant group-hover:translate-x-0.5 [&>svg]:size-[1.1em]"
        >
          {trailingIcon}
        </span>
      )}
    </>
  );
}

/**
 * Brand button. Renders a Next.js <Link> when `href` is provided, otherwise a <button>.
 * All sizes keep a minimum 44px touch target.
 */
export function Button(props: ButtonProps) {
  const { variant, size, icon, trailingIcon, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <Content icon={icon} trailingIcon={trailingIcon}>
      {children}
    </Content>
  );

  if (typeof rest.href === "string") {
    return (
      <Link className={classes} {...(rest as Omit<ButtonAsLink, keyof BaseProps>)}>
        {content}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof BaseProps>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
