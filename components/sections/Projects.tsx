import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Machine learning and AI projects"
        description="Each project links to its repository. Reported results are taken from the code and notebooks, and where a metric is not available it is not shown."
      />

      <div className="space-y-8">
        {featured.map((project) => (
          <Reveal key={project.title}>
            <FeaturedProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-20">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">More projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
