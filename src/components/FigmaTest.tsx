// This is a placeholder for testing Figma plugin exports
// After using the Builder.io or Figma-to-Code plugin, paste the generated component here
// Then verify it renders correctly in your browser

// Example of what good auto-generated code should look like:

export function FigmaTestButton() {
  return (
    <button className="px-6 py-3 bg-gold text-white font-body text-sm font-semibold rounded hover:bg-beige-dark transition-colors">
      Click Me
    </button>
  );
}

// What to check when pasting generated Figma component:
// ✓ Uses Tailwind classes (not inline styles with hex values)
// ✓ Color tokens match: text-charcoal, bg-offwhite, etc. (NOT style={{ color: '#1A1A1A' }})
// ✓ Font classes use custom tokens: font-heading, font-body (NOT hardcoded font-family)
// ✓ Spacing is in Tailwind units: px-4, py-6 (NOT specific pixel values)
// ✓ Component is a functional React component with proper exports
// ✓ Props are properly typed if using TypeScript
// ✓ No hardcoded colors or styles that don't align with design tokens

/*
WORKFLOW:
1. Create a simple button component in Figma (Gold background, white text, 4px border radius)
2. Apply color tokens (use "Gold" color token, not hardcoded #B8960C)
3. Open Builder.io or Figma-to-Code plugin
4. Select the button component
5. Click "Export to React"
6. Copy the generated code and paste it here
7. Run `npm run dev` and navigate to this component
8. Verify:
   - Button renders with correct colors
   - Tailwind classes are used (check inspector)
   - No inline styles override your design tokens
9. If all checks pass, you're ready for Phase 3!
*/
