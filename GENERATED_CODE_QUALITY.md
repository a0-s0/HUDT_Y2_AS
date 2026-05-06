# Auto-Generated Code Quality Checklist

This document defines what "good" Figma-to-Code exports should look like for this project.

## ✓ Good Auto-Generated Code Example

```tsx
// GOOD ✓ — Uses design tokens, proper Tailwind classes, no inline styles
export function HeroSection() {
  return (
    <section className="bg-offwhite py-20 px-8">
      <h1 className="font-heading text-charcoal text-4xl font-bold mb-4">
        Welcome to Fashion Culture
      </h1>
      <p className="font-body text-silver text-lg mb-8">
        An interactive exploration of 1995–1999
      </p>
      <button className="bg-gold text-white px-6 py-3 rounded font-body font-semibold hover:bg-beige-dark transition-colors\">
        Explore Timeline
      </button>
    </section>
  );
}
```

**Why this is good:**

- ✓ Uses Tailwind color tokens: `bg-offwhite`, `text-charcoal`, `bg-gold`
- ✓ Uses custom font tokens: `font-heading`, `font-body`
- ✓ Spacing in Tailwind units: `py-20`, `px-8`, `mb-4`
- ✓ Responsive-friendly structure
- ✓ Semantic HTML (`<section>`, `<h1>`, `<p>`, `<button>`)
- ✓ No hardcoded hex values or inline styles
- ✓ Proper TypeScript syntax

---

## ✗ Bad Auto-Generated Code Example

```tsx
// BAD ✗ — Hardcoded colors, inline styles, non-semantic HTML
export function HeroSection() {
  return (
    <div style={{ backgroundColor: "#F5F0E8", padding: "80px 32px" }}>
      <div
        style={{
          fontFamily: "EB Garamond",
          color: "#1A1A1A",
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        Welcome to Fashion Culture
      </div>
      <div
        style={{
          fontFamily: "Inter",
          color: "#888888",
          fontSize: "18px",
          marginBottom: "32px",
        }}
      >
        An interactive exploration of 1995–1999
      </div>
      <button
        style={{
          backgroundColor: "#B8960C",
          color: "#FFFFFF",
          padding: "12px 24px",
          borderRadius: "4px",
        }}
      >
        Explore Timeline
      </button>
    </div>
  );
}
```

**Why this is bad:**

- ✗ Hardcoded hex values instead of Tailwind classes
- ✗ Inline styles instead of utility classes
- ✗ Non-semantic HTML (divs instead of `<section>`, `<h1>`, `<p>`, `<button>`)
- ✗ Not maintainable — color changes require editing styles
- ✗ Not responsive — hardcoded pixel values
- ✗ Difficult to integrate with your design system

---

## Quality Checklist: Before Accepting Generated Code

When you export a component from Figma, check each item:

### Structure & Semantics

