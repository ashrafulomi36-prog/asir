import fs from "node:fs";
import path from "node:path";
import { site, socials } from "@/data/site";
import { ArrowRightIcon, CodeforcesIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./Icons";

// The resume button only appears when /public/resume.pdf actually exists,
// so the site never ships a dead download link.
const hasResume = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));

const social = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "Codeforces", href: socials.codeforces, Icon: CodeforcesIcon },
  { label: "Email", href: socials.email, Icon: MailIcon },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-12 pt-14 sm:pb-20 sm:pt-24">
      <div className="container-page">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          <PinIcon width={14} height={14} />
          {site.location}
        </p>

        <h1 id="hero-title" className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          {site.name}
        </h1>

        {/* Static headline — intentionally not animated. */}
        <p className="mt-4 text-lg font-semibold text-brand sm:text-2xl">{site.headline}</p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{site.heroText}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <GitHubIcon width={16} height={16} /> GitHub
          </a>
          <a href="#projects" className="btn-secondary">
            Featured Projects <ArrowRightIcon width={16} height={16} />
          </a>
          <a href="#learning" className="btn-secondary">
            Learning Resources
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <ul className="flex items-center gap-2" aria-label="Profiles">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          {hasResume && (
            <a href="/resume.pdf" className="link text-sm" download>
              Download résumé (PDF)
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
