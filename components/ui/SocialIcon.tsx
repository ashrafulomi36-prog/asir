import { Mail, Phone, BarChart3 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import type { SocialLink } from "@/content/social";

export function SocialIcon({ icon, className }: { icon: SocialLink["icon"]; className?: string }) {
  const cls = className ?? "h-5 w-5";
  switch (icon) {
    case "github":
      return <GithubIcon className={cls} />;
    case "linkedin":
      return <LinkedinIcon className={cls} />;
    case "mail":
      return <Mail className={cls} strokeWidth={1.75} />;
    case "phone":
      return <Phone className={cls} strokeWidth={1.75} />;
    case "codeforces":
      return <BarChart3 className={cls} strokeWidth={1.75} />;
    default:
      return null;
  }
}
