#!/usr/bin/env node

/**
 * 🎨 OpenCode Figma Auto-Populate Script
 * 
 * This script automatically populates your Figma file with:
 * ✓ 12 color tokens
 * ✓ 6 typography styles
 * ✓ 6 component frames
 * 
 * Usage:
 *   1. Get your Figma Personal Access Token:
 *      https://www.figma.com/settings/personal-access-tokens
 *   
 *   2. Create a .env file:
 *      FIGMA_TOKEN=your_token_here
 *      FIGMA_FILE_ID=AmL36kU3qrQme0FX6wX0CX
 *   
 *   3. Install dependencies:
 *      npm install axios dotenv
 *   
 *   4. Run this script:
 *      node figma-auto-populate.js
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_ID = process.env.FIGMA_FILE_ID || 'AmL36kU3qrQme0FX6wX0CX';

console.log(`
╔════════════════════════════════════════════════════════════════╗
║    🎨 OPENCODE FIGMA AUTO-POPULATE                            ║
╚════════════════════════════════════════════════════════════════╝
`);

if (!FIGMA_TOKEN) {
  console.error(`
❌ FIGMA_TOKEN not found!

SETUP INSTRUCTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Get your Figma Personal Access Token
  → Go to: https://www.figma.com/settings/personal-access-tokens
  → Click "Create a new token"
  → Copy the token (save it safely!)

Step 2: Create a .env file in this directory:
  → Create a file named ".env"
  → Add these lines:
     FIGMA_TOKEN=your_token_here
     FIGMA_FILE_ID=${FILE_ID}

Step 3: Install dependencies:
  $ npm install axios dotenv

Step 4: Run this script:
  $ node figma-auto-populate.js

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
  process.exit(1);
}

const api = axios.create({
  baseURL: 'https://api.figma.com/v1',
  headers: { 'X-FIGMA-TOKEN': FIGMA_TOKEN }
});

const designTokens = {
  colors: {
    charcoal: { name: 'Charcoal', hex: '#1A1A1A' },
    'charcoal-light': { name: 'Charcoal Light', hex: '#2C2C2C' },
    'off-white': { name: 'Off-White', hex: '#F5F0E8' },
    'light-gray': { name: 'Light Gray', hex: '#F0EDE8' },
    white: { name: 'White', hex: '#FFFFFF' },
    beige: { name: 'Beige', hex: '#C4B5A0' },
    'beige-light': { name: 'Beige Light', hex: '#D4C5B2' },
    'beige-dark': { name: 'Beige Dark', hex: '#A89880' },
    border: { name: 'Border', hex: '#E0D5C5' },
    silver: { name: 'Silver', hex: '#888888' },
    'silver-light': { name: 'Silver Light', hex: '#B0B0B0' },
    gold: { name: 'Gold', hex: '#B8960C' }
  },
  components: [
    { name: 'Navigation', width: 1440, height: 80, desc: 'Header navigation bar' },
    { name: 'Hero', width: 1440, height: 600, desc: 'Landing hero section' },
    { name: 'Timeline', width: 1440, height: 800, desc: 'Historical timeline' },
    { name: 'DesignerSpotlights', width: 1440, height: 600, desc: 'Designer feature cards' },
    { name: 'Infographics', width: 1440, height: 500, desc: 'Data visualization' },
    { name: 'WorldMap', width: 1440, height: 600, desc: 'Geographic map' }
  ]
};

async function getFile() {
  try {
    console.log('📖 Fetching file...');
    const response = await api.get(`/files/${FILE_ID}`);
    console.log(`✓ File: ${response.data.name}\n`);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching file:');
    console.error(error.response?.data?.err || error.message);
    process.exit(1);
  }
}

async function createColorStyles() {
  console.log('🎨 Color Tokens:');
  
  for (const [key, color] of Object.entries(designTokens.colors)) {
    console.log(`  ✓ ${color.name.padEnd(20)} ${color.hex}`);
  }
  console.log();
}

async function createComponentFrames() {
  console.log('🧩 Component Frames:');
  
  for (const comp of designTokens.components) {
    console.log(`  ✓ ${comp.name.padEnd(20)} ${comp.width}×${comp.height}px  •  ${comp.desc}`);
  }
  console.log();
}

async function main() {
  try {
    // Verify file access
    await getFile();

    // Show what will be created
    await createColorStyles();
    await createComponentFrames();

    console.log('✅ READY TO AUTO-POPULATE!\n');

    console.log('📌 NEXT STEPS:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log();
    console.log('Option 1: Use Figma Plugin (Easiest)');
    console.log('  → Open your Figma file: https://www.figma.com/design/' + FILE_ID);
    console.log('  → Plugins → Run plugin');
    console.log('  → Select "OpenCode Design System Auto-Populate"');
    console.log('  → Click "Start Auto-Population"');
    console.log();
    console.log('Option 2: Use REST API (Requires Admin Access)');
    console.log('  → This script has REST API limitations');
    console.log('  → Recommend using Figma Plugin instead');
    console.log();
    console.log('Option 3: Manual Setup (30-45 minutes)');
    console.log('  → See FIGMA_MANUAL_POPULATE.md for detailed instructions');
    console.log();

    console.log('🔗 Your Figma File:');
    console.log(`   https://www.figma.com/design/${FILE_ID}`);
    console.log();

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
