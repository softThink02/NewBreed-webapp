import type { Design } from "@/lib/types";

/**
 * The NEWBREED design catalogue.
 *
 * Data-driven by design: add, remove or reorder entries here and every
 * gallery, homepage feature and request-form option updates automatically.
 * This array is the shape a future CMS collection should mirror.
 */
export const DESIGNS: Design[] = [
  {
    slug: "the-first-cut",
    name: "The First Cut",
    category: "Men",
    description:
      "A sharply tailored two-piece with a clean shoulder line and a slightly extended lapel. Made to your measurements in the fabric of your choice.",
    featured: true,
    images: [
      {
        id: "first-cut-01",
        alt: "The First Cut — tailored two-piece suit by NEWBREED",
        label: "The First Cut — Look 01",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "ivory-study",
    name: "Ivory Study",
    category: "Women",
    description:
      "A long-line dress cut for movement, with structured shoulders and a deliberate, unhurried drape. Quiet from a distance, precise up close.",
    featured: true,
    images: [
      {
        id: "ivory-study-01",
        alt: "Ivory Study — long-line structured dress by NEWBREED",
        label: "Ivory Study — Look 01",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "soft-armour",
    name: "Soft Armour",
    category: "Unisex",
    description:
      "A boxy, unlined jacket with hand-finished edges. Built to be worn often and to age well.",
    featured: true,
    images: [
      {
        id: "soft-armour-01",
        alt: "Soft Armour — unlined structured jacket by NEWBREED",
        label: "Soft Armour — Look 01",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "meridian-shirt",
    name: "Meridian Shirt",
    category: "Men",
    description:
      "A precise everyday shirt with a taller collar stand and a curved hem. The kind of piece you reorder in three fabrics.",
    images: [
      {
        id: "meridian-01",
        alt: "Meridian Shirt — tailored shirt by NEWBREED",
        label: "Meridian — Look 01",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "evening-column",
    name: "Evening Column",
    category: "Women",
    description:
      "A floor-length column dress with a low back and a single seam of interest. Made for rooms where you would rather be noticed slowly.",
    images: [
      {
        id: "evening-column-01",
        alt: "Evening Column — floor-length dress by NEWBREED",
        label: "Evening Column — Look 01",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "weekend-set",
    name: "Weekend Set",
    category: "Unisex",
    description:
      "A relaxed two-piece in breathable fabric — cut generously, finished carefully. Ease without sloppiness.",
    images: [
      {
        id: "weekend-set-01",
        alt: "Weekend Set — relaxed two-piece by NEWBREED",
        label: "Weekend Set — Look 01",
        aspect: "portrait",
      },
    ],
  },
];

export const FEATURED_DESIGNS = DESIGNS.filter((d) => d.featured);

export function getDesign(slug: string): Design | undefined {
  return DESIGNS.find((d) => d.slug === slug);
}
