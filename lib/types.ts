/**
 * Typed content model for NEWBREED.
 *
 * Content is deliberately separated from presentation so it can later move
 * into a CMS, database or API (including Wix Headless collections) without
 * rewriting the frontend. Components consume these types only.
 */

export type ImageAspect = "portrait" | "landscape" | "square" | "tall";

/**
 * A structured image slot. While real NEWBREED campaign/client photography
 * is unavailable, `src` stays undefined and components render a tasteful
 * placeholder. Dropping a file into /public and setting `src` upgrades the
 * slot with no layout changes.
 */
export interface ImageSlot {
  id: string;
  alt: string;
  /** Short editorial caption shown on the placeholder, e.g. "Campaign — Look 01". */
  label: string;
  aspect: ImageAspect;
  src?: string;
}

export type DesignCategory = "Women" | "Men" | "Unisex";

export interface Design {
  slug: string;
  name: string;
  category: DesignCategory;
  description: string;
  images: ImageSlot[];
  /** Optional display price, e.g. "From ₦120,000". Omit until pricing is confirmed. */
  price?: string;
  featured?: boolean;
}

export interface ClientLook {
  id: string;
  /** Editorial title. Never a fabricated client name or testimonial. */
  title: string;
  note?: string;
  image: ImageSlot;
}

export interface ProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface MeasurementField {
  key: string;
  label: string;
  hint: string;
}

export interface NavItem {
  label: string;
  href: string;
}
