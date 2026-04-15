# Estatein — Real Estate Platform

A multi-page responsive real estate website built with vanilla HTML, CSS, and JavaScript (GSAP for animations). Designed as a pixel-perfect implementation of a Figma-based UI, featuring a dark theme, fluid typography, scroll-triggered animations, and a fully responsive layout.

---

## Live Demo
https://skillwilldev.github.io/statein-real-estate/estate


## Preview

| Page | Description |
|------|-------------|
| **Home** | Hero, featured properties, testimonials, FAQ |
| **About Us** | Journey, values, achievements, team, clients |
| **Properties** | Property listings with filters and pagination |
| **Services** | Service offerings overview |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Styling, responsive layout, clamp-based fluid typography |
| JavaScript (ES6+) | DOM interactions, burger menu, close banner |
| [GSAP 3](https://greensock.com/gsap/) | Scroll-triggered entrance animations |
| [ScrollTrigger](https://greensock.com/scrolltrigger/) | GSAP plugin for scroll-based triggers |
| [Google Fonts — Urbanist](https://fonts.google.com/specimen/Urbanist) | Typography |

> No build tools, no frameworks, no dependencies beyond GSAP (loaded via CDN).

---

## Project Structure

```
estatein/
├── index.html              # Home page
├── about-us.html           # About Us page
├── properties.html         # Properties page
├── services.html           # Services page
├── script.js               # GSAP animations
├── css/
│   ├── base.css            # CSS reset / box-sizing
│   ├── style.css           # Global styles, layout utilities, components
│   └── about-us.css        # Styles specific to About Us page
└── img/
    ├── home/               # Assets for home page
    └── about-us/           # Assets for about page
```

---

## CSS Architecture

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.p-x` | Responsive horizontal padding using `clamp()` |
| `.cont-cover` | Max-width container (1920px), centered |
| `.container` | Max-width container (1942px) with small gutters |
| `.hide-scrollbar` | Hides scrollbar on overflow containers (cross-browser) |

### Fluid Typography

All font sizes and spacing use CSS `clamp()` for smooth scaling between breakpoints — no abrupt media query jumps:

```css
font-size: clamp(1.75rem, 1.5rem + 1.250vw, 3rem);
padding-left: clamp(5rem, -10.375rem + 17.083vw, 10.125rem);
```

### Dark Theme

The entire site uses a consistent dark color palette defined inline:

| Token | Value | Usage |
|-------|-------|-------|
| `#141414` | Deep black | Page background, card backgrounds |
| `#191919` | Slightly lighter | Header bottom bar, shadow layers |
| `#1A1A1A` | Elevated surface | Input backgrounds, secondary cards |
| `#262626` | Border color | All card/element borders |
| `#703BF7` | Accent purple | CTAs, icons, active states |
| `#FFFFFF` | Primary text | Headings, labels |
| `#999999` | Secondary text | Descriptions, subtitles |

---

## Features

### Responsive Layout
- Mobile-first approach with breakpoints at: 1440px, 1300px, 1260px, 1120px, 920px, 880px, 769px, 650px, 544px, 430px
- Grid layouts switch to flex/column on smaller screens
- Hero section reorders via CSS Grid row/column assignments

### Horizontal Scroll Sections
Cards (featured properties, testimonials, FAQ, client enterprises) scroll horizontally with:
- `overflow-x: auto`
- Hidden scrollbar (`.hide-scrollbar`)
- `min-width` set per card to define scroll behavior

### Navigation
- Sticky header (`position: sticky; top: 0; z-index: 14`)
- Hamburger menu on mobile using CSS-only `#burger` checkbox trick (no JS needed)
- Dismissible top announcement banner

### Animations (GSAP + ScrollTrigger)
All animations trigger once on scroll into view (`once: true`, `start: 'top 85%'`):

| Element | Animation |
|---------|-----------|
| `header` | Fade in + slide down |
| `.dream` | Fade in + slide from left |
| `.dream__items li` | Staggered fade in + slide up |
| `.achievements__item` | Staggered fade in + slide up |
| `.experience__item` | Staggered fade in + slide up |
| `.team__card` | Staggered fade in + slide up |
| Section headings (`.achievements__top`) | Fade in + slide from left |
| `.story__values` / `.story__trust` | Directional fade in |
| `.title-block` | Staggered fade in + slide up |

`gsap.matchMedia()` is used to reduce stagger timing on mobile (`0.6s` vs `0.3s` on desktop).

### About Us Page — Special Sections

**Our Values** — 2×2 grid of value cards with icon circles (purple border, `#703BF7`) and dividers between items.

**Navigating the Experience** — 6-step process grid. Each step card uses a complex multi-layer CSS `background-image` technique to create a purple gradient corner border effect without SVG or extra elements:

```css
background-image:
  linear-gradient(120.79deg, rgba(112, 59, 247, 0.2) ..., #141414 ...),
  radial-gradient(circle at 0% 0%, #703BF7 ...),
  linear-gradient(to bottom, #703BF7, transparent),
  linear-gradient(to right, #703BF7, transparent),
  linear-gradient(#262626, #262626);
background-clip: padding-box, border-box, border-box, border-box, border-box;
```

**Team Cards** — Person photo with a centered floating Twitter/social button, name + role, and an inline "Say Hello" input field.

**Client Enterprises** — Horizontally scrollable cards with domain/category metadata, a testimonial quote block, and a "Visit Website" action button.

---

## Responsive Breakpoints Summary

| Breakpoint | Key Changes |
|------------|-------------|
| `< 1440px` | Tighter gaps, image height adjusts |
| `< 1270px` | Our Values block switches to vertical stack |
| `< 1120px` | Journey hero reorders (image first, then text) |
| `< 920px` | Home hero switches from grid to flex column |
| `< 769px` | Hamburger menu replaces desktop nav |
| `< 670px` | Values trust grid collapses to single column |
| `< 544px` | Card min-widths scale down to viewport-relative units |
| `< 430px` | CTA buttons stack vertically |

---

## Getting Started

No build step required — open directly in a browser.

```bash
git clone https://github.com/meloodev/estatein.git
cd estatein
# Open index.html in your browser
# Or use Live Server in VS Code
```

> Recommended: use the **Live Server** VS Code extension for hot reload during development.

---

## Pages Status

| Page | HTML | CSS | Animations |
|------|------|-----|------------|
| Home (`index.html`) | ✅ | ✅ | ✅ |
| About Us (`about-us.html`) | ✅ | ✅ | ✅ |
| Properties (`properties.html`) | 🚧 In progress | — | — |
| Services (`services.html`) | 🚧 In progress | — | — |

---

## Author

**Melik Papikyan**  
Frontend Developer  
📧 melikpapikyan@gmail.com  
🐙 [GitHub](https://github.com/skillwilldev/light-landingage)  
🎨 [Figma Design](https://www.figma.com/design/7ho6uFtpsjtWYNWbwO6H2e/Untitled?node-id=0-1&p=f&t=4az2iSroKJ87kaEt-0)


## License

This project is built for educational/portfolio purposes based on a Figma design concept. All design rights belong to their respective owners.
