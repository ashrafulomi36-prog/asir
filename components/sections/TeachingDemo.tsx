import { FileText } from "lucide-react";
import { teachingDemo } from "@/content/teachingDemo";
import { parseVideoUrl } from "@/lib/video";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Renders nothing until a valid video URL is added in content/teachingDemo.ts. */
export function TeachingDemo() {
  const video = parseVideoUrl(teachingDemo.videoUrl);
  if (!video) return null;

  const title = teachingDemo.title || "Teaching demo";

  return (
    <section id="teaching" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Teaching Demo"
        title={title}
        description={teachingDemo.description || undefined}
      />
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="aspect-video w-full bg-black">
            {video.kind === "youtube" ? (
              <iframe
                src={video.embedUrl}
                title={title}
                loading="lazy"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            ) : (
              <video controls preload="metadata" className="h-full w-full">
                <source src={video.src} />
                Your browser does not support embedded video.
              </video>
            )}
          </div>
          {(teachingDemo.topic || teachingDemo.duration || teachingDemo.notesUrl) && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 p-5 text-sm text-muted">
              {teachingDemo.topic && <span>Topic: {teachingDemo.topic}</span>}
              {teachingDemo.duration && <span>Length: {teachingDemo.duration}</span>}
              {teachingDemo.notesUrl && (
                <a
                  href={teachingDemo.notesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" /> Notes
                </a>
              )}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
