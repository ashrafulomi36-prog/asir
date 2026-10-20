"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { ModuleGroup } from "@/data/site";
import { FolderIcon } from "./Icons";

type Props = { groups: ModuleGroup[]; repoName: string; githubUser: string };

/** Accessible tabbed browser: one tab per topic group, modules link to GitHub folders. */
export default function ModuleBrowser({ groups, repoName, githubUser }: Props) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % groups.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + groups.length) % groups.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = groups.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const group = groups[active];

  return (
    <div>
      <div role="tablist" aria-label="Topic groups" className="flex gap-2 overflow-x-auto pb-1">
        {groups.map((g, i) => (
          <button
            key={g.title}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${uid}-panel`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`shrink-0 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
              active === i
                ? "border-brand bg-brand-soft text-brand"
                : "border-line bg-surface text-muted hover:border-brand/50 hover:text-ink"
            }`}
          >
            {g.title}
            <span className="ml-2 text-xs opacity-70">{g.modules.length}</span>
          </button>
        ))}
      </div>

      <ul
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${active}`}
        className="mt-4 grid gap-3 sm:grid-cols-2"
      >
        {group.modules.map((m) => (
          <li key={m.folder}>
            <a
              href={`https://github.com/${githubUser}/${repoName}/tree/main/${encodeURIComponent(m.folder)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full gap-3 rounded-xl border border-line bg-bg p-4 transition-colors hover:border-brand"
              aria-label={`${m.title} — open folder on GitHub (opens in a new tab)`}
            >
              <FolderIcon width={18} height={18} className="mt-0.5 shrink-0 text-brand" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold group-hover:text-brand">{m.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">{m.topics}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
