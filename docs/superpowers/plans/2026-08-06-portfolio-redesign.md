# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic dark-purple portfolio with the approved Analytical Observatory experience, led by two evidence-ready case studies and accurate CV, Contact, localization, responsive, and accessibility behavior.

**Architecture:** Keep the single-page React application and typed data modules, but pre-render its English initial state during `npm run build`. Vite emits a temporary SSR entry using ReactDOM's `renderToString`; a Node standard-library post-build script injects that markup into `dist/index.html`, removes the temporary SSR output, and the browser hydrates it with `hydrateRoot` (falling back to `createRoot` for the empty development shell). The native collapsed mobile `<details>/<summary>` fallback and its Work, Profile, Contact, and CV links remain available before and after hydration; hydration only enables locale controls. Use translation keys for visible interface copy and render missing repositories, screenshots, metrics, and limitations as honest inactive evidence states.

**Tech Stack:** Vite 8, React 19 and ReactDOM SSR/hydration, TypeScript 6, Tailwind CSS 4, Lucide React, Node standard-library build scripting, native CSS animation, existing IntersectionObserver scroll spy.

## Global Constraints

- Follow `PRODUCT.md` and `docs/superpowers/specs/2026-08-06-portfolio-redesign-design.md`.
- Visual direction: Analytical Observatory; composition: Proof-First Split; seed key: `49a82433`.
- Palette: `#070A0F`, `#0D1217`, `#F1F4EA`, `#8D988B`, `#2B332C`, `#D9FF4F`, and caution-only `#FFB000`.
- Typography: Archivo for display/body and Azeret Mono for labels/metadata.
- Major headings stand first; technical labels sit beside or below them, never as eyebrows above them. Display tracking never tightens beyond `-0.04em`.
- Do not use purple, gradients, glow effects, glass panels, fake metrics, fake charts, invented repositories, or unsupported availability claims.
- Smartphone Price Prediction and Breast Cancer Prediction are the only featured case studies.
- Use the existing Google Drive CV URL everywhere and label it `View CV` / `Lihat CV`.
- Missing user assets render truthful pending states and never broken images or active empty links.
- WCAG AA text contrast, semantic controls, visible focus, reduced motion, and 44px mobile targets are required.
- Add no dependency. Remove `framer-motion` if the final source has no imports.
- No test framework is installed; use TypeScript production builds, lint, source assertions, the detector, and explicit browser acceptance checks rather than adding one for presentational code.
- Do not create a git commit unless the user explicitly requests one.

## File Map

- Modify `index.html`: font loading, development root shell, and emitted direction contract.
- Modify `src/main.tsx`: hydrate pre-rendered production markup while retaining the empty-root development fallback.
- Create `src/entry-server.tsx`: render the English initial application state with `renderToString`.
- Create `scripts/prerender.mjs`: inject static markup into `dist/index.html` and remove temporary SSR output.
- Modify `package.json`: run client build, temporary SSR build, and post-build injection from `npm run build`.
- Modify `src/index.css`: tokens, global material, layout utilities, focus, scan motion, and responsive/reduced-motion rules.
- Modify `src/hooks/useLanguage.tsx`: exported locale type and document-language synchronization.
- Modify `src/i18n/en.ts`: complete English navigation, case-study, profile, archive, pending-state, and contact copy.
- Modify `src/i18n/id.ts`: matching Indonesian copy.
- Modify `src/data/projects.ts`: evidence-ready project facts and featured-project type guard.
- Create `src/data/links.ts`: canonical CV and contact destinations shared by navigation and Contact.
- Modify `src/components/Navbar.tsx`: semantic compact navigation, localized controls, canonical CV, and an SSR-safe mobile link fallback enhanced after hydration.
- Modify `src/components/Hero.tsx`: proof-first split opening.
- Create `src/components/EvidencePanel.tsx`: verified model comparison and optional evidence rendering.
- Create `src/components/CaseStudy.tsx`: reusable inline featured project case file.
- Create `src/components/ProjectArchive.tsx`: compact remaining-project index.
- Modify `src/components/Projects.tsx`: compose featured work and archive without filters or modal state.
- Create `src/components/Profile.tsx`: merged background, project-derived capabilities, experience, and selected credentials.
- Create `src/components/Contact.tsx`: closing recruiter conversion.
- Modify `src/components/Footer.tsx`: minimal close.
- Modify `src/App.tsx`: final page order and section boundaries.
- Delete `src/components/About.tsx`, `src/components/Skills.tsx`, `src/components/Experience.tsx`, `src/components/Certificates.tsx`, `src/components/ProjectModal.tsx`, and `src/data/skills.ts` after consumers are removed.
- Modify `package.json` and `package-lock.json` only if `framer-motion` becomes unused.

---

### Task 1: Localized Evidence-Ready Content Contract

**Files:**
- Modify: `src/data/projects.ts`
- Create: `src/data/links.ts`
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/id.ts`
- Modify: `src/hooks/useLanguage.tsx`

**Interfaces:**
- Produces: `Project`, `FeaturedProject`, `projects`, `featuredProjects`, `archivedProjects`, canonical link constants, and exported `Locale`.
- Produces: translation keys consumed by every later component.

- [ ] **Step 1: Extend the current project shape with factual evidence fields and typed featured filtering**

Keep the current `summary`, `detail`, and `isLatest` fields during this task so the incumbent project components still compile. Add the following evidence contract and fields:

```ts
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
  summary: string;
  detail: ProjectDetail;
  isLatest?: boolean;
  featured?: 1 | 2;
  evidence?: ProjectEvidence;
}

