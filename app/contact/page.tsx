import type { Metadata } from "next";
import { SITE } from "@/lib/content/brand";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach NEWBREED — ${SITE.location.city}, ${SITE.location.state}, ${SITE.location.country}.`,
  alternates: { canonical: "/contact" },
};

const CHANNELS: { label: string; value: string; note: string }[] = [
  {
    label: "WhatsApp",
    value: SITE.contact.whatsapp,
    note: "The fastest way to reach us.",
  },
  { label: "Phone", value: SITE.contact.phone, note: "" },
  { label: "Email", value: SITE.contact.email, note: "" },
  { label: "Instagram", value: SITE.contact.instagram, note: "" },
];

export default function ContactPage() {
  return (
    <section className="gutter mx-auto max-w-site pb-24 pt-16 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to us."
            lede="The quickest way to begin is a request — it tells us everything we need in one message. For anything else, reach us directly."
          />
          <div className="mt-8">
            <ButtonLink href="/request" variant="primary">
              Start Your Request
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6">
            {CHANNELS.map((c) => (
              <div key={c.label} className="border-t border-border pt-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  {c.label}
                </p>
                <p className="mt-1 text-lg text-ink">
                  {c.value || "To be announced"}
                </p>
                {c.note ? <p className="mt-1 text-sm text-muted">{c.note}</p> : null}
              </div>
            ))}
            <div className="border-t border-border pt-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Atelier
              </p>
              <p className="mt-1 text-lg text-ink">
                {SITE.location.city}, {SITE.location.state}
              </p>
              <p className="text-sm text-muted">{SITE.location.country}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
