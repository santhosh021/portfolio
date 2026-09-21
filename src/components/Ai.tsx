import { LuSparkles } from "react-icons/lu";
import { aiItems } from "../data/content";
import { Reveal, Section } from "./ui";

export function Ai() {
  return (
    <Section id="ai" title="AI-assisted development" intro="Coding agents are part of how I work. These are the parts I know well.">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {aiItems.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 100}>
            <li className="glass h-full list-none rounded-2xl p-6">
              <LuSparkles className="size-6 text-brand-400" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
