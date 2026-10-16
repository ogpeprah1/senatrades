import { founder, founderTimeline } from "@/content/founder";
import { links } from "@/content/site";
import { ctaLabels } from "@/content/navigation";
import { pageMetadata, breadcrumbJsonLd, founderJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Section, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";
import { TrackPageView } from "@/components/track-page-view";
import { FounderPortrait } from "@/components/founder/founder-portrait";
import { FounderQuote } from "@/components/founder/founder-quote";
import { Portrait } from "@/components/ui/portrait";
import { TelegramPanel } from "@/components/community/telegram-panel";

export const metadata = pageMetadata({
  title: "Founder - Kwashie Senanu Charles Prince",
  description:
    "Meet Kwashie Senanu Charles Prince, Ghanaian professional forex trader, trading educator, mentor, public speaker and founder of SenaTrades.",
  path: "/founder",
});

const chapters = [
  {
    id: "foundations",
    label: "Foundations",
    title: "A foundation in numbers.",
    body: [
      `Prince graduated from ${founder.academic.institution} with ${founder.academic.classification} in ${founder.academic.degree} in ${founder.academic.year}. He was recognised as ${founder.academic.recognitions[0]} and ${founder.academic.recognitions[1]}.`,
      "His professional career began in accounting and auditing - work that rewards evidence over assumption, process over shortcuts, and precision over guesswork.",
    ],
  },
  {
    id: "the-market",
    label: "Into the market",
    title: "Meeting the market.",
    body: [
      "Prince first encountered forex trading in 2022. In 2023 he began structured mentorship.",
      `Along the way he received guidance from trader and mentor ${founder.mentor.name}, also known as ${founder.mentor.alias}. Learning under mentorship showed him the value of a defined approach - and of doing the work to make it your own.`,
    ],
  },
  {
    id: "method",
    label: "The method",
    title: "From SLP to the Structural Institutional Concept.",
    body: [
      "Through study and practice, Prince developed a structured approach to market analysis known as the Structural Institutional Concept. It evolved from SLP - Structure, Liquidity and Point of Interest.",
      "At its core is a simple shift in mindset: understand the conditions the market is in, rather than trying to predict its next move.",
    ],
  },
  {
    id: "discipline",
    label: "Discipline",
    title: "Lessons the market teaches.",
    body: [
      "His journey has included professional challenges and financial setbacks. They taught him what many traders learn the hard way: psychology matters as much as analysis, and a personal trading plan is not optional.",
      "Prince emphasises discipline, consistency and independent analysis - and accepting losses as part of the learning process.",
    ],
  },
  {
    id: "senatrades",
    label: "SenaTrades",
    title: "Building SenaTrades.",
    body: [
      "He founded SenaTrades to help people understand financial markets and develop independent trading skills - through education, market analysis, mentorship and a community of learners.",
      "As a trading educator, mentor and public speaker, his focus is the same in every setting: teach people to read the market for themselves.",
    ],
  },
  {
    id: "enthusiasm",
    label: "Unlimited Enthusiasm",
    title: "Unlimited Enthusiasm.",
    body: [
      "Behind the work is a wider philosophy Prince calls Unlimited Enthusiasm - a deep, sustained commitment to the pursuit of mastery.",
      "His vision is for SenaTrades to become a globally recognised trading education brand, carrying its educational impact well beyond Ghana.",
    ],
  },
];

export default function FounderPage() {
  return (
    <>
      <JsonLd
        data={[
          founderJsonLd(),
          breadcrumbJsonLd([{ name: "Founder", path: "/founder" }]),
        ]}
      />
      <TrackPageView page="founder" />

      <PageHero
        eyebrow="Founder & CEO"
        title={
          <>
            {founder.firstName}
            <br />
            <span className="text-fg-soft">{founder.lastName}</span>
          </>
        }
        intro={founder.disciplines.join(" · ")}
        aside={
          <FounderPortrait
            preload
            className="mx-auto max-w-md pr-5 lg:max-w-none"
          />
        }
      >
        {links.ceoTelegram && (
          <ButtonLink
            href={links.ceoTelegram}
            size="lg"
            telegram
            event={{ name: "ceo_telegram_click", location: "page_hero" }}
          >
            {ctaLabels.connectCeo}
          </ButtonLink>
        )}
        <ButtonLink
          href={links.telegramCommunity}
          size="lg"
          variant={links.ceoTelegram ? "secondary" : "primary"}
          telegram
          event={{ name: "telegram_community_click", location: "page_hero" }}
        >
          {ctaLabels.joinCommunity}
        </ButtonLink>
      </PageHero>

      <Section theme="light" aria-label="Founder philosophy">
        {founder.photos.secondary ? (
          <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <Reveal className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none">
              <Portrait
                photo={founder.photos.secondary}
                initials={founder.initials}
                placeholderLabel={`Portrait of ${founder.name}`}
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="aspect-2/3 rounded-panel"
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <FounderQuote />
            </Reveal>
          </div>
        ) : (
          <div className="container-site">
            <Reveal>
              <FounderQuote className="max-w-5xl" />
            </Reveal>
          </div>
        )}
      </Section>

      {/* Story */}
      <Section theme="light" className="bg-paper" aria-labelledby="story-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>The story</Eyebrow>
              <h2
                id="story-title"
                className="font-display-tight mt-6 text-display-md text-fg"
              >
                The journey so far.
              </h2>
              <nav
                aria-label="Story chapters"
                className="mt-10 hidden lg:block"
              >
                <ol className="flex flex-col border-l border-line">
                  {chapters.map((c, i) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className="-ml-px flex gap-3 border-l border-transparent py-2 pl-4 text-sm text-muted transition-colors hover:border-sena-red hover:text-fg"
                      >
                        <span className="eyebrow pt-0.5 text-accent-text">
                          0{i + 1}
                        </span>
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>
          <div className="flex flex-col lg:col-span-8 lg:col-start-5">
            {chapters.map((c, i) => (
              <article
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-title`}
                className="scroll-mt-28 border-t border-line-strong py-12 first:border-t-0 first:pt-0 sm:py-16"
              >
                <p className="eyebrow text-accent-text">
                  0{i + 1} - {c.label}
                </p>
                <h3
                  id={`${c.id}-title`}
                  className="font-display-tight mt-4 text-display-md text-fg"
                >
                  {c.title}
                </h3>
                <div className="mt-6 flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-fg-soft">
                  {c.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <div className="bg-paper">
        <section
          aria-labelledby="timeline-title"
          className="theme-dark grain slab-top slab-bottom relative overflow-hidden bg-midnight section-y"
        >
          <div className="container-site">
            <Eyebrow>Milestones</Eyebrow>
            <h2
              id="timeline-title"
              className="font-display-tight mt-6 text-display-lg text-fg"
            >
              From the ledger to the market.
            </h2>
            <ol className="relative mt-16 grid gap-y-12 md:grid-cols-3 md:gap-x-10 lg:grid-cols-6 lg:gap-x-6">
              <span
                aria-hidden
                className="absolute top-[0.9rem] right-0 left-0 hidden h-px bg-line-strong lg:block"
              />
              {founderTimeline.map((t, i) => (
                <Reveal
                  as="li"
                  key={t.title}
                  delay={i * 0.06}
                  className="relative"
                >
                  <span className="relative z-10 inline-flex items-center gap-3 bg-midnight pr-3">
                    <span
                      aria-hidden
                      className="size-2 rounded-full bg-sena-red"
                    />
                    <span className="eyebrow text-accent-text">{t.marker}</span>
                  </span>
                  <h3 className="mt-5 font-medium text-fg">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </div>

      {/* Connect */}
      <Section
        theme="light"
        className="bg-paper"
        aria-labelledby="connect-title"
      >
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Eyebrow>Connect</Eyebrow>
            <h2
              id="connect-title"
              className="font-display-tight mt-6 text-display-md text-fg"
            >
              Learn alongside Prince and the community.
            </h2>
            {links.ceoTelegram && (
              <div className="mt-8">
                <ButtonLink
                  href={links.ceoTelegram}
                  telegram
                  variant="secondary"
                  event={{ name: "ceo_telegram_click", location: "founder" }}
                >
                  {ctaLabels.connectCeo}
                </ButtonLink>
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <TelegramPanel location="founder" />
          </div>
        </div>
      </Section>

      <FinalCta surround="bg-paper" />
    </>
  );
}
