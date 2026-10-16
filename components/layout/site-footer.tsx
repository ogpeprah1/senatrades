import Link from "next/link";
import { mainNav, ctaLabels } from "@/content/navigation";
import { site, socials, linktree, legal, links, riskNotice } from "@/content/site";
import { Wordmark } from "@/components/ui/wordmark";
import { SmartLink } from "@/components/ui/smart-link";
import { SocialIcon } from "@/components/ui/social-icon";
import { ButtonLink } from "@/components/ui/button";
import { CurrentYear } from "@/components/ui/current-year";

const linkClass =
  "inline-flex min-h-8 items-center text-[0.9375rem] text-fg-soft transition-colors hover:text-fg";

export function SiteFooter() {
  const legalLinks = [
    legal.privacyPolicy && { label: "Privacy Policy", href: legal.privacyPolicy },
    legal.termsOfUse && { label: "Terms of Use", href: legal.termsOfUse },
    { label: "Risk Disclosure", href: legal.riskDisclosure },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="theme-dark grain relative overflow-hidden border-t border-line bg-midnight pt-20 pb-28 sm:pb-12">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Wordmark size="lg" />
            <p className="eyebrow text-accent-text">{site.tagline}</p>
            <p className="max-w-sm leading-relaxed text-muted">{site.description}</p>
            <div>
              <ButtonLink
                href={links.telegramCommunity}
                telegram
                event={{ name: "telegram_community_click", location: "footer" }}
              >
                {ctaLabels.joinCommunity}
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <h2 className="eyebrow mb-5 text-muted">Explore</h2>
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow mb-5 text-muted">Connect</h2>
            <ul className="flex flex-col gap-1">
              {[...socials, linktree].map((s) => (
                <li key={s.platform}>
                  <SmartLink
                    href={s.href}
                    event={
                      s.platform === "telegram"
                        ? { name: "telegram_community_click", location: "footer" }
                        : { name: "social_click", platform: s.platform, location: "footer" }
                    }
                    className={`${linkClass} gap-3`}
                  >
                    <SocialIcon platform={s.platform} className="size-4 text-muted" />
                    {s.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="eyebrow mb-5 text-muted">Legal</h2>
            <ul className="flex flex-col gap-1">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {site.contact.email && (
              <>
                <h2 className="eyebrow mt-8 mb-5 text-muted">Contact</h2>
                <a href={`mailto:${site.contact.email}`} className={linkClass}>
                  {site.contact.email}
                </a>
              </>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-grey-400">{riskNotice}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-grey-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <p>Founded by {site.founder.name}.</p>
        </div>
      </div>

      {/* Oversized background wordmark */}
      <p
        aria-hidden
        className="font-display-wide pointer-events-none absolute -bottom-[0.18em] left-1/2 -z-10 -translate-x-1/2 text-[22vw] leading-none whitespace-nowrap text-white/[0.025] select-none"
      >
        SenaTrades
      </p>
    </footer>
  );
}
