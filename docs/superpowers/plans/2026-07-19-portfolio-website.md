# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page static portfolio website for Mohammad Izzan Putra Maulana using React + TypeScript + Vite with dark theme and purple accents.

**Architecture:** Vite-bundled React SPA with Tailwind CSS for styling, Framer Motion for animations, content data separated into TypeScript files, i18n via React Context, scroll spy for navigation, and project detail modals.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, Inter font (Google Fonts)

## Global Constraints

- Node.js >= 18
- React 18 + TypeScript strict mode
- Tailwind CSS v4 (CSS-first configuration, no tailwind.config.js)
- All content data in `src/data/` as typed exported arrays — never inline content in components
- Dark theme only (#0A0A0B background), purple accent (#8B5CF6)
- Font: Inter from Google Fonts
- Target: static site deployable to Vercel/Netlify/GitHub Pages
- No backend, no database, no server-side logic
- Lighthouse performance target >= 90

---

### Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json` (via Vite scaffold)
- Create: `tsconfig.json` (via Vite scaffold)
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `public/placeholder.jpg` (placeholder)

**Interfaces:**
- Produces: Vite dev server running at localhost, Tailwind CSS configured, base App component rendering

- [ ] **Step 1: Scaffold Vite + React + TypeScript project**

```bash
npm create vite@latest . -- --template react-ts
npm install
```

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Configure Vite with Tailwind CSS v4 plugin**

Update `vite.config.ts`:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

- [ ] **Step 4: Set up index.css with Tailwind v4 and custom theme**

Replace `src/index.css` with:
```css
@import "tailwindcss";

@theme {
  --color-bg-primary: #0A0A0B;
  --color-bg-surface: #141416;
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #A1A1AA;
  --color-accent: #8B5CF6;
  --color-accent-hover: #7C3AED;
  --color-border: #27272A;
  --font-sans: "Inter", sans-serif;
}
```

- [ ] **Step 5: Update index.html with meta tags, font preload, and SEO**

Replace `index.html`:
```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mohammad Izzan Putra Maulana — Data Analyst & Data Scientist Portfolio</title>
    <meta name="description" content="Portfolio of Mohammad Izzan Putra Maulana — Computer Science student at BINUS University, passionate about Data Analytics and Data Science." />
    <meta property="og:title" content="Mohammad Izzan Putra Maulana — Portfolio" />
    <meta property="og:description" content="Data Analyst & Data Scientist Portfolio" />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-bg-primary text-text-primary font-sans antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Set up base App.tsx**

Replace `src/App.tsx`:
```tsx
function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <h1 className="text-text-primary text-4xl font-bold p-8">Portfolio</h1>
    </div>
  );
}

export default App;
```

- [ ] **Step 7: Clean up main.tsx**

Replace `src/main.tsx`:
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 8: Create placeholder image**

```bash
# Create a simple SVG placeholder in public/
```

Create `public/placeholder.svg` with a simple avatar placeholder (gray circle with user icon).

- [ ] **Step 9: Verify dev server runs**

```bash
npm run dev
```

Expected: Browser opens to localhost showing "Portfolio" text on dark background with Inter font.

- [ ] **Step 10: Commit**

```bash
git init
git add .
git commit -m "feat: initial project setup with Vite, React, TypeScript, Tailwind CSS v4"
```

---

### Task 2: Data Layer — Content Files

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/experiences.ts`
- Create: `src/data/certificates.ts`

**Interfaces:**
- Produces: Exported typed arrays `projects: Project[]`, `skillGroups: SkillGroup[]`, `experiences: Experience[]`, `certificates: Certificate[]` and their TypeScript interfaces

- [ ] **Step 1: Create projects data file**

