import { allMembers, TEAM_PREVIEW_COUNT } from "@/content/team";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { TeamCard } from "@/components/team/team-card";
import { Reveal } from "@/components/ui/reveal";

/** Founder + team, as defined in content/team.ts. */
export function TeamPreview() {
  const preview = allMembers.slice(0, TEAM_PREVIEW_COUNT);

  return (
    <Section theme="light" className="bg-paper" aria-labelledby="team-title">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="team-title"
            eyebrow="The team"
            title="The people behind the vision."
            intro="Meet the individuals helping shape the SenaTrades community and its mission."
          />
          <ButtonLink href="/team" variant="secondary" className="self-start lg:self-auto">
            Meet the full team
          </ButtonLink>
        </div>
        <ul className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
          {preview.map((m, i) => (
            <Reveal as="li" key={m.id} delay={(i % 4) * 0.08}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
