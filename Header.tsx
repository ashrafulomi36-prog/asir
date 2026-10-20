"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

type Item = { id: string; label: string };

export default function Header({ items, brand }: { items: Item[]; brand: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Mobile browsers can drop a native "#section" jump when the menu closes at the
  // same moment. So close the menu first, then scroll to the section ourselves.
  const goTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top = el.getBoundingClientRect().top + window.scrollY - 64; // 64px = header height
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }, 60);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="text-base font-bold tracking-tight">
          {brand}
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand ${
                    active === item.id ? "text-brand" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-ink hover:bg-surface xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg xl:hidden">
          <ul className="container-page grid gap-1 py-3">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => goTo(e, item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-surface ${
                    active === item.id ? "text-brand" : "text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
