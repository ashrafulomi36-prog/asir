import { about } from "@/data/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <aside className="card h-fit p-6" aria-label="Focus areas">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Focused on</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {about.focus.map((f) => (
              <li key={f} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {f}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
