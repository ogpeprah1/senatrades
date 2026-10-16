/**
 * Educational content. Explanations are deliberately high-level and limited
 * to what the brief supports - the Structural Institutional Concept and its
 * SLP origins. Do not add proprietary rules, setups or performance claims.
 */

export const methodology = {
  name: "Structural Institutional Concept",
  origin: "SLP",
  originExpanded: ["Structure", "Liquidity", "Point of Interest"],
  summary:
    "An approach to reading the market that grew out of SLP - Structure, Liquidity and Point of Interest. It is built on understanding the conditions price is moving in, rather than trying to predict the next candle.",
};

export const slp = [
  {
    letter: "S",
    title: "Structure",
    body: "How price is organising itself - the sequence of highs and lows that tells you whether a market is trending, ranging or shifting.",
  },
  {
    letter: "L",
    title: "Liquidity",
    body: "Where resting orders are likely to sit, and why price is often drawn toward those areas before it commits to a direction.",
  },
  {
    letter: "P",
    title: "Point of Interest",
    body: "A specific area, defined in advance, where structure and liquidity together make a reaction worth studying.",
  },
] as const;

export const concepts = [
  {
    id: "market-structure",
    title: "Market Structure",
    body: "Reading the swings price makes across timeframes to understand its current state before forming any opinion.",
  },
  {
    id: "liquidity",
    title: "Liquidity",
    body: "Recognising where orders accumulate and how that shapes the path price is likely to take.",
  },
  {
    id: "inducement",
    title: "Inducement",
    body: "Identifying moves that tempt traders into early decisions - and learning the patience to wait.",
  },
  {
    id: "points-of-interest",
    title: "Points of Interest",
    body: "Marking the areas where analysis says a reaction deserves attention, defined before price arrives.",
  },
  {
    id: "directional-bias",
    title: "Directional Bias",
    body: "Building an evidence-based view of direction from structure, while staying open to being wrong.",
  },
  {
    id: "structure-shifts",
    title: "Market Structure Shifts",
    body: "Noticing when the behaviour of price changes character and the previous narrative no longer holds.",
  },
  {
    id: "risk-management",
    title: "Risk Management",
    body: "Protecting capital first: position sizing, defined invalidation and accepting that losses are part of trading.",
  },
  {
    id: "psychology",
    title: "Trading Psychology",
    body: "Managing fear, impatience and overconfidence so that decisions follow the plan, not the moment.",
  },
  {
    id: "execution",
    title: "Execution & Discipline",
    body: "Turning analysis into consistent action - following a personal trading plan and reviewing it honestly.",
  },
] as const;

/** Long-form sections for the /education page. */
export const educationChapters = [
  {
    id: "philosophy",
    eyebrow: "01 - Philosophy",
    title: "Understanding before execution.",
    paragraphs: [
      "Most people meet trading through outcomes: screenshots of wins, promises of quick results, signals to copy. SenaTrades starts somewhere else - with understanding.",
      "The aim is not to hand you trades. It is to help you read the market for yourself, form your own view, and take responsibility for every decision you make.",
    ],
  },
  {
    id: "market-structure",
    eyebrow: "02 - Market Structure",
    title: "Price tells a story across timeframes.",
    paragraphs: [
      "Market structure is the framework of highs and lows price leaves behind. Read on its own, a single chart can mislead; read across timeframes, structure shows whether a market is trending, consolidating or beginning to change.",
      "Learning to map structure clearly - and to keep higher and lower timeframes in context - is the foundation everything else rests on.",
    ],
  },
  {
    id: "liquidity",
    eyebrow: "03 - Liquidity & Inducement",
    title: "Understand where orders rest - and why price goes there.",
    paragraphs: [
      "Liquidity describes the areas where many orders are likely to be waiting, such as above obvious highs or below obvious lows. Price is often drawn to these areas before it moves decisively.",
      "Inducement is the move that invites traders to act too early. Recognising it is less about a pattern and more about patience - waiting for the market to show its hand.",
    ],
  },
  {
    id: "points-of-interest",
    eyebrow: "04 - Points of Interest",
    title: "Decide where to pay attention before price arrives.",
    paragraphs: [
      "A point of interest is an area identified in advance, where structure and liquidity together suggest a reaction is worth studying.",
      "It is not a guaranteed turning point. It is a way to focus attention, plan a response and define in advance what would prove the idea wrong.",
    ],
  },
  {
    id: "psychology",
    eyebrow: "05 - Trading Psychology",
    title: "The hardest market to read is yourself.",
    paragraphs: [
      "Fear, impatience, overconfidence and the urge to win back a loss affect every trader. Discipline is the practice of noticing those pressures and following your plan anyway.",
      "Consistency comes from routines: preparing before the session, journaling decisions, and reviewing what you did - not only what the market did.",
    ],
  },
  {
    id: "risk-management",
    eyebrow: "06 - Risk Management",
    title: "Protect your capital first.",
    paragraphs: [
      "Every trade can lose. Risk management means deciding in advance how much you are prepared to lose, where an idea is invalid, and how position size reflects that.",
      "Losses are part of the learning process, not a verdict on you as a trader. Trading forex involves substantial risk, and no method removes the possibility of losing money.",
    ],
  },
  {
    id: "practical-learning",
    eyebrow: "07 - Practical Learning",
    title: "Learn by observing real markets, together.",
    paragraphs: [
      "Theory becomes useful when you see it in live conditions. SenaTrades shares educational market observations and trade ideas, and holds community-based learning sessions where concepts are discussed in context.",
      "These are shared to teach a way of thinking - not as instructions to copy.",
    ],
  },
] as const;

