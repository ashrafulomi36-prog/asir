export type CPPlatform = {
  name: string;
  url?: string;
};

export const competitiveProgramming = {
  title: "Competitive Programming",
  description: "Solved 500+ programming problems across four online judges.",
  stats: [
    { label: "Problems solved", value: "500+" },
    { label: "Online judges", value: "4" },
  ],
  platforms: [
    { name: "Codeforces", url: "https://codeforces.com/profile/MuhammadAsir" },
    { name: "LightOJ" },
    { name: "Virtual Judge" },
    { name: "CodeChef" },
  ] as CPPlatform[],
};
