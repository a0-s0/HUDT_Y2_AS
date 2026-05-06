# Component Inventory — Design & Development Reference

This document maps React components to their design system usage, design tokens, and Figma equivalents.

---

## Components Overview

| Component          | File                                                              | Purpose              | Frame Size | Primary Colors             |
| ------------------ | ----------------------------------------------------------------- | -------------------- | ---------- | -------------------------- |
| Navigation         | [Navigation.tsx](./src/components/Navigation.tsx)                 | Header nav bar       | 1440×80px  | Charcoal, Off-White        |
| Hero               | [Hero.tsx](./src/components/Hero.tsx)                             | Landing hero section | 1440×600px | Off-White, Charcoal, Gold  |
| Timeline           | [Timeline.tsx](./src/components/Timeline.tsx)                     | Historical timeline  | 1440×800px | Charcoal, Beige, Gold      |
| DesignerSpotlights | [DesignerSpotlights.tsx](./src/components/DesignerSpotlights.tsx) | Designer cards       | 1440×600px | Off-White, Charcoal, Beige |
| Infographics       | [Infographics.tsx](./src/components/Infographics.tsx)             | Data visualization   | 1440×500px | Off-White, Gold, Charcoal  |
| WorldMap           | [WorldMap.tsx](./src/components/WorldMap.tsx)                     | Map visualization    | 1440×600px | Off-White, Charcoal, Gold  |

---

## Component Details

### 1. Navigation

**Figma Component Name:** `Navigation`

**Purpose:** Top navigation bar (header)

**Figma Frame Setup:**

- Size: 1440px × 80px
- Background: Off-White (`#F5F0E8`)
- Text color: Charcoal (`#1A1A1A`)
- Border bottom: 1px solid Border color (`#E0D5C5`)

**Content Elements:**

- Logo/brand text (EB Garamond, 20px, weight 700)
- Navigation links (Inter, 14px, weight 500)
  - Link colors:
    - Default: Charcoal
    - Hover: Gold
    - Active: Gold with underline

**Variants to Create in Figma:**

- `Navigation_Desktop` — Full-width menu visible
- `Navigation_Mobile` — Hamburger menu (375px width)
- `Navigation_Hover` — Hover state on nav links
- `Navigation_Active` — Active/current page indicator

---

### 2. Hero

**Figma Component Name:** `Hero`

**Purpose:** Large hero/banner section with headline, subheading, CTA

**Figma Frame Setup:**

- Size: 1440px × 600px
- Background: Off-White (`#F5F0E8`)
- Padding: 80px (top/bottom), 40px (left/right)

**Content Elements:**

- Headline (EB Garamond, 48px, weight 700, Charcoal)
- Subheading (Inter, 18px, weight 400, Silver)
- CTA Button:
  - Background: Gold (`#B8960C`)
  - Text: White (`#FFFFFF`), Inter 14px weight 600
  - Padding: 12px 24px
  - Border radius: 4px

**Variants to Create in Figma:**

- `Hero_Default` — Standard state
- `Hero_Hover` — Button hover state (Gold darker, `#A89880`)
- `Hero_Mobile` — Mobile responsive (375px)

---

### 3. Timeline

**Figma Component Name:** `Timeline`

**Purpose:** Historical timeline with years, descriptions, images

**Figma Frame Setup:**

- Size: 1440px × 800px
- Background: Off-White (`#F5F0E8`)
- Padding: 60px (top/bottom), 40px (left/right)

**Content Elements:**

- Timeline title (EB Garamond, 36px, weight 700, Charcoal)
- Timeline entries (vertical or horizontal layout):
  - Year: EB Garamond, 24px, weight 700, Gold
  - Description: Inter, 14px, weight 400, Charcoal
  - Divider: 2px solid Beige (`#C4B5A0`)
  - Images: 200×200px placeholders

**Variants to Create in Figma:**

- `Timeline_Default` — All timeline entries visible
- `Timeline_Expanded` — Single entry expanded
- `Timeline_Mobile` — Vertical stacked layout

