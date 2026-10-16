import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { CandleBackdrop } from "@/components/ui/candle-backdrop";

/** Dark cinematic opener shared by all secondary pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <section
      aria-labelledby="page-title"
      className={cn(
        "theme-dark grain relative overflow-hidden bg-midnight pt-[calc(4.5rem+clamp(3.5rem,2rem+6vw,8rem))] pb-[clamp(4rem,2.5rem+6vw,8rem)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_55%_at_90%_0%,rgb(207_16_37/0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="grid-lines absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_70%_at_70%_20%,#000_10%,transparent_75%)]"
      />
      {!aside && (
      <div
        aria-hidden
        className="absolute right-0 bottom-0 -z-10 h-[55%] w-full opacity-30 [mask-image:linear-gradient(to_right,transparent,#000_60%),linear-gradient(to_top,#000_50%,transparent)] [mask-composite:intersect] sm:w-[60%] sm:opacity-45"
      >
        <CandleBackdrop variant="subtle" className="h-full w-full" />
      </div>
      )}
      <div
        className={cn(
          "container-site grid gap-14",
          aside && "lg:grid-cols-12 lg:items-center",
        )}
      >
        <div className={cn(aside && "lg:col-span-7")}>
          <Eyebrow className="animate-rise">{eyebrow}</Eyebrow>
          <h1
            id="page-title"
            className="font-display-tight mt-8 animate-rise text-display-xl text-fg"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
          {intro && (
            <p
              className="mt-8 max-w-2xl animate-rise text-lead text-fg-soft"
              style={{ animationDelay: "240ms" }}
            >
              {intro}
            </p>
          )}
          {children && (
            <div
              className="mt-10 flex animate-rise flex-col gap-3 xs:flex-row xs:flex-wrap"
              style={{ animationDelay: "340ms" }}
            >
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="animate-fade lg:col-span-5" style={{ animationDelay: "300ms" }}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
