import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </Reveal>
  );
}
