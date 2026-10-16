import { testimonials, testimonialsDisclaimer } from "@/content/testimonials";
import { Section, SectionHeading } from "@/components/ui/section";
import { TestimonialsCarousel } from "./testimonials-carousel";

export function Testimonials({ className }: { className?: string }) {
  if (testimonials.length === 0) return null;

  return (
    <Section theme="light" className={className} aria-labelledby="testimonials-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="testimonials-title"
            className="lg:col-span-7"
            eyebrow="Testimonials"
            title={
              <>
                Mentorship,
                <br />
                in their words.
              </>
            }
          />
          <p className="text-lead text-muted lg:col-span-5">
            Messages shared by members of the SenaTrades community, reproduced
            as they were written.
          </p>
        </div>

        <div className="mt-14">
          <TestimonialsCarousel items={testimonials} />
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          {testimonialsDisclaimer}
        </p>
      </div>
    </Section>
  );
}
