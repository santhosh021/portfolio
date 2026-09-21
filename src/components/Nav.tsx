import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { cn } from "./ui";

const links = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" }, { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-ink-950">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
        <a href="#home" aria-label="Santhosh, back to top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-800 font-display text-xl text-white">S</span>
          <span className="font-display text-xl">Santhosh</span>
        </a>
        <nav aria-label="Main" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? "true" : undefined}
              className={cn("text-sm font-medium transition-colors hover:text-white", active === l.id ? "text-brand-300" : "text-muted")}>
              {l.label}
            </a>
          ))}
        </nav>
        <button type="button" className="rounded-md p-2 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-white/5 bg-ink-900 px-6 py-3 md:hidden">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-2.5 text-muted hover:text-white">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
