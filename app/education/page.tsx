import { educationChapters, methodology, concepts } from "@/content/education";
import { links } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { RiskNotice } from "@/components/ui/risk-notice";
import { JsonLd } from "@/components/json-ld";
import { StructureDiagram } from "@/components/education/structure-diagram";
import { TradeIdeas } from "@/components/sections/home/trade-ideas";
import { SlpFramework } from "@/components/education/slp-framework";

export const metadata = pageMetadata({
  title: "Education & Methodology",
  description:
    "How SenaTrades teaches: understanding before execution, the Structural Institutional Concept, market structure, liquidity, points of interest, psychology and risk management.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Education", path: "/education" }])} />
      <PageHero
        eyebrow="Education & methodology"
        title={
          <>
            Understanding
            <br />
            <span className="text-fg-soft">before execution.</span>
          </>
        }
        intro="SenaTrades teaches a way of reading the market - so that every decision you make is one you understand and can explain."
        
      >
        <ButtonLink href="#framework" size="lg" variant="secondary">
          Explore the framework
        </ButtonLink>
      </PageHero>

      {/* Methodology */}
      <Section theme="light" id="framework" aria-labelledby="framework-title">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              id="framework-title"
              className="lg:col-span-7"
              eyebrow="The methodology"
              title={methodology.name}
            />
            <p className="text-lead text-muted lg:col-span-5">{methodology.summary}</p>
          </div>
          <SlpFramework className="mt-16" />
        </div>
      </Section>

      {/* Chapters */}
      <Section theme="light" className="bg-paper" aria-labelledby="chapters-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>The curriculum of thinking</Eyebrow>
              <h2 id="chapters-title" className="font-display-tight mt-6 text-display-md text-fg">
                Seven ideas, in order.
              </h2>
              <nav aria-label="Education topics" className="mt-10 hidden lg:block">
                <ol className="flex flex-col border-l border-line">
                  {educationChapters.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className="-ml-px block border-l border-transparent py-2 pl-4 text-sm text-muted transition-colors hover:border-sena-red hover:text-fg"
                      >
                        {c.eyebrow.split("- ")[1]}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5">
            {educationChapters.map((c) => (
              <article
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-title`}
                className="scroll-mt-28 border-t border-line-strong py-12 first:border-t-0 first:pt-0 sm:py-16"
              >
                <p className="eyebrow text-accent-text">{c.eyebrow}</p>
                <h3 id={`${c.id}-title`} className="font-display-tight mt-4 text-display-md text-fg">
                  {c.title}
                </h3>
                <div className="mt-6 flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-fg-soft">
                  {c.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                {c.id === "risk-management" && <RiskNotice className="mt-8 max-w-2xl" />}
              </article>
            ))}
          </div>
        </div>
      </Section>

      <TradeIdeas id="market-perspectives" />

      {/* Concept glossary */}
      <div className="bg-soft-white">
        <section
          aria-labelledby="glossary-title"
          className="theme-dark grain slab-top relative border-b border-line overflow-hidden bg-midnight section-y"
        >
          <div className="container-site">
            <SectionHeading
              id="glossary-title"
              eyebrow="Key concepts"
              title="The vocabulary of structure."
              intro="Open any concept for a short, plain-language definition."
            />
            <div className="mt-14 grid gap-x-10 md:grid-cols-2">
              {concepts.map((c, i) => (
                <details
                  key={c.id}
                  className="group border-b border-line py-1 first:border-t md:nth-2:border-t"
                >
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-baseline gap-4">
                      <span className="eyebrow text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-medium text-fg">{c.title}</span>
                    </span>
                    <span
                      aria-hidden
                      className="relative size-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-4 before:bg-fg after:absolute after:top-0 after:left-1/2 after:h-4 after:w-px after:bg-fg after:transition-transform after:duration-(--duration-base) group-open:after:scale-y-0"
                    />
                  </summary>
                  <p className="max-w-lg pb-6 pl-10 leading-relaxed text-muted">{c.body}</p>
                </details>
              ))}
            </div>
            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-muted">
                These ideas come alive in context. Educational market observations
                and sessions are shared in the community.
              </p>
              <ButtonLink
                href={links.telegramCommunity}
                telegram
                event={{ name: "telegram_community_click", location: "education" }}
              >
                Learn with the community
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>

      <FinalCta
        surround="bg-midnight"
        title={
          <>
            Understand the market.
            <br />
            <span className="text-sena-red">Trust the process.</span>
          </>
        }
      />
    </>
  );
}
