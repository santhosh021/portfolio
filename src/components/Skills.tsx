import { skillGroups } from "../data/content";
import { Glow, Reveal, Section } from "./ui";

/** Decorative glowing emblem with orbit rings. Hidden from screen readers. */
function Orbit() {
  const rings = [
    { w: "92%", h: "100%", dur: "38s", dir: "normal" },
    { w: "76%", h: "82%", dur: "28s", dir: "reverse" },
    { w: "60%", h: "64%", dur: "20s", dir: "normal" },
  ];
  return (
    <div aria-hidden="true" className="relative mx-auto mt-16 h-[320px] w-full max-w-[860px] overflow-hidden">
      <Glow className="top-1/2 left-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 bg-brand-500/50" />
      {rings.map((r, i) => (
        <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: r.w, height: r.h }}>
          <div className="size-full" style={{ transform: "scaleY(0.4)" }}>
            <div className="orbit size-full rounded-full border border-brand-500/40" style={{ ["--dur" as string]: r.dur, animationDirection: r.dir }}>
              <span className="absolute -top-2 left-1/2 size-4 rounded-full bg-brand-300 shadow-[0_0_14px_var(--color-brand-300)]" />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-1/2 left-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 shadow-[0_0_70px_rgb(143_82_232/0.7)]">
        <span className="font-display text-6xl text-white">S</span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use most, grouped by what they are for.">
      <Glow className="top-40 left-0 h-[300px] w-[300px]" />
      <div className="relative grid gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 100} className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-brand-200">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {g.skills.map(({ name, icon: Icon }) => (
                <li key={name} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-800/80 px-3.5 py-1.5 text-sm">
                  {Icon && <Icon className="size-4 text-brand-300" aria-hidden="true" />}
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Orbit />
    </Section>
  );
}
