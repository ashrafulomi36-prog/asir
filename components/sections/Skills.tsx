import { skillCategories } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with"
        description="Concepts and tools I have studied and used in projects or learning notes."
      />

      <div className="grid gap-10 sm:grid-cols-2">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={(i % 2) * 0.08}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">{category.title}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Chip>{skill}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
