import type { ImageAsset } from "./site";
import type { SocialPlatform } from "./site";
import { founder } from "./founder";

/**
 * Team directory.
 *
 * No team members (other than the founder) have been supplied yet, so the
 * list is intentionally empty. Do not add people, titles or biographies that
 * have not been provided and confirmed.
 *
 * To add a member, append an entry like:
 *
 *   {
 *     id: "jane-doe",
 *     name: "Full Name",
 *     role: "Position",
 *     photo: { src: "/assets/team/full-name.jpg", width: 1200, height: 1500,
 *              alt: "Portrait of Full Name", focus: "50% 30%" },
 *     bio: "Short professional biography.",
 *     longBio: ["Optional longer paragraphs."],
 *     links: [{ platform: "instagram", href: "https://..." }],
 *   }
 *
 * Profiles automatically appear on /team and, when present, as a preview
 * on the homepage.
 */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: (ImageAsset & { alt: string; focus?: string }) | null;
  bio: string;
  longBio?: string[];
  links?: { platform: SocialPlatform | "linkedin"; href: string }[];
  /** Optional internal profile page. */
  href?: string;
};

/** The founder's team card, derived from content/founder.ts. */
export const founderMember: TeamMember = {
  id: "kwashie-senanu-charles-prince",
  name: founder.name,
  role: "Founder & CEO",
  photo: founder.photos.hero,
  bio: founder.summary[0],
  longBio: [founder.summary[1]],
  href: "/founder",
};

export const team: TeamMember[] = [
  {
    id: "nana-ama-akosah",
    name: "Nana Ama Akosah",
    role: "Executive Assistant to the Founder & Trading Operations Associate",
    photo: {
      src: "/assets/team/nana-ama-akosah.jpg",
      width: 1024,
      height: 1280,
      alt: "Nana Ama Akosah seated in a red auditorium seat, arms folded, listening attentively",
      focus: "55% 25%",
    },
    bio: "Nana Ama is a dedicated trader and an integral member of the Sena Trades leadership team, contributing to the growth of Sena Trades through executive support, administration and operational coordination.",
    longBio: [
      "She works closely with the Founder, represents him at meetings when necessary, coordinates engagements, and supports the management of the Sena Trades community, helping ensure efficiency and consistency across the team's activities.",
    ],
  },
  {
    id: "reynolds-dagbui",
    name: "Reynolds Dagbui",
    role: "Head of Education & Operations",
    photo: {
      src: "/assets/team/reynolds-dagbui.jpg",
      width: 813,
      height: 1080,
      alt: "Reynolds Dagbui seated in a red auditorium seat, hand on chin, looking down in thought",
      focus: "40% 25%",
    },
    bio: "Reynolds is an integral member of the Sena Trades management team, responsible for delivering quality trading education and supporting the organisation's daily operations.",
    longBio: [
      "He mentors students, facilitates training sessions, guides learners in developing their trading skills, and supports the implementation of educational programmes.",
      "He also assists in coordinating team activities, managing the Sena Trades community, monitoring student engagement, and ensuring the smooth execution of operational tasks. Through his combined roles in education and operations, he contributes to the development of traders and the continued growth of Sena Trades.",
    ],
  },
  {
    id: "nikoi-samuel-kotey",
    name: "Nikoi Samuel Kotey",
    role: "Deputy Director of Operations",
    photo: {
      src: "/assets/team/nikoi-samuel-kotey.jpg",
      width: 1170,
      height: 765,
      alt: "Nikoi Samuel Kotey holding a microphone and writing currency pairs on a whiteboard during a session",
      focus: "36% 30%",
    },
    bio: "Nikoi Samuel Kotey is a key member of the Sena Trades leadership team, working closely with the Founder to coordinate daily operations and drive the team's objectives.",
    longBio: [
      "His responsibilities include supervising team activities, coordinating projects and meetings, monitoring the execution of assigned tasks, supporting administrative and strategic decisions, and ensuring effective communication among team members.",
      "He also assumes leadership in the Founder's absence, overseeing ongoing activities and ensuring continuity in the management and operations of Sena Trades.",
    ],
  },
];

/** Everyone shown on the team pages: the founder first, then the team. */
export const allMembers: TeamMember[] = [founderMember, ...team];

/** Max profiles shown on the homepage before linking to /team. */
export const TEAM_PREVIEW_COUNT = 4;
