import type { Metadata } from "next";
import { MEASUREMENT_FIELDS } from "@/lib/content/process";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Measurement Guide",
  description:
    "How to take your own measurements for a NEWBREED garment — no visit to Awka required.",
  alternates: { canonical: "/measurement-guide" },
};

export default function MeasurementGuidePage() {
  return (
    <>
      <section className="gutter mx-auto max-w-site pb-8 pt-16 sm:pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Guide"
            title="Measuring yourself, properly"
            lede="You don't need to visit us to be measured. With a soft tape and five minutes, you can take everything we need — or send what you have and we'll follow up on the rest."
          />
        </Reveal>
      </section>

      <section className="gutter mx-auto max-w-site pb-16">
        <Reveal>
          <ul className="max-w-measure space-y-3 text-sm leading-relaxed text-muted">
            <li>Use a soft measuring tape, not a ruler.</li>
            <li>Measure over light clothing or directly, never over thick layers.</li>
            <li>Keep the tape level and snug — never tight.</li>
            <li>If in doubt between two numbers, send both.</li>
          </ul>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {MEASUREMENT_FIELDS.map((field, i) => (
            <Reveal key={field.key} delay={(i % 2) * 0.05}>
              <div className="border-t border-border pt-4">
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em]">
                  {field.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{field.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="max-w-measure text-sm leading-relaxed text-muted">
            Prefer to be measured in person? That&apos;s always available at the
            atelier in Awka — just mention it in your request.
          </p>
          <div className="mt-8">
            <ButtonLink href="/request" variant="primary">
              Start Your Request
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
