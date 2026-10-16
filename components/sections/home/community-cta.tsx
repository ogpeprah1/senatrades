import { communityOfferings } from "@/content/education";
import { links } from "@/content/site";
import { ctaLabels } from "@/content/navigation";
import { Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { TelegramPanel } from "@/components/community/telegram-panel";
import { Reveal } from "@/components/ui/reveal";
import { CommunityStats } from "@/components/community/community-stats";

export function CommunityCta() {
  return (
    <div className="bg-soft-white">
      <section
        aria-labelledby="community-cta-title"
        data-hide-sticky-cta
        className="theme-dark grain slab-top slab-bottom relative overflow-hidden bg-midnight section-y"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgb(207_16_37/0.18),transparent_70%)]"
        />
        <div className="container-site">
          <div className="mx-auto max-w-5xl text-center">
            <Eyebrow className="justify-center">The community</Eyebrow>
            <h2
              id="community-cta-title"
              className="font-display-tight mt-6 text-display-xl text-fg"
            >
              Your growth starts with{" "}
              <span className="text-sena-red">understanding.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lead text-fg-soft">
              Join Sena Trades Effect - an active, highly engaged Telegram
              community where we hold free calls and analyse the market
              together, alongside our mentorship programmes.
            </p>
          </div>

          <Reveal className="mx-auto mt-14 max-w-5xl">
            <TelegramPanel location="community" />
            <CommunityStats className="mt-4" />
          </Reveal>

          {links.ceoTelegram && (
            <div className="mt-6 flex justify-center">
              <ButtonLink
                href={links.ceoTelegram}
                variant="secondary"
                telegram
                event={{ name: "ceo_telegram_click", location: "community" }}
              >
                {ctaLabels.connectCeo}
              </ButtonLink>
            </div>
          )}

          <ul className="mx-auto mt-20 grid max-w-5xl gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {communityOfferings.map((o) => (
              <li key={o.title} className="border-t border-line py-5">
                <h3 className="flex items-center gap-3 font-medium text-fg">
                  <span aria-hidden className="size-1.5 rounded-full bg-sena-red" />
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
