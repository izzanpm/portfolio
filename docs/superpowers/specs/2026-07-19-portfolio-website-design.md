# Design Spec: Portfolio Website — Mohammad Izzan Putra Maulana

**Date:** 2026-07-19
**Status:** Approved
**Based on:** PRD.md v1.0

---

## 1. Overview

Single-page static portfolio website for Mohammad Izzan Putra Maulana, a Computer Science student at BINUS University focused on Data Analyst / Data Scientist roles. The site showcases bio, skills, projects, experience, and certificates in a dark minimalist design with purple accents.

**Key decisions:**
- Project detail via expandable modal (not separate pages)
- Placeholder profile photo (to be replaced later)
- Purple accent (#8B5CF6) on dark theme
- Vite + React + Tailwind CSS approach

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Bundler | Vite |
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |
| Deploy target | Static hosting (Vercel / Netlify / GitHub Pages) |

## 3. Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectModal.tsx
│   ├── Experience.tsx
│   ├── Certificates.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── experiences.ts
│   └── certificates.ts
├── hooks/
│   ├── useScrollSpy.ts
│   └── useLanguage.ts
├── i18n/
│   ├── id.ts
│   └── en.ts
├── App.tsx
├── main.tsx
└── index.css
public/
├── cv.pdf
└── placeholder.jpg
```

**Architecture principles:**
- Content separated from markup — all data in `data/` folder as typed arrays
- Single-page app — all sections rendered in one page, navigation via smooth scroll
- No routing library — scroll spy for active nav highlighting
- Simple i18n — React Context + translation files, ID/EN toggle in navbar

## 4. Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| bg-primary | #0A0A0B | Page background |
| bg-surface | #141416 | Cards, modal background |
| text-primary | #F5F5F5 | Headings, body text |
| text-secondary | #A1A1AA | Subtitles, descriptions |
| accent | #8B5CF6 | Buttons, active states, highlights |
| accent-hover | #7C3AED | Button hover, link hover |
| border | #27272A | Card borders, dividers |

### Typography
- Font family: Inter (Google Fonts)
- Hero headline: bold, large (text-5xl to text-7xl responsive)
- Section headings: bold, text-3xl
- Body: regular, text-base
- Badges/tags: medium, text-sm

## 5. Sections Detail

### 5.1 Navbar (sticky, backdrop blur)
- Left: initials **IZN** (purple, bold)
- Center/Right: About, Skills, Projects, Experience, Contact
- Right: ID/EN toggle, Download CV button
- Scroll spy highlights active link in purple
- Mobile: hamburger menu → slide-in drawer

### 5.2 Hero Section (full viewport height, center-aligned)
- Large bold headline: "Mohammad Izzan Putra Maulana"
- Sub-headline: "Computer science student with a passion for exploration in the realm of data"
- Badge: "Data Analyst & Data Scientist"
- CTA buttons: "Lihat Project" (scroll to projects) + "Download CV" (purple solid)
- Social icons row: LinkedIn, Gmail, Outlook
- Animation: fade-in + slide-up on load

### 5.3 About Me Section
- 2-column layout (desktop): left placeholder photo, right bio text
- Bio from PRD + education info (BINUS, GPA 3.55/4.00)
- Contact info: email, location (South Tangerang)
- Mobile: vertical stack (photo top, text bottom)

### 5.4 Skills Section
- 3 groups: Programming Languages, Tools & Software, Soft Skills
- Each skill as badge/pill (zinc-800 bg, light text)
- Hover: purple glow effect
- Animation: staggered fade-in on scroll into viewport

### 5.5 Projects Section
- Filter bar: All | Classification | EDA | Deployment | Normalization
- Latest project (Smartphone Price Prediction) as highlight card — larger, gradient purple subtle background
- Remaining projects as grid cards (2 columns desktop, 1 column mobile)
- Each card: title, year, category tags, 1-line summary
- Click card → modal overlay with project detail

### 5.6 Project Modal
- Backdrop blur overlay
- Content: overview, methodology, tools used, results/insights
- Close: click backdrop, X button, or Escape key
- Body scroll lock while open
- Animation: backdrop fade-in, modal slide-up + scale

### 5.7 Experience Section
- Vertical timeline (purple line on left)
- Each item: experience name, institution, responsibility bullet points
- Timeline dot: purple circle at each node

### 5.8 Certificates Section (after Experience)
- Simple grid cards: certificate name, issuer, year
- Hover: purple border highlight

### 5.9 Footer
- Copyright: "© 2026 Mohammad Izzan Putra Maulana"
- Social icons: LinkedIn, Email
- Minimalist, single row

## 6. Data Types

```typescript
interface Project {
  id: string;
  title: string;
  year: number;
  category: "classification" | "eda" | "deployment" | "normalization";
  tags: string[];
  summary: string;
  detail: {
    overview: string;
    methodology: string;
    tools: string[];
    results: string;
  };
  isLatest?: boolean;
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Experience {
  title: string;
  institution: string;
  role: string;
  responsibilities: string[];
}

interface Certificate {
  name: string;
  issuer: string;
  year: number;
}
```

## 7. Features

### 7.1 i18n (ID/EN Toggle)
- React Context `LanguageProvider` with `locale: "id" | "en"`
- Translation files `i18n/id.ts` and `i18n/en.ts` for UI labels
- Data content (projects, experiences) stays in English (per CV)
- Only UI chrome/labels are translated

### 7.2 Scroll Spy
- `IntersectionObserver` watching each section
- Updates active nav item based on visible section
- Smooth scroll via `scrollIntoView({ behavior: 'smooth' })`

### 7.3 Project Filter
- State `activeFilter` in Projects section
- Filter buttons with Framer Motion `AnimatePresence` for card enter/exit animations

### 7.4 Animations (Framer Motion)
- Scroll reveal: each section fade-in + slide-up (`whileInView`)
- Staggered children: skill badges, project cards appear sequentially
- Hover effects: card scale up, badge glow, button color shift
- Modal: backdrop fade-in, modal slide-up + scale

### 7.5 Responsive Breakpoints
- Mobile: < 640px (1 column, hamburger nav, stack layout)
- Tablet: 640px - 1024px (2 column grid)
- Desktop: > 1024px (full layout, 2-3 column grid)

### 7.6 SEO & Performance
- Meta title: "Mohammad Izzan Putra Maulana — Data Analyst & Data Scientist Portfolio"
- Meta description + Open Graph tags in `index.html`
- Font preload (Inter)
- Target Lighthouse performance score >= 90

## 8. Out of Scope (v1)
- CMS/admin panel
- Backend, database, server-side form submission
- Authentication
- Dark/Light mode toggle (dark only for v1)
- Contact form (mailto link instead)
- Analytics integration
