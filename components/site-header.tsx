"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, PRIMARY_CTA, SITE } from "@/lib/content/brand";
import { ButtonLink } from "@/components/ui";

/**
 * Fixed header with hairline border. Desktop: wordmark, nav, primary CTA.
 * Mobile: wordmark + menu button opening a full-screen editorial menu.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="gutter mx-auto flex h-16 max-w-site items-center justify-between sm:h-20">
        <Link
          href="/"
          className="focus-ring text-[15px] font-semibold tracking-[0.28em] text-ink"
          aria-label={`${SITE.name} — home`}
        >
          {SITE.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-ink ${
                pathname === item.href ? "text-ink" : "text-muted"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={PRIMARY_CTA.href}
            variant="secondary"
            className="!px-5 !py-2.5"
          >
            {PRIMARY_CTA.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring -mr-2 p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="gutter fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col justify-between bg-bg pb-10 pt-12 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring border-b border-border py-4 font-serif text-3xl text-ink"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4">
            <ButtonLink href={PRIMARY_CTA.href} variant="primary" className="w-full">
              {PRIMARY_CTA.label}
            </ButtonLink>
            <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted">
              {SITE.location.city}, {SITE.location.state}, {SITE.location.country}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