export type FeaturedProject = Project & {
  featured: 1 | 2;
  evidence: ProjectEvidence;
};

// Add to the existing smartphone-price-prediction object:
featured: 1,
evidence: {
  models: ["KNN", "Decision Tree", "Naive Bayes"],
  selectedModel: "Decision Tree",
},

// Add to the existing breast-cancer-prediction object:
featured: 2,
evidence: {
  models: ["KNN", "Random Forest"],
  selectedModel: "Random Forest",
},

function isFeaturedProject(project: Project): project is FeaturedProject {
  return project.featured !== undefined && project.evidence !== undefined;
}

export const featuredProjects = projects.filter(isFeaturedProject).sort((a, b) => a.featured - b.featured);
export const archivedProjects = projects.filter((project) => !project.featured);
```

- [ ] **Step 2: Centralize confirmed external destinations**

```ts
// src/data/links.ts
export const cvUrl = "https://drive.google.com/file/d/1eBxJuRAERFQyJVEIj5Tl8JrdLtXZBgj2/view?usp=sharing";
export const emailUrl = "mailto:izzan.pm@gmail.com";
export const linkedinUrl = "https://linkedin.com/in/izzanpm";
```

- [ ] **Step 3: Add the complete approved information architecture to both translation dictionaries**

Keep `Record<string, string>` and retain existing keys until Task 5 removes their consumers. Add or update the following exact values in the two dictionaries:

```ts
// Required English values
"nav.work": "Work",
"nav.profile": "Profile",
"nav.contact": "Contact",
"nav.cv": "View CV",
"nav.primary": "Primary navigation",
"nav.localeSwitch": "Use Indonesian",
"nav.menu": "Open navigation",
"nav.close": "Close navigation",
"hero.label": "Data analyst / data scientist",
"hero.title": "Turning messy signals into defensible decisions.",
"hero.body": "Computer Science student at BINUS University focused on data analysis, machine learning, and clear technical reasoning.",
"hero.contact": "Contact me",
"work.label": "Selected analytical work",
"work.title": "Two case files, shown from question to result.",
"work.archive": "Project archive",
"case.question": "Question",
"case.label": "Case",
"case.role": "Role",
"case.method": "Method",
"case.comparison": "Model comparison",
"case.result": "Verified result",
"case.limitation": "Limitation / learning",
"case.source": "Source",
"case.models": "Models tested",
"case.tools": "Tools used",
"case.selected": "Selected model",
"case.metricPending": "Exact metric pending",
"case.imagePending": "Project screenshot pending",
"case.sourcePending": "Repository link pending",
"case.limitationPending": "Limitation note pending",
"category.classification": "Classification",
"category.eda": "Exploratory data analysis",
"category.deployment": "Deployment",
"category.normalization": "Normalization",
"projects.smartphone-price-prediction.summary": "Classified smartphone price ranges from hardware specifications by comparing KNN, Decision Tree, and Naive Bayes models.",
"projects.smartphone-price-prediction.question": "Which classifier best predicts a smartphone's price range from its hardware specifications?",
"projects.smartphone-price-prediction.role": "Data preparation, feature selection, model training, cross-validation, and comparison.",
"projects.smartphone-price-prediction.method": "Prepared the dataset, selected relevant features, trained three classifiers, and compared their validation performance.",
"projects.smartphone-price-prediction.result": "Decision Tree achieved the highest accuracy among the compared classifiers.",
"projects.breast-cancer-prediction.summary": "Compared KNN and Random Forest for malignant-versus-benign breast cancer classification.",
"projects.breast-cancer-prediction.question": "Which model better supports malignant-versus-benign classification?",
"projects.breast-cancer-prediction.role": "Data cleaning, exploratory analysis, feature engineering, model training, and evaluation.",
"projects.breast-cancer-prediction.method": "Compared KNN and Random Forest using a confusion matrix, accuracy, and malignant-class recall.",
"projects.breast-cancer-prediction.result": "Random Forest outperformed KNN in accuracy and recall for malignant classification.",
"projects.covid19-eda.summary": "Explored COVID-19 data through preprocessing, statistical summaries, charts, and heatmaps.",
"projects.aws-deployment.summary": "Deployed a web application with AWS EC2 and an AWS RDS managed database.",
"projects.revenue-prediction.summary": "Compared Random Forest, KNN, and SVM for revenue-category prediction.",
"projects.lung-cancer-prediction.summary": "Used logistic regression and ROC analysis to model lung-cancer risk.",
"projects.digging-site-normalization.summary": "Normalized a digging-site dataset from UNF through Third Normal Form.",
"profile.label": "Profile / background",
"profile.title": "Technical range, grounded in practice.",
"profile.bio": "Computer Science student at BINUS University focused on data analysis and machine learning, with project experience across classification, exploratory analysis, cloud deployment, and database design.",
"profile.education": "Education",
"profile.experience": "Experience",
"profile.capabilities": "Capabilities used in projects",
"profile.credentials": "Selected credentials",
"profile.role.volunteer": "Volunteer",
"profile.role.participant": "Participant",
"profile.role.head": "Head of Division",
"profile.university": "Bina Nusantara University",
"profile.degree": "Undergraduate, Computer Science",
"profile.gpa": "GPA 3.21 / 4.00",
"contact.label": "Contact / next step",
"contact.title": "Need a closer look at the work?",
"contact.body": "View the CV or contact me to discuss a data role, the methods behind these projects, or the evidence still being documented.",
"contact.email": "Email Mohammad",
"contact.linkedin": "Open LinkedIn",
"contact.cv": "View CV",
"contact.location": "South Tangerang, Banten",
"footer.copyright": "© 2026 Mohammad Izzan Putra Maulana",
"footer.note": "Built as an evidence-first portfolio.",
```

```ts
// Required Indonesian values
"nav.work": "Pekerjaan",
"nav.profile": "Profil",
"nav.contact": "Kontak",
"nav.cv": "Lihat CV",
"nav.primary": "Navigasi utama",
"nav.localeSwitch": "Gunakan bahasa Inggris",
"nav.menu": "Buka navigasi",
"nav.close": "Tutup navigasi",
"hero.label": "Analis data / data scientist",
"hero.title": "Mengubah sinyal data yang berantakan menjadi keputusan yang dapat dipertanggungjawabkan.",
"hero.body": "Mahasiswa Computer Science di BINUS University yang berfokus pada analisis data, machine learning, dan penalaran teknis yang jelas.",
"hero.contact": "Hubungi saya",
"work.label": "Karya analitis terpilih",
"work.title": "Dua studi kasus, ditampilkan dari pertanyaan hingga hasil.",
"work.archive": "Arsip proyek",
"case.question": "Pertanyaan",
"case.label": "Studi kasus",
"case.role": "Peran",
"case.method": "Metode",
"case.comparison": "Perbandingan model",
"case.result": "Hasil terverifikasi",
"case.limitation": "Keterbatasan / pembelajaran",
"case.source": "Sumber",
"case.models": "Model yang diuji",
"case.tools": "Tools yang digunakan",
"case.selected": "Model terpilih",
"case.metricPending": "Metrik pasti belum tersedia",
"case.imagePending": "Tangkapan layar proyek belum tersedia",
"case.sourcePending": "Tautan repositori belum tersedia",
"case.limitationPending": "Catatan keterbatasan belum tersedia",
"category.classification": "Klasifikasi",
"category.eda": "Analisis data eksploratif",
"category.deployment": "Penerapan",
"category.normalization": "Normalisasi",
"projects.smartphone-price-prediction.summary": "Mengklasifikasikan rentang harga smartphone dari spesifikasi perangkat keras dengan membandingkan model KNN, Decision Tree, dan Naive Bayes.",
"projects.smartphone-price-prediction.question": "Classifier mana yang paling baik memprediksi rentang harga smartphone dari spesifikasi perangkat kerasnya?",
"projects.smartphone-price-prediction.role": "Persiapan data, pemilihan fitur, pelatihan model, cross-validation, dan perbandingan.",
"projects.smartphone-price-prediction.method": "Menyiapkan dataset, memilih fitur yang relevan, melatih tiga classifier, dan membandingkan performa validasinya.",
"projects.smartphone-price-prediction.result": "Decision Tree mencapai akurasi tertinggi di antara classifier yang dibandingkan.",
"projects.breast-cancer-prediction.summary": "Membandingkan KNN dan Random Forest untuk klasifikasi kanker payudara ganas dan jinak.",
"projects.breast-cancer-prediction.question": "Model mana yang lebih baik mendukung klasifikasi ganas dan jinak?",
"projects.breast-cancer-prediction.role": "Pembersihan data, analisis eksploratif, rekayasa fitur, pelatihan model, dan evaluasi.",
"projects.breast-cancer-prediction.method": "Membandingkan KNN dan Random Forest menggunakan confusion matrix, akurasi, dan recall kelas ganas.",
"projects.breast-cancer-prediction.result": "Random Forest mengungguli KNN dalam akurasi dan recall untuk klasifikasi ganas.",
"projects.covid19-eda.summary": "Mengeksplorasi data COVID-19 melalui preprocessing, ringkasan statistik, grafik, dan heatmap.",
"projects.aws-deployment.summary": "Menerapkan aplikasi web dengan AWS EC2 dan database terkelola AWS RDS.",
"projects.revenue-prediction.summary": "Membandingkan Random Forest, KNN, dan SVM untuk memprediksi kategori pendapatan.",
"projects.lung-cancer-prediction.summary": "Menggunakan logistic regression dan analisis ROC untuk memodelkan risiko kanker paru-paru.",
"projects.digging-site-normalization.summary": "Menormalisasi dataset lokasi penggalian dari UNF hingga Third Normal Form.",
"profile.label": "Profil / latar belakang",
"profile.title": "Cakupan teknis yang berpijak pada praktik.",
"profile.bio": "Mahasiswa Computer Science di BINUS University yang berfokus pada analisis data dan machine learning, dengan pengalaman proyek dalam klasifikasi, analisis eksploratif, cloud deployment, dan desain database.",
"profile.education": "Pendidikan",
"profile.experience": "Pengalaman",
"profile.capabilities": "Kemampuan yang digunakan dalam proyek",
"profile.credentials": "Kredensial terpilih",
"profile.role.volunteer": "Relawan",
"profile.role.participant": "Peserta",
"profile.role.head": "Kepala Divisi",
"profile.university": "Bina Nusantara University",
"profile.degree": "Sarjana, Computer Science",
"profile.gpa": "IPK 3,21 / 4,00",
"contact.label": "Kontak / langkah berikutnya",
"contact.title": "Perlu melihat pekerjaan ini lebih dekat?",
"contact.body": "Lihat CV atau hubungi saya untuk membahas peran di bidang data, metode di balik proyek-proyek ini, atau bukti yang masih didokumentasikan.",
"contact.email": "Email Mohammad",
"contact.linkedin": "Buka LinkedIn",
"contact.cv": "Lihat CV",
"contact.location": "Tangerang Selatan, Banten",
"footer.copyright": "© 2026 Mohammad Izzan Putra Maulana",
"footer.note": "Dibangun sebagai portofolio yang mengutamakan bukti.",
```

- [ ] **Step 4: Synchronize document language in the provider**

```tsx
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { en } from "../i18n/en";
import { id } from "../i18n/id";

