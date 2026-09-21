import { about } from "../data/content";
import { Glow, Reveal, Section } from "./ui";

export function About() {
  return (
    <Section id="about" title="About me">
      <Glow className="top-10 right-0 h-[320px] w-[320px] opacity-60" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-8 text-muted">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
        <Reveal delay={120}>
          <dl className="glass relative divide-y divide-white/10 rounded-2xl">
            {about.facts.map((f) => (
              <div key={f.label} className="px-6 py-4">
                <dt className="text-xs font-semibold tracking-wide text-brand-300 uppercase">{f.label}</dt>
                <dd className="mt-1 text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
