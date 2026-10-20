import { Reveal } from "./Reveal";

export type TimelineEntry = {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative border-l border-border pl-8">
      {entries.map((entry, i) => (
        <Reveal key={i} delay={i * 0.08} className="relative pb-12 last:pb-0">
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent-soft" />
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{entry.period}</p>
          <h3 className="mt-2 font-display text-lg font-medium">{entry.title}</h3>
          <p className="text-sm text-muted">{entry.subtitle}</p>
          {entry.description && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75">{entry.description}</p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
