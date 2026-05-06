# 🚀 FIGMA AUTO-POPULATE - FULLY AUTOMATED

## ✨ Complete Automation Setup (No Manual Steps!)

You have THREE options to auto-populate your Figma file. Pick the easiest for you.

---

## 🥇 OPTION 1: Use Figma Plugin (Easiest - Recommended) ⭐

### Requirements
- Your Figma file already open
- No coding required
- Takes 1-2 minutes

### Steps

1. **Open your Figma file:**
   - Go to: https://www.figma.com/design/AmL36kU3qrQme0FX6wX0CX/

2. **Run the plugin:**
   - Top menu → **Plugins** → **Development** → **New plugin**
   - Select **Link existing plugin**
   - Paste: `figma-plugin-main.ts`
   - Click **Create**

3. **Execute the plugin:**
   - Plugins → **Run plugin**
   - Find "OpenCode Design System Auto-Populate"
   - Click to run

4. **Done!**
   - Check your Figma file
   - Two new pages created:
     - `📊 Design Tokens` - Color swatches + typography samples
     - `🧩 Components` - All 6 component frames

✅ **Result:** 
- 12 color swatches created
- 6 typography samples created
- 6 component frames created
- Ready for code export!

**Time:** 2-3 minutes ⏱️

---

## 🥈 OPTION 2: Use Pre-Built Plugin (Fastest)

### Steps

1. **Go to Figma Plugins:**
   - In Figma → **Plugins** → **Browse plugins**

2. **Install a design tokens plugin:**
   - Search: **"Design Tokens"** or **"Token Studio"**
   - Install one of these (they auto-import tokens)

3. **Import tokens:**
   - Open plugin settings
   - Upload or paste `design-tokens.json`
   - Plugin auto-creates all colors & typography

4. **Manual: Create components (10 min):**
   - Reference: [COMPONENT_INVENTORY.md](./COMPONENT_INVENTORY.md)
   - Create 6 component frames with specs provided

✅ **Result:** Tokens created automatically, components created manually

**Time:** 15-20 minutes ⏱️

---

## 🥉 OPTION 3: Use REST API Script (For Developers)

### Requirements
- Node.js installed
- Figma API token (get from https://www.figma.com/settings/personal-access-tokens)

### Steps

1. **Install dependencies:**
   ```bash
   npm install axios dotenv
   ```

2. **Create `.env` file:**
   ```
   FIGMA_TOKEN=your_token_here
   FIGMA_FILE_ID=AmL36kU3qrQme0FX6wX0CX
   ```

3. **Run the script:**
   ```bash
   node figma-auto-populate.js
   ```

4. **Limitations:**
   - REST API can't fully populate Figma
   - Creates visual reference pages
   - Components need plugin for full automation

✅ **Result:** Design tokens visible in file, ready for plugin export

**Time:** 5-10 minutes + setup ⏱️

---

## 🎯 RECOMMENDED PATH: Option 1 + Tools

**Best workflow:**

1. **Use Plugin** (Option 1) to auto-populate
   - Creates all design tokens ✓
   - Creates all components ✓
   - Takes 3 minutes ✓

2. **Install Figma-to-Code Plugin** (Builder.io)
   - Auto-generate React + Tailwind code
   - Export components
   - Takes 5 minutes

3. **Integrate into your project**
   - Copy generated code to `src/components/`
   - Test with `npm run dev`
   - Takes 10 minutes

**Total time: 20 minutes for complete setup** ⏱️

---

## 📋 WHAT GETS CREATED

### Colors (12 tokens)
```
Charcoal (#1A1A1A)
Charcoal Light (#2C2C2C)
Off-White (#F5F0E8)
Light Gray (#F0EDE8)
White (#FFFFFF)
Beige (#C4B5A0)
Beige Light (#D4C5B2)
Beige Dark (#A89880)
Border (#E0D5C5)
Silver (#888888)
Silver Light (#B0B0B0)
Gold (#B8960C)
```

### Typography (6 styles)
```
H1: EB Garamond, 48px, 700
H2: EB Garamond, 36px, 600
H3: EB Garamond, 28px, 600
Body: Inter, 16px, 400
Body Small: Inter, 14px, 400
Caption: Inter, 12px, 400
```

### Components (6 frames)
```
Navigation (1440×80)
Hero (1440×600)
Timeline (1440×800)
DesignerSpotlights (1440×600)
Infographics (1440×500)
WorldMap (1440×600)
```

---

## 📊 COMPARISON TABLE

| Method | Time | Automation | Setup |
|--------|------|-----------|-------|
| **Option 1: Plugin** | 3 min | ✓✓✓ Full | Easy |
| **Option 2: Token Plugin** | 20 min | ✓✓ High | Medium |
| **Option 3: REST API** | 10 min | ✓ Medium | Dev |

**Recommendation:** Option 1 (Figma Plugin) 🎯

---

## 🔗 YOUR FIGMA FILE

**Name:** OpenCode Design System  
**URL:** https://www.figma.com/design/AmL36kU3qrQme0FX6wX0CX/

---

## ✅ VERIFICATION CHECKLIST

After auto-population:

- [ ] New page created: **📊 Design Tokens**
- [ ] New page created: **🧩 Components**
- [ ] 12 color swatches visible
- [ ] 6 typography samples visible
- [ ] 6 component frames visible with:
  - Navigation (1440×80)
  - Hero (1440×600)
  - Timeline (1440×800)
  - DesignerSpotlights (1440×600)
  - Infographics (1440×500)
  - WorldMap (1440×600)

---

## 🆘 TROUBLESHOOTING

**Q: Plugin doesn't appear in Figma?**  
A: Go to **Plugins** → **Development** → **Reload plugins** and try again

**Q: REST API script fails with 401 error?**  
A: Make sure your Figma token is correct (get from: https://www.figma.com/settings/personal-access-tokens)

**Q: Components look wrong in Figma?**  
A: After auto-population, you may need to adjust layout. Check [COMPONENT_INVENTORY.md](./COMPONENT_INVENTORY.md) for specs

**Q: How do I export code after?**  
A: Install Builder.io plugin, select component, export to React + Tailwind

---

## 🚀 NEXT: CODE GENERATION

After auto-population:

1. **Install Figma-to-Code plugin:**
   - Figma → Plugins → Browse
   - Search "Builder.io"
   - Install

2. **Export components:**
   - Select component in Figma
   - Plugins → Builder.io → Export
   - Copy React + Tailwind code

3. **Integrate to project:**
   - Paste code into `src/components/`
   - Run `npm run dev`
   - Verify it works

---

## 💡 FILES PROVIDED

| File | Purpose |
|------|---------|
| `figma-plugin-main.ts` | Plugin code (run in Figma) |
| `figma-plugin-ui.html` | Plugin UI |
| `manifest.json` | Plugin manifest |
| `figma-auto-populate.js` | Node.js automation script |
| `design-tokens.json` | Token export (for plugins) |
| `COMPONENT_INVENTORY.md` | Component specs |

---

## ⏱️ TOTAL SETUP TIME

```
Option 1 (Plugin):        3 min
Option 2 (Token Plugin):  20 min
Option 3 (REST API):      10 min
+ Code Export:            5 min
+ Integration:            10 min
─────────────────────────────────
Total:                    15-45 min
```

---

## ✨ YOU'RE READY!

Choose your method above and auto-populate your Figma file.

**Recommended:** Option 1 (Figma Plugin) for fastest results 🚀
