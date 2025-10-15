# BharatRoots Design Guidelines

## Design Approach: Reference-Based with Cultural Authenticity

**Primary References:** Etsy's artisan-focused marketplace + Airbnb's visual storytelling + Instagram's community discovery

**Design Philosophy:** Celebrate Indian craftsmanship through rich visuals, authentic storytelling, and seamless community connections. Balance modern web aesthetics with cultural warmth and earthy authenticity.

---

## Core Design Elements

### A. Color Palette

**Primary Colors (Dark & Light Mode):**
- **Terracotta Clay:** 15 68% 45% (primary brand - warm, earthy, Indian heritage)
- **Deep Forest:** 145 35% 28% (secondary - organic, nature-connected)
- **Warm Cream:** 35 45% 92% (light backgrounds)
- **Rich Earth:** 25 40% 18% (dark mode backgrounds, text)

**Accent Colors:**
- **Marigold Gold:** 38 85% 55% (sparingly for CTAs and highlights - complements terracotta)
- **Soft Sage:** 145 25% 75% (subtle backgrounds, cards)

**Functional Colors:**
- Success: 145 65% 45%
- Error: 5 75% 50%
- Text: 25 20% 15% (light mode), 35 15% 95% (dark mode)

### B. Typography

**Font Families:**
- **Display/Headings:** 'Playfair Display' (serif, elegant, artisanal feel)
- **Body/UI:** 'Inter' (sans-serif, modern readability)
- **Accent:** 'Crimson Text' (for artisan quotes, maker stories)

**Scale:**
- Hero Headlines: text-6xl lg:text-7xl (60-72px), font-bold
- Section Headers: text-4xl lg:text-5xl (36-48px), font-semibold
- Card Titles: text-xl lg:text-2xl (20-24px), font-medium
- Body: text-base lg:text-lg (16-18px), font-normal
- Captions: text-sm (14px), font-light

### C. Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 6, 8, 12, 16, 20** for consistent rhythm
- Component padding: p-6 lg:p-8
- Section spacing: py-16 lg:py-24
- Card gaps: gap-6 lg:gap-8
- Element margins: mb-4, mt-8, mx-6

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for readability

---

## Component Library

### Navigation
- Sticky header with backdrop-blur-md bg-cream/90
- Logo: "BharatRoots" in Playfair Display, terracotta color
- Nav links with subtle underline animation (border-b-2 transition)
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- **Large hero image:** Full-width, 85vh, featuring vibrant rural India craftsmanship scene (weavers, potters in natural light)
- Overlay gradient: from-earth/60 to-transparent
- Headline: "Empowering Artisans & Farmers" - bold, white text with subtle text-shadow
- Subheadline: Brief mission statement in cream color
- CTA button: variant="outline" with blurred background (backdrop-blur-sm bg-white/20)

### Product Cards
- **Grid:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- **Card structure:** 
  - Product image (aspect-ratio-square, object-cover, rounded-lg)
  - Overlay on hover: smooth fade-in with product details
  - Title, artisan name (text-sm, sage color), price
  - "Buy Now" button (marigold background, transforms on hover: scale-105)
- **Hover animation:** Lift effect (shadow-xl, -translate-y-2, duration-300)

### Meet the Makers
- **Layout:** 3-column grid (lg:grid-cols-3)
- **Profile cards:**
  - Circular portrait images (rounded-full, w-32 h-32)
  - Name in Playfair Display (text-2xl)
  - Location tag with pin icon (text-sm, forest color)
  - Bio snippet (max 3 lines, text-base)
  - "Connect" button (outline variant)
- **Background:** Soft sage with subtle texture

### Community Discovery Feed
- **Interest tags:** Pill-shaped badges (rounded-full, px-4 py-2, terracotta/forest colors)
- **User cards:** Masonry grid layout (varying heights)
- Avatar, name, shared interests count, "Follow" button
- Hover: Expand to show interest overlap

### Interactive Gallery
- **Masonry grid** for diverse product imagery
- Lightbox on click with smooth zoom animation
- Filter pills at top (All, Textiles, Pottery, Produce, Paintings)
- Stagger animation on load (delay-[100ms], delay-[200ms], etc.)

### Footer
- 4-column layout (lg:grid-cols-4)
- Columns: About, Quick Links, Contact, Social Media
- Social icons: Hover grows (scale-110) with terracotta fill
- Background: Deep earth color with cream text
- Newsletter signup: Embedded form with marigold submit button

---

## Animations & Interactions

**Scroll Animations:** Fade-in-up for sections (opacity + translateY), stagger child elements by 100ms
**Button Hovers:** Scale-105 transform, shadow elevation, duration-200
**Card Interactions:** Lift on hover (-translate-y-2), shadow-xl transition
**Image Loads:** Blur-up from placeholder (blur-lg to blur-0)
**Page Transitions:** Smooth scroll behavior, fade between views

**Animation Principles:**
- Duration: 200-300ms for micro-interactions, 500ms for section reveals
- Easing: ease-in-out for natural motion
- Hover states: Subtle, purposeful (not distracting)

---

## Images

**Hero Section:**
- **Large background image** (1920x1080): Vibrant scene of Indian artisans at work - weaving colorful textiles or shaping pottery in warm, natural light with rural landscape backdrop

**Product Showcase:**
- Handmade textile: Intricate handwoven fabric with traditional patterns
- Organic produce: Fresh vegetables in rustic basket
- Pottery: Terracotta pots with artisan's hands visible

**Meet the Makers:**
- Three authentic portraits: Artisan weaver (woman), organic farmer (man), pottery maker (woman) - natural lighting, genuine smiles, craft tools visible

**Community Feed:**
- User avatars showing diverse art enthusiasts
- Background images of art galleries, studios, craft fairs

---

## Responsive Behavior

**Breakpoints:**
- Mobile (< 768px): Single column, stacked navigation, larger touch targets (min-h-12)
- Tablet (768-1024px): 2-column grids, adjusted spacing
- Desktop (> 1024px): Full multi-column layouts, expanded imagery

**Mobile Optimizations:**
- Hero height: 70vh (better content visibility)
- Reduced spacing: py-12 instead of py-24
- Simplified navigation: Bottom tab bar for key actions
- Touch-friendly buttons: Minimum 44x44px target size

---

**Key Principle:** Every section tells a story of Indian craftsmanship. Rich visuals showcase products and makers, smooth animations guide attention, and earthy colors create warmth and trust. The design balances cultural authenticity with modern marketplace functionality.