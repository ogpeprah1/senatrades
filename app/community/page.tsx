import { communityOfferings, faqs } from "@/content/education";
import { links, linktree } from "@/content/site";
import { ctaLabels } from "@/content/navigation";
import { founder } from "@/content/founder";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { RiskNotice } from "@/components/ui/risk-notice";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";
import { TrackPageView } from "@/components/track-page-view";
import { CommunityStats } from "@/components/community/community-stats";
import { TelegramPanel } from "@/components/community/telegram-panel";
import { SocialRows } from "@/components/community/social-rows";
import { Testimonials } from "@/components/sections/testimonials";
import { FounderQuote } from "@/components/founder/founder-quote";

export const metadata = pageMetadata({
  title: "Community",
  description:
    "Join the SenaTrades Telegram community for market education, educational trade ideas, analysis and trading psychology discussions. Follow SenaTrades on Instagram, TikTok, X and YouTube.",
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Community", path: "/community" }]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <TrackPageView page="community" />

      <PageHero
        eyebrow="The community"
        title={
          <>
            Learn the market.
            <br />
            <span className="text-sena-red">Grow with the community.</span>
          </>
        }
        intro="Sena Trades Effect is the SenaTrades Telegram community - more than a thousand traders learning together through free calls, shared market analysis and lively discussion."
      >
        <ButtonLink
          href={links.telegramCommunity}
          size="lg"
          telegram
          event={{ name: "telegram_community_click", location: "page_hero" }}
        >
          Join Sena Trades Effect
        </ButtonLink>
        <ButtonLink href="#faq" size="lg" variant="secondary">
          Read the FAQ
        </ButtonLink>
      </PageHero>

      {/* Benefits */}
      <Section theme="light" aria-labelledby="benefits-title">
        <div className="container-site">
          <SectionHeading
            id="benefits-title"
            eyebrow="Inside the community"
            title="What members learn from."
            intro="Everything shared is educational. It is designed to sharpen your own analysis - not to replace it."
          />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {communityOfferings.map((o, i) => (
              <Reveal as="li" key={o.title} delay={(i % 3) * 0.06} className="bg-surface">
                <div className="flex h-full flex-col gap-4 p-8">
                  <span className="eyebrow text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display-tight text-display-sm text-fg lg:min-h-[2lh]">{o.title}</h3>
                  <p className="leading-relaxed text-muted">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12" data-hide-sticky-cta>
            <TelegramPanel location="community" />
            <div className="theme-dark mt-4">
              <CommunityStats />
            </div>
          </div>
        </div>
      </Section>

      {/* Founder connection */}
      <div className="bg-soft-white">
        <section
          aria-labelledby="founder-connect-title"
          className="theme-dark grain slab-top slab-bottom relative overflow-hidden bg-midnight section-y"
        >
          <div className="container-site grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Eyebrow>Led by the founder</Eyebrow>
              <h2 id="founder-connect-title" className="font-display-tight mt-6 text-display-md text-fg">
                {founder.name}
              </h2>
              <p className="mt-6 leading-relaxed text-fg-soft">{founder.summary[1]}</p>
              <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                {links.ceoTelegram && (
                  <ButtonLink
                    href={links.ceoTelegram}
                    telegram
                    event={{ name: "ceo_telegram_click", location: "community" }}
                  >
                    {ctaLabels.connectCeo}
                  </ButtonLink>
                )}
                <ButtonLink href="/founder" variant="secondary">
                  Meet the Founder
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <FounderQuote size="md" />
            </div>
          </div>
        </section>
      </div>

      {/* Socials */}
      <Section theme="light" aria-labelledby="socials-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              id="socials-title"
              size="md"
              eyebrow="Official channels"
              title="Follow SenaTrades everywhere."
              intro="Only these accounts are official. Be cautious of impersonators."
            />
            <p className="mt-8 text-sm text-muted">
              All links in one place:{" "}
              <SmartLink
                href={linktree.href}
                event={{ name: "social_click", platform: "linktree", location: "social" }}
                className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-sena-red"
              >
                SenaTrades on Linktree
              </SmartLink>
            </p>
          </div>
          <div className="lg:col-span-8">
            <SocialRows location="social" />
          </div>
        </div>
      </Section>

      <Testimonials className="bg-paper" />

      {/* FAQ */}
      <Section theme="light" id="faq" aria-labelledby="faq-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" size="md" eyebrow="FAQ" title="Questions, answered." />
          </div>
          <div className="lg:col-span-8">
            <div className="border-b border-line-strong">
              {faqs.map((f) => (
                <details key={f.q} className="group border-t border-line-strong">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="text-lg font-medium text-fg">{f.q}</span>
                    <span
                      aria-hidden
                      className="relative size-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-4 before:bg-fg after:absolute after:top-0 after:left-1/2 after:h-4 after:w-px after:bg-fg after:transition-transform after:duration-(--duration-base) group-open:after:scale-y-0"
                    />
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
            <RiskNotice className="mt-10" />
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
