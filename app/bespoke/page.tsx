import type { Metadata } from "next";
import Link from "next/link";
import { PROCESS_STAGES } from "@/lib/content/process";
import { ImageFrame } from "@/components/image-frame";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Bespoke",
  description:
    "Made-to-measure and custom design by NEWBREED — your measurements, your fabric, your piece.",
  alternates: { canonical: "/bespoke" },
};

const SERVICES = [
  {
    title: "Made-to-measure",
    body: "Any NEWBREED design, cut to your exact measurements rather than a standard size. The silhouette stays; the fit becomes yours.",
  },
  {
    title: "Custom design",
    body: "A piece designed from scratch around your idea, occasion or wardrobe. We sketch, you approve, we make.",
  },
  {
    title: "Your references",
    body: "Bring a photograph, a sketch, a garment you love. We review every reference honestly and tell you what we can make — and what we would change.",
  },
  {
    title: "Fabric & colour",
    body: "Choose from fabrics we source, or supply your own. We advise on what each fabric will and won't do for the design.",
  },
  {
    title: "Measurements",
    body: "Submit your own measurements, follow the NEWBREED measurement guide, or have them taken through our process. Remote clients are fully supported.",
  },
  {
    title: "Fit & finishing",
    body: "Every piece is checked, adjusted and finished before it leaves. The last five percent is where a garment becomes worth keeping.",
  },
];

export default function BespokePage() {
  return (
    <>
      <section className="gutter mx-auto max-w-site pb-8 pt-16 sm:pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Bespoke"
              title="Made for one person. You."
              lede="NEWBREED makes garments to measure — from our designs or from yours. This is how it works, and what to expect."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ImageFrame
              slot={{
                id: "bespoke-hero",
                alt: "NEWBREED tailoring in progress",
                label: "Atelier — In Progress",
                aspect: "landscape",
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="gutter mx-auto max-w-site py-16 sm:py-24">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.06}>
              <div className="border-t border-border pt-5">
                <h2 className="font-serif text-h3">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="text-sm text-muted">
            Measuring yourself?{" "}
            <Link
              href="/measurement-guide"
              className="focus-ring underline decoration-border underline-offset-4 transition-colors hover:decoration-ink"
            >
              View the measurement guide
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <div className="gutter mx-auto max-w-site py-16 sm:py-24">
          <Reveal>
            <SectionHeading eyebrow="The Process" title="Five stages, start to finish" />
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STAGES.map((stage, i) => (
              <Reveal key={stage.number} delay={i * 0.06}>
                <li className="border-t border-border pt-5">
                  <span className="font-serif text-h3 text-accent">{stage.number}</span>
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
          <Reveal className="mt-14">
            <ButtonLink href="/request" variant="primary">
              Start Your Request
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
