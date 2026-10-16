import { allMembers } from "@/content/team";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";
import { TeamCard } from "@/components/team/team-card";

export const metadata = pageMetadata({
  title: "Meet the Team",
  description:
    "The people behind SenaTrades - founder and CEO Kwashie Senanu Charles Prince, Nana Ama Akosah and Reynolds Dagbui.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Team", path: "/team" }])} />
      <PageHero
        eyebrow="The team"
        title={
          <>
            The people behind
            <br />
            <span className="text-fg-soft">the vision.</span>
          </>
        }
        intro="Meet the individuals helping shape the SenaTrades community and its mission."
      />

      <Section theme="light" spacing="sm" aria-labelledby="team-mission-title">
        <div className="container-site grid gap-6 lg:grid-cols-12 lg:gap-10">
          <Eyebrow className="self-start lg:col-span-3 lg:pt-4">Our shared purpose</Eyebrow>
          <h2
            id="team-mission-title"
            className="font-serif text-[clamp(1.75rem,1.3rem+2vw,3rem)] leading-[1.1] text-fg lg:col-span-9"
          >
            Every person on this team works toward one outcome: learners who
            understand the market well enough to think for themselves.
          </h2>
        </div>
      </Section>

      <Section theme="light" className="bg-paper" aria-labelledby="team-members-title">
        <div className="container-site">
          <h2 id="team-members-title" className="sr-only">
            The SenaTrades team
          </h2>
          <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {allMembers.map((m, i) => (
              <Reveal as="li" key={m.id} delay={(i % 3) * 0.08}>
                <TeamCard member={m} expanded />
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta surround="bg-paper" />
    </>
  );
}
