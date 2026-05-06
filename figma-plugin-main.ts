// Figma Plugin: Auto-Populate OpenCode Design System
// This plugin automatically creates all design tokens and components

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
  components: [
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
  ],
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

function getContrastColor(hex) {
  const rgb = hexToRgb(hex);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness > 0.5 ? "#1A1A1A" : "#FFFFFF";
}

async function createColorPalette() {
  const currentPage = figma.currentPage;
  let yOffset = 0;
  const colorSwatches = [];

  for (const [key, color] of Object.entries(designTokens.colors)) {
    const rgb = hexToRgb(color.hex);

    // Create color rectangle
    const rect = figma.createRectangle();
    rect.resize(120, 100);
    rect.x = 0;
    rect.y = yOffset;
    rect.name = color.name;
    rect.fills = [
      {
        type: "SOLID",
        color: { r: rgb.r, g: rgb.g, b: rgb.b },
      },
    ];

    // Create label
    const label = figma.createText();
    label.characters = `${color.name}\n${color.hex}`;
    label.fontSize = 11;
    label.fontName = { family: "Inter", style: "Regular" };

    const contrastRgb = hexToRgb(getContrastColor(color.hex));
    label.fills = [
      {
        type: "SOLID",
        color: { r: contrastRgb.r, g: contrastRgb.g, b: contrastRgb.b },
      },
    ];

    label.x = 10;
    label.y = yOffset + 10;

    currentPage.appendChild(rect);
    currentPage.appendChild(label);

    colorSwatches.push({ rect, label });
    yOffset += 110;
  }

  return colorSwatches;
}

async function createTypographySamples() {
  const currentPage = figma.currentPage;
  let yOffset = 0;
  const xOffset = 150;

  for (const [key, typo] of Object.entries(designTokens.typography)) {
    // Create sample background
    const bg = figma.createRectangle();
    bg.resize(500, typo.fontSize + 40);
    bg.x = xOffset;
    bg.y = yOffset;
    bg.name = `${typo.name} Background`;
    bg.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.94, b: 0.91 } }]; // Light gray

    // Create text sample
    const text = figma.createText();
    text.characters = `${typo.name} - The quick brown fox jumps over the lazy dog`;
    text.fontSize = typo.fontSize;
    text.fontName = {
      family: typo.fontFamily,
      style: typo.fontWeight >= 600 ? "Bold" : "Regular",
    };
    text.fontWeight = typo.fontWeight;
    text.lineHeight = {
      unit: "PIXELS",
      value: typo.fontSize * typo.lineHeight,
    };

    const charcoalRgb = hexToRgb(designTokens.colors.charcoal.hex);
    text.fills = [
      {
        type: "SOLID",
        color: { r: charcoalRgb.r, g: charcoalRgb.g, b: charcoalRgb.b },
      },
    ];

    text.x = xOffset + 10;
    text.y = yOffset + 5;

    currentPage.appendChild(bg);
    currentPage.appendChild(text);

    yOffset += typo.fontSize + 50;
  }
}

async function createComponentFrames() {
  // Create or get Components page
  let componentsPage = null;
  for (const page of figma.root.children) {
    if (page.name === "🧩 Components") {
      componentsPage = page;
      break;
    }
  }

  if (!componentsPage) {
    componentsPage = figma.createPage();
    componentsPage.name = "🧩 Components";
  }

  const offWhiteRgb = hexToRgb(designTokens.colors["off-white"].hex);
  const charcoalRgb = hexToRgb(designTokens.colors.charcoal.hex);
  const silverRgb = hexToRgb(designTokens.colors.silver.hex);

  let yOffset = 0;

  for (const comp of designTokens.components) {
    // Create component frame
    const frame = figma.createFrame();
    frame.name = comp.name;
    frame.resize(comp.width, comp.height);
    frame.x = 0;
    frame.y = yOffset;

    // Set background to Off-White
    frame.fills = [
      {
        type: "SOLID",
        color: { r: offWhiteRgb.r, g: offWhiteRgb.g, b: offWhiteRgb.b },
      },
    ];

    frame.strokeWeight = 1;
    frame.strokes = [
      {
        type: "SOLID",
        color: { r: 0.88, g: 0.84, b: 0.77 },
      },
    ];

    // Add title text
    const titleText = figma.createText();
    titleText.characters = comp.name;
    titleText.fontSize = 32;
    titleText.fontName = { family: "EB Garamond", style: "Bold" };
    titleText.fills = [
      {
        type: "SOLID",
        color: { r: charcoalRgb.r, g: charcoalRgb.g, b: charcoalRgb.b },
      },
    ];
    titleText.x = 40;
    titleText.y = 20;

    // Add description text
    const descText = figma.createText();
    descText.characters = comp.description;
    descText.fontSize = 14;
    descText.fontName = { family: "Inter", style: "Regular" };
    descText.fills = [
      {
        type: "SOLID",
        color: { r: silverRgb.r, g: silverRgb.g, b: silverRgb.b },
      },
    ];
    descText.x = 40;
    descText.y = 60;

    frame.appendChild(titleText);
    frame.appendChild(descText);

    // Make it a component
    frame.exportSettings = [
      {
        suffix: "",
        format: "PNG",
        constraint: { type: "SCALE" },
      },
    ];

    componentsPage.appendChild(frame);

    yOffset += comp.height + 40;
  }

  return componentsPage;
}

async function main() {
  // Create Design Tokens page
  let tokensPage = null;
  for (const page of figma.root.children) {
    if (page.name === "📊 Design Tokens") {
      tokensPage = page;
      break;
    }
  }

  if (!tokensPage) {
    tokensPage = figma.createPage();
    tokensPage.name = "📊 Design Tokens";
  }

  figma.currentPage = tokensPage;

  // Create color palette
  await createColorPalette();

  // Create typography samples
  await createTypographySamples();

  // Create component frames
  await createComponentFrames();

  // Final message
  figma.notify(
    "✅ Design system created! Check '📊 Design Tokens' and '🧩 Components' pages",
  );

  console.log("✅ AUTO-POPULATION COMPLETE!");
  console.log("  • Created 12 color swatches");
  console.log("  • Created 6 typography samples");
  console.log("  • Created 6 component frames");
}

main();