Create `src/data/projects.ts`:
```typescript
export interface ProjectDetail {
  overview: string;
  methodology: string;
  tools: string[];
  results: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: "classification" | "eda" | "deployment" | "normalization";
  tags: string[];
  summary: string;
  detail: ProjectDetail;
  isLatest?: boolean;
}

export const projects: Project[] = [
  {
    id: "smartphone-price-prediction",
    title: "Smartphone Price Prediction Model",
    year: 2025,
    category: "classification",
    tags: ["Python", "KNN", "Decision Tree", "Naive Bayes"],
    summary: "Classification model to predict smartphone price ranges using multiple ML algorithms.",
    detail: {
      overview: "Built a machine learning model to predict smartphone price categories based on hardware specifications using Python.",
      methodology: "Data preprocessing, feature selection, model training with KNN, Decision Tree, and Naive Bayes classifiers, cross-validation, and performance comparison.",
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      results: "Compared accuracy across three classifiers; Decision Tree achieved the highest accuracy for price range prediction.",
    },
    isLatest: true,
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "KNN", "Random Forest"],
    summary: "Classification model for breast cancer diagnosis using KNN and Random Forest.",
    detail: {
      overview: "Developed a predictive model for breast cancer diagnosis (malignant vs benign) using machine learning techniques.",
      methodology: "Data cleaning, exploratory analysis, feature engineering, model training with KNN and Random Forest, evaluation with confusion matrix and accuracy metrics.",
      tools: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      results: "Random Forest outperformed KNN in accuracy and recall for malignant classification.",
    },
  },
  {
    id: "covid19-eda",
    title: "Exploratory Data Analysis of COVID-19 Dataset",
    year: 2024,
    category: "eda",
    tags: ["Python", "Data Visualization", "Preprocessing"],
    summary: "Comprehensive EDA on COVID-19 dataset including data understanding, preprocessing, and visualization.",
    detail: {
      overview: "Performed exploratory data analysis on a COVID-19 dataset to uncover trends, patterns, and insights.",
      methodology: "Data understanding, missing value handling, data type conversion, statistical summary, visualization with charts and heatmaps.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      results: "Identified key trends in case growth, mortality rates, and regional patterns through comprehensive visualizations.",
    },
  },
  {
    id: "aws-deployment",
    title: "Deployed Website using AWS EC2, AWS RDS, XAMPP",
    year: 2024,
    category: "deployment",
    tags: ["AWS EC2", "AWS RDS", "XAMPP", "Cloud"],
    summary: "Deployed a web application on AWS cloud infrastructure using EC2 and RDS.",
    detail: {
      overview: "Set up and deployed a full web application using AWS cloud services with XAMPP as the local development environment.",
      methodology: "Configured AWS EC2 instance, set up AWS RDS for database, migrated local XAMPP project to cloud, configured security groups and networking.",
      tools: ["AWS EC2", "AWS RDS", "XAMPP", "MySQL"],
      results: "Successfully deployed a fully functional web application accessible via public IP with managed database on AWS RDS.",
    },
  },
  {
    id: "revenue-prediction",
    title: "Revenue Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Random Forest", "KNN", "SVM"],
    summary: "Classification model for revenue prediction using Random Forest, KNN, and SVM.",
    detail: {
      overview: "Built a classification model to predict revenue categories using multiple machine learning algorithms.",
      methodology: "Feature engineering, data normalization, model training with Random Forest, KNN, and SVM, hyperparameter tuning, cross-validation.",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      results: "Random Forest provided the best balance of precision and recall for revenue classification.",
    },
  },
  {
    id: "lung-cancer-prediction",
    title: "Lung Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Logistic Regression"],
    summary: "Logistic Regression model for lung cancer risk prediction.",
    detail: {
      overview: "Developed a logistic regression model to predict lung cancer risk based on patient data and risk factors.",
      methodology: "Data preprocessing, feature selection, logistic regression model training, ROC curve analysis, threshold optimization.",
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      results: "Achieved strong AUC score with logistic regression, identifying key risk factors for lung cancer.",
    },
  },
  {
    id: "digging-site-normalization",
    title: "Normalize Digging Site Dataset",
    year: 2023,
    category: "normalization",
    tags: ["SQL", "Database Design", "Normalization"],
    summary: "Database normalization from UNF through 3NF for a digging site dataset.",
    detail: {
      overview: "Performed database normalization on a digging site dataset, transforming it from unnormalized form to Third Normal Form.",
      methodology: "Identified functional dependencies, decomposed tables through UNF → 1NF → 2NF → 3NF, verified lossless join and dependency preservation.",
      tools: ["SQL", "MySQL", "Database Design Tools"],
      results: "Eliminated data redundancy and anomalies, resulting in a well-structured relational database schema.",
    },
  },
];
```

