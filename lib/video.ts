export type VideoSource =
  | { kind: "youtube"; embedUrl: string }
  | { kind: "file"; src: string }
  | null;

const YOUTUBE_ID = /^[\w-]{11}$/;

export function parseVideoUrl(raw: string): VideoSource {
  const url = raw.trim();
  if (!url) return null;

  if (url.startsWith("/") || /\.(mp4|webm)(\?.*)?$/i.test(url)) {
    return { kind: "file", src: url };
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    let id: string | null = null;

    if (host === "youtu.be") id = parsed.pathname.slice(1);
    else if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") id = parsed.searchParams.get("v");
      else if (parsed.pathname.startsWith("/embed/")) id = parsed.pathname.split("/")[2] ?? null;
    }

    if (id && YOUTUBE_ID.test(id)) {
      return { kind: "youtube", embedUrl: `https://www.youtube-nocookie.com/embed/${id}` };
    }
  } catch {
    return null;
  }
  return null;
}
