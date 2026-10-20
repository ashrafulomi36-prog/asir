import { certifications } from "@/content/certifications";
import { leadership } from "@/content/leadership";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/ui/Timeline";
import { BadgeCheck } from "lucide-react";

export function CertificationsLeadership() {
  return (
    <section id="certifications" className="container-px mx-auto max-w-6xl py-20">
      <SectionHeading eyebrow="Credentials" title="Certifications &amp; Extracurricular" />
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.08}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div id="extracurricular">
          <h3 className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">Extracurricular</h3>
          <Timeline
            entries={leadership.map((l) => ({
              title: l.role,
              subtitle: l.organization,
              period: l.period,
              description: l.description,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
