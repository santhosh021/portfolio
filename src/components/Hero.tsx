import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import { profile } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import { Glow, Reveal, buttonOutline, buttonPrimary } from "./ui";

const roles = profile.roles;

export function Hero() {
  const typed = useTypewriter(roles);
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-32 pb-16 md:pt-40">
      <Glow className="-top-20 left-[8%] h-[420px] w-[420px]" />
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,300px)_1fr]">
          <Reveal className="relative mx-auto w-full max-w-[260px] pt-10">
            <p className="absolute top-0 left-1/2 z-10 font-display text-lg whitespace-nowrap md:left-[55%]">
              Hello! I am <span className="text-brand-400">{profile.name}</span>
            </p>
            <svg aria-hidden="true" viewBox="0 0 60 40" className="absolute top-3 left-[20%] h-10 w-14 text-brand-300/70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <path d="M56 4C34 6 16 14 8 32M8 32l1-11M8 32l10-5" />
            </svg>
            <div className="relative aspect-square w-full">
              <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-brand-600/40 blur-3xl" />
              <div className="float relative grid size-full place-items-center overflow-hidden rounded-full border border-brand-400/40 bg-gradient-to-br from-brand-600 to-ink-800 shadow-[0_0_70px_rgb(143_82_232/0.5)]">
                <img src={profile.picture} width={260} height={260} alt={profile.name} className="size-full object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-display text-xl underline decoration-brand-400 decoration-2 underline-offset-4">A software engineer who</p>
            <h1 className="mt-3 font-display text-5xl leading-[1.12] md:text-6xl">
              turns complex data into{" "}
              <span className="relative inline-block whitespace-nowrap text-brand-400">
                clear
                <svg aria-hidden="true" viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute -inset-x-3 -inset-y-1 h-[calc(100%+8px)] w-[calc(100%+24px)] text-white/70">
                  <ellipse cx="100" cy="30" rx="96" ry="25" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ vectorEffect: "non-scaling-stroke" }} />
                </svg>
              </span>{" "}
              interfaces.
            </h1>
            <p className="mt-3 text-xs text-muted">Because a screen full of data should still feel effortless to use.</p>
          </Reveal>
        </div>

        <Reveal className="mt-16 md:mt-20" delay={200}>
          <p className="font-display text-4xl md:text-5xl">
            <span className="sr-only">I'm a {roles.join(", ")}.</span>
            <span aria-hidden="true">
              I'm a {typed}.<span className="caret ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.12em] bg-fg" />
            </span>
          </p>
          <p className="mt-3 font-display text-xl text-muted">{profile.lastRole}</p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={buttonPrimary}>View my projects <LuArrowUpRight className="size-4" aria-hidden="true" /></a>
            <a href={profile.resume} download className={buttonOutline}><LuDownload className="size-4" aria-hidden="true" /> Download résumé</a>
            <a href="#contact" className={buttonOutline}>Get in touch</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
