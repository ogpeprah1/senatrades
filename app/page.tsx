import { Hero } from "@/components/sections/home/hero";
import { Philosophy } from "@/components/sections/home/philosophy";
import { AboutIntro } from "@/components/sections/home/about-intro";
import { FounderSpotlight } from "@/components/sections/home/founder-spotlight";
import { EducationPreview } from "@/components/sections/home/education-preview";
import { TradeIdeas } from "@/components/sections/home/trade-ideas";
import { TeamPreview } from "@/components/sections/home/team-preview";
import { CommunityCta } from "@/components/sections/home/community-cta";
import { SocialEcosystem } from "@/components/sections/home/social-ecosystem";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { pageMetadata } from "@/lib/seo";
import { TRADE_IDEAS_PREVIEW_COUNT } from "@/content/trade-ideas";

export const metadata = {
  ...pageMetadata({
    title: "Forex Education, Analysis & Community",
    description:
      "SenaTrades is a forex trading education and community brand founded by Kwashie Senanu Charles Prince - structured education, market analysis, mentorship and a community committed to understanding the market.",
    path: "/",
  }),
  // The root layout's default title already reads well on the homepage.
  title: { absolute: "SenaTrades - Forex Education, Analysis & Community" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <AboutIntro />
      <FounderSpotlight />
      <EducationPreview />
      <TradeIdeas limit={TRADE_IDEAS_PREVIEW_COUNT} />
      <TeamPreview />
      <Testimonials />
      <CommunityCta />
      <SocialEcosystem />
      <FinalCta />
    </>
  );
}
