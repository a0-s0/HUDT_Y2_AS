# 🚀 Quick Auto-Setup Guide for OpenCode Figma

This guide provides automated setup options for your Figma design system.

## Option 1: Use Figma's Built-in Import (Fastest)

### For Design Tokens:

1. **Get a Figma Design Tokens Plugin:**
   - In Figma, go: **Plugins** → **Browse plugins**
   - Search for **"Design Tokens"** (by Design Tokens team) or **"Token Studio"**
   - Install the plugin

2. **Import tokens:**
   - Use the plugin to import from [design-tokens.json](./design-tokens.json)
   - The plugin will create all color and typography tokens automatically

3. **Expected result:** All 12 colors + 6 typography styles created in ~2 minutes

---

## Option 2: Use REST API + CLI Script (Most Automated)

If you want full programmatic automation:

### Prerequisites:

- Figma Personal Access Token (get it from account settings)
- Node.js installed

### Setup:

1. **Get your Figma token:**
   - Go to https://www.figma.com/settings/personal-access-tokens
   - Click **"Create a new token"**
   - Copy the token and save it safely

2. **Create a `.env` file** in your project:

   ```
   FIGMA_TOKEN=your_token_here
   FIGMA_FILE_ID=AmL36kU3qrQme0FX6wX0CX
   ```

3. **Run the auto-setup script:**

   ```bash
   npm install axios dotenv
   node figma-api-setup.js
   ```

4. **Result:** All design tokens, typography, and components created automatically ✓

---

## Option 3: Manual Setup (Most Control - ~30 min)

If you prefer manual but efficient setup, follow [FIGMA_SETUP_GUIDE.md](./FIGMA_SETUP_GUIDE.md) with keyboard shortcuts.

**Keyboard shortcuts to speed up:**

- **CMD+K** → Search for "Assets"
- **Right-click** → "Create color" (for each color token)
- **Duplicate** (CMD+D) color swatches to speed up creation

---

## Quick Comparison

| Method            | Time   | Automation    | Setup  |
| ----------------- | ------ | ------------- | ------ |
| Option 1 (Plugin) | 15 min | ✓✓✓ High      | Easy   |
| Option 2 (API)    | 5 min  | ✓✓✓ Very High | Medium |
| Option 3 (Manual) | 30 min | ✓ Low         | Simple |

---

## 🎯 Recommended: Use Plugin + Manual Components

1. **Use Option 1** to auto-create design tokens (colors + typography)
2. **Manually create components** in Figma (they're more visual and need design decisions)

This gives you 80% automation + full design control.

---

## Need Help?

- **Plugin not working?** Try searching for "Token Studio" instead - it's more feature-rich
- **API setup having issues?** Make sure your `FIGMA_FILE_ID` matches your file URL
- **Want to do it manually?** Open [FIGMA_SETUP_GUIDE.md § Phase 1.2](./FIGMA_SETUP_GUIDE.md#step-12-add-color-tokens)
