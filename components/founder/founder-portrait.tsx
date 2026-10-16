import { founder } from "@/content/founder";
import { Portrait } from "@/components/ui/portrait";
import { cn } from "@/lib/utils";

/** Founder portrait with the offset red frame used across the site. */
export function FounderPortrait({
  preload,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  preload?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-panel border border-sena-red/70 sm:translate-x-5 sm:translate-y-5"
      />
      <Portrait
        photo={founder.photos.hero}
        initials={founder.initials}
        placeholderLabel={`Portrait of ${founder.name}`}
        sizes={sizes}
        preload={preload}
        className="aspect-4/5 rounded-panel"
      />
      <div className="eyebrow absolute top-5 left-5 rounded-full bg-midnight/70 px-3 py-1.5 text-[0.65rem] text-soft-white backdrop-blur">
        Founder &amp; CEO
      </div>
    </div>
  );
}
