---
name: Botanical Elegance
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#50453b'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#82756a'
  outline-variant: '#d4c4b7'
  surface-tint: '#7d562d'
  primary: '#7d562d'
  on-primary: '#ffffff'
  primary-container: '#d4a373'
  on-primary-container: '#5b3912'
  inverse-primary: '#f0bd8b'
  secondary: '#70585b'
  on-secondary: '#ffffff'
  secondary-container: '#f8d8db'
  on-secondary-container: '#755d5f'
  tertiary: '#4d6453'
  on-tertiary: '#ffffff'
  tertiary-container: '#9bb39f'
  on-tertiary-container: '#304536'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#f0bd8b'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#623f18'
  secondary-fixed: '#fbdbde'
  secondary-fixed-dim: '#debfc2'
  on-secondary-fixed: '#281719'
  on-secondary-fixed-variant: '#574144'
  tertiary-fixed: '#d0e9d4'
  tertiary-fixed-dim: '#b4cdb8'
  on-tertiary-fixed: '#0b2013'
  on-tertiary-fixed-variant: '#364c3c'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style
The design system for Bonbon Flowers is rooted in **Minimalist Luxury**. It balances the organic, ephemeral beauty of floral arrangements with the structured sophistication of a high-end boutique. The emotional response should be one of "effortless prestige"—inviting and warm, yet clearly premium.

The style utilizes a **High-Contrast / Modern** approach where generous whitespace (negative space) allows photography of floral textures to breathe. Influences of **Glassmorphism** are applied sparingly to surface overlays to suggest the translucent quality of petals and high-end glass vases. The overall aesthetic is refined, serene, and deeply rooted in the concept of "organic geometry."

## Colors
The palette is a dialogue between soft organic tones and deep, grounding accents.
- **Primary (Gold Accents):** Used for interactive elements, CTA highlights, and decorative flourishes. It represents the "Bonbon" luxury element.
- **Secondary (Peony Pink):** A soft, romantic hue used for secondary actions, subtle backgrounds, and hover states.
- **Tertiary (Forest Green):** The grounding force, used for deep text, heavy footers, and structured borders. It provides the "floral stem" contrast to the softer petals.
- **Neutral (Cream/Off-white):** The canvas. Pure white is avoided to maintain a warm, inviting, and premium feel.

## Typography
The typography strategy pairings a high-contrast serif with a low-contrast, geometric sans-serif to bridge the gap between "Classical Boutique" and "Modern Service."

- **Headlines:** Utilize *Playfair Display*. It carries the weight of a traditional editorial magazine. Tracking should be tightened slightly on larger displays to maintain a sense of custom lettering.
- **Body:** Utilize *DM Sans*. Its clean, understated nature ensures legibility and keeps the focus on the product imagery.
- **Labels:** Use uppercase *DM Sans* with generous letter spacing to denote categories, small headers, or metadata, providing an architectural feel to the layouts.

## Layout & Spacing
This design system employs a **Fluid Grid** with fixed maximum constraints to preserve the editorial composition.

- **Desktop (1440px+):** 12-column grid with 64px outer margins. Content is often offset (e.g., images spanning 7 columns, text spanning 4 columns) to create a sense of organic movement.
- **Tablet (768px - 1024px):** 8-column grid with 40px margins.
- **Mobile (Under 768px):** 4-column grid with 20px margins.

Vertical spacing (Stack) is intentionally generous. "Breathable Luxury" is achieved by using `stack-lg` between major sections to prevent a cluttered, "discount" feel.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than harsh borders.

1.  **Surfaces:** The primary surface is the Cream neutral. Secondary surfaces (cards, modals) use a slightly lighter "Paper White" or a very subtle Peony Pink tint.
2.  **Shadows:** Shadows are highly diffused and "long." Use a 15% opacity Forest Green tint for shadows instead of pure black to maintain the organic warmth. (e.g., `box-shadow: 0 20px 40px rgba(27, 48, 34, 0.08)`).
3.  **Glass Effects:** Modals and navigation overlays use a high-blur backdrop (20px+) with a 70% opacity Cream fill to mimic frosted florist glass.

## Shapes
The shape language is **Soft (0.25rem)**. While the brand is organic, the UI elements (buttons, inputs) maintain a structured, architectural precision with subtle rounding to avoid a clinical "sharpness." 

- **Images:** Floral photography should use a larger `rounded-xl` (0.75rem) or custom organic masks (e.g., arched tops) to emphasize the botanical theme.
- **Interactive Elements:** Buttons and form fields use the standard 0.25rem radius to denote stability and professional service.

## Components
- **Buttons:**
    - *Primary:* Forest Green background with Cream text. Sharp, professional, authoritative.
    - *Secondary:* Ghost style with Gold Accents border and text.
- **Cards (Product):** Flat layout with no border; elevation is achieved through a change in background color (subtle Peony) or a very soft ambient shadow on hover.
- **Input Fields:** Bottom-border only ("Material style") to maintain the minimalist look, using Forest Green for the active state.
- **Chips/Tags:** Used for flower types (e.g., "Lilies," "Seasonal"). Pill-shaped with a 1px Gold border and small-caps typography.
- **Navigation:** A centered, minimal header. On scroll, it transitions to a frosted glass (Glassmorphism) bar.
- **Specialty Component - "The Bouquet Builder":** A multi-step interface using large, soft-rounded image tiles and gold-tinted progress indicators.