- [ ] **Step 2: Create skills data file**

Create `src/data/skills.ts`:
```typescript
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
```

- [ ] **Step 3: Create experiences data file**

Create `src/data/experiences.ts`:
```typescript
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
```

- [ ] **Step 4: Create certificates data file**

Create `src/data/certificates.ts`:
```typescript
export interface Certificate {
  name: string;
  issuer: string;
  year: number;
}

export const certificates: Certificate[] = [
  { name: "Bootcamp Machine Learning", issuer: "DQLab", year: 2024 },
  { name: "Data Analyst with SQL & Python", issuer: "DQLab", year: 2024 },
  { name: "Data Science Fundamentals", issuer: "Cognitive Class", year: 2024 },
  { name: "Machine Learning with Python", issuer: "Cognitive Class", year: 2024 },
  { name: "Data Visualization with Python", issuer: "Cognitive Class", year: 2024 },
  { name: "Python for Data Science", issuer: "Cognitive Class", year: 2024 },
  { name: "Belajar Dasar Data Science", issuer: "Dicoding", year: 2024 },
  { name: "Belajar Analisis Data dengan Python", issuer: "Dicoding", year: 2024 },
  { name: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding", year: 2024 },
  { name: "Intro to Data Analytics", issuer: "RevoU", year: 2024 },
  { name: "Memulai Pemrograman dengan Python", issuer: "Dicoding", year: 2023 },
];
```

