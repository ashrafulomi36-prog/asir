export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "East Delta University",
    period: "2023 — Present",
    location: "Chattogram, Bangladesh",
  },
  {
    degree: "Higher Secondary Certificate in Science",
    institution: "Government City College",
    period: "2020 — 2022",
    location: "Chattogram, Bangladesh",
    grade: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate in Science",
    institution: "Chattogram Collegiate School",
    period: "2018 — 2020",
    location: "Chattogram, Bangladesh",
    grade: "GPA 5.00 / 5.00",
  },
];
