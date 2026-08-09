---
name: "Izzan Analytical Observatory"
description: "A proof-first portfolio rendered as a precise analytical inspection surface."
colors:
  field: "#070a0f"
  panel: "#0d1217"
  ink: "#f1f4ea"
  muted: "#8d988b"
  line: "#2b332c"
  signal: "#d9ff4f"
  caution: "#ffb000"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Azeret Mono, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.18em"
  technical:
    fontFamily: "Azeret Mono, Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
spacing:
  xxs: "0.5rem"
  xs: "0.75rem"
  sm: "1.25rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  section: "6rem"
  gutter: "1.25rem"
  gutter-wide: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.field}"
    typography: "{typography.body}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0 1.25rem"
    height: "2.75rem"
  repository-action:
    backgroundColor: "transparent"
    textColor: "{colors.signal}"
    typography: "{typography.body}"
    height: "2.75rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    height: "2.75rem"
  language-control:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0 0.75rem"
    height: "2.75rem"
  evidence-field:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    padding: "1.5rem"
  pending-evidence:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.caution}"
    typography: "{typography.label}"
  archive-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "1.25rem 0"
  contact-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: "3.5rem"
---

# Design System: Izzan Analytical Observatory

## Overview

**Creative North Star: "The Analytical Observatory"**

The portfolio behaves like a calibrated analytical instrument. A matte near-black field, bone reading text, phosphor-chartreuse signals, pixel-crisp rules, compact technical metadata, and wide evidence surfaces make project reasoning feel inspectable rather than advertised.

The visual hierarchy is heading-first and proof-first. Large Archivo headings establish the subject before Azeret Mono metadata qualifies it; labels never become decorative eyebrows above major headings. Density comes from ruled evidence and structured comparisons, while open profile and contact passages keep the page from reading like a dashboard.

The system is intentionally flat, square, and restrained. It rejects the former purple card and modal language, along with gradients, glow effects, glass panels, fake charts, generic icon tiles, and equal-weight content cards.

**Key Characteristics:**
- Matte dark field with one scarce chartreuse signal.
- Heading-first hierarchy with technical metadata in a supporting role.
- Proof-First Split opening composition and inline case studies.
- Fine structural rules, open fields, and square corners.
- Honest caution-colored pending states for unavailable evidence.
- Motion limited to orientation and state feedback.
- Build-time English core content and native mobile navigation that remain readable before hydration.

## Colors

The palette is a dark analytical field with bone text, steel-muted support, and one high-authority phosphor signal.

### Primary
- **Phosphor Signal** (`#d9ff4f`): Marks primary actions, active navigation, selected model results, links with high evidentiary value, focus outlines, and text selection.

### Secondary
- **Caution Amber** (`#ffb000`): Reserved for unavailable evidence and genuine caution. It is never ambient decoration.

### Neutral
- **Matte Field** (`#070a0f`): Owns the page, fixed navigation, and primary-button text.
- **Raised Instrument Panel** (`#0d1217`): Separates evidence fields through tone rather than elevation.
- **Soft Bone Ink** (`#f1f4ea`): Carries headings, reading text, and verified values.
- **Muted Steel** (`#8d988b`): Carries secondary prose, metadata, inactive navigation, and supporting indexes.
- **Structural Line** (`#2b332c`): Draws section boundaries, table rules, controls, and evidence grids.

### Named Rules

**The Scarce Signal Rule.** Phosphor Signal is an authority marker, not a wash; use it only for selected, active, focused, or high-intent content.

**The Honest Amber Rule.** Caution Amber means evidence is unavailable or incomplete. Never use it to decorate verified content.

## Typography

**Display Font:** Archivo (with Arial and sans-serif fallbacks)
**Body Font:** Archivo (with Arial and sans-serif fallbacks)
**Label/Mono Font:** Azeret Mono (with Consolas and monospace fallbacks)

**Character:** Archivo gives the portfolio direct editorial authority without softening its technical content. Azeret Mono supplies compact instrument notation for metadata, labels, indexes, and tabular comparisons.

