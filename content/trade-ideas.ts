/**
 * Trade-idea / market-perspective gallery.
 *
 * No screenshots have been supplied yet. Add real screenshots to
 * /public/assets/trade-ideas/ and describe them here. Only include values
 * that the screenshot or supplied notes actually support:
 *
 *   - never label an idea as successful/profitable unless the material
 *     reliably shows it;
 *   - never edit or invent entries, results or P&L figures;
 *   - use neutral descriptions when content is ambiguous.
 *
 *   {
 *     id: "eurusd-structure-2025-03",
 *     src: "/assets/trade-ideas/eurusd-structure.png",
 *     width: 1920, height: 1080,
 *     alt: "EURUSD 4-hour chart annotated with market structure and a marked liquidity level",
 *     title: "EURUSD - structure and liquidity",
 *     description: "Neutral description of what the chart shows.",
 *     date: "2025-03-14",
 *     instrument: "EURUSD",
 *   }
 */

export type TradeIdea = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
  description?: string;
  /** ISO date (YYYY-MM-DD) if the screenshot shows or is supplied with one. */
  date?: string;
  instrument?: string;
  /** Short status label, only as visibly supported by the screenshot. */
  status?: "Setup" | "Entry triggered" | "In progress" | "Target reached";
};

export const tradeIdeas: TradeIdea[] = [
  {
    id: "btcusd-2026-10-15",
    src: "/assets/trade-ideas/btcusd-2026-10-15.jpg",
    width: 685,
    height: 1280,
    alt: "BTCUSD 1-hour chart with a short position marked from about 83,922 and a target near 80,378; price wicks down to the target line",
    title: "BTCUSD - short from structure",
    description:
      "Short position marked from around 83,922 with a target near 80,378. Price declined to the target line, printing a low of about 80,364.",
    date: "2026-10-15",
    instrument: "BTCUSD · 1H",
    status: "Target reached",
  },
  {
    id: "gbpaud-2026-10-14",
    src: "/assets/trade-ideas/gbpaud-2026-10-14.jpg",
    width: 685,
    height: 1280,
    alt: "GBPAUD 15-minute chart with a short position marked from 1.89937 and a target at 1.89436; price trades below the target",
    title: "GBPAUD - short into the session low",
    description:
      "Short position marked from 1.89937 with a target at 1.89436. Price moved through the target, trading near 1.8933 at the time of the screenshot.",
    date: "2026-10-14",
    instrument: "GBPAUD · 15M",
    status: "Target reached",
  },
  {
    id: "gbpjpy-2026-09-03",
    src: "/assets/trade-ideas/gbpjpy-2026-09-03.jpg",
    width: 1080,
    height: 720,
    alt: "GBPJPY 1-hour chart with a short position marked from 217.052 and a target at 214.828, annotated 25RR done; price drops below the target",
    title: "GBPJPY - short from a lower high",
    description:
      "Short position marked from 217.052 with a target at 214.828. Price fell through the target; the chart is annotated “25RR done” (reward-to-risk as marked on the chart).",
    date: "2026-09-03",
    instrument: "GBPJPY · 1H",
    status: "Target reached",
  },
  {
    id: "usdcad-2026-08-03",
    src: "/assets/trade-ideas/usdcad-2026-08-03-setup.jpg",
    width: 1080,
    height: 582,
    alt: "USDCAD 30-minute chart with a planned short marked at a supply zone near 1.4078, targeting 1.3991",
    title: "USDCAD - 1/3: the setup",
    description:
      "A planned short marked in advance at a supply zone near 1.4078, with a target at the prior low around 1.3991. Price had not yet reached the entry.",
    date: "2026-08-03",
    instrument: "USDCAD · 30M",
    status: "Setup",
  },
  {
    id: "usdcad-2026-08-04",
    src: "/assets/trade-ideas/usdcad-2026-08-04-triggered.jpg",
    width: 1080,
    height: 720,
    alt: "USDCAD 30-minute chart showing price rallying into the marked entry zone near 1.4078",
    title: "USDCAD - 2/3: entry triggered",
    description:
      "The next day, price rallied into the pre-marked zone and reached the entry near 1.4078.",
    date: "2026-08-04",
    instrument: "USDCAD · 30M",
    status: "Entry triggered",
  },
  {
    id: "usdcad-2026-08-05",
    src: "/assets/trade-ideas/usdcad-2026-08-05-progress.jpg",
    width: 719,
    height: 1280,
    alt: "USDCAD 2-hour chart showing price falling from the entry zone toward the 1.3991 target, trading near 1.4009",
    title: "USDCAD - 3/3: moving toward target",
    description:
      "Price turned lower from the entry zone and was trading near 1.4009, close to the 1.3991 target, at the time of the screenshot.",
    date: "2026-08-05",
    instrument: "USDCAD · 2H",
    status: "In progress",
  },
  {
    id: "btcusd-2026-03-22",
    src: "/assets/trade-ideas/btcusd-2026-03-22.jpg",
    width: 720,
    height: 1280,
    alt: "BTCUSD 30-minute chart with a short marked from about 71,045 and a target near 68,817, annotated Full TP hit; price wicks below the target",
    title: "BTCUSD - short after a sweep of highs",
    description:
      "Short position marked from around 71,045 with a target near 68,817. Price traded through the target line; the chart is annotated “Full TP hit”.",
    date: "2026-03-22",
    instrument: "BTCUSD · 30M",
    status: "Target reached",
  },
  {
    id: "audjpy-2026-03-01",
    src: "/assets/trade-ideas/audjpy-2026-03-01.jpg",
    width: 1080,
    height: 720,
    alt: "AUDJPY 30-minute chart with a short position marked from about 111.18 and a target near 109.67; price has dropped to around 110.09",
    title: "AUDJPY - short from a double top",
    description:
      "Short position marked from around 111.18 with a target near 109.67. Price had dropped sharply to about 110.09 at the time of the screenshot.",
    date: "2026-03-01",
    instrument: "AUDJPY · 30M",
    status: "In progress",
  },
  {
    id: "eurjpy-2025-12-10",
    src: "/assets/trade-ideas/eurjpy-2025-12-10.jpg",
    width: 1080,
    height: 560,
    alt: "EURJPY 3-hour chart with several long positions marked from demand zones inside a range, followed by a breakout above the range high",
    title: "EURJPY - buying demand in a range",
    description:
      "Several long positions marked from demand zones inside a range, followed by a breakout above the range high and a new long marked on the retest.",
    date: "2025-12-10",
    instrument: "EURJPY · 3H",
  },
];

/** How many ideas the homepage shows before linking to the full gallery. */
export const TRADE_IDEAS_PREVIEW_COUNT = 6;

export const tradeIdeasNote =
  "Selected trade ideas shared with the SenaTrades community, shown as published. Not every idea reaches its target, losses are part of trading, and past examples do not guarantee future results.";
