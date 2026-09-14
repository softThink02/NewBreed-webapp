import type { NavItem } from "@/lib/types";

/**
 * Single source of truth for brand information.
 * The descriptor is provisional — change it here, nowhere else.
 */
export const SITE = {
  name: "NEWBREED",
  descriptor: "Couture & Bespoke",
  /** Replace with the live domain before launch. Used for metadata + sitemap. */
  url: "https://newbreed.example",
  tagline: "Designed with intention. Made for you.",
  intro:
    "NEWBREED is a contemporary fashion house in Awka, Nigeria. We design and make garments to measure — our own designs, or yours — for people who want their clothing to feel distinctly theirs.",
  location: {
    city: "Awka",
    state: "Anambra State",
    country: "Nigeria",
  },
  /**
   * Contact channels. Values are intentionally empty — publish real details
   * here when confirmed. The UI renders an honest "to be announced" state
   * for empty values and never invents contact information.
   */
  contact: {
    phone: "",
    whatsapp: "",
    email: "",
    instagram: "",
  },
} as const;

export const NAV: NavItem[] = [
  { label: "Designs", href: "/designs" },
  { label: "Bespoke", href: "/bespoke" },
  { label: "Client Looks", href: "/client-looks" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA = { label: "Start Your Request", href: "/request" };
export const SECONDARY_CTA = { label: "Explore Designs", href: "/designs" };
