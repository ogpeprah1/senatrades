export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Founder", href: "/founder" },
  { label: "Team", href: "/team" },
  { label: "Education", href: "/education" },
  { label: "Community", href: "/community" },
];

export const ctaLabels = {
  joinCommunity: "Join Our Telegram Community",
  joinCommunityShort: "Join on Telegram",
  connectCeo: "Connect with Prince on Telegram",
} as const;
