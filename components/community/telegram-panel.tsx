import { ArrowUpRight } from "lucide-react";
import { links, community } from "@/content/site";
import { SmartLink } from "@/components/ui/smart-link";
import { TelegramIcon } from "@/components/ui/social-icon";
import type { CtaLocation } from "@/lib/analytics";

/** The flagship community CTA: a single, large, clearly interactive panel. */
export function TelegramPanel({
  location,
  label = `Join ${community.name} on Telegram`,
}: {
  location: CtaLocation;
  label?: string;
}) {
  return (
    <SmartLink
      href={links.telegramCommunity}
      event={{ name: "telegram_community_click", location }}
      className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-panel bg-sena-red p-5 text-white transition-[box-shadow,background-color] duration-(--duration-base) ease-out-expo hover:bg-sena-red-deep hover:shadow-red sm:gap-10 sm:p-10"
    >
      <span
        aria-hidden
        className="absolute -top-1/2 -right-1/4 size-[28rem] rounded-full bg-white/10 blur-3xl transition-transform duration-(--duration-slow) group-hover:translate-x-8"
      />
      <span className="relative flex min-w-0 items-center gap-4 sm:gap-5">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-sena-red sm:size-14">
          <TelegramIcon className="size-6 sm:size-7" />
        </span>
        <span className="flex flex-col gap-1.5">
          <span className="font-display-tight text-[clamp(1.35rem,1rem+1.6vw,2.6rem)] leading-[0.95]">
            {label}
          </span>
          <span className="eyebrow text-white">t.me/senatrades</span>
        </span>
      </span>
      <span
        aria-hidden
        className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/40 transition-[transform,background-color,color] duration-(--duration-base) ease-out-expo group-hover:rotate-45 group-hover:bg-white group-hover:text-sena-red sm:size-14"
      >
        <ArrowUpRight className="size-5 sm:size-6" />
      </span>
    </SmartLink>
  );
}
