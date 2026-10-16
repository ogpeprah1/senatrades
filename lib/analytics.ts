/**
 * Provider-agnostic analytics hooks.
 *
 * No analytics provider is connected yet. `track()` forwards events to
 * whichever provider is present on the page — `window.dataLayer` (Google
 * Tag Manager), `window.plausible`, or `window.va` (Vercel Analytics) —
 * and otherwise does nothing (logging to the console in development).
 *
 * Event naming convention: snake_case `<object>_<action>`, with the CTA
 * placement passed as `location`.
 */

export type CtaLocation =
  | "nav"
  | "mobile_nav"
  | "hero"
  | "founder"
  | "education"
  | "trade_ideas"
  | "team"
  | "community"
  | "social"
  | "final_cta"
  | "footer"
  | "sticky_cta"
  | "page_hero"
  | "faq"
  | "not_found";

export type AnalyticsEvent =
  | { name: "telegram_community_click"; location: CtaLocation }
  | { name: "ceo_telegram_click"; location: CtaLocation }
  | {
      name: "social_click";
      location: CtaLocation;
      platform: "instagram" | "tiktok" | "x" | "youtube" | "linktree" | "telegram";
    }
  | { name: "page_view_key"; page: "founder" | "community" }
  | { name: "trade_gallery_open"; id: string }
  | { name: "trade_gallery_navigate"; id: string; direction: "next" | "prev" };

type Props = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    plausible?: (event: string, options?: { props?: Props }) => void;
    va?: (event: "event", payload: { name: string; data?: Props }) => void;
  }
}

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  const { name, ...rest } = event;
  const props = rest as Props;

  window.dataLayer?.push({ event: name, ...props });
  window.plausible?.(name, { props });
  window.va?.("event", { name, data: props });

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, props);
  }
}
