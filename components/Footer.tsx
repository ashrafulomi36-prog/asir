import { personal } from "@/content/personal";
import { social } from "@/content/social";
import { navigation } from "@/content/navigation";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto flex max-w-6xl flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-medium">{personal.shortName}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {new Date().getFullYear()} — Built with Next.js &amp; Framer Motion
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="rounded-full border border-border p-2.5 text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
