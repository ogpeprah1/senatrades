import { concepts, methodology } from "@/content/education";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { SlpFramework } from "@/components/education/slp-framework";

export function EducationPreview() {
  return (
    <Section theme="light" className="bg-paper" aria-labelledby="education-title">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="education-title"
            className="lg:col-span-7"
            eyebrow="Education & methodology"
            title={
              <>
                Understand the structure.
                <br />
                Respect the process.
              </>
            }
          />
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-text">{methodology.name}</p>
            <p className="mt-4 text-lead text-muted">{methodology.summary}</p>
          </div>
        </div>

        <SlpFramework className="mt-16" />

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="border-t border-line pt-5 lg:col-span-4">
            <h3 className="font-display-tight text-display-sm text-fg">
              What you learn to read
            </h3>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              Nine connected ideas - from how price is structured to how you
              manage yourself while it moves.
            </p>
            <div className="mt-8">
              <ButtonLink href="/education">Explore Our Approach</ButtonLink>
            </div>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {concepts.map((c, i) => (
              <li key={c.id} className="border-t border-line py-5">
                <span className="eyebrow text-accent-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 font-medium text-fg">{c.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
