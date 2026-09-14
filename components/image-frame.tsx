import Image from "next/image";
import type { ImageSlot } from "@/lib/types";

const ASPECTS: Record<ImageSlot["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  tall: "aspect-[2/3]",
};

/**
 * Editorial image slot.
 *
 * With `src` set it renders optimized photography via next/image (with a
 * gentle hover scale when placed inside a `group`). Without `src` it renders
 * a quiet, structured placeholder — a tonal field with a small caption —
 * so the composition reads correctly until real NEWBREED photography lands.
 * Swapping in real images requires no layout changes.
 */
export function ImageFrame({
  slot,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  slot: ImageSlot;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-charcoal/5 ${ASPECTS[slot.aspect]} ${className}`}
    >
      {slot.src ? (
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
      ) : (
        <div
          role="img"
          aria-label={slot.alt}
          className="absolute inset-0 flex items-end bg-gradient-to-br from-[#E9E3D8] via-[#DcD4c6] to-[#C9BFAE] transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        >
          <span className="m-4 text-[10px] uppercase tracking-[0.22em] text-charcoal/50">
            {slot.label}
          </span>
        </div>
      )}
    </div>
  );
}
