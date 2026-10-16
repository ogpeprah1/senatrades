import { Section, SectionHeading } from "@/components/ui/section";
import { SocialRows } from "@/components/community/social-rows";
import { linktree } from "@/content/site";
import { SmartLink } from "@/components/ui/smart-link";

export function SocialEcosystem() {
  return (
    <Section theme="light" aria-labelledby="social-title">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            id="social-title"
            size="md"
            eyebrow="Follow along"
            title={
              <>
                Stay connected.
                <br />
                Stay informed.
              </>
            }
            intro="Lessons, market thoughts and community moments - wherever you prefer to learn."
          />
          <p className="mt-8 text-sm text-muted">
            Every official link in one place:{" "}
            <SmartLink
              href={linktree.href}
              event={{ name: "social_click", platform: "linktree", location: "social" }}
              className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-sena-red"
            >
              SenaTrades on Linktree
            </SmartLink>
          </p>
        </div>
        <div className="lg:col-span-8">
          <SocialRows location="social" />
        </div>
      </div>
    </Section>
  );
}
