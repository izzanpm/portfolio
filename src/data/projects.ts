export interface ProjectEvidence {
  models: string[];
  selectedModel: string;
  repository?: string;
  image?: { src: string; altKey: string };
  metric?: { labelKey: string; value: string };
  limitationKey?: string;
}

export type ProjectType = "data" | "web";
export type ProjectFilter = "all" | ProjectType;
export type DataCategory = "classification" | "eda" | "deployment" | "normalization";

export interface WebProjectDetails {
  status: "shipped" | "iterating";
  problemKey: string;
  roleKey: string;
  featuresKey: string;
  surfaceKeys: string[];
  repository?: string;
  liveDemo?: string;
  screenshot?: { src: string; altKey: string };
}

interface ProjectBase {
  id: string;
  title: string;
  year: number;
  tags: string[];
  featured?: number;
  origin?: "academic" | "independent";
}

export interface DataProject extends ProjectBase {
  type: "data";
  category: DataCategory;
  evidence?: ProjectEvidence;
}

export interface WebProject extends ProjectBase {
  type: "web";
  category: "web";
  web: WebProjectDetails;
}

export type Project = DataProject | WebProject;

export type FeaturedDataProject = DataProject & {
  featured: number;
  evidence: ProjectEvidence;
};

export type FeaturedWebProject = WebProject & { featured: number };
export type FeaturedProject = FeaturedDataProject | FeaturedWebProject;

export const projects: Project[] = [
  {
    type: "web",
    origin: "independent",
    category: "web",
    id: "binus-smart-locker",
    title: "BinusSmartLocker",
    year: 2026,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", ".NET", "Entity Framework Core", "PostgreSQL", "Supabase"],
    featured: 1,
    web: {
      status: "shipped",
      problemKey: "projects.binus-smart-locker.problem",
      roleKey: "projects.binus-smart-locker.role",
      featuresKey: "projects.binus-smart-locker.features",
      surfaceKeys: [
        "projects.binus-smart-locker.surface.crud",
        "projects.binus-smart-locker.surface.logs",
      ],
      repository: "https://github.com/izzanpm/binus-smart-locker.git",
    },
  },
  {
    type: "data",
    id: "smartphone-price-prediction",
    title: "Smartphone Price Prediction Model",
    year: 2025,
    category: "classification",
    tags: ["Python", "KNN", "Decision Tree", "Naive Bayes"],
    featured: 2,
    evidence: {
      models: ["KNN", "Decision Tree", "Naive Bayes"],
      selectedModel: "Decision Tree",
    },
  },
  {
    type: "data",
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "KNN", "Random Forest"],
    featured: 3,
    evidence: {
      models: ["KNN", "Random Forest"],
      selectedModel: "Random Forest",
    },
  },
  {
    type: "data",
    id: "covid19-eda",
    title: "Exploratory Data Analysis of COVID-19 Dataset",
    year: 2024,
    category: "eda",
    tags: ["Python", "Data Visualization", "Preprocessing"],
  },
  {
    type: "web",
    id: "aws-deployment",
    title: "Deployed Website using AWS EC2, AWS RDS, XAMPP",
    year: 2024,
    category: "web",
    tags: ["AWS EC2", "AWS RDS", "XAMPP", "Cloud"],
    web: {
      status: "shipped",
      problemKey: "projects.aws-deployment.problem",
      roleKey: "projects.aws-deployment.role",
      featuresKey: "projects.aws-deployment.features",
      surfaceKeys: [
        "projects.aws-deployment.surface.hosting",
        "projects.aws-deployment.surface.database",
      ],
    },
  },
  {
    type: "data",
    id: "revenue-prediction",
    title: "Revenue Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Random Forest", "KNN", "SVM"],
  },
  {
    type: "data",
    id: "lung-cancer-prediction",
    title: "Lung Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Logistic Regression"],
  },
  {
    type: "data",
    id: "digging-site-normalization",
    title: "Normalize Digging Site Dataset",
    year: 2023,
    category: "normalization",
    tags: ["SQL", "Database Design", "Normalization"],
  },
];

function isFeaturedProject(project: Project): project is FeaturedProject {
  return project.featured !== undefined && project.featured > 0 && (project.type === "web" || project.evidence !== undefined);
}

export const featuredProjects = projects.filter(isFeaturedProject).sort((a, b) => a.featured - b.featured);
export const archivedProjects = projects.filter((project) => !isFeaturedProject(project));

export function filterProjects<T extends Project>(projectList: readonly T[], filter: ProjectFilter): T[] {
  return projectList.filter((project) => filter === "all" || project.type === filter);
}

export function getDisplayProjects<T extends Project>(projectList: readonly T[], filter: ProjectFilter): { project: T; displayIndex: number }[] {
  return filterProjects(projectList, filter).map((project, index) => ({ project, displayIndex: index + 1 }));
}
