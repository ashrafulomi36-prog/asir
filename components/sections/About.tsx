import { personal } from "@/content/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="About" title="About me" />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5">
          {personal.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="leading-relaxed text-foreground/80">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Focus areas</p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              {personal.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
