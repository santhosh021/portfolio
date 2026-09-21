import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export const cn = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(" ");

/** Fades its content in when it scrolls into view. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ ["--delay" as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Section({ id, title, intro, children, className }: { id: string; title: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative py-20 md:py-24", className)}>
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal>
          <h2 id={`${id}-title`} className="font-display text-4xl md:text-5xl">{title}</h2>
          {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

/** Soft purple light behind a section. Purely decorative. */
export function Glow({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("pointer-events-none absolute rounded-full bg-brand-600/30 blur-[120px]", className)} />;
}

const buttonBase = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors";
export const buttonPrimary = `${buttonBase} bg-brand-600 text-white hover:bg-brand-500`;
export const buttonOutline = `${buttonBase} border border-brand-400/50 text-brand-200 hover:bg-brand-600/20`;
