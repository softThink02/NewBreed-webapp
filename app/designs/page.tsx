import type { Metadata } from "next";
import { DESIGNS } from "@/lib/content/designs";
import { DesignCard } from "@/components/design-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Designs",
  description:
    "The NEWBREED design catalogue — thoughtfully designed garments, each made to your measurements.",
  alternates: { canonical: "/designs" },
};

/**
 * Editorial catalogue — asymmetric two-column rhythm rather than a generic
 * ecommerce grid. Fully data-driven from lib/content/designs.ts.
 */
export default function DesignsPage() {
  return (
    <>
      <section className="gutter mx-auto max-w-site pb-8 pt-16 sm:pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="The Collection"
            title="Designs"
            lede="Every piece here is a starting point — made to your measurements, in your fabric and colour. Choose one, or bring your own idea."
          />
        </Reveal>
      </section>

      <section className="gutter mx-auto max-w-site pb-20 sm:pb-28">
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {DESIGNS.map((design, i) => (
            <Reveal
              key={design.slug}
              delay={(i % 2) * 0.08}
              className={i % 2 === 1 ? "sm:mt-20" : ""}
            >
              <DesignCard design={design} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="gutter mx-auto max-w-site py-20 text-center sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Custom"
              title="Nothing here quite you?"
              lede="Send us your design, reference or inspiration and tell us how you'd like it made."
              align="center"
            />
            <div className="mt-8">
              <ButtonLink href="/request?type=own-design" variant="primary">
                Submit Your Design
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
