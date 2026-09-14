import Link from "next/link";
import type { Design } from "@/lib/types";
import { ImageFrame } from "@/components/image-frame";

/**
 * Editorial design card: image, minimal metadata, quiet CTA.
 * The whole card is a link into the request flow with the design preselected.
 */
export function DesignCard({ design }: { design: Design }) {
  return (
    <article>
      <Link
        href={`/request?design=${design.slug}`}
        className="group focus-ring block"
        aria-label={`${design.name} — request this design`}
      >
        <ImageFrame
          slot={design.images[0]}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-h3">{design.name}</h3>
          <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-muted">
            {design.category}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {design.description}
        </p>
        <div className="mt-3 flex items-baseline justify-between gap-4">
          <span className="text-[12px] uppercase tracking-[0.16em] text-ink underline decoration-border underline-offset-4 transition-colors group-hover:decoration-ink">
            Request This Design
          </span>
          {design.price ? (
            <span className="text-sm text-muted">{design.price}</span>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
