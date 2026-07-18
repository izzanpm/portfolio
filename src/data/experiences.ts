export interface Experience {
  title: string;
  institution: string;
  role: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Waste Bank Donation with Generasi Bebas Plastik",
    institution: "PT. Paragon",
    role: "Volunteer",
    responsibilities: [
      "Participated in waste bank donation program to promote environmental sustainability",
      "Collaborated with team members to organize and execute donation activities",
    ],
  },
  {
    title: "Bootcamp Data Science",
    institution: "DQLab",
    role: "Participant",
    responsibilities: [
      "Completed intensive data science bootcamp covering Python, SQL, and machine learning fundamentals",
      "Worked on hands-on projects involving real-world datasets",
    ],
  },
  {
    title: "Bootcamp Data Science",
    institution: "Dicoding",
    role: "Participant",
    responsibilities: [
      "Completed data science learning path with focus on practical implementation",
      "Built data analysis and visualization projects as part of the curriculum",
    ],
  },
  {
    title: 'Rector Cup "Valorant E-Sport" Division',
    institution: "BINUS University",
    role: "Volunteer",
    responsibilities: [
      "Assisted in organizing the Valorant e-sport division for the university rector cup",
      "Coordinated tournament logistics and participant management",
    ],
  },
  {
    title: 'Head of "Valorant E-Sport" Division at Glarisa Cup',
    institution: "SMA Kharisma Bangsa",
    role: "Head of Division",
    responsibilities: [
      "Led the Valorant e-sport division for the school's annual Glarisa Cup event",
      "Managed team coordination, scheduling, and tournament operations",
    ],
  },
];
