// Figma Plugin: Auto-Setup OpenCode Design System
// This plugin automatically creates all design tokens, typography, and component frames

const designTokens = {
  colors: {
    charcoal: { name: "Charcoal", hex: "#1A1A1A" },
    "charcoal-light": { name: "Charcoal Light", hex: "#2C2C2C" },
    "off-white": { name: "Off-White", hex: "#F5F0E8" },
    "light-gray": { name: "Light Gray", hex: "#F0EDE8" },
    white: { name: "White", hex: "#FFFFFF" },
    beige: { name: "Beige", hex: "#C4B5A0" },
    "beige-light": { name: "Beige Light", hex: "#D4C5B2" },
    "beige-dark": { name: "Beige Dark", hex: "#A89880" },
    border: { name: "Border", hex: "#E0D5C5" },
    silver: { name: "Silver", hex: "#888888" },
    "silver-light": { name: "Silver Light", hex: "#B0B0B0" },
    gold: { name: "Gold", hex: "#B8960C" },
  },
  typography: {
    h1: {
      name: "H1",
      fontFamily: "EB Garamond",
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      name: "H2",
      fontFamily: "EB Garamond",
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      name: "H3",
      fontFamily: "EB Garamond",
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body: {
      name: "Body",
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    "body-small": {
      name: "Body Small",
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      name: "Caption",
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0, g: 0, b: 0 };
}

function createColorLibraryItems() {
  const libraryItems = [];

  for (const [key, color] of Object.entries(designTokens.colors)) {
    const rgb = hexToRgb(color.hex);
    const paint = {
      type: "SOLID",
      color: { r: rgb.r, g: rgb.g, b: rgb.b },
    };

    libraryItems.push({
      name: color.name,
      key: key,
      type: "PAINT",
      paint: paint,
    });
  }

  return libraryItems;
}

function createTypographyLibraryItems() {
  const libraryItems = [];

  for (const [key, typo] of Object.entries(designTokens.typography)) {
    libraryItems.push({
      name: typo.name,
      key: `typo_${key}`,
      type: "TYPOGRAPHY",
      fontSize: typo.fontSize,
      fontFamily: typo.fontFamily,
      fontWeight: typo.fontWeight,
      lineHeight: { unit: "PERCENT", value: typo.lineHeight * 100 },
    });
  }

  return libraryItems;
}

function createComponentFrames(page) {
  const components = [
    {
      name: "Navigation",
      width: 1440,
      height: 80,
      description: "Header navigation bar",
    },
    {
      name: "Hero",
      width: 1440,
      height: 600,
      description: "Landing hero section",
    },
    {
      name: "Timeline",
      width: 1440,
      height: 800,
      description: "Historical timeline",
    },
    {
      name: "DesignerSpotlights",
      width: 1440,
      height: 600,
      description: "Designer feature cards",
    },
    {
      name: "Infographics",
      width: 1440,
      height: 500,
      description: "Data visualization",
    },
    {
      name: "WorldMap",
      width: 1440,
      height: 600,
      description: "Geographic map",
    },
  ];

  let yOffset = 0;

  for (const comp of components) {
    // Create component frame
    const frame = figma.createFrame();
    frame.name = comp.name;
    frame.resize(comp.width, comp.height);
    frame.x = 0;
    frame.y = yOffset;

    // Set background to Off-White
    const offWhiteRgb = hexToRgb(designTokens.colors["off-white"].hex);
    frame.fills = [
      {
        type: "SOLID",
        color: {
          r: offWhiteRgb.r,
          g: offWhiteRgb.g,
          b: offWhiteRgb.b,
        },
      },
    ];

    // Add placeholder text
    const textNode = figma.createText();
    textNode.characters = comp.name;
    textNode.fontSize = 32;
    textNode.fontName = { family: "EB Garamond", style: "Bold" };

    const charcoalRgb = hexToRgb(designTokens.colors.charcoal.hex);
    textNode.fills = [
      {
        type: "SOLID",
        color: {
          r: charcoalRgb.r,
          g: charcoalRgb.g,
          b: charcoalRgb.b,
        },
      },
    ];

    textNode.x = 40;
    textNode.y = 20;

    // Add description
    const descNode = figma.createText();
    descNode.characters = comp.description;
    descNode.fontSize = 14;
    descNode.fontName = { family: "Inter", style: "Regular" };

    const silverRgb = hexToRgb(designTokens.colors.silver.hex);
    descNode.fills = [
      {
        type: "SOLID",
        color: {
          r: silverRgb.r,
          g: silverRgb.g,
          b: silverRgb.b,
        },
      },
    ];

    descNode.x = 40;
    descNode.y = 60;

    frame.appendChild(textNode);
    frame.appendChild(descNode);

    page.appendChild(frame);

    yOffset += comp.height + 40;
  }
}

// Main execution
const page = figma.currentPage;
figma.showUI(__html__, { width: 300, height: 400 });

// Send initial status
figma.ui.postMessage({ type: "STATUS", message: "Starting auto-setup..." });

// Create pages for organization
let tokensPage = null;
let componentsPage = null;

for (const p of figma.root.children) {
  if (p.name === "📊 Design Tokens") tokensPage = p;
  if (p.name === "🧩 Components") componentsPage = p;
}

if (!tokensPage) {
  tokensPage = figma.createPage();
  tokensPage.name = "📊 Design Tokens";
}

if (!componentsPage) {
  componentsPage = figma.createPage();
  componentsPage.name = "🧩 Components";
}

// Create color swatches on tokens page
let yOffset = 0;
const swatchesGroup = figma.createFrame();
swatchesGroup.name = "Color Tokens";
swatchesGroup.y = 0;
swatchesGroup.x = 0;

for (const [key, color] of Object.entries(designTokens.colors)) {
  // Create color swatch
  const swatch = figma.createFrame();
  swatch.name = color.name;
  swatch.resize(100, 80);
  swatch.x = 0;
  swatch.y = yOffset;

  const rgb = hexToRgb(color.hex);
  swatch.fills = [{ type: "SOLID", color: { r: rgb.r, g: rgb.g, b: rgb.b } }];

  // Add label
  const label = figma.createText();
  label.characters = `${color.name}\n${color.hex}`;
  label.fontSize = 10;
  label.fontName = { family: "Inter", style: "Regular" };

  // Determine label color (white for dark backgrounds, charcoal for light)
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  const labelRgb =
    brightness > 0.5
      ? hexToRgb(designTokens.colors.charcoal.hex)
      : hexToRgb(designTokens.colors.white.hex);

  label.fills = [
    {
      type: "SOLID",
      color: {
        r: labelRgb.r,
        g: labelRgb.g,
        b: labelRgb.b,
      },
    },
  ];

  label.x = 5;
  label.y = 5;

  swatch.appendChild(label);
  swatchesGroup.appendChild(swatch);

  yOffset += 90;
}

swatchesGroup.resize(110, yOffset);
tokensPage.appendChild(swatchesGroup);

// Create typography samples
yOffset = 0;
const typographyGroup = figma.createFrame();
typographyGroup.name = "Typography Tokens";
typographyGroup.x = 150;
typographyGroup.y = 0;

for (const [key, typo] of Object.entries(designTokens.typography)) {
  const sample = figma.createText();
  sample.characters = `${typo.name} - Sample Text`;
  sample.fontSize = typo.fontSize;
  sample.fontName = { family: typo.fontFamily, style: "Regular" };
  sample.fontWeight = typo.fontWeight;

  const charcoalRgb = hexToRgb(designTokens.colors.charcoal.hex);
  sample.fills = [
    {
      type: "SOLID",
      color: {
        r: charcoalRgb.r,
        g: charcoalRgb.g,
        b: charcoalRgb.b,
      },
    },
  ];

  sample.x = 0;
  sample.y = yOffset;

  typographyGroup.appendChild(sample);
  yOffset += typo.fontSize + 20;
}

typographyGroup.resize(400, yOffset);
tokensPage.appendChild(typographyGroup);

// Create components on components page
createComponentFrames(componentsPage);

// Notify completion
figma.ui.postMessage({
  type: "COMPLETE",
  message:
    "✓ Design tokens, typography, and component frames created successfully!",
});

// UI HTML
const __html__ = `
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 16px; background: #f5f0e8; }
    .status { padding: 12px; background: #fff; border-radius: 4px; text-align: center; }
    .complete { color: #1a1a1a; font-weight: bold; }
    .spinner { animation: spin 1s linear infinite; display: inline-block; }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
  <div class="status">
    <div id="message">Starting auto-setup...</div>
    <div id="progress" class="spinner">⏳</div>
  </div>
  <script>
    window.onmessage = (event) => {
      const data = event.data.pluginMessage;
      const messageEl = document.getElementById('message');
      const progressEl = document.getElementById('progress');
      
      if (data.type === 'COMPLETE') {
        messageEl.textContent = data.message;
        progressEl.textContent = '✓';
        progressEl.className = 'complete';
      }
    };
  </script>
`;
