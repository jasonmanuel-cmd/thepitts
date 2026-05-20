# The Pitts — Design System

## Brand

- **Name:** The Pitts
- **Album:** Jamestown
- **Label:** Poison Well Records
- **Genre:** Rock / Punk / Hard Rock
- **Vibe:** Raw, loud, unfiltered, unstoppable. Rebel energy. Underground grit.

## Aesthetic

Dark, aggressive, punk-inspired. Glassmorphism panels on a deep black ground, with violent red accents. The red is the brand's voice — it bleeds, pulses, and demands attention. Everything else stays quiet (dark surfaces, muted gray text) to let the red hit hard.

```
First-impression feeling: "This is dangerous, not polished."
Second-read text: member names, press quotes, lyrics.
```

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand` | `#dc2626` | CTAs, active indicators, headings, links |
| `--color-brand-hover` | `#b91c1c` | Hover states |
| `--color-brand-light` | `#ef4444` | Gradients, splash text, hero text |
| `--color-brand-subtle` | `rgba(220,38,38,0.15)` | Background glows, subtle borders |
| `--color-surface` | `#0a0a0c` | Page background (near-black) |
| `--color-surface-2` | `#121214` | Elevated surfaces |
| `--color-surface-3` | `#1a1a1e` | Hover states |
| `--color-surface-4` | `#222226` | Card highlights |
| `--color-text-primary` | `#f4f4f5` | Body text, headings |
| `--color-text-secondary` | `#a1a1aa` | Supporting text |
| `--color-text-muted` | `#71717a` | Labels, timestamps, placeholders |
| `--color-border-subtle` | `hsla(0,0%,100%,0.06)` | Glass borders |
| `--color-border` | `hsla(0,0%,100%,0.1)` | Default borders |

## Typography

- **Family:** Outfit (Google Fonts)
- **Weights:** 300 (light), 400 (regular), 600 (semibold), 800 (extrabold)
- **Display:** Extrabold 800 for headings and splash text
- **Body:** Weight 300/400 for body copy
- **Label:** Uppercase tracking-wider, weight 600, muted color
- **Scale:** Tailwind default scale (text-sm, text-base, text-lg, etc.)
- **Hero:** `text-6xl` to `text-9xl` responsive
- **Splash:** `text-5xl` to `text-8xl` with pulsing red glow text-shadow

## Layout

- **Container:** max-w-4xl or max-w-5xl centered
- **Vertical rhythm:** `py-16` between major sections, `py-20` for hero
- **Glass panels:** `backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl`
- **Glass cards:** `backdrop-blur-md bg-white/5 border border-white/10 rounded-xl`
- **Grid:** `grid md:grid-cols-2 gap-6` for paired content, `grid-cols-2 md:grid-cols-4` for members
- **Mobile-first:** Single column, stack at `md:` breakpoint

## Components

### SplashScreen
- Fullscreen overlay (`fixed inset-0 z-50`)
- Artwork image + "THE PITTS" in `text-brand` with pulsing `textShadow`
- Diagonal red stripe background (`repeating-linear-gradient(45deg...)`)
- Slides up and out after 1.8 seconds (`motion.div y: -100%`)
- Session-gated via `sessionStorage` (once per tab)

### Navbar
- Sticky top, backdrop-blur-xl, z-40
- Brand link (left), EPK / Album / Poison Well Records (right)
- Active page: underline indicator (`absolute bottom-0 h-0.5 bg-brand`)
- All links: `min-h-touch` (44px), `min-w-touch` (44px)

### Hero
- Full `min-h-screen`, background image with gradient overlay
- Heading: red gradient text (`#dc2626 → #ef4444`)
- Tagline + two CTAs
- Scroll indicator at bottom

### Tracklist
- Glass panel with numbered links
- Track number (mono), title, duration, chevron
- `min-h-touch` rows

### Press Kit Downloads
- Card with aspect-video thumbnail, image, download button
- `loading="lazy"` on images

### Social Icons (Placeholder)
- Disabled (`aria-disabled="true"`), muted opacity
- Consumed states: Instagram, TikTok, YouTube, Facebook

## Motion

| Element | Type | Duration | Ease |
|---------|------|----------|------|
| Page transitions | opacity + y offset | 0.3s | ease (framer-motion) |
| Splash exit | y: -100% | 0.6s | `[0.76, 0, 0.24, 1]` |
| Splash glow | textShadow pulse | 1.5s loop | easeInOut |
| Image hover (downloads) | scale | 0.5s | transition-transform |
| Navigation hover | background-color | default | transition-colors |
| Scroll bounce indicator | translateY | default | animate-bounce |

### Reduced Motion
All animations disabled at `prefers-reduced-motion: reduce`. Splash shows static red glow fallback.

## Accessibility

- **Touch targets:** Minimum 44×44px on all interactive elements (`min-h-touch`, `min-w-touch`)
- **Skip link:** First focusable element, visible on focus via `:focus:not-sr-only`
- **Focus indicators:** `ring-2 ring-brand ring-offset-2 ring-offset-surface` via `focus-visible`
- **Color contrast:** All text passes WCAG AA (primary 13.9:1, secondary ~7.5:1, muted ~4.5:1)
- **ARIA:** `aria-current="page"` on active nav, `aria-disabled="true"` on placeholders, `aria-label` on icon-only elements
- **Motion:** `prefers-reduced-motion` respected globally
- **Viewport:** `viewport-fit=cover` for notched devices

## Assets

| File | Type | Location |
|------|------|----------|
| hero.webp | Hero background image | `/hero.webp` |
| bandpic.webp | Press photo | `/bandpic.webp` |
| pitts-artwork.jpg | Album artwork / favicon | `/pitts-artwork.jpg` |

## Performance

- **LCP:** Hero image preloaded with `fetchpriority="high"` + `<link rel="preload">`
- **Fonts:** Outfit via Google Fonts with `display=swap`, preconnect to origin + CDN
- **Images:** All images use `loading="lazy"` (below-fold) and `aspect-ratio` containers
- **Bundle:** Vite React build, ~121KB JS gzip, ~6KB CSS gzip
- **Navigation:** Speculation Rules API with `moderate` eagerness for instant page loads
- **CLS:** All images have explicit or container-based dimensions