### Hierarchy
- **Display** (800, `3rem` rising to `4.5rem`, `0.94` line-height): Opening identity only; it is compact, sentence case, and allowed to wrap naturally.
- **Headline** (700, `2.25rem` rising to `3.75rem`, compact leading): Major Work, Profile, and Contact section headings.
- **Title** (700, `1.875rem` rising to `3rem`, compact leading): Featured case-study titles that organize the long scroll.
- **Body** (400-600, `1rem` to `1.125rem`, `1.75` line-height): Explanations and results, generally constrained to approximately 40rem-48rem for readable scanning.
- **Label** (400-600, `0.75rem`, `0.12em`-`0.18em`, uppercase when categorical): Navigation, section metadata, years, and compact indexes.
- **Technical** (400, `0.68rem`, `0.14em`, uppercase): Evidence headers, definition labels, and instrument annotations.

### Named Rules

**The Heading-First Rule.** Major headings appear before their technical labels; never place a mono eyebrow above a major heading.

**The Minus-Four Floor Rule.** Display tracking never tightens beyond `-0.04em`.

**The Two-Voice Rule.** Archivo speaks the content; Azeret Mono annotates it. Do not set paragraphs or major headings in mono.

## Layout

The page uses a centered maximum width of `80rem` with `1.25rem` side gutters, expanding to `2rem` on large screens. Major sections use `6rem` vertical padding and `1px` rules to make the long single-page sequence legible. The fixed navigation is `4.5rem` high, and anchored sections offset scrolling so headings remain visible below it.

The opening viewport is a Proof-First Split: the positioning headline leads the first column, followed by Mohammad's name and role metadata, supporting context, then a primary View CV action and secondary outlined Contact action. The leading Smartphone Price Prediction evidence field occupies the second column. At large widths the ratio is approximately `0.88fr / 1.12fr`; below `64rem` it becomes one column with identity first and evidence immediately after. Featured case studies use two equal columns and alternate evidence placement without changing their semantic reading order.

Evidence comparisons use ruled grids and explicit labels. Archive rows become a five-column index at `48rem` and stack into readable blocks below it. Profile and Contact use asymmetric two-column layouts at `64rem`; mobile keeps all substantive labels, stacks comparisons by importance, reduces decorative density, and preserves at least `44px` interaction targets. The production build pre-renders the complete English core into the static document and hydrates that same tree in the browser, so layout, content, and native navigation do not depend on JavaScript becoming available.

Spacing follows a compact `0.5rem`-`1.5rem` internal rhythm, `2.5rem`-`4rem` composition gaps, and `6rem` section cadence. Dense ruled passages alternate with open explanatory passages rather than placing every content group inside a container.

## Elevation & Depth

The system uses no shadows. Depth comes from tonal separation between Matte Field and Raised Instrument Panel, then from Structural Line boundaries and content density. Evidence surfaces remain flat at rest; hover and focus states change border or text color without lifting, scaling, glowing, or blurring.

### Named Rules

**The Flat Instrument Rule.** Establish depth with tone and `1px` rules only; do not add box shadows, glow, glass, or gradient elevation.

**The Open-Field Rule.** A ruled field must organize evidence, not turn ordinary prose into a card. Default to open page space and horizontal rules before enclosing content.

## Shapes

Corners are square. Buttons, controls, evidence fields, rows, images, and section boundaries use no radius. Fine `1px` borders and clipped rectangular fields create the instrument silhouette; overflow is clipped only where the scan line or supplied evidence image must stay inside an evidence field.

## Components

Components are direct, square, and stateful through color rather than physical movement. All interactive variants retain a visible `2px` Phosphor Signal focus outline with `4px` separation.

### Buttons
- **Shape:** Square rectangle with no radius and a minimum `2.75rem` height.
- **Primary:** Phosphor Signal fill, Matte Field text, semibold Archivo, and `1.25rem` horizontal padding. Use for View CV and equivalent high-intent actions.
- **Hover / Focus:** Keep geometry fixed; focus uses the global signal outline. Do not scale, lift, glow, or round the control.
- **Secondary / Outline:** Transparent fill, Soft Bone Ink, Structural Line border, and matching padding. In the hero it carries Contact and remains visually subordinate to View CV. Hover changes the border to Phosphor Signal.
- **Repository action:** When a real repository exists, render its Phosphor Signal text link as an inline-flex action with a `2.75rem` (`44px`) minimum height. Missing repositories remain non-interactive pending text.
- **Language control:** Compact square border control with mono text, a `44px` minimum target, and signal border on hover.

