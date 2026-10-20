import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * - Runs only on the server: the Resend API key is read from environment
 *   variables and is never sent to the browser.
 * - Validates and sanitises input, ignores honeypot submissions and applies a
 *   small best-effort rate limit.
 *
 * Required env vars (see .env.example): RESEND_API_KEY, CONTACT_TO_EMAIL.
 * Optional: CONTACT_FROM_EMAIL.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 20_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Best-effort limiter. On serverless this is per warm instance, which is
// enough to stop casual abuse; Resend's own limits are the hard backstop.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
  }
  return false;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Collapse control characters / newlines so user input can't inject mail headers.
const oneLine = (s: string) => s.replace(/[\u0000-\u001F\u007F]+/g, " ").trim();

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;

const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status });

export async function POST(request: Request) {
  // Same-origin only (browsers always send Origin on cross-site POSTs).
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ error: "Forbidden." }, 403);
    } catch {
      return json({ error: "Forbidden." }, 403);
    }
  }

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return json({ error: "Message is too large." }, 413);

  const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) return json({ error: "Too many messages — please try again in a few minutes." }, 429);

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: real visitors never fill this field. Pretend success, send nothing.
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return json({ ok: true });
  }

  const name = typeof payload.name === "string" ? oneLine(payload.name) : "";
  const email = typeof payload.email === "string" ? oneLine(payload.email) : "";
  const message = typeof payload.message === "string" ? payload.message.replace(/\r\n/g, "\n").trim() : "";

  if (name.length < 1 || name.length > 100) return json({ error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email) || email.length > 200) return json({ error: "Please enter a valid email address." }, 400);
  if (message.length < 10) return json({ error: "Please write a message of at least 10 characters." }, 400);
  if (message.length > 4000) return json({ error: "Message is too long (4,000 characters max)." }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return json({ error: "The contact form isn’t available right now." }, 503);
  }

  const endpoint = process.env.RESEND_API_URL || "https://api.resend.com/emails"; // override is for local tests only

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name}`.slice(0, 150),
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error(`[contact] Email provider responded with status ${res.status}.`);
      return json({ error: "Couldn’t send your message right now." }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[contact] Email request failed:", err instanceof Error ? err.name : "unknown error");
    return json({ error: "Couldn’t send your message right now." }, 502);
  }
}

// Anything other than POST is not supported.
export async function GET() {
  return json({ error: "Method not allowed." }, 405);
}
