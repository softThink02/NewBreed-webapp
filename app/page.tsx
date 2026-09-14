import Link from "next/link";
import { PRIMARY_CTA, SECONDARY_CTA, SITE } from "@/lib/content/brand";
import { FEATURED_DESIGNS } from "@/lib/content/designs";
import { CLIENT_LOOKS } from "@/lib/content/looks";
import { PROCESS_STAGES } from "@/lib/content/process";
import { ButtonLink } from "@/components/ui";
import { ImageFrame } from "@/components/image-frame";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { DesignCard } from "@/components/design-card";

export default function HomePage() {
  return (
    <>
      {/* HERO — visually dominant, sparse copy, asymmetric composition. */}
      <section className="gutter mx-auto max-w-site">
        <div className="grid min-h-[82svh] items-center gap-10 py-12 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">{SITE.descriptor}</p>
            <h1 className="mt-6 font-serif text-display">
              {SITE.name}
            </h1>
            <p className="mt-8 max-w-measure font-serif text-h3 text-charcoal">
              {SITE.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={SECONDARY_CTA.href} variant="primary">
                {SECONDARY_CTA.label}
              </ButtonLink>
              <ButtonLink href={PRIMARY_CTA.href} variant="secondary">
                {PRIMARY_CTA.label}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <ImageFrame
              slot={{
                id: "hero",
                alt: "NEWBREED campaign photography",
                label: "Campaign — Hero",
                aspect: "portrait",
              }}
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION — concise editorial statement. */}
      <section className="border-t border-border">
        <div className="gutter mx-auto grid max-w-site gap-8 py-20 sm:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <span className="eyebrow">The House</span>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8 lg:col-start-5">
            <p className="font-serif text-h2 leading-snug text-charcoal">
              {SITE.intro}
            </p>
            <Link
              href="/about"
              className="focus-ring mt-8 inline-block text-[12px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
            >
              About NEWBREED →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED DESIGNS — asymmetric editorial trio. */}
      <section className="border-t border-border">
        <div className="gutter mx-auto max-w-site py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Designs"
                title="A first look at the collection"
              />
              <ButtonLink href="/designs" variant="ghost">
                View all designs →
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {FEATURED_DESIGNS.map((design, i) => (
              <Reveal
                key={design.slug}
                delay={i * 0.08}
                className={i === 1 ? "lg:mt-16" : ""}
              >
                <DesignCard design={design} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRING YOUR DESIGN */}
      <section className="border-t border-border">
        <div className="gutter mx-auto grid max-w-site items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Custom"
              title="Bring your design."
              lede="Have something else in mind? Send us your design, reference or inspiration and tell us how you'd like it made."
            />
            <div className="mt-8">
              <ButtonLink href="/request?type=own-design" variant="secondary">
                Submit Your Design
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageFrame
              slot={{
                id: "custom",
                alt: "Sketches and fabric on the NEWBREED work table",
                label: "Atelier — Work Table",
                aspect: "landscape",
              }}
            />
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS — five stages. */}
      <section className="border-t border-border">
        <div className="gutter mx-auto max-w-site py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The Process"
              title="How it works"
              lede="From first idea to finished garment — wherever you are. You don't need to visit Awka to commission a piece."
            />
          </Reveal>
          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STAGES.map((stage, i) => (
              <Reveal key={stage.number} delay={i * 0.06}>
                <li className="border-t border-border pt-5">
                  <span className="font-serif text-h3 text-accent">
                    {stage.number}
                  </span>
                  <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.14em]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {stage.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* YOUR LOOK, CAPTURED — dark editorial band. */}
      <section className="bg-ink text-bg">
        <div className="gutter mx-auto grid max-w-site items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <ImageFrame
              slot={{
                id: "client-shoot",
                alt: "A NEWBREED client photographed in their completed garment",
                label: "Client Shoot",
                aspect: "portrait",
              }}
            />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The NEWBREED Experience"
              title="Your look, captured."
              lede="Clients who have garments made by NEWBREED may receive a complimentary professional photoshoot wearing their completed outfit. Your piece deserves to be seen the way it was imagined."
              tone="dark"
            />
            <div className="mt-8">
              <ButtonLink
                href="/client-looks"
                variant="secondary"
                className="!border-bg !text-bg hover:!bg-bg hover:!text-ink"
              >
                See Client Looks
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENT LOOKS PREVIEW */}
      <section>
        <div className="gutter mx-auto max-w-site py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Client Looks"
              title="Worn by the people it was made for"
              lede="Every commission ends in a photograph. This gallery grows with the work — no borrowed imagery, no invented clients."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {CLIENT_LOOKS.map((look, i) => (
              <Reveal key={look.id} delay={i * 0.08} className={i === 1 ? "sm:mt-12" : ""}>
                <ImageFrame slot={look.image} sizes="(min-width: 640px) 33vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border">
        <div className="gutter mx-auto max-w-site py-24 text-center sm:py-32">
          <Reveal>
            <p className="eyebrow">Begin</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-h1">
              Something made for you, and only you.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href={PRIMARY_CTA.href} variant="primary">
                {PRIMARY_CTA.label}
              </ButtonLink>
              <ButtonLink href={SECONDARY_CTA.href} variant="ghost">
                {SECONDARY_CTA.label} →
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