### Cards / Containers
- **Corner Style:** Square (`0` radius).
- **Background:** Evidence fields alone use Raised Instrument Panel; ordinary content remains on Matte Field.
- **Shadow Strategy:** None; use tonal separation and rules.
- **Border:** One Structural Line rule around evidence fields and between rows.
- **Internal Padding:** `1.25rem` in the compact opening field; `1.5rem` rising to `2rem` in full case-study fields.

### Navigation
- The navigation is a fixed `4.5rem` Matte Field bar with a Structural Line bottom border. The `IZZAN://PORTFOLIO` mark and active section use Phosphor Signal; inactive links use Muted Steel and move to Soft Bone Ink on hover.
- Navigation labels use uppercase Azeret Mono at compact sizes and maintain `44px` targets. At the medium breakpoint, desktop links and controls replace a collapsed native `<details>/<summary>` disclosure. Its summary is a `44px` Menu target; its full-width ruled panel contains Work, Profile, Contact, and CV links and remains operable in the pre-rendered document without JavaScript.
- Hydration enables locale controls and active-section behavior without replacing the native disclosure. Navigation landmarks, actions, and disclosure labels use the complete English/Indonesian dictionaries, and the selected locale updates the document language.

### Evidence Field

The signature evidence component is a square Raised Instrument Panel with a Structural Line frame. Its header pairs case/category and year in technical mono; its body compares model rows through horizontal rules and isolates metric or artifact status behind a vertical rule on large layouts. The selected model uses Phosphor Signal while unselected values remain Muted Steel. Case labels, category names, selected-model states, and pending technical metadata are fully localized in English and Indonesian; factual project, model, and tool names remain unchanged.

The compact opening instance performs one short chartreuse scan (`1.2s`, ease-out, `0.3s` delay) to establish reading order. The content is fully visible before and without animation. Reduced-motion mode collapses the scan and all transitions to effectively immediate feedback.

Verified evidence imagery sits in a bordered `16:9` frame, fills the available width up to `16rem`, and uses `object-fit: contain` so screenshots and plots are never cropped. The opening evidence image loads eagerly; later case-study images load lazily.

### Pending Evidence

Missing metrics, images, limitations, and repository links stay in the normal reading sequence. The verified qualitative result remains visible; the missing item is stated concisely in Caution Amber or Muted Steel, with no broken image, fabricated metric, fake destination, or disabled-looking action.

### Ruled Evidence Rows

Definition rows, archive entries, capability indexes, experience records, credentials, and contact actions reuse the same vocabulary: Structural Line top or bottom borders, `1.25rem` vertical padding or a `3.5rem` minimum row height, Soft Bone primary text, and mono Muted Steel metadata. Archive rows only become links when a real destination exists.

## Do's and Don'ts

### Do:
- **Do** lead each major region with its Archivo heading, then add mono metadata below or beside it.
- **Do** use the Proof-First Split so identity and verified project evidence share the opening viewport.
- **Do** structure case studies as question, role, method, comparison, result, limitation, and source.
- **Do** use fine rules, open fields, and alternating density to organize the page.
- **Do** expose missing evidence honestly in Caution Amber without suppressing verified facts.
- **Do** preserve visible focus, semantic landmarks, logical headings, correct document language, `44px` touch targets, and reduced-motion behavior.
- **Do** pre-render the complete English core, hydrate the same tree, and keep native mobile navigation usable before JavaScript.
- **Do** localize navigation, case, category, selected-state, and pending-state metadata while preserving factual proper names.
- **Do** contain evidence imagery inside its `16:9` frame and keep real repository actions at least `44px` tall.

### Don't:
- **Don't** restore purple, gradients, glow effects, glass panels, shadows, or rounded card grids.
- **Don't** hide project reasoning behind a modal or make equal-weight cards the primary composition.
- **Don't** use decorative fake charts, generic icon tiles, or unsupported metrics and repositories.
- **Don't** scatter Phosphor Signal across routine labels or use Caution Amber as decoration.
- **Don't** place mono eyebrow labels above major headings or tighten display tracking beyond `-0.04em`.
- **Don't** animate essential visibility, scale controls on hover, or rely on motion for hierarchy.
