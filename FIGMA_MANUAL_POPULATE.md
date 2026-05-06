# 🚀 MANUAL FIGMA POPULATION GUIDE - Fast Track

Since Figma API has limitations for creating styles programmatically, here's the **fastest manual way** to populate your file:

## ⏱️ Time Estimate: 20-30 minutes (with copy-paste data)

---

## 📋 PART 1: Add Color Tokens (10-15 min)

### Method 1: Import from CSV (Fastest)

1. **Download this CSV data:**
   - Right-click → "Save CSV" → Name it `colors.csv`

```csv
Color Name,Hex Value,Usage
Charcoal,#1A1A1A,Primary dark text
Charcoal Light,#2C2C2C,Secondary dark
Off-White,#F5F0E8,Primary light background
Light Gray,#F0EDE8,Secondary background
White,#FFFFFF,Pure white
Beige,#C4B5A0,Warm neutral
Beige Light,#D4C5B2,Light beige
Beige Dark,#A89880,Dark beige
Border,#E0D5C5,Border color
Silver,#888888,Secondary text
Silver Light,#B0B0B0,Light text
Gold,#B8960C,Accent highlight
```

2. **In Figma:**
   - Open your **OpenCode Design System** file
   - Right sidebar → **Assets** tab
   - Click **Colors** section
   - Click the **+** icon or right-click → **Create color**

3. **For each color:**
   - Name: Copy from "Color Name" column
   - Hex: Copy from "Hex Value" column
   - Click **Create**

### Method 2: Keyboard Shortcut Speed-Up

**On Mac (fastest):**

```
1. Press ⌘K (Command palette)
2. Type "Create color"
3. Press Enter
4. Type color name (e.g., "Charcoal")
5. Paste hex value (e.g., "#1A1A1A")
6. Press Enter
7. Repeat 12 times
```

**Estimated time:** 10-15 minutes for all 12 colors

---

## 📝 PART 2: Add Typography Styles (5-10 min)

### Step 1: Ensure Fonts Are Available

1. In Figma, right sidebar → **Assets**
2. Click **Typography** section
3. Look for font options → Make sure **EB Garamond** and **Inter** are listed
4. If not:
   - Click font dropdown → Search "EB Garamond"
   - Click to add from Google Fonts
   - Repeat for "Inter"

### Step 2: Create Typography Tokens

**Copy-paste ready data:**

```
H1
Font: EB Garamond
Size: 48px
Weight: 700 (Bold)
Line Height: 1.2 (120%)

H2
Font: EB Garamond
Size: 36px
Weight: 600 (Semi-Bold)
Line Height: 1.3 (130%)

H3
Font: EB Garamond
Size: 28px
Weight: 600 (Semi-Bold)
Line Height: 1.3 (130%)

Body
Font: Inter
Size: 16px
Weight: 400 (Regular)
Line Height: 1.5 (150%)

Body Small
Font: Inter
Size: 14px
Weight: 400 (Regular)
Line Height: 1.5 (150%)

Caption
Font: Inter
Size: 12px
Weight: 400 (Regular)
Line Height: 1.4 (140%)
```

**In Figma:**

1. Right sidebar → **Assets** → **Typography**
2. Click **+** or right-click → **Create typography**
3. For each style above:
   - Set font, size, weight, line height
   - Click **Create**
   - Name it (H1, H2, H3, Body, Body Small, Caption)

**Estimated time:** 5-10 minutes for all 6 styles

---

## 🧩 PART 3: Create Component Frames (10-15 min)

### Step 1: Create New Page

1. In Figma, bottom left → **Pages** panel
2. Click **+** → Create new page
3. Name it: **🧩 Components**

### Step 2: Create Component Frames

**Copy-paste ready specs:**

For **each component** below:

