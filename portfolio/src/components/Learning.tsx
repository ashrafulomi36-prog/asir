import { GITHUB_USER, learningResources, repo } from "@/data/site";
import { ArrowRightIcon, GitHubIcon } from "./Icons";
import ModuleBrowser from "./ModuleBrowser";
import Section from "./Section";

export default function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="Learning resources"
      title="Structured notes, code and notebooks"
      intro="I organise what I learn into numbered modules — explanations in code, worked examples and practice problems — so the material is easy to follow in order or to browse by topic."
      className="bg-surface/50"
    >
      <div className="space-y-8">
        {learningResources.map((r) => (
          <article key={r.slug} className="card p-6 sm:p-8" aria-labelledby={`${r.slug}-learning-title`}>
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h3 id={`${r.slug}-learning-title`} className="text-xl font-bold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Contents">
                  {r.stats.map((s) => (
                    <li key={s} className="tag-core">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={repo(r.repoName)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label={`${r.title} — open repository on GitHub (opens in a new tab)`}
              >
                <GitHubIcon width={16} height={16} /> Open repository <ArrowRightIcon width={16} height={16} />
              </a>
            </header>

            <div className="mt-6">
              <ModuleBrowser groups={r.groups} repoName={r.repoName} githubUser={GITHUB_USER} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
