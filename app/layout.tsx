import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: site.themeColor,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.jobTitle,
  description: site.description,
  knowsAbout: ["Machine Learning", "Deep Learning", "PyTorch", "Scikit-learn", "Natural Language Processing", "Retrieval-Augmented Generation"],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "East Delta University",
  },
  sameAs: [
    "https://github.com/MuhammadAsir",
    "https://linkedin.com/in/asir-hossain",
    "https://codeforces.com/profile/MuhammadAsir",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
