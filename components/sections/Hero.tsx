"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personal } from "@/content/personal";
import { social } from "@/content/social";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { NetworkField } from "@/components/ui/NetworkField";

const github = social.find((s) => s.icon === "github");

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <NetworkField className="pointer-events-none absolute inset-0 h-full w-full opacity-60 dark:opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container-px relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
        >
          {personal.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          {personal.name}
        </motion.h1>

        {/* Static headline: intentionally no motion or typing effect. */}
        <p className="mt-5 font-mono text-base text-muted sm:text-lg md:text-xl">{personal.title}</p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-2xl leading-relaxed text-muted"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects">Featured Projects</MagneticButton>
            <MagneticButton href="#learning" variant="outline">
              Learning Resources
            </MagneticButton>
            {github && (
              <MagneticButton href={github.href} variant="outline">
                GitHub
              </MagneticButton>
            )}
            <MagneticButton href="#contact" variant="outline">
              Contact
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <div className="flex items-center gap-1">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="rounded-full p-2.5 text-muted transition-colors duration-200 hover:bg-surface hover:text-accent"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