---

### 4. DesignerSpotlights

**Figma Component Name:** `DesignerSpotlights`

**Purpose:** Feature cards showcasing designers

**Figma Frame Setup:**

- Size: 1440px × 600px
- Background: Off-White (`#F5F0E8`)
- Padding: 60px (top/bottom), 40px (left/right)
- Grid: 3-column layout (auto-layout in Figma)

**Card Component (create as nested component):**

- Card background: Light Gray (`#F0EDE8`)
- Card padding: 20px
- Border: 1px solid Border (`#E0D5C5`)
- Image: 300×300px
- Designer name: EB Garamond, 16px, weight 600, Charcoal
- Bio: Inter, 13px, weight 400, Silver
- Hover effect: Border color changes to Gold, slight shadow

**Variants to Create in Figma:**

- `DesignerCard_Default` — Standard card
- `DesignerCard_Hover` — Hover state (border Gold, shadow)
- `DesignerSpotlights_3Col` — 3-column desktop
- `DesignerSpotlights_Mobile` — 1-column mobile

---

### 5. Infographics

**Figma Component Name:** `Infographics`

**Purpose:** Data visualization / chart section

**Figma Frame Setup:**

- Size: 1440px × 500px
- Background: Off-White (`#F5F0E8`)
- Padding: 60px (top/bottom), 40px (left/right)

**Content Elements:**

- Title: EB Garamond, 28px, weight 700, Charcoal
- Chart placeholder: 1000×300px
- Chart colors: Gold (primary), Beige (secondary), Silver (tertiary)
- Legend: Inter, 12px, weight 400, Charcoal

**Variants to Create in Figma:**

- `Infographics_Default` — Standard chart
- `Infographics_Interactive` — Hover state on chart elements

---

### 6. WorldMap

**Figma Component Name:** `WorldMap`

**Purpose:** Geographic map with location markers

**Figma Frame Setup:**

- Size: 1440px × 600px
- Background: Light Gray (`#F0EDE8`)
- Padding: 40px

**Content Elements:**

- Map: 1200×400px placeholder
- Location markers: 12px circles, Gold (`#B8960C`)
- Location labels: Inter, 11px, weight 500, Charcoal
- Legend: Beige background, 1px Border stroke

**Variants to Create in Figma:**

- `WorldMap_Default` — Standard map
- `WorldMap_Hover` — Marker hover state (size increases, Gold darkens)

---

## Design Token Application Guide

### When Creating Components in Figma

**For TEXT:**

