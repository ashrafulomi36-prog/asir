"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, Send } from "lucide-react";
import { contact } from "@/content/contact";
import { social } from "@/content/social";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

type FormValues = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type Status = { kind: "idle" } | { kind: "success" } | { kind: "error"; message: string };

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { website: "" } });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(data: FormValues) {
    setStatus({ kind: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Something went wrong.");
      }
      reset();
      setStatus({ kind: "success" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus({ kind: "error", message });
    }
  }

  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="Contact" title={contact.heading} description={contact.description} />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-6 md:col-span-2">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4" /> {contact.email}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4" /> {contact.phone}
          </a>
          <div className="flex gap-2 pt-2">
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
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                autoComplete="name"
                maxLength={100}
                {...register("name", { required: "Please enter your name" })}
                className={inputClass}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                maxLength={200}
                {...register("email", {
                  required: "Please enter your email",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
                className={inputClass}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={4000}
                {...register("message", { required: "Please enter a message" })}
                className={`${inputClass} resize-none`}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>

            {/* Honeypot field: hidden from people and assistive tech, bots tend to fill it. */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <MagneticButton type="submit">
              <Send className="h-4 w-4" /> {isSubmitting ? "Sending..." : "Send message"}
            </MagneticButton>

            <div aria-live="polite" className="min-h-5 text-sm">
              {status.kind === "success" && (
                <p className="text-accent">Thanks, your message was sent. I&apos;ll reply by email.</p>
              )}
              {status.kind === "error" && (
                <p className="text-red-500">
                  {status.message} You can also email me at{" "}
                  <a className="underline" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
