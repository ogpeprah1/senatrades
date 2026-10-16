import { values } from "@/content/education";
import { links } from "@/content/site";
import { ctaLabels } from "@/content/navigation";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The story, beliefs and mission behind SenaTrades — a forex education and community brand built to develop independent, disciplined traders.",
  path: "/about",
});

const beliefs = [
  {
    title: "Understanding over imitation",
    body: "Copying another trader’s positions teaches you very little. Learning why the market moved teaches you how to think.",
  },
  {
    title: "Process over outcome",
    body: "A single trade proves nothing. A repeatable process — analysis, plan, execution, review — is what can be improved.",
  },
  {
    title: "Risk is respected, not ignored",
    body: "Losses are part of trading. Honest education starts with protecting capital and setting realistic expectations.",
  },
];

const approach = [
  {
    title: "Education",
    body: "Structured teaching on how markets move — market structure, liquidity, points of interest, psychology and risk.",
  },
  {
    title: "Analysis",
    body: "Market perspectives and educational trade ideas that show the reasoning, so learners can follow the thinking, not just the conclusion.",
  },
  {
    title: "Mentorship",
    body: "Guidance shaped by the founder’s own experience of learning under structured mentorship.",
  },
  {
    title: "Responsible participation",
    body: "Clear communication that trading carries substantial risk, that nothing shared is a guarantee, and that every decision belongs to the trader.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About SenaTrades"
        title={
          <>
            Built on knowledge.
            <br />
            <span className="text-fg-soft">Driven by discipline.</span>
          </>
        }
        intro="SenaTrades is a trading education and financial-market community. We exist to help people understand the market for themselves — and to approach it with structure, patience and respect for risk."
      />

      {/* Origin */}
      <Section theme="light" aria-labelledby="origin-title">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Eyebrow>The origin</Eyebrow>
            <h2 id="origin-title" className="font-display-tight mt-6 text-display-lg text-fg">
              A name that carries a person’s story.
            </h2>
            <div className="mt-10 flex max-w-xl flex-col gap-5 text-lg leading-relaxed text-fg-soft">
              <p>
                SenaTrades takes its name from its founder’s middle name,
                Senanu. It began with one person’s journey — from accounting
                and auditing into the forex market, through structured
                mentorship, to a disciplined way of reading price.
              </p>
              <p>
                What started as personal study became something to share. The
                brand grew around a simple conviction: people learn best when
                they are taught to understand the market, not to depend on
                someone else’s calls.
              </p>
            </div>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <figure
              aria-label="Senanu becomes SenaTrades"
              className="theme-dark flex h-full flex-col justify-between gap-12 rounded-panel bg-midnight p-8 text-fg sm:p-12"
            >
              <p className="eyebrow text-muted">Etymology</p>
              <div className="flex flex-col gap-2">
                <p className="font-display-wide text-[clamp(3rem,1.5rem+4vw,4.5rem)] leading-[0.85]">
                  <span className="text-sena-red">Sena</span>
                  <span className="stroke-text text-fg/60">nu</span>
                </p>
                <p aria-hidden className="eyebrow pl-1 text-muted">↓</p>
                <p className="font-display-wide text-[clamp(3rem,1.5rem+4vw,4.5rem)] leading-[0.85]">
                  <span className="text-sena-red">Sena</span>Trades
                </p>
              </div>
              <figcaption className="text-sm leading-relaxed text-muted">
                From Kwashie Senanu Charles Prince — founder &amp; CEO.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Beliefs */}
      <div className="bg-soft-white">
        <section
          aria-labelledby="beliefs-title"
          className="theme-dark grain slab-top slab-bottom relative overflow-hidden bg-midnight section-y"
        >
          <div className="container-site">
            <SectionHeading
              id="beliefs-title"
              eyebrow="What we believe"
              size="xl"
              title={
                <>
                  Independent thinking
                  <br />
                  starts with <span className="text-sena-red">understanding.</span>
                </>
              }
            />
            <ol className="mt-16 grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-3">
              {beliefs.map((b, i) => (
                <Reveal as="li" key={b.title} delay={i * 0.08} className="bg-midnight">
                  <div className="flex h-full flex-col gap-6 p-8 sm:p-10">
                    <span className="eyebrow text-accent-text">0{i + 1}</span>
                    <h3 className="font-display-tight text-display-sm text-fg lg:min-h-[2lh]">{b.title}</h3>
                    <p className="leading-relaxed text-muted">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </div>

      {/* Values */}
      <Section theme="light" aria-labelledby="values-title">
        <div className="container-site">
          <SectionHeading
            id="values-title"
            eyebrow="Core values"
            title="What we hold ourselves to."
          />
          <dl className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-line-strong py-8">
                <dt className="flex items-baseline gap-4">
                  <span className="eyebrow text-accent-text">0{i + 1}</span>
                  <span className="font-display-tight text-display-sm text-fg">{v.title}</span>
                </dt>
                <dd className="mt-3 leading-relaxed text-muted">{v.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Mission & vision */}
      <Section theme="light" className="bg-paper" aria-label="Mission and vision">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-8 rounded-panel bg-surface-raised p-8 shadow-paper sm:p-12">
            <p className="eyebrow text-accent-text">Our mission</p>
            <p className="font-serif text-[clamp(1.75rem,1.2rem+1.8vw,2.75rem)] leading-[1.1] text-fg">
              Make meaningful trading education and market understanding more
              accessible.
            </p>
            <p className="mt-auto leading-relaxed text-muted">
              Clear explanations, honest framing and a community where learning
              is the point — wherever learners are starting from.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="theme-dark flex flex-col gap-8 rounded-panel bg-midnight p-8 text-fg sm:p-12">
            <p className="eyebrow text-accent-text">Our vision</p>
            <p className="font-serif text-[clamp(1.75rem,1.2rem+1.8vw,2.75rem)] leading-[1.1]">
              Grow SenaTrades into a globally recognised trading education and
              community brand.
            </p>
            <p className="mt-auto leading-relaxed text-muted">
              Rooted in Ghana, with an educational reach that extends well
              beyond it.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Approach */}
      <Section theme="light" aria-labelledby="approach-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              id="approach-title"
              eyebrow="Our approach"
              size="md"
              title="Four parts. One standard."
              intro="How SenaTrades turns its philosophy into practice."
            />
            <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap lg:flex-col lg:items-start">
              <ButtonLink href="/education" variant="secondary">
                Explore Our Approach
              </ButtonLink>
              <ButtonLink
                href={links.telegramCommunity}
                telegram
                event={{ name: "telegram_community_click", location: "page_hero" }}
              >
                {ctaLabels.joinCommunityShort}
              </ButtonLink>
            </div>
          </div>
          <ol className="border-b border-line lg:col-span-8">
            {approach.map((a, i) => (
              <li key={a.title} className="grid gap-3 border-t border-line py-8 sm:grid-cols-12 sm:gap-8">
                <span className="eyebrow text-accent-text sm:col-span-1 sm:pt-2">0{i + 1}</span>
                <h3 className="font-display-tight text-display-sm text-fg sm:col-span-4">{a.title}</h3>
                <p className="leading-relaxed text-muted sm:col-span-7">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <FinalCta
        title={
          <>
            Learn the structure.
            <br />
            <span className="text-sena-red">Respect the risk.</span>
          </>
        }
      />
    </>
  );
}
