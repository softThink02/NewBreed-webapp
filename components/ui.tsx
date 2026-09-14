import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

/**
 * NEWBREED button system: primary, secondary, ghost, text link.
 * Buttons are rectangular with restrained corners — luxury comes from
 * typography and spacing, not decoration.
 */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

const BASE =
  "inline-flex items-center justify-center gap-2 text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 focus-ring disabled:pointer-events-none disabled:opacity-50";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: `${BASE} bg-ink text-bg hover:bg-charcoal px-7 py-4`,
  secondary: `${BASE} border border-ink text-ink hover:bg-ink hover:text-bg px-7 py-4`,
  ghost: `${BASE} text-ink hover:text-accent px-2 py-2`,
  link: "inline-flex items-center gap-1 text-sm text-ink underline underline-offset-4 decoration-border transition-colors hover:decoration-ink focus-ring",
};

export function buttonClasses(variant: ButtonVariant = "primary", extra = "") {
  return `${VARIANTS[variant]} ${extra}`.trim();
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClasses(variant, className)} {...rest}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}

/** Shared input styling: default, focus, error, disabled, success. */
export function inputClasses(state?: "error" | "success") {
  const border =
    state === "error"
      ? "border-red-700"
      : state === "success"
        ? "border-emerald-700"
        : "border-border focus:border-ink";
  return `w-full border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${border}`;
}
