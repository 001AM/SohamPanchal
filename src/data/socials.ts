export type SocialLink = {
  label: string;
  handle: string;
  url?: string;
  kind: "writing" | "building" | "thinking" | "network";
  note: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@001AM",
    url: "https://github.com/001AM",
    kind: "building",
    note: "Code, experiments, and open-source work",
  },
  {
    label: "LeetCode",
    handle: "@001AM",
    url: "https://leetcode.com/u/001AM/",
    kind: "building",
    note: "Algorithms and problem-solving practice",
  },
  {
    label: "Chess.com",
    handle: "@soham0410",
    url: "https://www.chess.com/member/soham0410",
    kind: "thinking",
    note: "Chess games, calculation, and strategic practice",
  },
  {
    label: "Medium",
    handle: "@sohampanchal1469",
    url: "https://medium.com/@sohampanchal1469",
    kind: "writing",
    note: "Long-form technical essays and field notes",
  },
  {
    label: "Dev.to",
    handle: "@001am",
    url: "https://dev.to/001am",
    kind: "writing",
    note: "Practical engineering guides",
  },
  {
    label: "Substack",
    handle: "@soham04",
    url: "https://substack.com/@soham04",
    kind: "writing",
    note: "Essays, notes, and ideas beyond engineering",
  },
  {
    label: "LinkedIn",
    handle: "Soham Panchal",
    url: "https://www.linkedin.com/in/soham-panchal-430956255/",
    kind: "network",
    note: "Work, ideas, and professional updates",
  },
  {
    label: "X",
    handle: "@Soham0001AM",
    url: "https://x.com/Soham0001AM",
    kind: "network",
    note: "Short thoughts and things worth sharing",
  },
  {
    label: "npm",
    handle: "soham-panchal",
    url: "https://www.npmjs.com/~soham-panchal",
    kind: "building",
    note: "Published tools and packages",
  },
];

export const connectedSocialLinks = socialLinks.filter((link) => link.url);
