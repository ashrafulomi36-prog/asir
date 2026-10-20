import type { Metadata, Viewport } from "next";
import { GITHUB_URL, site, socials } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4338ca" },
    { media: "(prefers-color-scheme: dark)", color: "#090c16" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "AI/ML Practitioner",
  description: site.description,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: "Chattogram", addressCountry: "BD" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "East Delta University" },
  knowsAbout: ["Machine Learning", "Deep Learning", "PyTorch", "Natural Language Processing", "Retrieval-Augmented Generation"],
  sameAs: [GITHUB_URL, socials.linkedin, socials.codeforces],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Safe: static, server-built object with no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
