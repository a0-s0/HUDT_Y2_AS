# Figma Integration Roadmap

## Implementation Status: Phase 1 Complete ✓

You now have all the resources needed to set up your Figma design system locally and connect it to your codebase. This file serves as your central roadmap.

---

## 📋 Files Created for You

| File                                                           | Purpose                                                    | Next Action                                           |
| -------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| [design-tokens.json](./design-tokens.json)                     | Complete design token export (colors, typography, spacing) | Reference when setting up Figma design tokens         |
| [FIGMA_SETUP_GUIDE.md](./FIGMA_SETUP_GUIDE.md)                 | Step-by-step guide to create Figma file & components       | **Start here** — Follow Phase 1.1 → 1.5               |
| [COMPONENT_INVENTORY.md](./COMPONENT_INVENTORY.md)             | Detailed specs for each React component in Figma           | Reference while building Figma components (Phase 2)   |
| [GENERATED_CODE_QUALITY.md](./GENERATED_CODE_QUALITY.md)       | Quality checklist for auto-generated code                  | Use after exporting code from Figma plugin (Phase 3)  |
| [src/components/FigmaTest.tsx](./src/components/FigmaTest.tsx) | Placeholder for testing plugin exports                     | Paste generated Figma code here for testing (Phase 3) |

---

## 🚀 Quick Start: Next 3 Steps

### Step 1: Create Figma File (15 min)

1. Open [FIGMA_SETUP_GUIDE.md](./FIGMA_SETUP_GUIDE.md)
2. Follow **Phase 1.1** → Create new Figma file
3. Name it: `OpenCode Design System`
4. **Done:** You now have a Figma file open

### Step 2: Add Design Tokens to Figma (20 min)

1. Open [design-tokens.json](./design-tokens.json) for reference
2. In your Figma file, follow **Phase 1.2 → 1.5**:
   - Add 12 color tokens
   - Add typography tokens (EB Garamond, Inter)
   - Document spacing scale
   - Add glass effects
3. **Done:** Your Figma file now has design tokens

### Step 3: Create Component Library (1-2 hours)

1. In Figma, create a new page: "Components"
2. Open [COMPONENT_INVENTORY.md](./COMPONENT_INVENTORY.md)
3. For each component (Navigation, Hero, Timeline, etc.):
   - Create a frame with the specified size
   - Add content (text, shapes, images)
   - Apply design tokens (not hardcoded colors)
   - Create component variants (Desktop/Mobile, Hover/Default)
4. **Done:** You have a component library in Figma

---

## 🔄 Workflow: After Phase 1 Setup

Once your Figma file is created with design tokens and components:

1. **Install Figma-to-Code Plugin**
   - Open Figma
   - Plugins → Search for "Builder.io" (recommended)
   - Install and configure for React + Tailwind

2. **Test Export**
   - Select one simple component in Figma
   - Open plugin → Export to React
   - Copy generated code
   - Paste into [src/components/FigmaTest.tsx](./src/components/FigmaTest.tsx)
   - Run `npm run dev` and verify it renders correctly

3. **Verify Code Quality**
   - Check against [GENERATED_CODE_QUALITY.md](./GENERATED_CODE_QUALITY.md)
   - Fix any issues (hardcoded colors, inline styles, etc.)
   - Document patterns that need manual fixing

4. **Establish Workflow**
   - Document your team's process in [DESIGN_WORKFLOW.md](./DESIGN_WORKFLOW.md) (optional)
   - Set expectations: when to regenerate vs. when to manually edit
   - Version control: commit design changes with code changes

---

## 📊 Design System Overview

### Colors (12 tokens)

- **Darks:** Charcoal, Charcoal Light
- **Lights:** Off-White, Light Gray, White
- **Warm Neutrals:** Beige, Beige Light, Beige Dark
- **Utilities:** Border, Silver, Silver Light, Gold

**Reference:** [design-tokens.json → colors](./design-tokens.json)

### Typography (2 font families)

- **EB Garamond** — Headings (weights: 400–800)
- **Inter** — Body text (weights: 400–700)

**Reference:** [design-tokens.json → typography](./design-tokens.json)

### Components (6 total)

1. Navigation — Header nav bar
2. Hero — Landing hero section
3. Timeline — Historical timeline
4. DesignerSpotlights — Designer feature cards
5. Infographics — Data visualization
6. WorldMap — Geographic map

**Detailed specs:** [COMPONENT_INVENTORY.md](./COMPONENT_INVENTORY.md)

---

## ✅ Checklist: Phase 1 Complete

- [ ] Read [FIGMA_SETUP_GUIDE.md](./FIGMA_SETUP_GUIDE.md) completely
- [ ] Create new Figma file: "OpenCode Design System"
- [ ] Add 12 color tokens to Figma (Phase 1.2)
- [ ] Import EB Garamond and Inter fonts
- [ ] Add typography tokens to Figma (Phase 1.3)
- [ ] Document spacing scale in Figma (Phase 1.4)
- [ ] Create 6 component frames (Phase 2.1)
  - [ ] Navigation (1440×80px)
  - [ ] Hero (1440×600px)
  - [ ] Timeline (1440×800px)
  - [ ] DesignerSpotlights (1440×600px)
  - [ ] Infographics (1440×500px)
  - [ ] WorldMap (1440×600px)
