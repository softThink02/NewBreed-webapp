import type { Metadata } from "next";
import { CLIENT_LOOKS } from "@/lib/content/looks";
import { ImageFrame } from "@/components/image-frame";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Client Looks",
  description:
    "Real NEWBREED clients in their completed garments — photographed through the complimentary client shoot.",
  alternates: { canonical: "/client-looks" },
};

export default function ClientLooksPage() {
  return (
    <>
      <section className="gutter mx-auto max-w-site pb-8 pt-16 sm:pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Client Looks"
            title="Worn by the people it was made for"
            lede="Every NEWBREED commission can end with a complimentary professional shoot. This gallery is built from that work — real clients, real garments, nothing borrowed."
          />
        </Reveal>
      </section>

      <section className="gutter mx-auto max-w-site pb-16 sm:pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_LOOKS.map((look, i) => (
            <Reveal key={look.id} delay={(i % 3) * 0.08} className={i % 3 === 1 ? "lg:mt-16" : ""}>
              <figure>
                <ImageFrame slot={look.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                <figcaption className="mt-3">
                  <p className="text-[12px] uppercase tracking-[0.16em] text-ink">
                    {look.title}
                  </p>
                  {look.note ? (
                    <p className="mt-1 text-sm text-muted">{look.note}</p>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="max-w-measure text-sm leading-relaxed text-muted">
            This page grows with every commission. If you&apos;ve had a piece made
            by NEWBREED, your look could be here next.
          </p>
        </Reveal>
      </section>

      {/* YOUR LOOK, CAPTURED */}
      <section className="bg-ink text-bg">
        <div className="gutter mx-auto max-w-site py-20 text-center sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The NEWBREED Experience"
              title="Your look, captured."
              lede="Clients who have garments made by NEWBREED may receive a complimentary professional photoshoot wearing their completed outfit — a finished portrait of a finished piece."
              align="center"
              tone="dark"
            />
            <div className="mt-10">
              <ButtonLink
                href="/request"
                variant="secondary"
                className="!border-bg !text-bg hover:!bg-bg hover:!text-ink"
              >
                Start Your Request
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
