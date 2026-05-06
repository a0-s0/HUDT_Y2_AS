# Figma Setup Guide — Design Tokens & Component Library

This guide will help you set up a local Figma file with design tokens and component library extracted from your React/Tailwind codebase.

## Prerequisites

- Figma account (free tier works)
- Access to this project's design tokens: [design-tokens.json](./design-tokens.json)

---

## Phase 1: Create Figma File & Set Up Design Tokens

### Step 1.1: Create a New Figma File

1. Go to [figma.com](https://figma.com) → Create new file
2. Name it: `OpenCode Design System` (or your preference)
3. Save to a team workspace for easy collaboration

### Step 1.2: Add Color Tokens

Navigate to **Assets** panel (right sidebar) → **Colors**

Create the following color tokens. Each should be a **Library Color** in Figma:

| Token Name     | Hex Value | Usage                           | Tailwind Class                  |
| -------------- | --------- | ------------------------------- | ------------------------------- |
| Charcoal       | #1A1A1A   | Primary dark text & backgrounds | `text-charcoal` / `bg-charcoal` |
| Charcoal Light | #2C2C2C   | Secondary dark, hover states    | `text-charcoal-light`           |
| Off-White      | #F5F0E8   | Primary light background        | `bg-offwhite`                   |
| Light Gray     | #F0EDE8   | Secondary backgrounds           | `text-light-gray`               |
| White          | #FFFFFF   | Pure white                      | `text-white` / `bg-white`       |
| Beige          | #C4B5A0   | Warm neutral accent             | `text-beige` / `bg-beige`       |
| Beige Light    | #D4C5B2   | Light beige backgrounds         | `bg-beige-light`                |
| Beige Dark     | #A89880   | Dark beige accents              | `bg-beige-dark`                 |
| Border         | #E0D5C5   | Dividing lines, borders         | `border-border`                 |
| Silver         | #888888   | Secondary text                  | `text-silver`                   |
| Silver Light   | #B0B0B0   | Light secondary text            | `text-silver-light`             |
| Gold           | #B8960C   | Accent highlight                | `text-gold`                     |

**How to add colors in Figma:**

1. Right-click in the Assets → Colors panel
2. Select "Create color token" (or just create a new color swatch)
3. Set the name (e.g., "Charcoal") and hex value (e.g., "#1A1A1A")
4. Repeat for all colors above

### Step 1.3: Add Typography Tokens

Navigate to **Assets** panel → **Typography**

**Heading Font — EB Garamond**

1. Create a new typography token: `H1`
   - Font: EB Garamond (add from Google Fonts if needed)
   - Size: 48px
   - Weight: 700
   - Line Height: 1.2

2. Create `H2`: Font: EB Garamond, Size: 36px, Weight: 600
3. Create `H3`: Font: EB Garamond, Size: 28px, Weight: 600
4. Create `Body`: Font: Inter, Size: 16px, Weight: 400
5. Create `Body Small`: Font: Inter, Size: 14px, Weight: 400
6. Create `Caption`: Font: Inter, Size: 12px, Weight: 400

**How to add typography in Figma:**

1. In Assets panel → Typography section
2. Click "+" or right-click to create a new typography style
3. Select a text element on canvas or create one
4. Configure font, size, weight, line height
5. Save as reusable typography token

**Note:** Make sure EB Garamond and Inter are available in Figma:

- Go to **Assets** panel → Typography section
- Click the font dropdown and search for these fonts
- If not available, import from Google Fonts in Figma

### Step 1.4: Add Spacing Scale Documentation

Create a **Spacing Guide** frame:

1. Draw a series of rectangles representing your spacing scale
2. Label each: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`, `128px`
3. Add text annotation: "Base grid: 4px (Tailwind default)"
4. Lock this frame for reference

### Step 1.5: Document Effects (Glass & Glass Dark)

Create a new frame called "Effects":

**Glass Effect:**

- Background: `rgba(245, 240, 232, 0.85)` (semi-transparent Off-White)
- Blur: 12px
- Use on light overlays

**Glass Dark Effect:**

- Background: `rgba(26, 26, 26, 0.9)` (semi-transparent Charcoal)
- Blur: 12px
- Use on dark overlays

Document these effects in a frame with visual examples.

---

## Phase 2: Create Component Library

### Step 2.1: Set Up Component Frames

In your Figma file, create a new page called "Components".

For each React component, create a main component frame:

1. **Navigation**
   - Frame size: 1440px wide × 80px tall (header height)
   - Include: Logo, nav links (Home, About, Timeline, Designers, Data)
   - Apply colors: Charcoal text on Off-White background
   - Variants: Desktop / Mobile (if responsive)

2. **Hero**
   - Frame size: 1440px wide × 600px tall (adjust based on your design)
   - Include: Large heading (EB Garamond, 48px), subtitle, CTA button
   - Apply: Off-White background, Charcoal text, Gold accent for button
   - States: Default / Hover (button)

3. **Timeline**
   - Frame size: 1440px wide × 800px tall
   - Include: Timeline entries (years, descriptions, images)
   - Apply: Beige dividers, Charcoal text, Gold highlights for key dates
   - Variants: Expanded / Collapsed (optional)

4. **Designer Spotlights**
   - Frame size: 1440px wide × 600px tall
   - Include: 3-4 designer cards with images and bios
   - Apply: Light Gray backgrounds, Charcoal text, Beige accents
   - States: Default / Hover

5. **Infographics**
   - Frame size: 1440px wide × 500px tall
   - Include: Chart/data visualization placeholders
   - Apply: Beige/Gold accents, Charcoal text, Off-White background

6. **World Map**
   - Frame size: 1440px wide × 600px tall
   - Include: Map visual with location markers
   - Apply: Gold markers, Charcoal labels, Off-White background

### Step 2.2: Build Component Variants

For each main component, create **variants** for interactive states:

- Default state
- Hover state (if applicable)
- Active state (if applicable)
- Responsive variant (Mobile 375px / Desktop 1440px)

**How to create variants in Figma:**

1. Select your main component
2. Right-click → "Create component set"
3. Add properties for: `State` (Default/Hover/Active) and `Size` (Mobile/Desktop)
4. Duplicate and modify the component for each variant

### Step 2.3: Apply Consistent Styling

For all components:

- Use color tokens from Step 1.2
- Use typography tokens from Step 1.3
- Use 4px base grid for spacing
- Keep component names matching your React component names exactly:
  - Figma: `Navigation`
  - React: `Navigation.tsx`

---

## Phase 3: Set Up Auto-Code Generation

### Step 3.1: Install Figma-to-Code Plugin

1. In your Figma file, go to **Plugins** menu (top menu)
2. Search for one of these plugins:
   - **Builder.io** (recommended) — Best Tailwind CSS support
   - **Figma to Code** — Good for React/Tailwind
   - **Anima** — Alternative option

3. Click "Install" and give permissions

### Step 3.2: Configure Plugin Settings

**For Builder.io:**

1. Open the plugin from your Figma menu
2. Configure export settings:
   - Language: **React**
   - CSS Framework: **Tailwind CSS**
   - Component format: **Functional components**
   - Variable output: **CSS custom properties** (to match your design tokens)

### Step 3.3: Test Export

1. Select one simple component frame (e.g., a button or small card)
2. Open the Builder.io plugin
3. Click "Export to code"
4. Copy the generated React component code
5. Paste into a test file in your project: [src/components/FigmaTest.tsx](./src/components/FigmaTest.tsx)
6. Verify:
   - Component renders without errors
   - Uses correct Tailwind color classes (e.g., `text-charcoal`, `bg-offwhite`)
   - Matches visual appearance of your Figma design

### Step 3.4: Verify Generated Code Quality

Check that generated code includes:

```tsx
// ✓ Correct Tailwind classes
<div className="text-charcoal bg-offwhite">

// ✓ Proper component structure
export function MyComponent() { ... }

// ✓ Semantic color tokens (not raw hex values)
// NOT: style={{ color: '#1A1A1A' }}
// YES: className="text-charcoal"
```

---

## Phase 4: Establish Design-to-Code Workflow

### Step 4.1: Document Your Workflow

Create a `DESIGN_WORKFLOW.md` file in your project with:

```markdown
## Design-to-Code Workflow

1. **Designer updates Figma**
   - Modifies component in Figma Design System file
   - Ensures design tokens are applied (not hardcoded colors)

2. **Developer exports from Figma**
   - Opens Builder.io plugin
   - Selects updated component(s)
   - Exports to React/Tailwind code

3. **Developer reviews & integrates**
   - Pastes generated code into component file
   - Reviews for quality (semantic tokens, proper structure)
   - Tests in browser
   - Commits to git

4. **Verify in live site**
   - Deploy to https://opencode-test-five.vercel.app
   - Confirm visual match with Figma design
```

### Step 4.2: Set Up Naming Conventions

**Figma → React naming must match exactly:**

| Figma Component      | React File               | Notes                             |
| -------------------- | ------------------------ | --------------------------------- |
| `Navigation`         | `Navigation.tsx`         | Main component matches Figma name |
| `Hero`               | `Hero.tsx`               |                                   |
| `Timeline`           | `Timeline.tsx`           |                                   |
| `DesignerSpotlights` | `DesignerSpotlights.tsx` |                                   |
| `Infographics`       | `Infographics.tsx`       |                                   |
| `WorldMap`           | `WorldMap.tsx`           |                                   |

**Component variants in Figma should include:**

- `[ComponentName]` — Main/default variant
- `[ComponentName]_Hover` — Hover state (if interactive)
- `[ComponentName]_Mobile` — Mobile responsive variant

---

## Checklist: Verifying Your Figma Setup

- [ ] All 12 color tokens created and named (Charcoal → Gold)
- [ ] Typography tokens created (H1, H2, H3, Body, Body Small, Caption)
- [ ] EB Garamond font imported and available
- [ ] Inter font imported and available
- [ ] All 6 components created as main component frames
- [ ] Component variants created for states (Default/Hover/Mobile)
- [ ] Color tokens applied to all text/backgrounds (not hardcoded hex values)
- [ ] Typography tokens applied to all text elements
- [ ] Figma-to-Code plugin installed and configured
- [ ] Test export completed and verified (generated code uses Tailwind classes)
- [ ] Component naming in Figma matches React file names exactly

---

## Next Steps After Setup

1. **Phase 3 Verification**: Export a component, paste into test file, verify it works
2. **Make small design change**: Update button color in Figma → Regenerate code → Compare output
3. **Document edge cases**: Note which components need manual tweaking after auto-generation (e.g., animations)
4. **Team alignment**: Share Figma file with designers; establish pull-request workflow for design changes

---

## Troubleshooting

**Q: Plugin generates code that doesn't match Tailwind classes?**

- A: Configure plugin to output Tailwind CSS mode, not inline CSS
- Verify design tokens are applied in Figma (not hardcoded colors)

**Q: Generated component doesn't render in my project?**

- A: Check that Tailwind config includes your color tokens from globals.css
- Verify React version compatibility with generated code

**Q: Colors in Figma don't match the live site?**

- A: Compare hex values in design-tokens.json with globals.css
- Ensure Figma color tokens are defined exactly (e.g., #1A1A1A, not #1a1a1a)

---

## Files Reference

- **Design Tokens**: [design-tokens.json](./design-tokens.json)
- **Figma Components**: Created in your Figma Design System file
- **React Components**: [src/components/](./src/components/)
- **Global Styles**: [src/app/globals.css](./src/app/globals.css)
- **Layout**: [src/app/layout.tsx](./src/app/layout.tsx)