export type Locale = "en" | "id";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = { en, id };
const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback((key: string) => translations[locale][key] ?? key, [locale]);

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
```

- [ ] **Step 5: Run the static contract check**

Run: `npm run build`

Expected: exit code 0; no missing translation-import or project-type errors.

---

### Task 2: Visual Foundation And Auditable Direction Contract

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `package.json`
- Modify: `src/main.tsx`
- Create: `src/entry-server.tsx`
- Create: `scripts/prerender.mjs`

**Interfaces:**
- Produces: global Tailwind tokens and CSS classes consumed by every component.
- Produces: emitted seed contract and readable English `#root` markup verifiable in `dist/index.html`.
- Produces: a hydration entry with an empty-root development fallback and no inline boot script.

- [ ] **Step 1: Replace the font request and add the direction contract as the first body child**

Load `.opencode/skills/impeccable/reference/craft-floor.md` immediately before this edit. Use `<html lang="en">` without the old `scroll-smooth` class, load Archivo and Azeret Mono, remove the old body token classes, and insert this comment before `#root`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&amp;family=Azeret+Mono:wght@400;600&amp;display=swap" rel="stylesheet" />
</head>
<body>
  <!--
  THESIS: A calibrated analytical instrument that leads with evidence, refusing the centered-hero and equal-card portfolio default.
  OWN-WORLD: Matte near-black, bone text, chartreuse signals, pixel-crisp rules, technical labels, and wide evidence fields.
  STORY: Identify the candidate, inspect two case files, scan the background, then view the CV or make contact.
  FIRST VIEWPORT: Slim navigation above a split identity panel and Smartphone Price Prediction evidence field.
  FORM: Analytical Observatory / Proof-First Split / seed 49a82433.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
  -->
  <div id="root"></div>
