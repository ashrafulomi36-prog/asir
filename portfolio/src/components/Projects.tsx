import { featuredProjects, otherProjects } from "@/data/site";
import { ExternalIcon, GitHubIcon } from "./Icons";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured AI/ML projects"
      intro="Each project links to its repository, and every number shown can be reproduced from it."
    >
      <div className="space-y-8">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold">Other projects</h3>
        <p className="mt-2 text-muted">Applied AI and web development work.</p>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {otherProjects.map((p) => (
            <li key={p.title} className="card flex flex-col p-6">
              <p className="eyebrow">
                {p.category}
                {p.year ? ` · ${p.year}` : ""}
              </p>
              <h4 className="mt-1.5 text-base font-semibold">{p.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {p.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              {(p.repo || p.live) && (
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
                      <GitHubIcon width={15} height={15} /> Repository
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
                      Live <ExternalIcon width={14} height={14} />
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
