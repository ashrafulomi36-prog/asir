export type Certification = {
  title: string;
  issuer: string;
  note?: string;
};

export const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
  },
  {
    title: "Phase 0 — A Deep Introduction to Programming",
    issuer: "YouKn0wWho Academy",
  },
];
