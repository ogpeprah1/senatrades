import { founder } from "@/content/founder";
import { links } from "@/content/site";
import { ctaLabels } from "@/content/navigation";
import { Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { FounderPortrait } from "@/components/founder/founder-portrait";
import { FounderQuote } from "@/components/founder/founder-quote";

export function FounderSpotlight() {
  return (
    <div className="bg-paper">
      <section
        aria-labelledby="founder-spotlight-title"
        className="theme-dark grain slab-top slab-bottom relative overflow-hidden bg-midnight section-y"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_15%_30%,rgb(207_16_37/0.14),transparent_70%)]"
        />
        <div className="container-site">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
            <Reveal className="mx-auto w-full max-w-md pr-5 lg:col-span-5 lg:max-w-none">
              <FounderPortrait />
            </Reveal>

            <div className="lg:col-span-5 lg:col-start-8">
              <Eyebrow>The founder</Eyebrow>
              <h2
                id="founder-spotlight-title"
                className="font-display-tight mt-6 text-display-lg text-fg"
              >
                {founder.firstName}
                <br />
                <span className="text-fg-soft">{founder.lastName}</span>
              </h2>
              <p className="mt-4 text-fg">{founder.role}</p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
                {founder.disciplines.map((d, i) => (
                  <li key={d} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden className="text-sena-red">/</span>}
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex max-w-xl flex-col gap-5 leading-relaxed text-fg-soft">
                {founder.summary.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <ButtonLink href="/founder" variant="secondary">
                  Meet the Founder
                </ButtonLink>
                {links.ceoTelegram && (
                  <ButtonLink
                    href={links.ceoTelegram}
                    telegram
                    event={{ name: "ceo_telegram_click", location: "founder" }}
                  >
                    {ctaLabels.connectCeo}
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>

          <Reveal className="mt-24 border-t border-line pt-20 lg:mt-32 lg:pt-24">
            <FounderQuote className="max-w-5xl" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