- Headings → Use EB Garamond, apply `H1`/`H2`/`H3` typography token
- Body text → Use Inter, apply `Body` typography token
- Captions → Use Inter, apply `Caption` typography token
- Color → Use color tokens (NOT hardcoded hex)
  - Text on Off-White: `text-charcoal` (#1A1A1A)
  - Secondary text: `text-silver` (#888888)
  - Accent text: `text-gold` (#B8960C)

**For BACKGROUNDS:**

- Primary BG: `bg-offwhite` (#F5F0E8)
- Secondary BG: `bg-light-gray` (#F0EDE8)
- Dark overlays: `bg-charcoal` (#1A1A1A)
- Accent backgrounds: `bg-beige` (#C4B5A0)

**For BORDERS:**

- Standard borders: `border-border` (#E0D5C5)
- Accent borders: `border-beige` or `border-gold`
- Dark borders: `border-charcoal-light` (#2C2C2C)

**For EFFECTS:**

- Light overlay: Use `glass` effect (rgba(245, 240, 232, 0.85) + 12px blur)
- Dark overlay: Use `glass-dark` effect (rgba(26, 26, 26, 0.9) + 12px blur)

---

## Spacing Reference

All components should use a **4px base grid** for spacing:

| Spacing Scale | Pixels | Usage                         |
| ------------- | ------ | ----------------------------- |
| `xs`          | 4px    | Micro spacing, letter-spacing |
| `sm`          | 8px    | Small padding, gaps           |
| `md`          | 16px   | Default padding, margins      |
| `lg`          | 24px   | Section margins               |
| `xl`          | 32px   | Large section gaps            |
| `2xl`         | 48px   | Major section spacing         |
| `3xl`         | 64px   | Hero spacing                  |
| `4xl`         | 80px   | Page margins                  |

---

## Responsive Breakpoints

| Breakpoint | Width  | Usage                  |
| ---------- | ------ | ---------------------- |
| Mobile     | 375px  | Small phones           |
| Tablet     | 768px  | iPads, tablets         |
| Desktop    | 1440px | Laptops, large screens |

When creating Figma variants, use these widths for `Mobile` and `Desktop` versions.

---

## Animation & Interaction Notes

**Note:** Figma auto-code generation handles static layouts well but struggles with animations. Document animation specs here; developers will implement in React/Framer Motion.

### Animations in Current Components:

- **Hero**: Fade-in on scroll
- **Timeline**: Stagger-in animation for entries
- **DesignerSpotlights**: Hover scale effect on cards
- **Infographics**: Chart data animation on scroll

**Recommendation:** After exporting static components from Figma, developers should manually add Framer Motion animations to match the live site.

---

## File Mapping

| Figma Component    | React File                                                        | CSS File                          |
| ------------------ | ----------------------------------------------------------------- | --------------------------------- |
| All                | [globals.css](./src/app/globals.css)                              | Defines design tokens & utilities |
| Navigation         | [Navigation.tsx](./src/components/Navigation.tsx)                 | Uses Tailwind classes             |
| Hero               | [Hero.tsx](./src/components/Hero.tsx)                             | Uses Tailwind classes             |
| Timeline           | [Timeline.tsx](./src/components/Timeline.tsx)                     | Uses Tailwind classes             |
| DesignerSpotlights | [DesignerSpotlights.tsx](./src/components/DesignerSpotlights.tsx) | Uses Tailwind classes             |
| Infographics       | [Infographics.tsx](./src/components/Infographics.tsx)             | Uses Tailwind classes             |
| WorldMap           | [WorldMap.tsx](./src/components/WorldMap.tsx)                     | Uses Tailwind classes             |

---

## Checklist: Creating Figma Components

For each component:

- [ ] Frame created with correct dimensions (see table above)
- [ ] Background color applied (using color token)
- [ ] Content elements added (text, images, shapes)
- [ ] Typography tokens applied to all text (not hardcoded sizes/weights)
- [ ] Color tokens applied to all text/backgrounds (not hex values)
- [ ] Border added with `border` color token (if needed)
- [ ] Spacing measured in 4px units
- [ ] Component renamed to match React file name exactly
- [ ] Variants created for states (Default, Hover, Mobile)
- [ ] Auto-layout enabled for responsive scaling
- [ ] Component exported for code generation test

---

## Quick Reference: Hex Colors to Tailwind Classes

| Hex     | Tailwind Class                              | Context         |
| ------- | ------------------------------------------- | --------------- |
| #1A1A1A | `text-charcoal` / `bg-charcoal`             | Primary dark    |
| #2C2C2C | `text-charcoal-light` / `bg-charcoal-light` | Secondary dark  |
| #F5F0E8 | `bg-offwhite` / `text-offwhite`             | Primary light   |
| #F0EDE8 | `bg-light-gray` / `text-light-gray`         | Secondary light |
| #FFFFFF | `bg-white` / `text-white`                   | Pure white      |
| #C4B5A0 | `text-beige` / `bg-beige`                   | Warm neutral    |
| #D4C5B2 | `bg-beige-light`                            | Light beige     |
| #A89880 | `bg-beige-dark`                             | Dark beige      |
| #E0D5C5 | `border-border`                             | Borders         |
| #888888 | `text-silver`                               | Secondary text  |
| #B0B0B0 | `text-silver-light`                         | Light text      |
| #B8960C | `text-gold` / `bg-gold`                     | Accent          |
