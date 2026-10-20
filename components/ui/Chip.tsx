import { cn } from "@/lib/utils";

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-foreground/80 transition-colors duration-300 hover:border-accent hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
