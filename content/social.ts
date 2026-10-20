export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "codeforces" | "phone";
};

export const social: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/MuhammadAsir",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/asir-hossain",
    icon: "linkedin",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/MuhammadAsir",
    icon: "codeforces",
  },
  {
    label: "Email",
    href: "mailto:asirmuhammad76@gmail.com",
    icon: "mail",
  },
];