- [ ] **Step 5: Verify data files compile**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: add content data layer (projects, skills, experiences, certificates)"
```

---

### Task 3: i18n System

**Files:**
- Create: `src/i18n/en.ts`
- Create: `src/i18n/id.ts`
- Create: `src/hooks/useLanguage.ts`

**Interfaces:**
- Produces: `LanguageProvider` component wrapping the app, `useLanguage()` hook returning `{ locale, setLocale, t }` where `t(key: string) => string`

- [ ] **Step 1: Create English translations**

Create `src/i18n/en.ts`:
```typescript
export const en: Record<string, string> = {
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.contact": "Contact",
  "nav.downloadCv": "Download CV",
  "hero.tagline": "Computer science student with a passion for exploration in the realm of data",
  "hero.badge": "Data Analyst & Data Scientist",
  "hero.cta.projects": "View Projects",
  "hero.cta.cv": "Download CV",
  "about.title": "About Me",
  "about.bio": "Computer Science student (7th semester) at Bina Nusantara University, interested in Data Analyst and Data Scientist positions. Equipped with key skills in adaptability, time management, teamwork, and perfectionism. Experienced with various tools and programming languages for data analysis and software development.",
  "about.education": "Education",
  "about.university": "Bina Nusantara University",
  "about.degree": "Undergraduate, Computer Science",
  "about.gpa": "GPA: 3.55 / 4.00",
  "about.contact": "Contact",
  "about.location": "South Tangerang, Banten",
  "skills.title": "Skills",
  "projects.title": "Projects",
  "projects.latest": "Latest Project",
  "projects.filter.all": "All",
  "projects.filter.classification": "Classification",
  "projects.filter.eda": "EDA",
  "projects.filter.deployment": "Deployment",
  "projects.filter.normalization": "Normalization",
  "projects.modal.overview": "Overview",
  "projects.modal.methodology": "Methodology",
  "projects.modal.tools": "Tools Used",
  "projects.modal.results": "Results & Insights",
  "experience.title": "Experience",
  "certificates.title": "Certificates",
  "footer.copyright": "© 2026 Mohammad Izzan Putra Maulana",
};
```

- [ ] **Step 2: Create Indonesian translations**

Create `src/i18n/id.ts`:
```typescript
export const id: Record<string, string> = {
  "nav.about": "Tentang",
  "nav.skills": "Keahlian",
  "nav.projects": "Proyek",
  "nav.experience": "Pengalaman",
  "nav.contact": "Kontak",
  "nav.downloadCv": "Unduh CV",
  "hero.tagline": "Mahasiswa ilmu komputer dengan minat eksplorasi di bidang data",
  "hero.badge": "Data Analyst & Data Scientist",
  "hero.cta.projects": "Lihat Proyek",
  "hero.cta.cv": "Unduh CV",
  "about.title": "Tentang Saya",
  "about.bio": "Mahasiswa Computer Science semester 7 di Bina Nusantara University, tertarik pada posisi Data Analyst dan Data Scientist. Memiliki key skills adaptability, time management, teamwork, dan perfectionism. Terbiasa menggunakan berbagai tools dan bahasa pemrograman untuk analisis data dan pengembangan perangkat lunak.",
  "about.education": "Pendidikan",
  "about.university": "Bina Nusantara University",
  "about.degree": "Sarjana, Computer Science",
  "about.gpa": "IPK:3.55 / 4.00",
  "about.contact": "Kontak",
  "about.location": "Tangerang Selatan, Banten",
  "skills.title": "Keahlian",
  "projects.title": "Proyek",
  "projects.latest": "Proyek Terbaru",
  "projects.filter.all": "Semua",
  "projects.filter.classification": "Klasifikasi",
  "projects.filter.eda": "EDA",
  "projects.filter.deployment": "Deployment",
  "projects.filter.normalization": "Normalisasi",
  "projects.modal.overview": "Ringkasan",
  "projects.modal.methodology": "Metodologi",
  "projects.modal.tools": "Tools yang Digunakan",
  "projects.modal.results": "Hasil & Insight",
  "experience.title": "Pengalaman",
  "certificates.title": "Sertifikat",
  "footer.copyright": "© 2026 Mohammad Izzan Putra Maulana",
};
```

- [ ] **Step 3: Create useLanguage hook with Context**

Create `src/hooks/useLanguage.tsx`:
```tsx
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { en } from "../i18n/en";
import { id } from "../i18n/id";

