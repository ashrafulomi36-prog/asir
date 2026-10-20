import Image from "next/image";
import { ExternalLink, TriangleAlert } from "lucide-react";
import type { Project } from "@/content/projects";
import { Chip } from "./Chip";
import { GithubIcon } from "./BrandIcons";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h4 className="font-mono text-xs uppercase tracking-widest text-muted">{children}</h4>;
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  const { results, images, methods, contribution } = project;

  return (
    <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</span>
        {project.date && <span className="font-mono text-xs text-muted">{project.date}</span>}
      </header>

      <h3 className="mt-3 font-display text-2xl font-medium leading-snug">{project.title}</h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-foreground/80">{project.description}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          {project.problem && (
            <div>
              <SectionLabel>Problem</SectionLabel>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{project.problem}</p>
            </div>
          )}

          {contribution && contribution.length > 0 && (
            <div>
              <SectionLabel>What I implemented</SectionLabel>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                {contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {methods && methods.length > 0 && (
            <div>
              <SectionLabel>Methods</SectionLabel>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                {methods.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <SectionLabel>Technologies</SectionLabel>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Chip key={t} className="px-2.5 py-1 text-xs">
                  {t}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {results && results.length > 0 && (
            <div>
              <SectionLabel>Results</SectionLabel>
              <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {results.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-background p-3">
                    <dd className="font-display text-xl font-medium text-accent">{m.value}</dd>
                    <dt className="mt-1 text-xs leading-snug text-muted">{m.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {project.resultsNote && (
            <p className="text-sm leading-relaxed text-muted">{project.resultsNote}</p>
          )}

          {project.disclaimer && (
            <div
              role="note"
              className="flex gap-3 rounded-xl border border-border bg-accent-soft p-4 text-sm leading-relaxed"
            >
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <p>{project.disclaimer}</p>
            </div>
          )}

          {images && images.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {images.map((img) => (
                <figure
                  key={img.src}
                  className={images.length === 1 ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : undefined}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="h-auto w-full rounded-lg border border-border bg-white"
                  />
                  <figcaption className="mt-2 text-xs text-muted">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>

      {(project.github || project.live) && (
        <footer className="mt-8 flex flex-wrap gap-5 border-t border-border pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> View repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </footer>
      )}
    </article>
  );
}
