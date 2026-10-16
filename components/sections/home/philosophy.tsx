import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    word: "Strategy",
    lead: "A method before a move.",
    body: "Understanding market behaviour, building structured analysis, and approaching every session with a defined methodology rather than impulse.",
  },
  {
    word: "Discipline",
    lead: "The plan, especially when it’s hard.",
    body: "Managing risk, controlling emotions, following a trading plan and building the consistent habits that hold up under pressure.",
  },
  {
    word: "Results",
    lead: "Growth earned through process.",
    body: "Pursuing long-term development through learning, reflection, practice and process-oriented execution - never through promises of profit.",
  },
];

export function Philosophy() {
  return (
    <Section theme="light" id="philosophy" aria-labelledby="philosophy-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>The SenaTrades standard</Eyebrow>
            <h2
              id="philosophy-title"
              className="font-display-tight mt-6 text-display-lg text-fg"
            >
              Three words.
              <br />
              One way of working.
            </h2>
          </div>
          <p className="text-lead text-muted lg:col-span-5">
            Our tagline is not a slogan - it is the order in which good trading
            decisions are made.
          </p>
        </div>

        <ol className="mt-16 border-b border-line lg:mt-24">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.word} delay={i * 0.08}>
              <div className="group grid gap-4 border-t border-line py-10 transition-colors duration-(--duration-base) md:grid-cols-12 md:items-center md:gap-8 lg:py-12">
                <span className="eyebrow text-accent-text md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="font-display-tight text-display-xl text-fg transition-transform duration-(--duration-slow) ease-out-expo md:col-span-6 md:group-hover:translate-x-3">
                  {p.word}
                  <span className="text-sena-red">.</span>
                </h3>
                <div className="max-w-md md:col-span-5">
                  <p className="text-lg font-medium text-fg">{p.lead}</p>
                  <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
