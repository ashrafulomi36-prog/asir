import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, intro, children, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-16 sm:py-20 ${className}`}>
      <div className="container-page">
        <header className="mb-10 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold sm:text-3xl">
            {title}
          </h2>
          {intro && <p className="mt-3 text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
