/**
 * Central brand + link configuration.
 *
 * Every official URL used anywhere on the site is defined here once.
 * Values set to `null` are intentionally unconfigured: components that
 * depend on them are not rendered (no dead buttons in the public UI).
 */

export type SocialPlatform =
  | "telegram"
  | "instagram"
  | "tiktok"
  | "x"
  | "youtube"
  | "linktree";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
  description: string;
};

/**
 * Production URL. Set NEXT_PUBLIC_SITE_URL in the deployment environment
 * (e.g. https://www.senatrades.com). Canonical URLs are only emitted when
 * it is set, so we never advertise an invented domain.
 */
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const site = {
  name: "SenaTrades",
  tagline: "Strategy | Discipline | Results",
  pillars: ["Strategy", "Discipline", "Results"] as const,
  description:
    "SenaTrades is a trading education and community platform focused on market understanding, disciplined execution, and independent learning.",
  shortDescription:
    "Forex education, market analysis, mentorship, and a community committed to understanding the market.",
  url: configuredSiteUrl ?? null,
  /** Used for metadataBase when no production URL is configured. */
  fallbackUrl: "http://localhost:3000",
  locale: "en_GH",
  founder: {
    name: "Kwashie Senanu Charles Prince",
    shortName: "Prince",
    role: "Founder & CEO, SenaTrades",
  },
  /**
   * Contact details. Leave null until genuine details are supplied;
   * the footer only renders entries that are set.
   */
  contact: {
    email: "senatradesadmin@gmail.com" as string | null,
  },
} as const;

/**
 * The Telegram community. Update `subscribers` and `asOf` periodically -
 * the figure is shown publicly.
 */
export const community = {
  name: "Sena Trades Effect",
  /** Shown as a rounded floor, e.g. 1100 → "1,100+". */
  subscribers: 1100,
  asOf: "October 2026",
} as const;

export const formattedSubscribers = `${community.subscribers.toLocaleString("en-US")}+`;

export const links = {
  telegramCommunity: "https://t.me/senatrades",
  /**
   * CEO personal Telegram - NOT YET SUPPLIED.
   * Set NEXT_PUBLIC_CEO_TELEGRAM_URL (or replace the fallback below) with the
   * verified address. Every "Connect with Prince on Telegram" CTA stays
   * hidden while this is null.
   */
  ceoTelegram: (process.env.NEXT_PUBLIC_CEO_TELEGRAM_URL || null) as
    | string
    | null,
  instagram: "https://www.instagram.com/senatrades",
  tiktok: "https://www.tiktok.com/@senatradess",
  x: "https://x.com/senatrades",
  youtube: "https://youtube.com/@senatradescommunity",
  linktree: "https://tr.ee/FtXr46d13p",
} as const;

/**
 * Legal documents. Privacy Policy and Terms of Use have not been supplied,
 * so they are null and not linked. The Risk Disclosure page uses the
 * preliminary notice from the brief and still needs legal review.
 */
export const legal = {
  privacyPolicy: null as string | null,
  termsOfUse: null as string | null,
  riskDisclosure: "/risk-disclosure",
} as const;

export const socials: SocialLink[] = [
  {
    platform: "telegram",
    label: "Telegram",
    handle: "t.me/senatrades",
    href: links.telegramCommunity,
    description: "Sena Trades Effect - our community, free calls and market analysis",
  },
  {
    platform: "instagram",
    label: "Instagram",
    handle: "@senatrades",
    href: links.instagram,
    description: "Behind the charts and brand moments",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    handle: "@senatradess",
    href: links.tiktok,
    description: "Short-form lessons and market thoughts",
  },
  {
    platform: "x",
    label: "X",
    handle: "@senatrades",
    href: links.x,
    description: "Quick market commentary and updates",
  },
  {
    platform: "youtube",
    label: "YouTube",
    handle: "@senatradescommunity",
    href: links.youtube,
    description: "Long-form education and sessions",
  },
];

export const linktree: SocialLink = {
  platform: "linktree",
  label: "Linktree",
  handle: "All SenaTrades links",
  href: links.linktree,
  description: "Every official SenaTrades destination",
};

/** Preliminary educational-risk statement supplied in the brief. Requires legal review. */
export const riskNotice =
  "Trading forex and other financial instruments involves substantial risk and may result in the loss of capital. SenaTrades provides educational content and market commentary. Nothing on this website should be interpreted as a guarantee of trading results or as personalized investment advice.";

export const riskNoticeShort =
  "Trading involves substantial risk and may result in the loss of capital. Content is educational and is not investment advice.";

/**
 * Brand assets.
 *
 * `mark` is the official SenaTrades symbol (S + T with candlesticks), cropped
 * from the supplied transparent PNG with its pixels unchanged - for light
 * backgrounds. `markReversed` is the dark-background variant requested by
 * the brand owner: the black strokes are rendered soft white, the red
 * artwork is untouched.
 *
 * Still wanted: a transparent export of the full lockup (symbol + "Sena
 * Trades" wordmark), ideally SVG, to replace the typeset name.
 */
export type ImageAsset = { src: string; width: number; height: number };

export const brandAssets = {
  mark: {
    src: "/assets/brand/senatrades-mark.png",
    width: 1074,
    height: 906,
  } satisfies ImageAsset,
  markReversed: {
    src: "/assets/brand/senatrades-mark-reversed.png",
    width: 1074,
    height: 906,
  } satisfies ImageAsset,
};

export function absoluteUrl(path = "/") {
  return `${site.url ?? site.fallbackUrl}${path}`;
}
