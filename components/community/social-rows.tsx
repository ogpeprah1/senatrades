import { ArrowUpRight } from "lucide-react";
import { socials } from "@/content/site";
import { SmartLink } from "@/components/ui/smart-link";
import { SocialIcon } from "@/components/ui/social-icon";
import type { CtaLocation } from "@/lib/analytics";

/** Editorial link rows for the official social destinations. */
export function SocialRows({ location }: { location: CtaLocation }) {
  return (
    <ul className="border-b border-line">
      {socials.map((s) => (
        <li key={s.platform} className="border-t border-line">
          <SmartLink
            href={s.href}
            event={
              s.platform === "telegram"
                ? { name: "telegram_community_click", location }
                : { name: "social_click", platform: s.platform, location }
            }
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 sm:grid-cols-[auto_1fr_1fr_auto] sm:gap-8 sm:py-7"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 -inset-x-4 -z-0 origin-left scale-x-0 rounded-card bg-fg/[0.04] transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-x-100"
            />
            <span className="relative inline-flex size-12 items-center justify-center rounded-full border border-line-strong text-fg transition-colors duration-(--duration-base) group-hover:border-sena-red group-hover:bg-sena-red group-hover:text-white">
              <SocialIcon platform={s.platform} className="size-5" />
            </span>
            <span className="relative flex flex-col">
              <span className="font-display-tight text-display-sm text-fg">{s.label}</span>
              <span className="eyebrow mt-1 text-muted">{s.handle}</span>
            </span>
            <span className="relative hidden text-muted sm:block">{s.description}</span>
            <ArrowUpRight
              aria-hidden
              className="relative size-6 text-muted transition-[transform,color] duration-(--duration-base) ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-text"
            />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
