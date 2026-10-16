import { Section, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const offerings = [
  "Forex education",
  "Market analysis",
  "Mentorship",
  "Learning resources",
  "Community-based learning",
];

export function AboutIntro() {
  return (
    <Section
      theme="light"
      className="bg-paper"
      aria-labelledby="about-intro-title"
    >
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Eyebrow>About SenaTrades</Eyebrow>
          <h2
            id="about-intro-title"
            className="font-display-tight mt-6 text-display-lg text-fg"
          >
            More than trading.
            <br />
            <span className="text-muted">A movement toward</span> understanding.
          </h2>
          <div className="mt-10 grid max-w-2xl gap-6 text-lg leading-relaxed text-fg-soft sm:grid-cols-2 sm:gap-8 sm:text-base">
            <p>
              SenaTrades is a forex education and community brand. We teach how
              markets move, share analysis grounded in structure, and mentor
              traders who are serious about doing the work.
            </p>
            <p>
              We are not here to create followers. The goal is to help every
              learner read the market for themselves - and to make their own
              decisions with discipline and an honest respect for risk.
            </p>
          </div>
          <div className="mt-10">
            <ButtonLink href="/about" variant="secondary">
              Explore Our Story
            </ButtonLink>
          </div>
        </div>

        <Reveal className="lg:col-span-5 lg:col-start-8">
          <div className="flex h-full flex-col justify-between gap-10 rounded-panel bg-surface-raised p-8 shadow-paper sm:p-10">
            <div>
              <p className="eyebrow text-accent-text">Our mission</p>
              <p className="mt-5 font-serif text-[clamp(1.6rem,1.2rem+1.2vw,2.2rem)] leading-[1.12] text-fg">
                To make meaningful trading education and market understanding
                more accessible - and to develop traders who think
                independently.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label="What SenaTrades offers">
              {offerings.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-line px-3.5 py-1.5 text-sm text-fg-soft"
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
