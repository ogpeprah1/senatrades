import { tradeIdeas, tradeIdeasNote } from "@/content/trade-ideas";
import { links } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { RiskNotice } from "@/components/ui/risk-notice";
import { TradeIdeaGallery } from "@/components/gallery/trade-idea-gallery";

/**
 * Trade-idea gallery section. The homepage passes `limit` and links to the
 * full gallery on /education.
 */
export function TradeIdeas({
  limit,
  id,
  className,
}: {
  limit?: number;
  id?: string;
  className?: string;
}) {
  if (tradeIdeas.length === 0) return null;
  const ideas = limit ? tradeIdeas.slice(0, limit) : tradeIdeas;
  const truncated = ideas.length < tradeIdeas.length;

  return (
    <Section theme="light" id={id} className={className} aria-labelledby="trade-ideas-title">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="trade-ideas-title"
            className="lg:col-span-7"
            eyebrow="Market perspectives"
            title={
              <>
                Real market perspectives.
                <br />
                Thoughtful analysis.
              </>
            }
          />
          <p className="text-lead text-muted lg:col-span-5">
            Trade ideas shared with the community - marked in advance, with the
            structure, entry and target on the chart. Tap any chart to view it
            full size.
          </p>
        </div>

        <div className="mt-14">
          <TradeIdeaGallery ideas={ideas} />
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{tradeIdeasNote}</p>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <RiskNotice compact className="max-w-2xl" />
          <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            {truncated && (
              <ButtonLink href="/education#market-perspectives" variant="secondary">
                See all {tradeIdeas.length} ideas
              </ButtonLink>
            )}
            <ButtonLink
              href={links.telegramCommunity}
              telegram
              event={{ name: "telegram_community_click", location: "trade_ideas" }}
            >
              More insights on Telegram
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
