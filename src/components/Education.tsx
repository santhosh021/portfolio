import { LuGraduationCap } from "react-icons/lu";
import { education } from "../data/content";
import { Reveal, Section } from "./ui";

export function Education() {
  return (
    <Section id="education" title="Education" className="py-12 md:py-16">
      <Reveal className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-xl bg-brand-600/30"><LuGraduationCap className="size-6 text-brand-200" aria-hidden="true" /></span>
          <div>
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-muted">{education.school}</p>
          </div>
        </div>
        <p className="text-sm text-muted">{education.years} · {education.grade}</p>
      </Reveal>
    </Section>
  );
}