1. Click **Frame** tool (keyboard: `F`)
2. Draw on canvas → Set size to specs
3. Name it exactly as shown
4. Set background to Off-White (#F5F0E8)
5. Add placeholder text
6. Click the **component** icon to make it a main component

```
COMPONENT 1: Navigation
Size: 1440 × 80
Background: Off-White (#F5F0E8)
Content:
  - Title: "Navigation" (EB Garamond, 32px, Charcoal)
  - Subtitle: "Header navigation bar" (Inter, 14px, Silver)

COMPONENT 2: Hero
Size: 1440 × 600
Background: Off-White (#F5F0E8)
Content:
  - Title: "Hero" (EB Garamond, 32px, Charcoal)
  - Subtitle: "Landing hero section" (Inter, 14px, Silver)

COMPONENT 3: Timeline
Size: 1440 × 800
Background: Off-White (#F5F0E8)
Content:
  - Title: "Timeline" (EB Garamond, 32px, Charcoal)
  - Subtitle: "Historical timeline" (Inter, 14px, Silver)

COMPONENT 4: DesignerSpotlights
Size: 1440 × 600
Background: Off-White (#F5F0E8)
Content:
  - Title: "DesignerSpotlights" (EB Garamond, 32px, Charcoal)
  - Subtitle: "Designer feature cards" (Inter, 14px, Silver)

COMPONENT 5: Infographics
Size: 1440 × 500
Background: Off-White (#F5F0E8)
Content:
  - Title: "Infographics" (EB Garamond, 32px, Charcoal)
  - Subtitle: "Data visualization" (Inter, 14px, Silver)

COMPONENT 6: WorldMap
Size: 1440 × 600
Background: Off-White (#F5F0E8)
Content:
  - Title: "WorldMap" (EB Garamond, 32px, Charcoal)
  - Subtitle: "Geographic map" (Inter, 14px, Silver)
```

**Keyboard shortcuts to speed up:**

- `F` - Frame tool
- `T` - Text tool
- `Cmd+D` - Duplicate (to create next component faster)
- `Cmd+Shift+G` - Group

**Estimated time:** 10-15 minutes for all 6 components

---

## ✅ VERIFICATION CHECKLIST

After completing all steps, verify:

- [ ] **Colors Panel:**
  - 12 colors visible in Assets → Colors
  - All names match (Charcoal, Off-White, Beige, Gold, etc.)
  - All hex values correct (check one: Gold should be #B8960C)

- [ ] **Typography Panel:**
  - 6 typography styles visible in Assets → Typography
  - H1, H2, H3, Body, Body Small, Caption all listed
  - EB Garamond used for H1, H2, H3
  - Inter used for Body, Body Small, Caption

- [ ] **Components Page:**
  - New page "🧩 Components" created
  - 6 component frames visible:
    - Navigation (1440×80)
    - Hero (1440×600)
    - Timeline (1440×800)
    - DesignerSpotlights (1440×600)
    - Infographics (1440×500)
    - WorldMap (1440×600)
  - All components have placeholder text
  - All backgrounds are Off-White

---

## 🎯 WHAT TO DO NEXT

After populating:

1. **Optional: Create Variants**
   - For each component, create variants for:
     - State: Default, Hover, Active
     - Size: Mobile (375px), Desktop (1440px)
   - Right-click component → Create component set

2. **Install Plugin**
   - Figma → Plugins → Browse
   - Search "Builder.io"
   - Install and configure for React + Tailwind

3. **Export Components**
   - Select component
   - Open plugin → Export to React
   - Copy generated code

4. **Test Export**
   - Paste code into [src/components/FigmaTest.tsx](../src/components/FigmaTest.tsx)
   - Run `npm run dev`
   - Verify it renders correctly

---

## 💡 TIPS FOR FASTER SETUP

1. **Use copy-paste** instead of typing:
   - Copy color names and hex values from sections above
   - Paste into Figma directly

2. **Duplicate to speed up:**
   - Create first component → Cmd+D to duplicate
   - Just change name and size for next component

3. **Use keyboard shortcuts:**
   - `F` for Frame
   - `T` for Text
   - `Cmd+Shift+G` for Group
   - `Cmd+K` for search

4. **Window management:**
   - Keep this guide visible on one half
   - Figma open on other half
   - Easy copy-paste

5. **Batch similar tasks:**
   - Add all 12 colors first (one by one)
   - Then add all 6 typography styles
   - Then create all 6 components
   - Avoid context switching

---

## ⏱️ TOTAL TIME BREAKDOWN

| Task                    | Time          |
| ----------------------- | ------------- |
| Add 12 colors           | 10-15 min     |
| Add 6 typography styles | 5-10 min      |
| Create 6 components     | 10-15 min     |
| Verify all items        | 5 min         |
| **TOTAL**               | **30-45 min** |

---

## 🆘 STUCK?

**Q: Can't find the Assets panel?**  
A: Right sidebar, should be next to "Design". If not, click the tabs until you find it.

**Q: Font not available?**  
A: In typography dropdown, search for it. If still not found, it will auto-download from Google Fonts.

**Q: How do I make something a component?**  
A: Select it → Right-click → "Create component" OR click the component icon in right panel

**Q: My colors look different than shown?**  
A: Make sure you're using exact hex values (case-insensitive, but be exact)

---

## ✨ YOU'RE READY!

Everything above is just copy-paste data. No complex setup needed.

**Time to complete: 30-45 minutes**

Good luck! 🎉
