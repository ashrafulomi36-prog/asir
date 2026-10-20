import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";

export function ExperienceEducation() {
  return (
    <section id="experience" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="Journey" title="Experience &amp; Education" />
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">Experience</h3>
          <Timeline
            entries={experience.map((e) => ({
              title: e.role,
              subtitle: e.organization,
              period: e.period,
              description: e.description,
            }))}
          />
        </div>
        <div id="education">
          <h3 className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">Education</h3>
          <Timeline
            entries={education.map((e) => ({
              title: e.degree,
              subtitle: `${e.institution} · ${e.location}`,
              period: e.period,
              description: e.grade,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