- [ ] Add component variants for states/responsiveness (Phase 2.2)
- [ ] Apply design tokens to all components (no hardcoded colors)
- [ ] Component names in Figma match React file names exactly

**Once checklist is complete:** You're ready for Phase 3 (Install plugin & test export)

---

## 🔗 File Dependencies

```
design-tokens.json
├─ Referenced by: FIGMA_SETUP_GUIDE.md (Phase 1.2 color creation)
├─ Referenced by: COMPONENT_INVENTORY.md (color/typography tables)
└─ Referenced by: GENERATED_CODE_QUALITY.md (translation guide)

FIGMA_SETUP_GUIDE.md
├─ Provides: Step-by-step setup instructions (Phases 1-4)
├─ References: design-tokens.json for token values
└─ Links to: COMPONENT_INVENTORY.md for component specs

COMPONENT_INVENTORY.md
├─ Provides: Detailed specs for each component
├─ References: design-tokens.json for color/typography details
└─ Used during: Figma component creation (Phase 2)

GENERATED_CODE_QUALITY.md
├─ Provides: Quality checklist for exported code
├─ Used during: Phase 3 (plugin testing) and Phase 4 (ongoing)
└─ References: design-tokens.json for Figma → Tailwind mapping

FigmaTest.tsx
├─ Purpose: Test component exports from Figma plugin
├─ Used in: Phase 3 (verification)
└─ Output: Confirms plugin generates proper Tailwind code
```

---

## 🎯 Success Criteria

Your Figma setup is complete when:

1. **Design Tokens** ✓
   - All 12 colors defined and named in Figma
   - All typography tokens created (H1–Caption)
   - Spacing scale documented
   - Glass effects defined

2. **Component Library** ✓
   - All 6 components created as Figma components
   - Components have responsive variants (Mobile/Desktop)
   - All text uses typography tokens
   - All colors use color tokens (NOT hardcoded hex)
   - Component names match React file names exactly

3. **Auto-Generation Ready** ✓
   - Plugin installed (Builder.io recommended)
   - Plugin configured for React + Tailwind output
   - Test export successful ([FigmaTest.tsx](./src/components/FigmaTest.tsx) renders correctly)
   - Generated code uses Tailwind classes (not inline styles)

4. **Workflow Established** ✓
   - Team understands design-to-code flow
   - Documentation exists for common issues
   - Code review process includes Figma verification

---

## 📞 Support: Common Questions

**Q: How long does Phase 1 take?**
A: ~2-3 hours total (30 min setup, 1.5 hours components, 30 min verification)

**Q: Can I skip Figma and just update the code?**
A: Yes, but then you lose the visual design tool and auto-generation benefits. The purpose of this setup is to keep design and code in sync.

**Q: What if my components are more complex than shown?**
A: Create variants in Figma for each state/size. The plugin will generate separate code for each variant.

**Q: Do animations export from Figma to code?**
A: Limited support. Static layouts export well; animations (Framer Motion) should be implemented manually in React.

**Q: Can multiple team members edit the Figma file?**
A: Yes, if using Figma workspace (not export). This enables real-time collaboration.

---

## 🎓 Learning Resources

- **Figma Design Systems:** https://www.figma.com/design-systems/
- **Figma Tokens & Variables:** https://help.figma.com/en/articles/15145231-guide-to-variables
- **Builder.io Figma Plugin:** https://www.builder.io/blog/figma-to-code
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Design Tokens Spec:** https://design-tokens.github.io/community-group/format/

---

## 📝 Next: Phase 2 Details

After completing Phase 1, proceed to [FIGMA_SETUP_GUIDE.md#phase-2-create-component-library](./FIGMA_SETUP_GUIDE.md#phase-2-create-component-library) for detailed Phase 2 instructions.

**Current Phase:** 1 (Design Tokens Setup)  
**Next Phase:** 2 (Component Library Creation)  
**Then:** Phase 3 (Auto-Code Generation) → Phase 4 (Workflow Documentation)

---

## Version History

| Date       | Phase | Status                                      |
| ---------- | ----- | ------------------------------------------- |
| 2026-05-06 | 1     | ✓ Complete — All supporting files created   |
| 2026-05-06 | 2     | ⏳ Pending — Start when Figma file is ready |
| 2026-05-06 | 3     | ⏳ Pending — After components created       |
| 2026-05-06 | 4     | ⏳ Pending — After plugin testing           |

---

## 🚀 Ready to Start?

1. **Open [FIGMA_SETUP_GUIDE.md](./FIGMA_SETUP_GUIDE.md)**
2. **Follow Phase 1.1** (Create Figma file)
3. **Continue through Phase 1.5** (Setup design tokens)
4. **Move to Phase 2** (Create component library)

**Time to completion:** 2-3 hours  
**Team size:** 1 designer or 1 developer (both can follow the guide)  
**Result:** Production-ready Figma design system connected to your React codebase

Good luck! 🎨
