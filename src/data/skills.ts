export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["R", "SQL", "MySQL", "HTML", "CSS", "Java", "JavaScript", "C++", "Python"],
  },
  {
    category: "Tools & Software",
    items: ["Rapidminer", "RStudio", "VSCode", "Eclipse", "Hadoop", "Cloudera", "XAMPP", "Canva", "Microsoft Excel"],
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Teamwork", "Self-discipline", "Time Management", "Adaptability", "Perfectionist", "Relationship Skills", "Creative", "Problem Solving", "Empathy", "Adaptive"],
  },
];
