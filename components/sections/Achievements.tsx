import { achievements } from "@/content/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements"
        description="Competitions, research, and milestones along the way."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 0.08}>
            <div className="flex gap-4 rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-medium leading-snug">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{a.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
