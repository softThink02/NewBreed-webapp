import type { ReactNode } from "react";

/**
 * Consistent editorial section opener: eyebrow, serif heading, optional lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  const ledeTone = tone === "dark" ? "text-bg/70" : "text-muted";
  const eyebrowTone = tone === "dark" ? "text-bg/60" : "";

  return (
    <div className={`max-w-measure ${alignment}`}>
      <span className={`eyebrow ${eyebrowTone}`}>{eyebrow}</span>
      <h2 className="mt-4 font-serif text-h2">{title}</h2>
      {lede ? (
        <p className={`mt-5 text-[15px] leading-relaxed sm:text-base ${ledeTone}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
