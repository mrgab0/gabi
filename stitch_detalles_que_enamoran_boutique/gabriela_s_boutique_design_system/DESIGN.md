---
name: Gabriela's Boutique Design System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#554240'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#89726f'
  outline-variant: '#dcc0bd'
  surface-tint: '#9d4139'
  primary: '#210000'
  on-primary: '#ffffff'
  primary-container: '#4a0404'
  on-primary-container: '#d26a5f'
  inverse-primary: '#ffb4aa'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#0b0c09'
  on-tertiary: '#ffffff'
  tertiary-container: '#22221f'
  on-tertiary-container: '#8a8985'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#7e2b23'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style
The design system embodies a **Luxury Editorial** aesthetic, blending the romanticism of high-end floristry with the precision of a premium boutique. The target audience seeks an elevated gifting experience, valuing craftsmanship and elegance over discount-driven retail.

The visual style is characterized by:
- **Romantic Minimalism:** Generous use of white space to ensure floral photography remains the focal point.
- **Editorial Sophistication:** High-contrast typography and gold accents that evoke a sense of heritage and exclusivity.
- **Tactile Luxury:** Subtle use of shadows and layered surfaces to provide a physical, high-touch feel in a digital environment.
- **Warmth & Precision:** A professional yet inviting atmosphere that balances emotional connection with reliable service.

## Colors
The palette is rooted in a deep **Vinotinto** (Maroon), providing a sense of depth and luxury. Gold is used sparingly for interactive elements, highlights, and secondary branding to convey quality.

- **Primary (Vinotinto):** Used for headlines, key CTAs, and structural accents.
- **Secondary (Gold):** Reserved for rewards, icons, specific highlights, and premium interactive states.
- **Tertiary (Cream/Off-White):** Used for subtle section backgrounds to break the starkness of pure white while maintaining an airy feel.
- **Neutral:** Pure white (#FFFFFF) is the primary canvas for product listings. Dark charcoal is used for long-form body text to ensure maximum readability without the harshness of pure black.

## Typography
This design system employs a classic "Serif for Display, Sans for Utility" pairing.

- **Playfair Display:** Used for all expressive headings. It brings a traditional, literary grace to the brand.
- **Manrope:** Selected for its balanced, modern geometric qualities. It ensures high legibility for product descriptions, prices, and navigation.
- **Hierarchy:** Maintain large font-size ratios between headers and body to emphasize the editorial look. Labels and small navigation items should utilize uppercase styling with generous letter spacing (0.1em) to maintain a premium feel.

## Layout & Spacing
The layout uses a **Fixed Grid** system centered on a 1280px container to maintain a focused, high-end shopping experience.

- **Grid Model:** 12-column grid for desktop with 24px gutters.
- **Spacing Rhythm:** Use multiples of 8px. Generous vertical padding (80px+) between sections is encouraged to create a "breathable" luxury feel.
- **Responsive Behavior:** 
  - **Desktop:** Wide margins (64px) and multi-column product grids (3 or 4 columns).
  - **Tablet:** 8-column grid with reduced margins (32px).
  - **Mobile:** 4-column grid (effectively 1-2 columns for content) with 16px margins.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and tonal layering to avoid a flat, "budget" appearance.

- **Product Depth:** Product cards use a very soft, diffused shadow (Blur: 30px, Opacity: 5%, Color: Primary) to make them feel as if they are floating slightly above the surface.
- **Surface Tiers:** Use the Tertiary color (Cream) for secondary content blocks (like testimonials or "About Us" sections) to create a subtle recessed effect compared to the primary white background.
- **Interactive States:** Buttons and interactive elements should slightly increase their shadow spread on hover, mimicking a physical press or lift.

## Shapes
The shape language is primarily **Soft (0.25rem)**. 

While the brand is romantic, excessively rounded "bubble" corners would detract from the professional, high-fashion aesthetic. Sharp corners are used for the main container and structural dividers, while buttons and product cards utilize the soft radius to gently guide the eye. Icons should be thin-stroke (1.5px or 2px) to match the elegance of the typography.

## Components
Consistent application of these components ensures a cohesive brand experience:

- **Sticky Navbar:** A slim, white semi-transparent (Backdrop Blur: 10px) bar with the logo centered. Navigation links use `label-lg` styling.
- **Elegant Product Cards:** High-quality imagery on a white background, no visible borders. The product name uses `headline-sm` in Vinotinto, with the price in `body-lg` Gold.
- **Primary Buttons:** Solid Vinotinto background with white uppercase text. On hover, background shifts to Gold.
- **Secondary Buttons:** Ghost style with a thin Vinotinto border.
- **Testimonial Blocks:** Centered layout using `body-lg` italicized Serif text. A small Gold heart icon or floral motif serves as a divider.
- **Detailed Footer:** A deep Vinotinto background with Gold or White text. Includes a newsletter signup with a refined, single-line input field and a "Contact Us" section featuring the WhatsApp branding as seen in the reference imagery.
- **Chips/Categories:** Used for flower types or occasions (e.g., "Birthdays"). These should be pill-shaped with a very light Vinotinto tint and dark Vinotinto text.