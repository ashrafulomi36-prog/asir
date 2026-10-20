import { contact, site, socials } from "@/data/site";
import ContactForm from "./ContactForm";
import { CodeforcesIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";
import Section from "./Section";

export default function Contact() {
  const links = [
    { label: "GitHub", href: socials.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
    { label: "Codeforces", href: socials.codeforces, Icon: CodeforcesIcon },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading} intro={contact.text} className="bg-surface/50">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a href={`mailto:${site.email}`} className="card flex items-center gap-3 p-4 transition-colors hover:border-brand">
            <MailIcon className="shrink-0 text-brand" />
            <span className="min-w-0 break-all text-sm font-medium">{site.email}</span>
          </a>
          <a href={`tel:${site.phone}`} className="card flex items-center gap-3 p-4 transition-colors hover:border-brand">
            <PhoneIcon className="shrink-0 text-brand" />
            <span className="text-sm font-medium">{site.phone}</span>
          </a>
          <ul className="flex flex-wrap gap-2 pt-2" aria-label="Profiles">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-3 !py-2">
                  <Icon width={16} height={16} /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm fallbackEmail={site.email} />
      </div>
    </Section>
  );
}
