import Image from "next/image";
import type { FeaturedProject } from "@/data/site";
import { ExternalIcon, GitHubIcon } from "./Icons";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({ project: p }: { project: FeaturedProject }) {
  return (
    <article id={`project-${p.slug}`} className="card overflow-hidden" aria-labelledby={`${p.slug}-title`}>
      <div className="p-6 sm:p-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow">{p.category}</p>
            <h3 id={`${p.slug}-title`} className="mt-1.5 text-xl font-bold sm:text-2xl">
              {p.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-3 !py-2"
              aria-label={`${p.title} — GitHub repository (opens in a new tab)`}
            >
              <GitHubIcon width={16} height={16} /> Repository
            </a>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-3 !py-2"
                aria-label={`${p.title} — live demo (opens in a new tab)`}
              >
                Live demo <ExternalIcon width={14} height={14} />
              </a>
            )}
          </div>
        </header>

        <p className="mt-4 max-w-3xl leading-relaxed">{p.summary}</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold">Problem</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.problem}</p>
          </div>
          <List title="Methods" items={p.approach} />
          <List title="What I implemented" items={p.built} />
        </div>

        <div className="mt-6 rounded-xl border border-line bg-bg p-5">
          {p.results ? (
            <>
              <h4 className="text-sm font-semibold">Results — {p.results.heading}</h4>
              <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {p.results.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-line bg-surface px-3 py-2.5">
                    <dt className="text-xs text-muted">{m.label}</dt>
                    <dd className="mt-0.5 text-base font-bold tabular-nums">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-muted">{p.results.note}</p>
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold">Evaluation</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.noResults}</p>
            </>
          )}
        </div>

        {p.images && (
          <ul className={`mt-6 grid gap-4 ${p.images.length > 1 ? "sm:grid-cols-3" : ""}`}>
            {p.images.map((img) => (
              <li key={img.src}>
                <figure className="overflow-hidden rounded-xl border border-line bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes={p.images && p.images.length > 1 ? "(min-width: 640px) 33vw, 100vw" : "(min-width: 1024px) 60vw, 100vw"}
                    className={p.images && p.images.length > 1 ? "h-56 w-full object-contain p-2" : "h-auto w-full"}
                  />
                  <figcaption className="border-t border-line bg-surface px-3 py-2 text-xs text-muted">
                    {img.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {p.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
