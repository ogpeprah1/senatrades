import { slp } from "@/content/education";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** The S → L → P progression at the root of the methodology. */
export function SlpFramework({ className }: { className?: string }) {
  return (
    <ol className={cn("grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-3", className)}>
      {slp.map((step, i) => (
        <Reveal as="li" key={step.letter} delay={i * 0.1} className="bg-surface">
          <div className="flex h-full flex-col gap-8 p-8 sm:p-10">
            <div className="flex items-start justify-between">
              <span
                aria-hidden
                className="font-display-wide stroke-text text-[clamp(5rem,4rem+4vw,8rem)] leading-[0.8] text-fg/80"
              >
                {step.letter}
              </span>
              <span className="eyebrow text-muted">
                Step {i + 1}/{slp.length}
              </span>
            </div>
            <div>
              <h3 className="font-display-tight text-display-sm text-fg">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