export const values = [
  {
    title: "Strategy",
    body: "A defined methodology over guesswork. Every decision should have a reason you can explain.",
  },
  {
    title: "Discipline",
    body: "Following the plan when it is uncomfortable. Managing risk before chasing reward.",
  },
  {
    title: "Results",
    body: "Long-term growth measured in understanding, consistency and better decisions - not promises.",
  },
  {
    title: "Education",
    body: "Teaching the why behind the market, so learners can stand on their own analysis.",
  },
  {
    title: "Integrity",
    body: "Honest communication about risk, losses and what trading can and cannot offer.",
  },
  {
    title: "Community",
    body: "Learning alongside people who take the market - and their own development - seriously.",
  },
] as const;

export const communityOfferings = [
  {
    title: "Free community calls",
    body: "Regular free calls where members join live and work through the market together.",
  },
  {
    title: "Analysing the market together",
    body: "Ideas are analysed and discussed as a group - members learn the reasoning, not just the outcome.",
  },
  {
    title: "Educational trade ideas",
    body: "Ideas marked in advance with structure, entry and target, shared to teach the process.",
  },
  {
    title: "Market education",
    body: "Lessons on structure, liquidity, points of interest and the reasoning behind them.",
  },
  {
    title: "Trading psychology",
    body: "Discussions on discipline, patience and the mindset behind consistent execution.",
  },
  {
    title: "Mentorship",
    body: "Beyond the community, SenaTrades runs structured mentorship for traders who want deeper guidance.",
  },
] as const;

export const faqs = [
  {
    q: "What is SenaTrades?",
    a: "SenaTrades is a trading education and community brand founded by Ghanaian forex trader and educator Kwashie Senanu Charles Prince. It focuses on forex education, market analysis, mentorship and community-based learning.",
  },
  {
    q: "What is Sena Trades Effect?",
    a: "Sena Trades Effect is the SenaTrades Telegram community, with more than 1,100 subscribers. It is where we share market education and trade ideas, hold free calls, and analyse the market together. The goal is to help you understand the market, not to tell you what to trade.",
  },
  {
    q: "How is the community different from mentorship?",
    a: "The community is open to everyone who joins on Telegram, with free calls and shared analysis. Mentorship is a separate, more structured programme for traders who want deeper, guided learning.",
  },
  {
    q: "Can beginners benefit from the content?",
    a: "Yes. The educational approach starts with fundamentals such as market structure and risk management, and builds from there. Beginners should take time to learn and should never trade money they cannot afford to lose.",
  },
  {
    q: "What kind of content does SenaTrades share?",
    a: "Market education, educational trade ideas and market analysis, trading psychology discussions, and free community calls - shared across Telegram and the official social channels.",
  },
  {
    q: "Does trading involve financial risk?",
    a: "Yes. Trading forex and other financial instruments involves substantial risk and may result in the loss of capital. SenaTrades provides education and market commentary only; nothing it shares is a guarantee of results or personalised investment advice.",
  },
] as const;
