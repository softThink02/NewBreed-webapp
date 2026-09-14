import type { ClientLook } from "@/lib/types";

/**
 * Client Looks gallery.
 *
 * These are structured slots reserved for real NEWBREED client photography
 * from completed commissions and complimentary client shoots. No fabricated
 * clients, names or testimonials — the gallery grows with the work.
 */
export const CLIENT_LOOKS: ClientLook[] = [
  {
    id: "look-01",
    title: "Reserved for a NEWBREED client",
    note: "Photography from an upcoming client shoot.",
    image: {
      id: "client-look-01",
      alt: "NEWBREED client photography — coming soon",
      label: "Client Shoot — 01",
      aspect: "portrait",
    },
  },
  {
    id: "look-02",
    title: "Reserved for a NEWBREED client",
    note: "Photography from an upcoming client shoot.",
    image: {
      id: "client-look-02",
      alt: "NEWBREED client photography — coming soon",
      label: "Client Shoot — 02",
      aspect: "tall",
    },
  },
  {
    id: "look-03",
    title: "Reserved for a NEWBREED client",
    note: "Photography from an upcoming client shoot.",
    image: {
      id: "client-look-03",
      alt: "NEWBREED client photography — coming soon",
      label: "Client Shoot — 03",
      aspect: "portrait",
    },
  },
];