- [ ] Uses semantic HTML tags (`<section>`, `<article>`, `<h1>-`<h6>`, `<button>`, `<nav>`, etc.)
- [ ] No unnecessary wrapper `<div>`s
- [ ] Proper component naming (matches Figma component name)
- [ ] Props are properly typed (TypeScript interfaces if needed)

### Styling

- [ ] All colors use Tailwind classes: `text-charcoal`, `bg-offwhite`, `border-border`, etc.
- [ ] NO inline `style={{}}` attributes with hardcoded colors
- [ ] NO direct hex values like `color="#1A1A1A"`
- [ ] All spacing in Tailwind units: `px-4`, `py-6`, `mb-8` (not `padding: 16px`)
- [ ] Typography uses font tokens: `font-heading`, `font-body` (not `fontFamily: 'EB Garamond'`)
- [ ] Text sizes use Tailwind scale: `text-sm`, `text-base`, `text-lg`, `text-2xl`, `text-4xl`
- [ ] Font weights use Tailwind scale: `font-normal`, `font-semibold`, `font-bold`
- [ ] Hover/active states use `hover:` and `active:` prefixes (not hardcoded `:hover` CSS)

### Tailwind Classes (Examples)

```
✓ GOOD:  className="bg-offwhite text-charcoal px-4 py-6 rounded"
✗ BAD:   className="bg-[#F5F0E8] text-[#1A1A1A]" or style={{ backgroundColor: '#F5F0E8' }}

✓ GOOD:  className="font-heading text-2xl font-bold"
✗ BAD:   style={{ fontFamily: 'EB Garamond', fontSize: '32px', fontWeight: 'bold' }}

✓ GOOD:  className="hover:bg-beige-dark transition-colors"
✗ BAD:   onMouseOver={() => setHovered(true)} with conditional styles
```

### Design Tokens

- [ ] All colors map to defined tokens (see [design-tokens.json](./design-tokens.json))
- [ ] All fonts are `font-heading` (EB Garamond) or `font-body` (Inter)
- [ ] No arbitrary color values like `#C4B5A0` without corresponding Tailwind class
- [ ] No arbitrary sizes that don't fit the 4px grid (e.g., `px-7` instead of `px-6` or `px-8`)

### Responsive Design

- [ ] Component includes responsive variants: `sm:`, `md:`, `lg:` prefixes
- [ ] Mobile (375px), Tablet (768px), Desktop (1440px) layouts are considered
- [ ] Responsive fonts: `text-lg sm:text-xl md:text-2xl lg:text-4xl`
- [ ] Responsive spacing: `px-4 sm:px-6 md:px-8 lg:px-12`

### React/TypeScript Best Practices

- [ ] Component is a named export: `export function ComponentName() {}`
- [ ] Props interface is defined (if component has props)
- [ ] No console.logs or debug code left in
- [ ] No hardcoded data (use props or config)
- [ ] Proper event handlers (not inline arrow functions if avoidable)

### Performance & Maintainability

- [ ] No inline object creation in className (use constants if complex)
- [ ] No unnecessary re-renders
- [ ] Comments or JSDoc for complex sections
- [ ] Consistent formatting and indentation

---

## Translation Guide: Figma Design → Tailwind Code

| Figma Design Property        | Tailwind Class           | Notes                  |
| ---------------------------- | ------------------------ | ---------------------- |
| Fill: Charcoal (#1A1A1A)     | `bg-charcoal`            | For backgrounds        |
| Text: Charcoal (#1A1A1A)     | `text-charcoal`          | For text content       |
| Fill: Off-White (#F5F0E8)    | `bg-offwhite`            | Primary background     |
| Stroke: Border (#E0D5C5)     | `border-border`          | 1px border             |
| Text Color: Silver (#888888) | `text-silver`            | Secondary text         |
| Fill/Text: Gold (#B8960C)    | `bg-gold` / `text-gold`  | Accent color           |
| Font: EB Garamond            | `font-heading`           | Headings, display text |
| Font: Inter                  | `font-body`              | Body text, labels      |
| Font Size: 48px              | `text-4xl`               | Large headings         |
| Font Size: 36px              | `text-3xl`               | Medium headings        |
| Font Size: 24px              | `text-2xl`               | Small headings         |
| Font Size: 18px              | `text-lg`                | Large body text        |
| Font Size: 16px              | `text-base`              | Standard body text     |
| Font Size: 14px              | `text-sm`                | Small text             |
| Font Size: 12px              | `text-xs`                | Captions, fine print   |
| Font Weight: 700             | `font-bold`              | Bold text              |
| Font Weight: 600             | `font-semibold`          | Semi-bold              |
| Font Weight: 500             | `font-medium`            | Medium weight          |
| Font Weight: 400             | `font-normal`            | Regular weight         |
| Padding: 16px                | `px-4` / `py-4`          | Standard padding       |
| Padding: 24px                | `px-6` / `py-6`          | Comfortable padding    |
| Padding: 32px                | `px-8` / `py-8`          | Large padding          |
| Margin: 16px                 | `mb-4` / `mt-4` / `mx-4` | Spacing                |
| Margin: 24px                 | `mb-6` / `mt-6` / `mx-6` | Larger spacing         |
| Margin: 32px                 | `mb-8` / `mt-8` / `mx-8` | Large spacing          |
| Border Radius: 4px           | `rounded`                | Default radius         |
| Border Radius: 8px           | `rounded-lg`             | Larger radius          |
| Opacity: 50%                 | `opacity-50`             | Semi-transparent       |
| Box Shadow                   | `shadow` / `shadow-lg`   | Elevation              |
| Hover State                  | `hover:bg-gold`          | Hover variant          |
| Blur (12px)                  | `backdrop-blur-xl`       | Backdrop blur          |

---

## Example: Component Refactor (Bad → Good)

**Input: Auto-generated code that needs fixes**

```tsx
export function DesignerCard() {
  return (
    <div
      style={{
        backgroundColor: "#F0EDE8",
        border: "1px solid #E0D5C5",
        padding: "20px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontFamily: "EB Garamond",
          fontWeight: "600",
          color: "#1A1A1A",
          marginBottom: "12px",
        }}
      >
        Designer Name
      </div>
      <div
        style={{
          fontSize: "14px",
          fontFamily: "Inter",
          color: "#888888",
          lineHeight: "1.6",
        }}
      >
        Designer bio goes here
      </div>
    </div>
  );
}
```

**Output: Refactored to follow best practices**

```tsx
export function DesignerCard() {
  return (
    <article className="bg-light-gray border border-border rounded p-5">
      <h3 className="font-heading text-charcoal text-lg font-semibold mb-3">
        Designer Name
      </h3>
      <p className="font-body text-silver text-sm leading-relaxed">
        Designer bio goes here
      </p>
    </article>
  );
}
```

**Changes made:**

- Replaced inline `style={{}}` with Tailwind classes
- Changed `<div>` to semantic `<article>`
- Replaced hardcoded hex values with color tokens
- Replaced `fontSize` with Tailwind text scale (`text-lg`, `text-sm`)
- Replaced `fontFamily` with font tokens (`font-heading`, `font-body`)
- Replaced `fontWeight` with Tailwind weight classes
- Replaced `padding: 20px` with `p-5` (20px in 4px units)
- Used Tailwind spacing units for margins (`mb-3` = 12px)
- Proper semantic HTML with `<article>` and `<h3>`

---

## Troubleshooting: Common Generated Code Issues

### Issue 1: Arbitrary Color Values

```tsx
// ✗ BAD: Arbitrary color
<div className="bg-[#F5F0E8]"></div>

// ✓ GOOD: Use defined token
<div className="bg-offwhite"></div>
```

**Fix:** Make sure Figma design tokens are properly set up, then configure the plugin to use design tokens, not arbitrary values.

### Issue 2: Inline Styles Override Classes

```tsx
// ✗ BAD: Inline styles bypass Tailwind
<button className="px-4 py-2" style={{ backgroundColor: '#B8960C' }}>

// ✓ GOOD: Pure Tailwind
<button className="px-4 py-2 bg-gold">
```

**Fix:** Configure plugin to prefer Tailwind classes over inline styles.

### Issue 3: Non-Semantic HTML

```tsx
// ✗ BAD: Divs everywhere
<div className="font-heading text-2xl font-bold">
<div className="text-silver text-sm">
<div className="bg-gold text-white px-4 py-2">

// ✓ GOOD: Semantic tags
<h2 className="font-heading text-2xl font-bold">
<p className="text-silver text-sm">
<button className="bg-gold text-white px-4 py-2">
```

**Fix:** After generation, convert div wrappers to appropriate semantic tags.

### Issue 4: Missing Responsive Variants

```tsx
// ✗ BAD: No responsive design
<div className="px-8 py-20">

// ✓ GOOD: Responsive spacing
<div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
```

**Fix:** Manually add responsive variants based on your breakpoints (375px, 768px, 1440px).

---

## Next Steps

1. **Export a test component** from Figma using the plugin
2. **Paste code into** [src/components/FigmaTest.tsx](./src/components/FigmaTest.tsx)
3. **Check against this checklist** — fix any items marked ✗
4. **Test in browser** — `npm run dev` and verify visual match
5. **Document any patterns** you notice that need manual fixing
6. **Establish fix workflow** — e.g., "Run plugin → Refactor color values → Commit"
