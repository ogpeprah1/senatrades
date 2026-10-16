import { riskNotice, links } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SmartLink } from "@/components/ui/smart-link";
import { JsonLd } from "@/components/json-ld";

export const metadata = pageMetadata({
  title: "Risk Disclosure",
  description:
    "Trading forex and other financial instruments involves substantial risk. Read the SenaTrades risk disclosure.",
  path: "/risk-disclosure",
});

const points = [
  {
    title: "Trading carries substantial risk",
    body: "Forex and other leveraged financial instruments can move quickly against you. You may lose some or all of the capital you trade with. Only trade with money you can afford to lose.",
  },
  {
    title: "Education, not advice",
    body: "SenaTrades provides educational content and market commentary. It does not provide personalised investment, financial, legal or tax advice, and nothing it shares takes your individual circumstances into account.",
  },
  {
    title: "No guarantee of results",
    body: "Trade ideas, market perspectives and examples are shared to illustrate analysis. Past observations do not indicate or guarantee future outcomes, and no method removes the possibility of loss.",
  },
  {
    title: "Your decisions are your own",
    body: "You are solely responsible for any trading decision you make. Consider seeking independent advice from a suitably qualified professional before trading.",
  },
];

export default function RiskDisclosurePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Risk Disclosure", path: "/risk-disclosure" }])} />
      <PageHero eyebrow="Legal" title="Risk disclosure." intro={riskNotice} />
      <Section theme="light">
        <div className="container-site max-w-3xl!">
          <dl className="border-b border-line">
            {points.map((p) => (
              <div key={p.title} className="border-t border-line py-8">
                <dt className="font-display-tight text-display-sm text-fg">{p.title}</dt>
                <dd className="mt-3 text-lg leading-relaxed text-fg-soft">{p.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 leading-relaxed text-muted">
            Questions about this notice can be raised with SenaTrades through the{" "}
            <SmartLink
              href={links.telegramCommunity}
              className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-sena-red"
            >
              official Telegram community
            </SmartLink>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