```

- [ ] **Step 2: Replace the Tailwind theme and global material**

```css
@import "tailwindcss";

@theme {
  --color-field: #070a0f;
  --color-panel: #0d1217;
  --color-ink: #f1f4ea;
  --color-muted: #8d988b;
  --color-line: #2b332c;
  --color-signal: #d9ff4f;
  --color-caution: #ffb000;
  --font-sans: "Archivo", Arial, sans-serif;
  --font-mono: "Azeret Mono", Consolas, monospace;
}

:root { color-scheme: dark; }
html { scroll-behavior: smooth; background: #070a0f; }
body { margin: 0; min-width: 320px; background: #070a0f; color: #f1f4ea; font-family: var(--font-sans); }
button, a { -webkit-tap-highlight-color: transparent; }
:focus-visible { outline: 2px solid #d9ff4f; outline-offset: 4px; }
::selection { background: #d9ff4f; color: #070a0f; }

.instrument-field { position: relative; border: 1px solid #2b332c; background: #0d1217; }
.signal-scan::before { content: ""; position: absolute; z-index: 20; top: 0; right: 0; left: 0; height: 1px; pointer-events: none; background: rgb(217 255 79 / 55%); transform: translateY(-1px); animation: signal-scan 1.2s ease-out 0.3s 1 forwards; }
@keyframes signal-scan { to { opacity: 0; transform: translateY(18rem); } }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
```

- [ ] **Step 3: Pre-render the English shell and hydrate it without breaking development**

Use the installed ReactDOM/Vite capabilities and Node standard library only:

```json
"build": "tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir .prerender && node scripts/prerender.mjs"
```

```tsx
// src/entry-server.tsx
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { LanguageProvider } from "./hooks/useLanguage";

export function render() {
  return renderToString(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>
  );
}
```

```tsx
// src/main.tsx
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./hooks/useLanguage";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
```

```js
// scripts/prerender.mjs
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const outputDir = resolve(".prerender");

try {
  const { render } = await import(pathToFileURL(resolve(outputDir, "entry-server.js")));
  const indexPath = resolve("dist/index.html");
  const html = await readFile(indexPath, "utf8");
  const marker = '<div id="root"></div>';

  if (!html.includes(marker)) throw new Error("Missing empty #root marker in dist/index.html");

  await writeFile(indexPath, html.replace(marker, `<div id="root">${render()}</div>`));
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
```

- [ ] **Step 4: Verify the direction contract survives production**

Run: `npm run build`

Expected: exit code 0.

Run: `rg "49a82433" dist/index.html`

Expected: one match inside the emitted direction comment.

Run: `node scripts/review-checks.mjs`

Expected: exit code 0; matching locale keys, seven project seeds, one direction seed, a populated root, and an SSR mobile fallback containing Work, Profile, Contact, and CV links but no menu or locale button.

---

### Task 3: Proof-First Navigation And Opening Viewport

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Create: `src/components/EvidencePanel.tsx`

**Interfaces:**
- Consumes: `featuredProjects`, `FeaturedProject`, `useLanguage`, and `useScrollSpy`.
- Produces: `EvidencePanel({ project, compact? })`, used again by Task 4.

- [ ] **Step 1: Implement a truthful reusable evidence panel**

```tsx
import type { FeaturedProject } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

export default function EvidencePanel({ project, compact = false }: { project: FeaturedProject; compact?: boolean }) {
  const { t } = useLanguage();
  const evidence = project.evidence;

  return (
    <div className={`instrument-field overflow-hidden ${compact ? "signal-scan p-5" : "p-6 sm:p-8"}`}>
      <div className="relative z-10 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
        <span>{String(project.featured).padStart(2, "0")} / {t(`category.${project.category}`)}</span>
        <span>{project.year}</span>
      </div>
      <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(9rem,16rem)]">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-signal">{t("case.models")}</p>
          <div className="mt-3 border-t border-line">
            {evidence.models.map((model) => (
              <div key={model} className="flex min-h-11 items-center justify-between border-b border-line font-mono text-sm">
                <span>{model}</span>
                <span className={model === evidence.selectedModel ? "text-signal" : "text-muted"}>
                  {model === evidence.selectedModel ? t("case.selected") : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-0 border-l border-line pl-5 font-mono text-xs text-muted">
          {evidence.metric ? (
            <p><span className="block text-2xl text-ink">{evidence.metric.value}</span>{t(evidence.metric.labelKey)}</p>
          ) : (
            <p>{t("case.metricPending")}</p>
          )}
          {evidence.image ? (
            <img src={evidence.image.src} alt={t(evidence.image.altKey)} loading={compact ? "eager" : "lazy"} className="mt-4 aspect-video w-full max-w-64 border border-line object-contain" />
          ) : (
            <p className="mt-4 text-caution">{t("case.imagePending")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Rewrite the navbar with semantic anchors and one canonical CV URL**

```tsx
import { useEffect, useState, type MouseEvent } from "react";
import { Menu } from "lucide-react";
import { cvUrl } from "../data/links";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navItemIds = ["work", "profile", "contact"];
const observedIds = ["top", ...navItemIds];

function closeMobileNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export default function Navbar() {
  const [hydrated, setHydrated] = useState(false);
  const activeId = useScrollSpy(observedIds);
  const { locale, setLocale, t } = useLanguage();
  const navItems = navItemIds.map((id) => ({ id, label: t(`nav.${id}`) }));

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-field" aria-label={t("nav.primary")}>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="inline-flex min-h-11 items-center font-mono text-sm font-semibold tracking-[0.08em] text-signal">IZN://PORTFOLIO</a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined} className={activeId === item.id ? "inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.12em] text-signal" : "inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-ink"}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {hydrated && (
            <button type="button" onClick={() => setLocale(locale === "en" ? "id" : "en")} className="min-h-11 border border-line px-3 font-mono text-xs text-muted hover:border-signal hover:text-ink" aria-label={t("nav.localeSwitch")}>
              {locale === "en" ? "ID" : "EN"}
            </button>
          )}
          <a href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center bg-signal px-4 text-sm font-semibold text-field">{t("nav.cv")}</a>
        </div>
        <details className="md:hidden">
          <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
            <Menu size={22} aria-hidden="true" />
            <span className="sr-only">{t("nav.menu")}</span>
          </summary>
          <div id="mobile-navigation" className="fixed inset-x-0 top-[4.5rem] border-t border-line bg-field px-5 py-3">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMobileNavigation} aria-current={activeId === item.id ? "location" : undefined} className={activeId === item.id ? "flex min-h-11 items-center border-b border-line font-mono text-xs uppercase tracking-[0.12em] text-signal" : "flex min-h-11 items-center border-b border-line font-mono text-xs uppercase tracking-[0.12em] text-muted"}>
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              {hydrated && (
                <button type="button" onClick={() => setLocale(locale === "en" ? "id" : "en")} className="min-h-11 min-w-11 border border-line px-3 font-mono text-xs" aria-label={t("nav.localeSwitch")}>{locale === "en" ? "ID" : "EN"}</button>
              )}
              <a href={cvUrl} target="_blank" rel="noreferrer" onClick={closeMobileNavigation} className="inline-flex min-h-11 flex-1 items-center justify-center bg-signal px-4 text-sm font-semibold text-field">{t("nav.cv")}</a>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
```

- [ ] **Step 3: Rewrite the hero as the approved split**

```tsx
import { Mail } from "lucide-react";
import { cvUrl } from "../data/links";
import { featuredProjects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import EvidencePanel from "./EvidencePanel";

export default function Hero() {
  const { t } = useLanguage();
  const project = featuredProjects[0];

  return (
    <section id="top" className="mx-auto grid min-h-[min(calc(100svh-4.5rem),56rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
      <div>
        <h1 className="max-w-3xl break-words text-5xl font-extrabold leading-[0.94] tracking-[-0.04em] sm:text-6xl xl:text-7xl">{t("hero.title")}</h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-signal"><span className="text-ink">Mohammad Izzan Putra Maulana</span> / {t("hero.label")}</p>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">{t("hero.body")}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center bg-signal px-5 font-semibold text-field">{t("nav.cv")}</a>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 border border-line px-5 text-ink hover:border-signal"><Mail size={18} />{t("hero.contact")}</a>
        </div>
      </div>
      <div>
        <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">01 / {project.title}</p>
        <EvidencePanel project={project} compact />
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify navigation and opening compile**

Run: `npm run build`

Expected: exit code 0; no missing keys, imports, or project type errors.

---

### Task 4: Inline Case Studies And Compact Archive

**Files:**
- Create: `src/components/CaseStudy.tsx`
- Create: `src/components/ProjectArchive.tsx`
- Modify: `src/components/Projects.tsx`
- Delete: `src/components/ProjectModal.tsx`

**Interfaces:**
- Consumes: `FeaturedProject`, `featuredProjects`, `archivedProjects`, `EvidencePanel`, and translation keys.
- Produces: `<Projects />` with `id="work"` and no local interaction state.

- [ ] **Step 1: Implement the reusable inline case file**

```tsx
import type { FeaturedProject } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import EvidencePanel from "./EvidencePanel";

export default function CaseStudy({ project, reverse }: { project: FeaturedProject; reverse: boolean }) {
  const { t } = useLanguage();
  const setupFields = [
    ["case.question", `projects.${project.id}.question`],
    ["case.role", `projects.${project.id}.role`],
    ["case.method", `projects.${project.id}.method`],
  ];
  const detailColumn = reverse ? "lg:col-start-1" : "lg:col-start-2";
  const evidenceColumn = reverse ? "lg:col-start-2" : "lg:col-start-1";

  return (
    <article id={project.id} className="scroll-mt-20 border-t border-line py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h3 className="max-w-3xl text-3xl font-bold tracking-[-0.035em] sm:text-5xl">{project.title}</h3>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-signal">{t("case.label")} {String(project.featured).padStart(2, "0")} / {project.year}</p>
        </div>
        <p className="max-w-lg text-base leading-7 text-muted">{t(`projects.${project.id}.summary`)}</p>
      </div>
      <div className="grid gap-x-10 lg:grid-cols-2 lg:items-start">
        <dl className={`border-t border-line ${detailColumn} lg:row-start-1`}>
          {setupFields.map(([labelKey, valueKey]) => (
            <div key={labelKey} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t(labelKey)}</dt>
              <dd className="m-0 leading-7 text-ink">{t(valueKey)}</dd>
            </div>
          ))}
        </dl>
        <div className={`mt-10 lg:row-span-3 lg:row-start-1 lg:mt-0 ${evidenceColumn}`}>
          <EvidencePanel project={project} />
        </div>
        <dl className={`mt-10 border-t border-line lg:row-start-2 lg:mt-0 lg:border-t-0 ${detailColumn}`}>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("case.result")}</dt>
            <dd className="m-0 leading-7 text-ink">{t(`projects.${project.id}.result`)}</dd>
          </div>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("case.limitation")}</dt>
            <dd className={project.evidence.limitationKey ? "m-0" : "m-0 text-caution"}>{project.evidence.limitationKey ? t(project.evidence.limitationKey) : t("case.limitationPending")}</dd>
          </div>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("case.source")}</dt>
            <dd className="m-0">
              {project.evidence.repository ? (
                <a href={project.evidence.repository} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-signal underline-offset-4 hover:underline">{t("case.source")}</a>
              ) : (
                <span className="text-caution">{t("case.sourcePending")}</span>
              )}
            </dd>
          </div>
        </dl>
        <ul className={`mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted lg:row-start-3 ${detailColumn}`} aria-label={t("case.tools")}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Implement the archive as non-interactive rows**

```tsx
import { archivedProjects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

export default function ProjectArchive() {
  const { t } = useLanguage();

  return (
    <div className="border-t border-line">
      {archivedProjects.map((project, index) => (
        <article key={project.id} className="grid gap-3 border-b border-line py-5 md:grid-cols-[3rem_1fr_5rem_7rem_1.2fr] md:items-center">
          <span className="font-mono text-xs text-muted">{String(index + 3).padStart(2, "0")}</span>
          <h4 className="font-semibold text-ink">{project.title}</h4>
          <span className="font-mono text-xs uppercase text-signal">{project.year}</span>
          <span className="font-mono text-xs uppercase text-muted">{t(`category.${project.category}`)}</span>
          <p className="text-sm leading-6 text-muted">{t(`projects.${project.id}.summary`)}</p>
        </article>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Rewrite `Projects` as a stateless composition**

```tsx
import { featuredProjects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import CaseStudy from "./CaseStudy";
import ProjectArchive from "./ProjectArchive";

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="work" className="scroll-mt-20 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{t("work.title")}</h2>
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("work.label")}</p>
        <div className="mt-16">
          {featuredProjects.map((project, index) => <CaseStudy key={project.id} project={project} reverse={index % 2 === 1} />)}
        </div>
        <div className="mt-20">
          <h3 className="mb-7 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("work.archive")}</h3>
          <ProjectArchive />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Remove the legacy project-detail fields now that no component consumes them**

Delete `ProjectDetail`, `summary`, `detail`, and `isLatest` from `src/data/projects.ts`. Delete those properties from all seven project objects; the approved bilingual translation keys now own visible summaries and featured-case explanations.

Run: `rg "ProjectDetail|isLatest|summary:|detail:" src/data/projects.ts src/components`

Expected: no matches.

- [ ] **Step 5: Delete the modal and prove no consumers remain**

Delete `src/components/ProjectModal.tsx`.

Run: `rg "ProjectModal|activeFilter|setSelectedProject" src`

Expected: no matches.

Run: `npm run build`

Expected: exit code 0.

Run: `node scripts/review-checks.mjs`

Expected: exit code 0; emitted root and progressive-enhancement assertions pass.

---

### Task 5: Consolidated Profile, Contact, And Final Page Structure

**Files:**
- Create: `src/components/Profile.tsx`
- Create: `src/components/Contact.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/App.tsx`
- Delete: `src/components/About.tsx`
- Delete: `src/components/Skills.tsx`
- Delete: `src/components/Experience.tsx`
- Delete: `src/components/Certificates.tsx`
- Delete: `src/data/skills.ts`

**Interfaces:**
- Consumes: `projects`, `experiences`, `certificates`, and translated profile/contact copy.
- Produces: final section IDs `top`, `work`, `profile`, and `contact`.

- [ ] **Step 1: Build the consolidated profile from existing factual data**

Derive project-used capabilities without another data source:

```tsx
import { certificates } from "../data/certificates";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

const capabilities = Array.from(new Set(projects.flatMap((project) => project.tags))).slice(0, 12);
const selectedCertificates = certificates.slice(0, 4);

const roleKeys: Record<string, string> = {
  Volunteer: "profile.role.volunteer",
  Participant: "profile.role.participant",
  "Head of Division": "profile.role.head",
};

export default function Profile() {
  const { t } = useLanguage();
  return (
    <section id="profile" className="scroll-mt-20 border-t border-line px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{t("profile.title")}</h2>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.label")}</p>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">{t("profile.bio")}</p>
            <div className="mt-8 border-t border-line py-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">{t("profile.education")}</p>
              <p className="mt-3 font-semibold">{t("profile.university")}</p>
              <p className="mt-1 text-sm text-muted">{t("profile.degree")} · {t("profile.gpa")}</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.capabilities")}</h3>
          <ol className="mt-6 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <li key={capability} className="flex min-h-14 items-center gap-4 border-b border-line sm:border-r sm:px-4">
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <span>{capability}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.experience")}</h3>
            <div className="mt-6 border-t border-line">
              {experiences.map((experience) => (
                <article key={`${experience.title}-${experience.institution}`} className="border-b border-line py-5">
                  <h4 className="font-semibold">{experience.title}</h4>
                  <p className="mt-2 font-mono text-xs text-muted">{experience.institution} / {t(roleKeys[experience.role])}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.credentials")}</h3>
            <div className="mt-6 border-t border-line">
              {selectedCertificates.map((certificate) => (
                <article key={`${certificate.name}-${certificate.issuer}`} className="grid grid-cols-[1fr_auto] gap-4 border-b border-line py-5">
                  <div><h4 className="font-semibold">{certificate.name}</h4><p className="mt-2 text-sm text-muted">{certificate.issuer}</p></div>
                  <span className="font-mono text-xs text-signal">{certificate.year}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build the dedicated contact close**

```tsx
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { cvUrl, emailUrl, linkedinUrl } from "../data/links";
import { useLanguage } from "../hooks/useLanguage";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="border-t border-line px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{t("contact.title")}</h2>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("contact.label")}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{t("contact.body")}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">{t("contact.location")}</p>
        </div>
        <div className="grid min-w-64 border-t border-line">
          <a className="flex min-h-14 items-center justify-between border-b border-line hover:text-signal" href={emailUrl}><span>{t("contact.email")}</span><Mail size={18} /></a>
          <a className="flex min-h-14 items-center justify-between border-b border-line hover:text-signal" href={linkedinUrl} target="_blank" rel="noreferrer"><span>{t("contact.linkedin")}</span><Linkedin size={18} /></a>
          <a className="flex min-h-14 items-center justify-between border-b border-line hover:text-signal" href={cvUrl} target="_blank" rel="noreferrer"><span>{t("contact.cv")}</span><ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Reduce the footer and assemble the final page**

```tsx
// src/components/Footer.tsx
import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line px-5 py-7 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>{t("footer.copyright")}</p>
        <p>{t("footer.note")}</p>
      </div>
    </footer>
  );
}
```

```tsx
// src/App.tsx
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-field text-ink">
      <Navbar />
      <main className="pt-[4.5rem]">
        <Hero />
        <Projects />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 4: Delete replaced inventory components and unused skill data**

Delete the five obsolete files listed above after `App.tsx` and `Profile.tsx` no longer import them.

Delete their obsolete dictionary keys from both locale files: `nav.about`, `nav.skills`, `nav.projects`, `nav.experience`, `nav.downloadCv`, `hero.tagline`, `hero.badge`, `hero.cta.projects`, `hero.cta.cv`, every `about.*` key, `skills.title`, `projects.title`, `projects.latest`, every `projects.filter.*` key, every `projects.modal.*` key, `experience.title`, and `certificates.title`.

Run: `rg 'components/(About|Skills|Experience|Certificates)|placeholder\.svg|skillGroups' src`

Expected: no matches.

- [ ] **Step 5: Verify the complete page compiles and lints**

Run: `npm run build`

Expected: exit code 0.

Run: `npm run lint`

Expected: exit code 0.

---

### Task 6: Dependency Cleanup And Bounded Finish Verification

**Files:**
- Modify: `package.json` and `package-lock.json` only if no Framer Motion import remains.
- Inspect: all changed UI files.
- Create during verification: desktop and mobile screenshots in the approved temporary output location.
- Create at finish: `DESIGN.md` and its Impeccable sidecar through the shipped documenter workflow.

**Interfaces:**
- Consumes: the finished page and approved visual reference files.
- Produces: verified build, detector output, screenshots, finish verdict, and documented design system.

- [ ] **Step 1: Remove the unused animation dependency if confirmed**

Run: `rg "framer-motion" src`

Expected: no matches.

Run: `npm uninstall framer-motion`

Expected: package manifests update and install audit completes successfully.

- [ ] **Step 2: Run static verification**

Run: `npm run build`

Expected: exit code 0.

Run: `npm run lint`

Expected: exit code 0.

Run: `node .opencode/skills/impeccable/scripts/detect.mjs --json src`

Expected: `[]` or only reviewed false positives; fix genuine mechanical findings in one batch.

- [ ] **Step 3: Verify direction-contract and obsolete-path cleanup**

Run: `rg "49a82433" dist/index.html`

Expected: one match.

Run: `rg "8B5CF6|7C3AED|bg-accent|text-accent|/cv.pdf|ProjectModal|placeholder.svg" src index.html`

Expected: no matches.

- [ ] **Step 4: Perform one batched desktop/mobile inspection**

Verify the approved temp parent and installed browser:

Run: `Test-Path -LiteralPath "C:\Users\izzan\AppData\Local\Temp\opencode"`

Expected: `True`.

Run: `Test-Path -LiteralPath "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"`

Expected: `True`. If false, use the installed Edge path returned by `Get-Command msedge.exe`.

Capture both views in one bounded server session:

```powershell
$server = Start-Process -FilePath "npm.cmd" -ArgumentList @("run", "dev", "--", "--host", "127.0.0.1", "--port", "4173") -WorkingDirectory "C:\Users\izzan\Code\portfolio-1" -WindowStyle Hidden -PassThru; try { Start-Sleep -Seconds 3; & "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --hide-scrollbars --window-size=1440,2600 --screenshot="C:\Users\izzan\AppData\Local\Temp\opencode\portfolio-desktop.png" "http://127.0.0.1:4173"; & "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --hide-scrollbars --window-size=390,2600 --screenshot="C:\Users\izzan\AppData\Local\Temp\opencode\portfolio-mobile.png" "http://127.0.0.1:4173" } finally { Stop-Process -Id $server.Id -ErrorAction SilentlyContinue }
```

Inspect `portfolio-desktop.png` and `portfolio-mobile.png` together against:

- `.superpowers/brainstorm/678-1786003766/content/visual-directions.html`, option B.
- `.superpowers/brainstorm/678-1786003766/content/layout-options.html`, option A.

Check the opening split, case-study hierarchy, honest pending states, compact archive, profile pacing, Contact close, keyboard focus, 44px targets, locale switching, CV URL, and reduced motion. Record all defects before editing.

- [ ] **Step 5: Apply one correction batch and confirm once**

Fix every material defect from Step 4 in one edit batch. Re-run build, lint, detector, desktop screenshot, and mobile screenshot once. Stop polishing after this confirmation round.

- [ ] **Step 6: Run the finish reviewer and document the built system**

Spawn the Impeccable finish reviewer with the original request, approved spec, artifact path, desktop/mobile screenshots, detector findings, direction contract, approved visual references, and craft-floor path. Resolve its material findings according to the bounded finish workflow, then run the Impeccable documenter to write `DESIGN.md` and its sidecar from the built interface.

- [ ] **Step 7: Report without committing**

Report changed/deleted files, verification evidence, finish verdict, and the exact user assets still needed: two repository URLs, two screenshots with alt text, exact metrics, and one limitation/learning per featured project. Do not commit unless the user explicitly asks.
