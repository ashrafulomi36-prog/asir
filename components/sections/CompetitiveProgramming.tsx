import { competitiveProgramming } from "@/content/competitiveProgramming";
import { Reveal } from "@/components/ui/Reveal";

export function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="container-px mx-auto max-w-6xl py-16">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Algorithms</span>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
              {competitiveProgramming.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{competitiveProgramming.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {competitiveProgramming.platforms.map((platform) => (
                <li key={platform.name}>
                  {platform.url ? (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-border bg-background px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {platform.name}
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground/70">
                      {platform.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <dl className="flex gap-4">
            {competitiveProgramming.stats.map((stat) => (
              <div key={stat.label} className="min-w-28 rounded-xl border border-border bg-background px-5 py-4">
                <dd className="font-display text-2xl font-medium text-accent">{stat.value}</dd>
                <dt className="mt-1 text-xs text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
