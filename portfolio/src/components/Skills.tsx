import { skillGroups } from "@/data/site";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills"
      intro="Grouped by area. Highlighted tags are what I use most; the rest I can explain and have used in notebooks or projects."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="card p-6">
            <h3 className="text-base font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li key={s.name} className={s.core ? "tag-core" : "tag"}>
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
