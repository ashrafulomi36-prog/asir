import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { width: 18, height: 18, "aria-hidden": true, focusable: false } as const;

export const GitHubIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...p}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const LinkedInIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const CodeforcesIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...p}>
    <path d="M4.5 9A1.5 1.5 0 0 1 6 10.5v9A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5v-9A1.5 1.5 0 0 1 1.5 9h3Zm9-6A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3Zm9 3A1.5 1.5 0 0 1 24 7.5v12a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-12A1.5 1.5 0 0 1 19.5 6h3Z" />
  </svg>
);

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const MailIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const PhoneIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);
export const PinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const ExternalIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowRightIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);
export const FolderIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...base} {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
);
