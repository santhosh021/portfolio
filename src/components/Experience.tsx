import { useId, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import type { IconType } from "react-icons";
import { experience } from "../data/content";
import { Glow, Reveal, Section, cn } from "./ui";

function ExperienceCard({ icon: Icon, title, summary, details, delay }: { icon: IconType; title: string; summary: string; details: string[]; delay: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <Reveal delay={delay} className="card-glow flex flex-col rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-[0_0_30px_rgb(143_82_232/0.45)]">
          <Icon className="size-7 text-white" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-muted">{summary}</p>
        </div>
      </div>
      <ul id={panelId} hidden={!open} className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-muted marker:text-brand-400">
        {details.map((d) => <li key={d}>{d}</li>)}
      </ul>
      <div className="mt-auto pt-5">
        <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-brand-400/50 px-4 py-2 text-xs font-semibold tracking-wide uppercase hover:bg-brand-600/20">
          {open ? "Show less" : "Learn more"}
          <LuChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
        </button>
      </div>
    </Reveal>
  );
}

export function Experience() {
  const e = experience;
  return (
    <Section id="experience" title="Work Experience">
      <Glow className="top-32 left-1/2 h-[380px] w-[380px] -translate-x-1/2" />
      <Reveal className="glass relative rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-2xl font-semibold">{e.company}</h3>
            <p className="text-brand-300">{e.role} · {e.team}</p>
          </div>
          <p className="rounded-full bg-brand-600/25 px-3 py-1 text-sm text-brand-200">{e.dates}</p>
        </div>
        <ol aria-label="Promotion timeline" className="mt-8 grid grid-cols-2 gap-y-6 md:grid-cols-4">
          {e.levels.map((l, i) => (
            <li key={l.level} className="relative pt-5 pr-3">
              <span aria-hidden="true" className="absolute top-0 left-0 size-3 rounded-full bg-brand-400 shadow-[0_0_12px_var(--color-brand-400)]" />
              {i < e.levels.length - 1 && <span aria-hidden="true" className="absolute top-[5px] left-4 hidden h-px w-[calc(100%-1.25rem)] bg-brand-700 md:block" />}
              <p className="font-semibold">{l.level}</p>
              <p className="text-sm text-muted">{l.when}</p>
              {l.note && <p className="mt-1 text-xs text-brand-300">{l.note}</p>}
            </li>
          ))}
        </ol>
        <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 md:grid-cols-4">
          {e.stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl text-brand-300">{s.value}</dd>
              <dt className="text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-subtle">{e.statsNote}</p>
      </Reveal>

      <div className="relative mt-6 grid gap-6 md:grid-cols-2">
        {e.cards.map((c, i) => <ExperienceCard key={c.title} {...c} delay={(i % 2) * 120} />)}
      </div>
    </Section>
  );
}
