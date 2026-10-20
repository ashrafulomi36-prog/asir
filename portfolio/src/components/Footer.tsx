import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.shortName}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
