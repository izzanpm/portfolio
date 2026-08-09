# Portfolio Redesign Design

**Date:** 2026-08-06  
**Status:** Approved  
**Target:** `src/App.tsx`  
**Mode:** Experience  
**Direction:** Analytical Observatory  
**Composition:** Proof-First Split  
**Concept seed:** `49a82433` (the user's pinned direction remains authoritative)

This specification supersedes `docs/superpowers/specs/2026-07-19-portfolio-website-design.md` for the portfolio surface.

## Goal

Redesign Mohammad Izzan Putra Maulana's portfolio so recruiters encounter credible project reasoning before résumé-style inventories. The site should make the Smartphone Price Prediction and Breast Cancer Prediction projects memorable, keep CV and Contact paths accurate, and remove inaccessible or low-value interaction.

The result remains a single-page bilingual React portfolio. It replaces the incumbent dark-purple card system rather than refining it.

## Success Criteria

- The opening viewport identifies Mohammad's role and shows evidence from a featured project.
- Smartphone Price Prediction and Breast Cancer Prediction are unmistakably dominant.
- Each featured case study exposes its question, method, comparison, result, limitation, and repository when that evidence exists.
- Missing user-supplied screenshots, repositories, metrics, and limitations appear as honest pending evidence rather than fabricated content or broken controls.
- Every CV action uses the same working Google Drive URL and is labeled `View CV` or `Lihat CV`.
- Contact navigation reaches a dedicated closing Contact section.
- Primary interactions work with keyboard, screen reader, touch, and reduced-motion preferences.
- English and Indonesian modes translate substantive page copy and update the document language.
- The production build and lint checks pass, and the Impeccable detector has no unresolved mechanical findings on changed UI files.

## Direction Contract

**THESIS:** The portfolio behaves like a calibrated analytical instrument: every visible signal helps an evaluator inspect the work. It refuses the category-default centered hero followed by equal-weight cards and skill pills.

**OWN-WORLD:** A matte near-black field, bone reading text, phosphor-chartreuse signals, pixel-crisp rules, compact technical labels, wide evidence fields, and restrained instrument motion. No purple, gradients, glow effects, glass panels, or fake dashboards.

**STORY:** The visitor identifies the candidate, inspects two case files, understands tools through their use, scans the remaining work and background, then views the CV or makes contact.

**FIRST VIEWPORT:** A slim navigation line sits above a split composition. Identity, role, availability, CV, and Contact occupy the left. A Smartphone Price Prediction evidence field occupies the right and begins the first case study without requiring a click.

**FORM:** Analytical Observatory with the Proof-First Split composition. Seed key `49a82433`; the user explicitly selected and approved this direction.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md

## Information Architecture

### Navigation

The fixed navigation contains:

- `IZZAN://PORTFOLIO`, linking to the opening viewport.
- `Work`, linking to the featured case studies.
- `Profile`, linking to background and capabilities.
- `Contact`, linking to the closing conversion section.
- English/Indonesian language control.
- Canonical `View CV` action.

The active section receives a chartreuse signal. Mobile navigation uses a semantic disclosure control with a minimum 44px target.

### Opening Viewport

The left side contains the role, a concise positioning statement, location or availability only when supported by existing content, and the two high-intent actions. The right side is the opening evidence field for Smartphone Price Prediction.

The evidence field may show current verified facts such as the compared models and Decision Tree being the best-performing model. Exact metrics and screenshots remain visibly pending until supplied. The pending state must look intentional but cannot dominate the viewport.

### Featured Case Studies

Two expanded case studies follow in this order:

1. Smartphone Price Prediction Model
2. Breast Cancer Prediction Model

Each follows the same reading sequence:

1. Project question
2. Role and context
3. Method and tools
4. Model comparison or analytical process
5. Verified result
6. Limitation or learning
7. Repository and supporting artifact

The case studies are inline and directly linkable. They do not open a modal.

### Project Archive

The remaining five projects become a compact chronological index. Each row includes title, year, category, and a concise summary. Category filters are removed because seven projects do not justify persistent filtering controls.

### Profile

Education, experience, selected capabilities, and selected certificates share one background section. Skills appear in context or in a compact index rather than a large pill cloud. Certificates remain supporting evidence and no longer receive an eleven-card climax.

### Contact

The closing section contains one preferred email, LinkedIn, location, and the canonical CV action. Its copy gives recruiters a direct reason to make contact without introducing unsupported availability or employment claims.

## Visual System

### Physical Scene

A recruiter reviews the portfolio in a dim or ordinary office environment alongside a CV and technical project links. The interface should feel like a precise inspection surface whose hierarchy remains clear under quick scanning.

### Color Strategy

Use a restrained dark system with one high-authority signal color:

- Matte near-black `#070A0F` owns the page field.
- Raised black `#0D1217` separates evidence surfaces without card-like elevation.
- Soft bone `#F1F4EA` carries headings and reading text.
- Muted steel `#8D988B` carries secondary text.
- Structural line `#2B332C` carries rules and the analytical grid.
- Phosphor chartreuse `#D9FF4F` marks selected states, primary focus, key evidence, and conversion actions.
- Caution amber `#FFB000` is reserved for genuine caution or unavailable evidence, not decoration.

Chartreuse must not be scattered across every label. Its scarcity creates hierarchy.

### Typography

Use `Archivo` for headlines and reading text, with `Azeret Mono` for technical labels, metadata, and tabular values. Both support the required Latin and Indonesian text. Load only the weights used by the page and retain system fallbacks.

- Headlines: large, sentence case, compact leading.
- Body: readable sans-serif, comfortable measure.
- Labels: compact monospace, limited uppercase, tabular numbers where relevant.
- Project titles: strong enough to organize the scroll without enclosing every title in a card.
- Major headings stand first; technical labels sit beside them or follow them in metadata rows, never as eyebrows above them.
- Display tracking never tightens beyond `-0.04em`.

### Composition

- Use a visible but quiet analytical grid to align content.
- Prefer fine rules and open fields over rounded containers.
- Use asymmetry in the opening split and alternate case-study pacing.
- Vary dense analytical passages with quieter profile and contact passages.
- Keep corners square or minimally rounded.
- Do not use gradients, glassmorphism, glow shadows, generic icon tiles, or decorative fake charts.

### Evidence Fields

Evidence fields are content surfaces, not decorative dashboards. They may contain verified model names, process steps, qualitative comparisons, screenshots, and exact metrics once supplied. Empty fields show concise `Evidence pending` copy and list the expected replacement asset.

## Interaction And Motion

- Smooth section navigation remains, but content is visible without animation.
- The opening evidence field may perform one short scan or reveal that establishes reading order.
- Case-study annotations reveal as their evidence enters the viewport; repeated generic fade-up animations are removed.
- Links and controls use immediate chartreuse focus and hover states without scale jumps.
- `prefers-reduced-motion` disables scanning, transforms, and smooth scrolling where appropriate.
- Project archive rows are native links only when a real destination exists; unavailable destinations render as text.
- Removing the modal eliminates custom focus trapping and restoration requirements.

## Responsive Behavior

### Desktop

- The first viewport uses the approved split composition.
- Evidence fields can use wide comparative layouts.
- Navigation remains compact and visible.

### Mobile

- The split becomes one column: identity first, opening evidence immediately second.
- Case-study comparisons stack by importance instead of shrinking into dashboard tiles.
- Navigation, language, CV, social, and menu controls meet the 44px target.
- Technical labels remain readable and are not hidden merely to preserve density.
- Decorative grid density decreases with viewport width.

## Component Plan

Reuse the current application shell and data separation. Keep components shallow and delete obsolete UI rather than preserving it for compatibility.

- `Navbar`: simplified anchors, language, CV, and accessible mobile disclosure.
- `Hero`: proof-first split and the opening evidence field.
- `CaseStudy`: one reusable structure rendered for the two featured projects.
- `ProjectArchive`: compact rendering of the remaining projects.
- `Profile`: merged education, experience, capabilities, and selected credentials.
- `Contact`: closing conversion and preferred links.
- `Footer`: minimal copyright and document close.

Remove the current `ProjectModal`, project filters, standalone skill-pill wall, placeholder portrait block, and equal-weight certificate grid from the rendered page. Files that have no remaining consumers should be deleted.

## Content And Data Flow

Extend the existing project data only for facts the interface needs:

- featured status and order
- question or context
- role
- repository URL
- evidence image path and alt text
- exact metric label and value
- limitation or learning

Repository, image, metric, and limitation fields are optional because the user will add them later. Components determine whether to render a link, image, measurement, or pending state from the field's presence. No parallel configuration layer is needed.

Substantive English and Indonesian project copy should live in the existing translation mechanism or a localized data structure, whichever creates the smaller clear implementation. Changing locale updates `document.documentElement.lang`.

## Failure And Empty States

- Missing evidence image: show an `Evidence pending` field naming the expected artifact; do not request a missing URL.
- Missing repository: omit the active repository control and state that the source link is pending.
- Missing exact metric: preserve the verified qualitative result and label the metric as pending; do not estimate it.
- External CV, email, and LinkedIn destinations: render only the confirmed URLs and use safe external-link attributes where applicable.
- JavaScript or motion failure: all core content and navigation remain readable in the rendered document.

## Accessibility

- Use semantic landmarks and a logical heading hierarchy.
- Use anchors and buttons for interactions rather than clickable containers.
- Provide visible `:focus-visible` treatment in chartreuse with sufficient separation from the background.
- Maintain WCAG AA contrast for text and controls.
- Give evidence images meaningful alt text supplied with each asset.
- Keep all mobile targets at least 44px in either dimension.
- Respect reduced motion.
- Keep language state synchronized with the document language.

## Verification

Run the following checks after implementation:

1. TypeScript production build.
2. Repository lint command.
3. Impeccable detector once over changed markup targets.
4. One batched desktop and mobile visual inspection against the approved Analytical Observatory and Proof-First Split mockups.
5. One batched correction pass and one confirmation inspection at most.

Manual acceptance checks cover:

- Keyboard-only navigation through every primary action.
- Visible focus and correct active navigation.
- Reduced-motion behavior.
- English and Indonesian substantive copy plus `<html lang>`.
- Working CV and Contact destinations on desktop and mobile.
- Honest pending evidence states with no broken images or fabricated metrics.
- Responsive first-viewport hierarchy and 44px touch targets.

## User-Supplied Evidence After Launch

The user will later provide repositories and screenshots for the two featured projects. They should also provide exact metrics, a concise limitation or learning, and image alt text. Adding these values should require data and asset updates, not component redesign.

## Out Of Scope

- Backend services, CMS, authentication, analytics, and contact-form handling.
- Invented project results, benchmarks, repositories, credentials, or availability claims.
- Separate project routes unless real case-study depth later exceeds the single-page structure.
- Light theme.
- New UI or state-management dependencies.

## Approved Visual References

- Visual world choice: `.superpowers/brainstorm/678-1786003766/content/visual-directions.html`, option B.
- Composition choice: `.superpowers/brainstorm/678-1786003766/content/layout-options.html`, option A.
