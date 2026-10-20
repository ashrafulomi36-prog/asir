import type { TeachingDemo as Demo } from "@/data/site";
import Section from "./Section";

function embedUrl(url: string): { kind: "iframe" | "video" | "link"; src: string } {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = u.searchParams.get("v");
      if (id) return { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` };
    }
    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      if (id) return { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` };
    }
    if (host === "vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id && /^\d+$/.test(id)) return { kind: "iframe", src: `https://player.vimeo.com/video/${id}` };
    }
    if (/\.(mp4|webm)$/i.test(u.pathname)) return { kind: "video", src: url };
  } catch {
    /* fall through */
  }
  return { kind: "link", src: url };
}

/** Rendered only when `teachingDemo` in src/data/site.ts is set (see page.tsx). */
export default function TeachingDemo({ demo }: { demo: Demo }) {
  const media = embedUrl(demo.video);
  return (
    <Section id="teaching" eyebrow="Teaching demo" title={demo.title} intro={demo.description}>
      <div className="max-w-3xl">
        {media.kind === "iframe" && (
          <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-black">
            <iframe
              src={media.src}
              title={demo.title}
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full"
            />
          </div>
        )}
        {media.kind === "video" && (
          <video controls preload="metadata" className="w-full rounded-2xl border border-line bg-black">
            <source src={media.src} />
          </video>
        )}
        {media.kind === "link" && (
          <a href={media.src} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Watch the demo
          </a>
        )}
        {demo.materials && demo.materials.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-4 text-sm">
            {demo.materials.map((m) => (
              <li key={m.href}>
                <a href={m.href} target="_blank" rel="noopener noreferrer" className="link">
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
