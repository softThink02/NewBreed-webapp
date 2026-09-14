# NEWBREED — Design & Implementation Handoff

For any designer or developer joining the project. The code is the source of
truth; this document explains the intent behind it.

## Brand foundation

**Idea.** "A new breed of fashion." A contemporary fashion house that happens
to be Nigerian — never a stereotype of one. Small today, not small-minded.

**Personality.** Confident, refined, intentional, real. Warm rather than
cold-minimal; precise rather than decorated.

**Voice.** Concise and assured. Short sentences. No "passionate about", no
"tradition meets innovation", no "elevating". The imagery and spacing carry
part of the message; the copy never over-explains. Honesty is a brand
feature: no invented history, clients, awards or contact details.

**Visual attributes.** Editorial composition, generous whitespace, strong
grid with deliberate asymmetry, large photography, restrained motion.
Luxury comes from typography, photography, spacing, composition and motion —
never from decoration. No gold, no ornament, no glow.

## Colour tokens

Defined as RGB triplets in `app/globals.css`; consumed as Tailwind colours.

| Token | Value | Role |
| --- | --- | --- |
| `bg` | `#F6F3ED` | Warm ivory page ground |
| `surface` | `#FCFBF8` | Raised surfaces, inputs |
| `ink` | `#171511` | Primary text, dark bands, primary buttons |
| `charcoal` | `#2B2823` | Editorial body text, hover state |
| `muted` | `#6E675A` | Secondary text |
| `border` | `#E2DBCF` | Hairlines only — 1px, never heavier |
| `accent` | `#8D4A2F` | Understated clay. Focus rings, process numerals, small moments. Never large fills. |

## Typography

- **Display/headings:** Fraunces (variable serif), via `next/font`.
- **Body/UI:** Inter, via `next/font`.
- Scale (responsive, `clamp()`-based, in `tailwind.config.ts`):
  `display` → hero wordmark; `h1` → page titles; `h2` → section titles;
  `h3` → card/sub titles; body 15–16px; labels 11–13px uppercase with
  0.14–0.28em tracking.
- The uppercase tracked label (`.eyebrow`) is a primary brand device — use
  it to open every section.

## Spacing & layout

- Page gutter: `.gutter` (20/32/48px). Content max-width: `max-w-site`
  (1344px). Prose max-width: `max-w-measure` (608px).
- Section rhythm: `py-20 sm:py-28`, separated by hairline `border-t`.
- Corners are square throughout. Shadows are not used; depth comes from
  tone (ivory vs ink bands) and hairlines.
- Asymmetry is deliberate: staggered columns (`sm:mt-12/16/20`) in galleries,
  offset editorial intro (3/8 column split).

## Components

| Component | Purpose |
| --- | --- |
| `ui.tsx` | Buttons (primary / secondary / ghost / link) + input styling with error/success/disabled states |
| `image-frame.tsx` | All imagery. Placeholder ↔ photograph swap with zero layout change; hover scale inside `group` links |
| `reveal.tsx` | Entrance motion (fade + 18px rise, once); no-ops under reduced motion |
| `section-heading.tsx` | Eyebrow + serif title + lede, light/dark tone |
| `design-card.tsx` | Catalogue unit; whole card links to `/request?design=slug` |
| `site-header.tsx` | Fixed hairline header; full-screen mobile menu |
| `site-footer.tsx` | Ink band, oversized wordmark, honest contact placeholders |
| `request-form.tsx` | 5-step form (About You → Design → Measurements → Details → Review) |

## Forms

- Per-step validation via `trigger()`; errors inline with `role="alert"`.
- Every measurement is optional — completion beats completeness; the studio
  confirms details by WhatsApp afterwards.
- Labels always visible (no placeholder-as-label). Full keyboard operability.
- Adding a measurement field = one entry in `lib/content/process.ts`.

## Animation principles

Refinement, never spectacle. Entrances: 0.7s fade + rise, custom ease
(`cubic-bezier(0.22,1,0.36,1)`), once per element. Hover: image scale 1.03
over 0.7s, colour transitions 0.2s. Nothing bounces, spins, glows or loops.
`prefers-reduced-motion` disables all movement.

## Breakpoints

Tailwind defaults — designed at 320, 640 (`sm`), 1024 (`lg`), 1344+.
Mobile recomposes (single column, full-screen menu, stacked CTAs) rather
than shrinking desktop.

## Image requirements (for the shoot)

- Hero: 3:4 portrait, one garment, quiet background, room for text beside.
- Design catalogue: one 3:4 portrait per design minimum, consistent light.
- Client Looks: 3:4 or 2:3 portraits from client shoots.
- Atelier: one landscape work-table/detail shot, one portrait interior.
- Editorial grading — consistent warmth to match the ivory/charcoal palette.

## Content requirements

- Confirmed contact details (`lib/content/brand.ts`).
- Final descriptor decision ("Couture & Bespoke" is provisional — one
  constant to change).
- Real design names/descriptions/prices as the catalogue firms up.

## Future extension points

- Content arrays → CMS collections (incl. Wix Headless) — same shapes.
- `Design.slug` reserved for future detail pages / ecommerce.
- `app/api/requests` → email/WhatsApp/CRM/storage (documented in file).
- Measurement model is a keyed record — extensible without schema changes.
