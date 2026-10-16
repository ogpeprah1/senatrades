import { founder } from "@/content/founder";
import { cn } from "@/lib/utils";

/** Signature philosophy, set in the editorial serif with a red mark. */
export function FounderQuote({
  className,
  size = "lg",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <figure className={cn("relative", className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-[0.38em] -left-[0.04em] font-serif text-[clamp(6rem,4rem+8vw,12rem)] leading-none text-sena-red select-none"
      >
        “
      </span>
      <blockquote
        className={cn(
          "relative font-serif text-fg",
          size === "lg"
            ? "text-quote"
            : "text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-[1.08]",
        )}
      >
        <p>
          I don’t point you to myself; <br />
          <em className="text-accent-text">I point you to the market.</em>
        </p>
      </blockquote>
      <figcaption className="eyebrow mt-8 flex items-center gap-3 text-muted">
        <span aria-hidden className="h-px w-8 bg-sena-red" />
        {founder.name}
      </figcaption>
    </figure>
  );
}
