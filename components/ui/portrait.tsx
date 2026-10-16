import Image from "next/image";
import { cn } from "@/lib/utils";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  focus?: string;
};

/**
 * Portrait frame. With a photo it renders an optimised, cropped image that
 * respects the subject's focal point. Without one it renders a clearly
 * marked development placeholder (initials monogram) - never a stock face.
 */
export function Portrait({
  photo,
  initials,
  placeholderLabel,
  sizes,
  preload,
  className,
}: {
  photo: Photo | null;
  initials: string;
  placeholderLabel: string;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-graphite",
        className,
      )}
    >
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={{ objectPosition: photo.focus ?? "50% 30%" }}
        />
      ) : (
        <div
          role="img"
          aria-label={placeholderLabel}
          data-placeholder="portrait"
          className="theme-dark absolute inset-0 grid place-items-center bg-[radial-gradient(120%_80%_at_70%_10%,#2b0a0f_0%,#141417_55%,#0b0b0d_100%)]"
        >
          <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
          <span
            aria-hidden
            className="font-display-wide stroke-text relative text-[clamp(5rem,18vw,11rem)] leading-none text-white/25"
          >
            {initials}
          </span>
          {process.env.NODE_ENV === "development" && (
            <span className="eyebrow absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[0.65rem] text-white/80">
              Dev placeholder - {placeholderLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
