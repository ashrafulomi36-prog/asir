"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckIcon } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8" noValidate={false}>
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="cf-name" className="text-sm font-medium">
          Name
        </label>
        <input id="cf-name" name="name" type="text" required maxLength={100} autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="cf-email" className="text-sm font-medium">
          Email
        </label>
        <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-medium">
          Message
        </label>
        <textarea id="cf-message" name="message" required minLength={10} maxLength={4000} rows={5} className={field} />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite" role="status" className="min-h-[1.25rem] text-sm">
        {status === "sent" && (
          <p className="flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
            <CheckIcon width={16} height={16} /> Message sent — thank you, I’ll reply soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400">
            {error} You can also email me directly at{" "}
            <a className="link" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
