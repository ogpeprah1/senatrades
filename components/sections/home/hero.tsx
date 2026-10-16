import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { links, site, community } from "@/content/site";
import { ctaLabels } from "@/content/navigation";
import { founder } from "@/content/founder";
import { ButtonLink } from "@/components/ui/button";
import { CandleBackdrop } from "@/components/ui/candle-backdrop";

/** Editorial founder signature - the founder's presence in the hero. */
function FounderSignature() {
  const photo = founder.photos.hero;
  return (
    <Link
      href="/founder"
      className="group grid grid-cols-[auto_1fr] items-end gap-5 border-t border-line-strong pt-5"
    >
      {photo && (
        <span className="relative block aspect-4/5 w-20 overflow-hidden rounded-card ring-1 ring-white/10 sm:w-24">
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="96px"
            className="object-cover transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-[1.04]"
            style={{ objectPosition: "40% 15%" }}
          />
        </span>
      )}
      <span className="flex flex-col gap-1.5 pb-0.5">
        <span className="eyebrow text-muted">The person behind SenaTrades</span>
        <span className="font-display-tight text-[1.55rem] leading-[0.98] text-fg">
          {founder.firstName}
          <br />
          {founder.lastName}
        </span>
        <span className="text-sm text-fg-soft">Founder &amp; CEO</span>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
          Meet the founder
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-(--duration-base) ease-out-expo group-hover:translate-x-1"
          />
        </span>
      </span>
    </Link>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="theme-dark grain relative flex min-h-svh flex-col overflow-hidden bg-midnight pt-18"
    >
      {/* Atmosphere - red light and grid concentrated on the right, away from the copy. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_88%_45%,rgb(207_16_37/0.16),transparent_70%)]"
      />
      <div
        aria-hidden
        className="grid-lines absolute inset-0 -z-10 opacity-35 [mask-image:radial-gradient(55%_70%_at_85%_50%,#000_10%,transparent_75%)]"
      />

      {/* Illustrative chart: right-weighted, faded out behind the copy, CTAs and founder signature. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[38%] bottom-24 -z-10 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_60%,transparent)] lg:top-[34%] lg:right-0 lg:left-auto lg:w-[60%] lg:opacity-85 lg:[mask-image:linear-gradient(to_right,transparent,rgb(0_0_0/0.25)_30%,#000_70%),linear-gradient(to_bottom,transparent,#000_20%,#000_55%,transparent_95%)] lg:[mask-composite:intersect]"
      >
        <CandleBackdrop className="h-full w-full" emphasis="soft" />
      </div>

      <div className="container-site flex flex-1 flex-col justify-center gap-8 py-10 lg:gap-10 lg:py-12">
        <p
          className="eyebrow flex animate-rise items-center gap-3 text-fg-soft"
          style={{ animationDelay: "80ms" }}
        >
          <span aria-hidden className="hidden h-px w-8 bg-sena-red sm:block" />
          <span className="whitespace-nowrap">
            Forex education · Market analysis
            <span className="hidden sm:inline"> · Community</span>
          </span>
        </p>

        <h1
          id="hero-title"
          className="font-display-tight text-[clamp(3.1rem,0.8rem+7.6vw,8.75rem)] leading-[0.88] [text-wrap:wrap] text-fg"
        >
          <span className="block overflow-hidden pb-[0.04em]">
            <span className="block animate-rise" style={{ animationDelay: "160ms" }}>
              Master the market.
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <span className="block animate-rise" style={{ animationDelay: "260ms" }}>
              Trade with <span className="text-sena-red">purpose.</span>
            </span>
          </span>
        </h1>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div
            className="flex animate-rise flex-col gap-7 lg:col-span-7"
            style={{ animationDelay: "380ms" }}
          >
            <p className="max-w-xl text-lead text-[#e4e4e4]">
              Build a deeper understanding of the financial markets through
              structured education, practical market analysis, disciplined
              execution, and a community committed to learning.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink
                href={links.telegramCommunity}
                size="lg"
                telegram
                event={{ name: "telegram_community_click", location: "hero" }}
              >
                {ctaLabels.joinCommunity}
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary" size="lg">
                Explore SenaTrades
              </ButtonLink>
            </div>
            <p className="text-sm text-muted">
              <span className="text-fg-soft">{community.name}</span> on Telegram:
              free calls, shared market analysis and an active community.
            </p>
          </div>

          <div
            className="animate-fade lg:col-span-4 lg:col-start-9"
            style={{ animationDelay: "520ms" }}
          >
            <FounderSignature />
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex h-16 items-center justify-between gap-6">
          <p className="eyebrow flex items-center gap-3 text-fg-soft">
            {site.pillars.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="h-3 w-px bg-sena-red" />}
                {p}
              </span>
            ))}
          </p>
          <a
            href="#philosophy"
            className="eyebrow hidden items-center gap-3 text-muted transition-colors hover:text-fg sm:flex"
          >
            Scroll
            <span aria-hidden className="relative h-6 w-px overflow-hidden bg-line-strong">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-sena-red" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
