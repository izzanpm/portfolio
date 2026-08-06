export interface ProjectEvidence {
  models: string[];
  selectedModel: string;
  repository?: string;
  image?: { src: string; altKey: string };
  metric?: { labelKey: string; value: string };
  limitationKey?: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: "classification" | "eda" | "deployment" | "normalization";
  tags: string[];
  featured?: 1 | 2;
  evidence?: ProjectEvidence;
}

export type FeaturedProject = Project & {
  featured: 1 | 2;
  evidence: ProjectEvidence;
};

export const projects: Project[] = [
  {
    id: "smartphone-price-prediction",
    title: "Smartphone Price Prediction Model",
    year: 2025,
    category: "classification",
    tags: ["Python", "KNN", "Decision Tree", "Naive Bayes"],
    featured: 1,
    evidence: {
      models: ["KNN", "Decision Tree", "Naive Bayes"],
      selectedModel: "Decision Tree",
    },
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "KNN", "Random Forest"],
    featured: 2,
    evidence: {
      models: ["KNN", "Random Forest"],
      selectedModel: "Random Forest",
    },
  },
  {
    id: "covid19-eda",
    title: "Exploratory Data Analysis of COVID-19 Dataset",
    year: 2024,
    category: "eda",
    tags: ["Python", "Data Visualization", "Preprocessing"],
  },
  {
    id: "aws-deployment",
    title: "Deployed Website using AWS EC2, AWS RDS, XAMPP",
    year: 2024,
    category: "deployment",
    tags: ["AWS EC2", "AWS RDS", "XAMPP", "Cloud"],
  },
  {
    id: "revenue-prediction",
    title: "Revenue Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Random Forest", "KNN", "SVM"],
  },
  {
    id: "lung-cancer-prediction",
    title: "Lung Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Logistic Regression"],
  },
  {
    id: "digging-site-normalization",
    title: "Normalize Digging Site Dataset",
    year: 2023,
    category: "normalization",
    tags: ["SQL", "Database Design", "Normalization"],
  },
];

function isFeaturedProject(project: Project): project is FeaturedProject {
  return project.featured !== undefined && project.evidence !== undefined;
}

export const featuredProjects = projects.filter(isFeaturedProject).sort((a, b) => a.featured - b.featured);
export const archivedProjects = projects.filter((project) => !project.featured);
