import { competitive } from "@/data/site";
import { ExternalIcon } from "./Icons";
import Section from "./Section";

export default function Competitive() {
  return (
    <Section id="competitive-programming" eyebrow="Algorithms" title="Competitive Programming" intro={competitive.summary}>
      <div className="card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <dl className="grid grid-cols-3 gap-6 sm:gap-10">
          <div>
            <dd className="text-2xl font-extrabold text-brand sm:text-3xl">{competitive.solved}</dd>
            <dt className="mt-1 text-xs text-muted">Problems solved</dt>
          </div>
          <div>
            <dd className="text-2xl font-extrabold text-brand sm:text-3xl">{competitive.platformsCount}</dd>
            <dt className="mt-1 text-xs text-muted">Platforms</dt>
          </div>
          <div>
            <dd className="text-sm font-bold leading-snug sm:text-base">{competitive.mention}</dd>
            <dt className="mt-1 text-xs text-muted">Contest result</dt>
          </div>
        </dl>

        <div>
          <ul className="flex flex-wrap gap-2" aria-label="Online judges">
            {competitive.platforms.map((p) => (
              <li key={p.name}>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag-core inline-flex items-center gap-1.5 hover:opacity-80"
                  >
                    {p.name} <ExternalIcon width={12} height={12} />
                  </a>
                ) : (
                  <span className="tag">{p.name}</span>
                )}
              </li>
            ))}
          </ul>
          <a
            href={competitive.repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link mt-3 inline-flex items-center gap-1.5 text-sm"
          >
            {competitive.repo.label} <ExternalIcon width={13} height={13} />
          </a>
        </div>
      </div>
    </Section>
  );
}
