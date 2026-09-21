import { useEffect, useState } from "react";

/** Types and deletes each phrase in turn. Shows the first phrase still if the visitor prefers reduced motion. */
export function useTypewriter(phrases: string[]): string {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [text, setText] = useState(reduced ? (phrases[0] ?? "") : "");

  useEffect(() => {
    if (reduced) return;
    let phrase = 0;
    let length = 0;
    let deleting = false;
    let timer: number;
    const tick = () => {
      const current = phrases[phrase] ?? "";
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));
      let delay = deleting ? 40 : 85;
      if (!deleting && length === current.length) { deleting = true; delay = 1700; }
      else if (deleting && length === 0) { deleting = false; phrase = (phrase + 1) % phrases.length; delay = 350; }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, [phrases, reduced]);

  return text;
}
