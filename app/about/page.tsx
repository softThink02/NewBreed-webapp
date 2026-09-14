import type { Metadata } from "next";
import { SITE } from "@/lib/content/brand";
import { ImageFrame } from "@/components/image-frame";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "NEWBREED is a contemporary fashion house in Awka, Nigeria — built on craft, precision and the belief that clothing should feel distinctly yours.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    title: "Individuality",
    body: "Nothing we make is generic, because nobody we make for is. Every garment starts with one person and their measurements.",
  },
  {
    title: "Craft",
    body: "Cut, seam, finish. We would rather make fewer pieces properly than many pieces quickly.",
  },
  {
    title: "Precision",
    body: "Fit is not a detail — it is the difference between clothing you own and clothing you keep reaching for.",
  },
  {
    title: "Ambition",
    body: "NEWBREED is small today, and honest about it. The standard we hold is not.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="gutter mx-auto max-w-site pb-8 pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">About</span>
            <h1 className="mt-6 font-serif text-h1">
              A new breed of fashion.
            </h1>
            <div className="mt-8 max-w-measure space-y-5 text-[15px] leading-relaxed text-charcoal sm:text-base">
              <p>
                NEWBREED is a fashion house in {SITE.location.city},{" "}
                {SITE.location.state}, {SITE.location.country}. We design our
                own garments and make them to measure — and we make other
                people&apos;s ideas real, from a reference photo to a finished
                piece.
              </p>
              <p>
                We work the way contemporary Nigerian fashion deserves:
                precise cutting, honest fabrics, and design that doesn&apos;t
                lean on cliché to feel like it belongs here. No costume, no
                pastiche — clothing made in Nigeria, for anyone, to a standard
                worth exporting.
              </p>
              <p>
                We are at the beginning. The plan is simple: make every
                garment well enough that the next one is asked for by name.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <ImageFrame
              slot={{
                id: "about-portrait",
                alt: "Inside the NEWBREED atelier in Awka",
                label: "Atelier — Awka",
                aspect: "portrait",
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="gutter mx-auto max-w-site py-16 sm:py-24">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="border-t border-border pt-5">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em]">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <ButtonLink href="/designs" variant="primary">
              Explore Designs
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