type Locale = "en" | "id";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = { en, id };

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = useCallback(
    (key: string): string => translations[locale][key] ?? key,
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
```

- [ ] **Step 4: Wrap App with LanguageProvider**

Update `src/main.tsx`:
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./hooks/useLanguage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
```

- [ ] **Step 5: Verify no TypeScript errors**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 6: Commit**

```bash
git add src/i18n/ src/hooks/useLanguage.tsx src/main.tsx
git commit -m "feat: add i18n system with EN/ID translations and LanguageProvider"
```

---

### Task 4: Scroll Spy Hook

**Files:**
- Create: `src/hooks/useScrollSpy.ts`

**Interfaces:**
- Produces: `useScrollSpy(sectionIds: string[]) => string` — returns the currently active section ID

- [ ] **Step 1: Create useScrollSpy hook**

Create `src/hooks/useScrollSpy.ts`:
```typescript
import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${offset}px 0px -40% 0px`, threshold: 0.1 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useScrollSpy.ts
git commit -m "feat: add useScrollSpy hook with IntersectionObserver"
```

---

### Task 5: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`

**Interfaces:**
- Consumes: `useScrollSpy(sectionIds)`, `useLanguage()` → `{ locale, setLocale, t }`
- Produces: `<Navbar />` component — sticky navbar with scroll spy, language toggle, mobile drawer

- [ ] **Step 1: Create Navbar component**

Create `src/components/Navbar.tsx`:
```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useLanguage } from "../hooks/useLanguage";

const sectionIds = ["about", "skills", "projects", "experience", "certificates"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "experience", label: t("nav.experience") },
    { id: "certificates", label: t("nav.contact") },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="text-accent font-bold text-xl tracking-tight">
            IZN
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeId === item.id ? "text-accent" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "en" ? "id" : "en")}
              className="text-sm font-medium text-text-secondary hover:text-text-primary px-2 py-1 rounded border border-border transition-colors"
            >
              {locale === "en" ? "ID" : "EN"}
            </button>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={14} />
              {t("nav.downloadCv")}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left text-sm font-medium transition-colors ${
                    activeId === item.id ? "text-accent" : "text-text-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <button
                  onClick={() => setLocale(locale === "en" ? "id" : "en")}
                  className="text-sm font-medium text-text-secondary px-2 py-1 rounded border border-border"
                >
                  {locale === "en" ? "ID" : "EN"}
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 bg-accent text-white text-sm font-medium px-4 py-2 rounded-lg"
                >
                  <Download size={14} />
                  {t("nav.downloadCv")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

- [ ] **Step 2: Add Navbar to App.tsx**

Update `src/App.tsx`:
```tsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-16">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-text-primary">Hero Section</h1>
        </section>
        <section id="about" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">About</h2>
        </section>
        <section id="skills" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Skills</h2>
        </section>
        <section id="projects" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Projects</h2>
        </section>
        <section id="experience" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Experience</h2>
        </section>
        <section id="certificates" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Certificates</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Expected: Sticky navbar with IZN logo, nav links, language toggle, and Download CV button. Scroll spy highlights active section. Mobile hamburger menu works.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/App.tsx
git commit -m "feat: add Navbar with scroll spy, language toggle, and mobile drawer"
```

---

### Task 6: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `useLanguage()` → `{ t }`
- Produces: `<Hero />` component — full viewport hero with name, tagline, CTAs, social icons

- [ ] **Step 1: Create Hero component**

Create `src/components/Hero.tsx`:
```tsx
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight"
        >
          Mohammad Izzan
          <br />
          Putra Maulana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors"
          >
            {t("hero.cta.projects")}
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 border border-border text-text-primary hover:bg-bg-surface font-medium rounded-lg transition-colors"
          >
            {t("hero.cta.cv")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a
            href="https://linkedin.com/in/izzanpm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:izzan.pm@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Gmail"
          >
            <Mail size={22} />
          </a>
          <a
            href="mailto:izzan.pm@outlook.com"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Outlook"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace hero placeholder in App.tsx**

In `src/App.tsx`, add `import Hero from "./components/Hero";` and replace the hero section placeholder with `<Hero />`.

- [ ] **Step 3: Verify in browser**

Expected: Full viewport hero with animated name, tagline, badge, CTA buttons, social icons on dark background.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/App.tsx
git commit -m "feat: add Hero section with animations and social links"
```

---

### Task 7: About Me Section

**Files:**
- Create: `src/components/About.tsx`

**Interfaces:**
- Consumes: `useLanguage()` → `{ t }`
- Produces: `<About />` component — 2-column layout with photo placeholder and bio

- [ ] **Step 1: Create About component**

Create `src/components/About.tsx`:
```tsx
import { motion } from "framer-motion";
import { MapPin, Mail, GraduationCap } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-12"
        >
          {t("about.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-bg-surface border border-border overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Mohammad Izzan Putra Maulana"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              {t("about.bio")}
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                <GraduationCap size={20} className="text-accent" />
                {t("about.education")}
              </h3>
              <div className="bg-bg-surface rounded-lg p-4 border border-border">
                <p className="font-medium text-text-primary">{t("about.university")}</p>
                <p className="text-sm text-text-secondary">{t("about.degree")}</p>
                <p className="text-sm text-accent">{t("about.gpa")}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text-primary">
                {t("about.contact")}
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:izzan.pm@gmail.com"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  izzan.pm@gmail.com
                </a>
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin size={16} />
                  {t("about.location")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to App.tsx**

Replace the about placeholder section in `src/App.tsx` with `<About />`.

- [ ] **Step 3: Verify in browser**

Expected: 2-column section with placeholder image left, bio/education/contact right. Responsive stacking on mobile.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/App.tsx
git commit -m "feat: add About Me section with education and contact info"
```

---

### Task 8: Skills Section

**Files:**
- Create: `src/components/Skills.tsx`

**Interfaces:**
- Consumes: `skillGroups` from `src/data/skills.ts`, `useLanguage()` → `{ t }`
- Produces: `<Skills />` component — 3 groups of skill badges with staggered animation

- [ ] **Step 1: Create Skills component**

Create `src/components/Skills.tsx`:
```tsx
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { skillGroups } from "../data/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-12"
        >
          {t("skills.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-text-primary">{group.category}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 12px rgba(139, 92, 246, 0.3)",
                    }}
                    className="px-3 py-1.5 text-sm font-medium text-text-primary bg-bg-surface border border-border rounded-full cursor-default transition-colors hover:border-accent/50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Skills to App.tsx**

Replace the skills placeholder section in `src/App.tsx` with `<Skills />`.

- [ ] **Step 3: Verify in browser**

Expected: 3-column grid of skill groups with badge pills. Staggered fade-in on scroll. Hover glow effect on each badge.

- [ ] **Step 4: Commit**

```bash
git add src/components/Skills.tsx src/App.tsx
git commit -m "feat: add Skills section with grouped badges and hover effects"
```

---

### Task 9: Projects Section + Project Modal

**Files:**
- Create: `src/components/Projects.tsx`
- Create: `src/components/ProjectModal.tsx`

**Interfaces:**
- Consumes: `projects` from `src/data/projects.ts`, `useLanguage()` → `{ t }`
- Produces: `<Projects />` with filter bar, highlight card, grid cards, and `<ProjectModal />` overlay

- [ ] **Step 1: Create ProjectModal component**

Create `src/components/ProjectModal.tsx`:
```tsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-bg-surface border border-border rounded-2xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-accent font-medium">{project.year}</span>
                  <span className="text-text-secondary text-sm">•</span>
                  <span className="text-sm text-text-secondary capitalize">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.overview")}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.detail.overview}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.methodology")}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.detail.methodology}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.tools")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.detail.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium text-text-primary bg-bg-primary border border-border rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.results")}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.detail.results}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Create Projects component**

Create `src/components/Projects.tsx`:
```tsx
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { projects, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";

type FilterCategory = "all" | "classification" | "eda" | "deployment" | "normalization";

const filterKeys: FilterCategory[] = ["all", "classification", "eda", "deployment", "normalization"];

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const latestProject = filtered.find((p) => p.isLatest);
  const otherProjects = filtered.filter((p) => !p.isLatest);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-8"
        >
          {t("projects.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeFilter === key
                  ? "bg-accent text-white"
                  : "bg-bg-surface text-text-secondary border border-border hover:text-text-primary"
              }`}
            >
              {t(`projects.filter.${key}`)}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {latestProject && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedProject(latestProject)}
                className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-accent/10 to-bg-surface border border-accent/20 rounded-2xl cursor-pointer transition-shadow hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                  {t("projects.latest")}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                  {latestProject.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-accent">{latestProject.year}</span>
                  <span className="text-text-secondary text-sm">•</span>
                  <span className="text-sm text-text-secondary capitalize">{latestProject.category}</span>
                </div>
                <p className="text-text-secondary">{latestProject.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {latestProject.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                  className="p-5 bg-bg-surface border border-border rounded-xl cursor-pointer transition-shadow hover:shadow-lg hover:border-accent/30"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-accent">{project.year}</span>
                    <span className="text-text-secondary text-sm">•</span>
                    <span className="text-sm text-text-secondary capitalize">{project.category}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs text-text-secondary bg-bg-primary border border-border rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
}
```

- [ ] **Step 3: Add Projects to App.tsx**

Replace the projects placeholder section in `src/App.tsx` with `<Projects />`.

- [ ] **Step 4: Verify in browser**

Expected: Filter bar, highlight latest project card with purple gradient, grid of other project cards. Click any card → modal with project details. Modal closes on backdrop click, X button, or Escape. Body scroll locked while modal is open.

- [ ] **Step 5: Commit**

```bash
git add src/components/Projects.tsx src/components/ProjectModal.tsx src/App.tsx
git commit -m "feat: add Projects section with filter, highlight card, and detail modal"
```

---

### Task 10: Experience Section

**Files:**
- Create: `src/components/Experience.tsx`

**Interfaces:**
- Consumes: `experiences` from `src/data/experiences.ts`, `useLanguage()` → `{ t }`
- Produces: `<Experience />` component — vertical timeline with purple line and dots

- [ ] **Step 1: Create Experience component**

Create `src/components/Experience.tsx`:
```tsx
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { experiences } from "../data/experiences";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-12"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.institution}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 bg-accent rounded-full ring-4 ring-bg-primary" />

                <div className="bg-bg-surface border border-border rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-text-primary">{exp.title}</h3>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="text-sm text-accent font-medium">{exp.institution}</span>
                    <span className="text-text-secondary text-sm">•</span>
                    <span className="text-sm text-text-secondary">{exp.role}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Experience to App.tsx**

Replace the experience placeholder section in `src/App.tsx` with `<Experience />`.

- [ ] **Step 3: Verify in browser**

Expected: Vertical timeline with purple line on left, purple dots at each node, cards with experience details.

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.tsx src/App.tsx
git commit -m "feat: add Experience section with vertical timeline"
```

---

### Task 11: Certificates Section

**Files:**
- Create: `src/components/Certificates.tsx`

**Interfaces:**
- Consumes: `certificates` from `src/data/certificates.ts`, `useLanguage()` → `{ t }`
- Produces: `<Certificates />` component — grid of certificate cards

- [ ] **Step 1: Create Certificates component**

Create `src/components/Certificates.tsx`:
```tsx
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { certificates } from "../data/certificates";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-12"
        >
          {t("certificates.title")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certificates.map((cert) => (
            <motion.div
              key={`${cert.name}-${cert.issuer}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-bg-surface border border-border rounded-xl transition-colors hover:border-accent/40"
            >
              <div className="flex items-start gap-3">
                <Award size={20} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{cert.name}</h3>
                  <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
                  <p className="text-xs text-accent mt-1">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Certificates to App.tsx**

Replace the certificates placeholder section in `src/App.tsx` with `<Certificates />`.

- [ ] **Step 3: Verify in browser**

Expected: Grid of certificate cards with award icon, name, issuer, year. Hover border turns purple.

- [ ] **Step 4: Commit**

```bash
git add src/components/Certificates.tsx src/App.tsx
git commit -m "feat: add Certificates section with grid cards"
```

---

### Task 12: Footer + Final App Assembly

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx` (final assembly)

**Interfaces:**
- Consumes: `useLanguage()` → `{ t }`
- Produces: `<Footer />` component, complete `App.tsx` with all sections assembled

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:
```tsx
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">{t("footer.copyright")}</p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/izzanpm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:izzan.pm@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Finalize App.tsx with all components**

Replace `src/App.tsx`:
```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Create placeholder SVG**

Create `public/placeholder.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320" fill="none">
  <rect width="320" height="320" rx="16" fill="#141416"/>
  <circle cx="160" cy="130" r="50" fill="#27272A"/>
  <ellipse cx="160" cy="260" rx="80" ry="60" fill="#27272A"/>
</svg>
```

- [ ] **Step 4: Verify complete site in browser**

```bash
npm run dev
```

Expected: Complete portfolio with all sections, smooth scroll navigation, scroll spy, language toggle, project filter, project modals, animations, responsive layout.

- [ ] **Step 5: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 6: Build for production**

```bash
npm run build
```

Expected: Successful build in `dist/` directory.

- [ ] **Step 7: Preview production build**

```bash
npm run preview
```

Expected: Production build runs correctly, all features work.

- [ ] **Step 8: Commit**

```bash
git add .
git commit -m "feat: complete portfolio website with all sections and features"
```
