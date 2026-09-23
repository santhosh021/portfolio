import { LuDownload } from "react-icons/lu";
import { profile, socials } from "../data/content";
import { Glow, Reveal, Section, buttonOutline } from "./ui";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Glow className="bottom-0 left-[20%] h-[360px] w-[360px]" />
      <Reveal className="relative max-w-2xl">
        <p className="text-lg leading-8 text-muted">
          I am looking for my next role as a software engineer in Chennai, on-site, hybrid or remote. If you have an opening or a project in mind, let's connect.
        </p>
        <a href={`mailto:${profile.email}`} className="mt-6 inline-block font-display text-2xl text-brand-300 underline decoration-brand-600 underline-offset-4 hover:text-brand-200 md:text-3xl">
          {profile.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${buttonOutline} !py-2`}>
                <Icon className="size-4" aria-hidden="true" /> {label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download className={`${buttonOutline} !py-2`}><LuDownload className="size-4" aria-hidden="true" /> Résumé (PDF)</a>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
