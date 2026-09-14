import Link from "next/link";
import { NAV, PRIMARY_CTA, SITE } from "@/lib/content/brand";

const CHANNELS: { label: string; value: string }[] = [
  { label: "Phone", value: SITE.contact.phone },
  { label: "WhatsApp", value: SITE.contact.whatsapp },
  { label: "Email", value: SITE.contact.email },
  { label: "Instagram", value: SITE.contact.instagram },
];

/**
 * Editorial footer: large wordmark, navigation, contact placeholders.
 * Contact values render an honest "to be announced" state until real
 * details are published in lib/content/brand.ts.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-bg">
      <div className="gutter mx-auto max-w-site py-16 sm:py-20">
        <p className="font-serif text-display leading-none">{SITE.name}</p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-bg/60">
          {SITE.descriptor}
        </p>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="eyebrow text-bg/50">Explore</span>
            {[...NAV, PRIMARY_CTA].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring w-fit text-sm text-bg/80 transition-colors hover:text-bg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-bg/50">Contact</span>
            {CHANNELS.map((c) => (
              <p key={c.label} className="text-sm text-bg/80">
                <span className="text-bg/50">{c.label} — </span>
                {c.value || "to be announced"}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-bg/50">Atelier</span>
            <p className="text-sm leading-relaxed text-bg/80">
              {SITE.location.city}, {SITE.location.state}
              <br />
              {SITE.location.country}
            </p>
          </div>
        </div>

        <p className="mt-16 border-t border-bg/15 pt-6 text-[11px] uppercase tracking-[0.18em] text-bg/40">
          © {new Date().getFullYear()} {SITE.name} — {SITE.location.city},{" "}
          {SITE.location.country}
        </p>
      </div>
    </footer>
  );
}
