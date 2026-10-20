import { ArrowUpRight, ChevronDown } from "lucide-react";
import { learningIntro, learningResources, type LearningResource } from "@/content/learning";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";

function folderUrl(resource: LearningResource, folder: string): string {
  return `${resource.repo}/tree/${resource.branch}/${encodeURIComponent(folder)}`;
}

function ResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-xl font-medium leading-snug">{resource.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{resource.description}</p>

      <dl className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {resource.stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-background p-3">
            <dd className="font-display text-xl font-medium text-accent">{s.value}</dd>
            <dt className="mt-1 text-xs text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex-1 space-y-2">
        <h4 className="font-mono text-xs uppercase tracking-widest text-muted">Browse modules</h4>
        {resource.groups.map((group) => (
          <details key={group.title} className="group rounded-xl border border-border bg-background">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
              <span>
                {group.title}
                <span className="ml-2 font-normal text-muted">({group.modules.length})</span>
              </span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <ul className="space-y-0.5 px-2 pb-3">
              {group.modules.map((m) => (
                <li key={m.folder}>
                  <a
                    href={folderUrl(resource, m.folder)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-surface hover:text-accent"
                  >
                    <span>{m.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      <a
        href={resource.repo}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium transition-colors hover:text-accent"
      >
        <GithubIcon className="h-4 w-4" /> View repository
      </a>
    </article>
  );
}

export function LearningResources() {
  return (
    <section id="learning" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="Learning Resources" title="Structured notes, code and practice" description={learningIntro} />
      <div className="grid gap-6 lg:grid-cols-2">
        {learningResources.map((resource, i) => (
          <Reveal key={resource.repo} delay={i * 0.08}>
            <ResourceCard resource={resource} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
