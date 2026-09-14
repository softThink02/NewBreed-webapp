# NEWBREED — Digital Showroom

The first website for NEWBREED (Couture & Bespoke), a contemporary fashion
house in Awka, Anambra State, Nigeria. A digital fashion showroom, brand
experience and customer request platform — deliberately not an ecommerce
application.

## Stack

- **Next.js 14 (App Router)** — server components by default; client
  components only where interactivity requires them (header menu, animations,
  request form).
- **TypeScript** — strict; all content is typed (`lib/types.ts`).
- **Tailwind CSS** — design tokens as CSS custom properties in
  `app/globals.css`, consumed via `tailwind.config.ts`.
- **framer-motion** — restrained entrance animation, disabled under
  `prefers-reduced-motion`.
- **react-hook-form + zod** — multi-step request form with inline validation.
- **lucide-react** — the two icons the site needs.

## Getting started

```bash
npm install
npm run dev
```

## Where things live

| Concern | Location |
| --- | --- |
| Brand info, nav, CTAs, contact | `lib/content/brand.ts` |
| Design catalogue | `lib/content/designs.ts` |
| Client Looks gallery | `lib/content/looks.ts` |
| Process stages + measurement fields | `lib/content/process.ts` |
| Request validation schema | `lib/schema/request.ts` |
| Design tokens (colour) | `app/globals.css` + `tailwind.config.ts` |
| Request intake | `app/api/requests/route.ts` |

Content is fully separated from presentation. Adding a design is one array
entry; no component changes.

## Before launch — checklist

1. **Domain** — set `SITE.url` in `lib/content/brand.ts`.
2. **Contact details** — fill `SITE.contact` (phone, WhatsApp, email,
   Instagram). The UI renders honest placeholders until then.
3. **Photography** — drop images into `/public` and set `src` on the
   relevant `ImageSlot`s. Layouts are composed around the photography; no
   redesign needed when real images land.
4. **Request intake** — wire `app/api/requests/route.ts` to email/WhatsApp
   or storage (options documented in the file).

## Image strategy

Every image is a typed `ImageSlot` rendered by `components/image-frame.tsx`.
Without a `src` it renders a quiet tonal placeholder with an editorial
caption; with a `src` it renders optimized `next/image` photography. Swapping
placeholders for real campaign/client photography is a data change only.

## Performance

Built for Nigerian mobile networks: server components, self-hosted fonts via
`next/font` (no external font requests, no layout shift), `next/image` with
AVIF/WebP, lazy loading below the fold, minimal client JavaScript (three
client components), no heavy dependencies.

## SEO

Per-page metadata + canonical URLs, Open Graph, `sitemap.ts`, `robots.ts`,
semantic headings and descriptive alt text. Naturally targets searches like
"fashion designer Awka", "bespoke tailoring Awka", "fashion house Anambra".

## Scalability path

The abstractions are ready for growth without a rebuild:

- **CMS / database** — `lib/content/*` arrays mirror future collections;
  swap the import for a fetch and the frontend is unchanged.
- **Ecommerce / accounts / orders / payments** — add routes alongside the
  existing ones; the design system and content model already support product
  detail pages (each `Design` has a slug).
- **Wix path (optional)** — the cleanest integration is **Wix Headless**:
  keep this Next.js frontend, use Wix data collections as the CMS for
  designs/looks and Wix Forms/CRM as the request inbox via the Wix REST
  APIs. Do not migrate the frontend into the Wix editor; it would forfeit
  the design system and performance work.

## Handoff

See `HANDOFF.md` for the full design/implementation handoff: principles,
tokens, type scale, components, animation rules, breakpoints, and image and
content requirements.
