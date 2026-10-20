"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";
import { Chip } from "./Chip";
import { GithubIcon } from "./BrandIcons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</span>
        {project.date && <span className="font-mono text-xs text-muted">{project.date}</span>}
      </div>

      <h3 className="mt-4 font-display text-xl font-medium leading-snug">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <Chip key={t} className="text-xs py-1 px-2.5">
            {t}
          </Chip>
        ))}
      </div>

      {(project.github || project.live) && (
        <div className="mt-6 flex gap-4 border-t border-border pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
