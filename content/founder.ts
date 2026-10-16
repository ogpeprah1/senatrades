import type { ImageAsset } from "./site";

/**
 * Founder content. Every factual statement here comes from the project
 * brief. When the full biography document is supplied, extend this file -
 * do not add awards, events, figures or partnerships that are not in it.
 */

export type FounderPhoto = ImageAsset & {
  alt: string;
  /** CSS object-position, used to keep the face in frame when cropped. */
  focus?: string;
};

export const founder = {
  name: "Kwashie Senanu Charles Prince",
  firstName: "Kwashie Senanu",
  lastName: "Charles Prince",
  knownAs: "Prince",
  initials: "KP",
  role: "Founder & CEO, SenaTrades",
  disciplines: [
    "Professional Forex Trader",
    "Trading Educator",
    "Mentor",
    "Public Speaker",
  ],
  quote: "I don't point you to myself; I point you to the market.",

  /**
   * Portraits supplied by SenaTrades (photographer's watermark retained).
   * `hero` (4:5, colour) is used wherever the founder portrait frame
   * appears; `secondary` (2:3, black and white) is used on the founder page.
   */
  photos: {
    hero: {
      src: "/assets/founder/prince-portrait-colour.jpg",
      width: 1024,
      height: 1280,
      alt: "Kwashie Senanu Charles Prince, founder of SenaTrades, smiling and seated in a tan double-breasted suit",
      focus: "40% 20%",
    } as FounderPhoto | null,
    secondary: {
      src: "/assets/founder/prince-portrait-bw.jpg",
      width: 853,
      height: 1280,
      alt: "Black-and-white portrait of Kwashie Senanu Charles Prince seated on a tall stool, looking upward and smiling",
      focus: "45% 30%",
    } as FounderPhoto | null,
  },

  summary: [
    "Prince is a Ghanaian professional forex trader, entrepreneur and educator. Before trading became his profession, he built a foundation in numbers - graduating with First-Class Honours in Business Administration (Accounting) and working in accounting and auditing.",
    "He founded SenaTrades to help people understand financial markets for themselves, and to approach trading with structure, discipline and an honest respect for risk.",
  ],

  academic: {
    institution: "Pentecost University",
    degree: "Business Administration (Accounting)",
    classification: "First-Class Honours",
    year: 2021,
    recognitions: [
      "Overall Best Accounting Student",
      "Overall Best Male Graduating Student",
    ],
  },

  mentor: {
    name: "Eyram Dela",
    alias: "The Marketgod",
  },
} as const;

export type TimelineEntry = {
  /** Only years confirmed in the brief are shown. */
  marker: string;
  title: string;
  body: string;
};

export const founderTimeline: TimelineEntry[] = [
  {
    marker: "2021",
    title: "First-Class Honours, Pentecost University",
    body: "Graduated in Business Administration (Accounting), recognised as Overall Best Accounting Student and Overall Best Male Graduating Student.",
  },
  {
    marker: "Career",
    title: "Accounting and auditing",
    body: "Worked professionally in accounting and auditing - disciplines built on evidence, process and precision.",
  },
  {
    marker: "2022",
    title: "First encounter with forex",
    body: "Discovered the forex market and began studying how price behaves.",
  },
  {
    marker: "2023",
    title: "Structured mentorship",
    body: "Began structured mentorship, later receiving guidance from trader and mentor Eyram Dela, known as The Marketgod.",
  },
  {
    marker: "Method",
    title: "Structural Institutional Concept",
    body: "Refined an approach that grew from SLP - Structure, Liquidity and Point of Interest - into a structured way of reading market conditions.",
  },
  {
    marker: "Today",
    title: "Founder of SenaTrades",
    body: "Leads SenaTrades as a trading education, mentorship and community brand built around independent understanding.",
  },
];
