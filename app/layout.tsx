import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE } from "@/lib/content/brand";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

/**
 * Typography: Fraunces (editorial serif, variable) for display and headings,
 * Inter for body and UI. Self-hosted via next/font — no layout shift, no
 * external font requests.
 */
const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.descriptor}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.intro,
  keywords: [
    "NEWBREED fashion",
    "NEWBREED Awka",
    "fashion designer Awka",
    "bespoke tailoring Awka",
    "custom clothing Awka",
    "fashion house Anambra",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.descriptor}`,
    description: SITE.intro,
    url: SITE.url,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F6F3ED",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-svh flex-col font-sans">
        <SiteHeader />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
