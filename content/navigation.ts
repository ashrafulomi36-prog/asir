import { teachingDemo } from "./teachingDemo";

export type NavItem = { label: string; href: string };

const hasTeachingDemo = teachingDemo.videoUrl.trim().length > 0;

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  ...(hasTeachingDemo ? [{ label: "Teaching", href: "#teaching" }] : []),
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
