import { education, experience } from "@/data/site";
import Section from "./Section";

function Timeline({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <ol aria-label={label} className="relative space-y-6 border-l border-line pl-6">
      {children}
    </ol>
  );
}

function Entry({ period, title, sub, detail }: { period: string; title: string; sub: string; detail?: string }) {
  return (
    <li className="relative">
      <span aria-hidden className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-brand bg-bg" />
      <p className="text-xs font-semibold tracking-wide text-brand">{period}</p>
      <h4 className="mt-1 text-base font-semibold">{title}</h4>
      <p className="text-sm text-muted">{sub}</p>
      {detail && <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>}
    </li>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience & Education" className="bg-surface/50">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-lg font-semibold">Experience</h3>
          <Timeline label="Experience">
            {experience.map((e) => (
              <Entry key={e.role + e.org} period={e.period} title={e.role} sub={e.org} detail={e.detail} />
            ))}
          </Timeline>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-semibold">Education</h3>
          <Timeline label="Education">
            {education.map((e) => (
              <Entry
                key={e.title}
                period={e.period}
                title={e.title}
                sub={e.org}
                detail={e.note}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </Section>
  );
}
