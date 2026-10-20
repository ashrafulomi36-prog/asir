import { achievements, certifications, leadership } from "@/data/site";
import Section from "./Section";

export default function Achievements() {
  return (
    <>
      <Section
        id="achievements"
        eyebrow="Recognition"
        title="Achievements"
        intro="Competitions, research communication and milestones."
        className="bg-surface/50"
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {achievements.map((a) => (
            <li key={a.title} className="card p-6">
              <h3 className="text-base font-semibold leading-snug">{a.title}</h3>
              <p className="mt-1 text-sm font-medium text-brand">{a.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="credentials" eyebrow="Credentials" title="Certifications & Leadership">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c.title} className="card p-5">
                  <p className="font-semibold">{c.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{c.org}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Leadership & activities</h3>
            <ul className="space-y-4">
              {leadership.map((l) => (
                <li key={l.title} className="card p-5">
                  <p className="text-xs font-semibold tracking-wide text-brand">{l.period}</p>
                  <p className="mt-1 font-semibold leading-snug">{l.title}</p>
                  <p className="text-sm text-muted">{l.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{l.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
