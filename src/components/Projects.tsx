import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { projects, type Project } from "../data/content";
import { Glow, Reveal, Section, buttonOutline, buttonPrimary, cn } from "./ui";

function Links({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
          Live demo <LuArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      )}
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={buttonOutline}>
          <FaGithub className="size-4" aria-hidden="true" /> Source code
        </a>
      )}
    </div>
  );
}

const Tags = ({ tags }: { tags: string[] }) => (
  <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
    {tags.map((t) => <li key={t} className="rounded-full bg-brand-600/25 px-3 py-1 text-xs text-brand-200">{t}</li>)}
  </ul>
);

/** A large row: screenshot on one side, details on the other. Rows alternate sides. */
function ProjectFeature({ project, reverse }: { project: Project; reverse: boolean }) {
  const host = project.liveUrl ? new URL(project.liveUrl).host : "";
  return (
    <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-0">
      <div className={cn("relative", reverse && "md:order-2")}>
        <div aria-hidden="true" className={cn("absolute inset-y-8 hidden w-full rounded-2xl bg-ink-700/80 md:block", reverse ? "left-6" : "-left-6")} />
        <div className="relative overflow-hidden rounded-xl border border-white/15 bg-ink-900 shadow-2xl shadow-black/50">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-800 px-3 py-2">
            <span className="size-2.5 rounded-full bg-white/25" /><span className="size-2.5 rounded-full bg-white/25" /><span className="size-2.5 rounded-full bg-white/25" />
            {host && <span className="ml-3 truncate rounded bg-ink-950/70 px-2 py-0.5 text-[11px] text-subtle">{host}</span>}
          </div>
          <img src={project.image} alt={project.imageAlt} width={1360} height={820} loading="lazy" className="block w-full" />
        </div>
        {project.secondImage && (
          <img src={project.secondImage} alt={project.secondImageAlt ?? ""} width={1360} height={820} loading="lazy"
            className={cn("absolute -bottom-8 hidden w-[42%] rounded-lg border border-white/20 shadow-2xl shadow-black/60 md:block", reverse ? "-right-4" : "-left-4")} />
        )}
      </div>

      <div className={cn("relative z-10", reverse ? "md:order-1 md:-mr-10" : "md:-ml-10")}>
        <p className="text-sm font-semibold text-brand-400">Featured project</p>
        <h3 className="text-3xl font-semibold text-brand-200">{project.title}</h3>
        <p className="text-muted">{project.tagline}</p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-ink-900/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <p className="leading-7">{project.description}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted marker:text-brand-400">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
        <Tags tags={project.tags} />
        <Links project={project} />
      </div>
    </Reveal>
  );
}

/** A smaller card for projects that are not featured. */
function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="card-glow flex flex-col rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-brand-200">{project.title}</h3>
      <p className="text-sm text-muted">{project.tagline}</p>
      <p className="mt-3 text-sm leading-6">{project.description}</p>
      <Tags tags={project.tags} />
      <Links project={project} />
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Projects">
      <Glow className="top-24 right-[10%] h-[420px] w-[420px]" />
      <div className="relative space-y-28 md:pb-8">
        {featured.map((p, i) => <ProjectFeature key={p.title} project={p} reverse={i % 2 === 1} />)}
      </div>
      {others.length > 0 && (
        <div className="relative mt-20">
          <h3 className="mb-6 font-display text-2xl">More projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => <ProjectCard key={p.title} project={p} delay={(i % 3) * 100} />)}
          </div>
        </div>
      )}
      {projects.length < 3 && <p className="relative mt-16 text-center text-sm text-subtle">More projects will appear here as I build them.</p>}
    </Section>
  );
}
