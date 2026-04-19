# Grow More Digital Solutions — Website Reference Document
> Last updated: March 2026 | Version 1.0

---

## 🏢 Brand Identity

| Property | Value |
|---|---|
| **Company Name** | Grow More Digital Solutions |
| **Tagline** | "Transforming Online Presence Into Measurable Business Growth" |
| **Logo File** | `assets/images/logo.jpeg` |
| **Logo Style** | Yellow magnifying glass with upward arrow, black bold text on white background |
| **Category** | Digital Marketing Agency |
| **Target Market** | Indian SMBs, Startups, D2C Brands |

---

## 🎨 Design System

### Color Palette
```
--bg-dark:       #050614   (Main dark background)
--bg-section:    #070818   (Alternate section background)
--bg-card:       #0c0d22   (Card backgrounds)
--primary:       #6C63FF   (Brand purple)
--secondary:     #7C3AED   (Deep purple)
--accent-cyan:   #00D4FF   (Electric blue — highlights, CTAs)
--accent-pink:   #F72585   (Pink — creative accent)
--accent-yellow: #F5C518   (Logo yellow — premium CTA)
--text-white:    #FFFFFF
--text-light:    #A8B2D8
--text-muted:    #6B7A99
--glass-border:  rgba(255,255,255,0.07)
```

### Key Gradients
```css
--grad-primary:  linear-gradient(135deg, #6C63FF, #7C3AED)  /* Purple — main brand */
--grad-accent:   linear-gradient(135deg, #00D4FF, #6C63FF)  /* Cyan-to-purple — highlights */
--grad-text:     linear-gradient(135deg, #6C63FF, #00D4FF)  /* Gradient text */
--grad-yellow:   linear-gradient(135deg, #F5C518, #FF8C00)  /* Yellow — premium CTA */
--grad-green:    linear-gradient(135deg, #25D366, #128C7E)  /* WhatsApp */
```

### Typography
```
Headings: 'Plus Jakarta Sans' (Google Fonts) — 700/800/900 weights
Body:      'Inter' (Google Fonts) — 400/500/600 weights
```

### Border Radius System
```
--radius-lg: 24px  (cards, major containers)
--radius-md: 16px  (floating cards, small panels)
--radius-sm: 12px  (inputs, small elements)
Buttons:     100px (pill shape)
```

### Button Types
| Button Class | Color | Use Case |
|---|---|---|
| `.btn-primary` | Purple gradient | Primary CTAs |
| `.btn-outline` | Transparent/border | Secondary CTAs |
| `.btn-yellow` | Yellow gradient | Consultation/Premium CTA |
| `.btn-phone` | Orange gradient | Phone call CTA |
| `.btn-whatsapp` | Green gradient | WhatsApp CTA |
| `.btn-cyan` | Cyan gradient | Accent/feature CTAs |

---

## 📁 File Structure

```
Akash  digitl/
├── index.html              ← Home page
├── about.html              ← About Us page
├── services.html           ← Services page
├── contact.html            ← Contact page
├── website-reference.md    ← This file
├── assets/
│   ├── css/
│   │   └── styles.css      ← All styles (one unified stylesheet)
│   ├── js/
│   │   └── main.js         ← All JavaScript (vanilla JS, no dependencies)
│   └── images/
│       ├── logo.jpeg       ← Grow More logo (white bg, 500x500)
│       ├── img-digital-marketing.jpg  ← Hero image, holographic AD visual
│       ├── img-social-media.jpg       ← Team with social media icons (Why Choose Us)
│       ├── img-influencer.jpg         ← Woman with floating social apps (Influencer service)
│       ├── img-services.jpg           ← Social media content creator (SEO/services)
│       ├── img-team.jpg               ← Overhead team working (About/Team)
│       └── img-video.png              ← Purple/blue phone screen (Web Dev)
└── Digital marketing.md/              ← Original asset folder (images source)
```

---

## 📄 Page Structure

### HOME PAGE (`index.html`)
1. **Navbar** — Sticky, glassmorphism on scroll, logo + nav links + CTA
2. **Hero** — Full viewport, animated typed text, floating metric cards, 3 CTAs
3. **Trust Bar** — Infinite marquee of services/specialties
4. **Services Preview** — 3×2 card grid with icon, title, desc, link
5. **Why Choose Us** — Split layout: image left + 4 feature items right
6. **Stats Counter** — 4 animated counters (500+ clients, 5+ yrs, 1200+ projects, 98%)
7. **Process (How We Work)** — 4 numbered steps with connector line
8. **Testimonials** — Auto-rotating slider with 6 cards (3 visible)
9. **CTA Banner** — Dark gradient with 3 CTA buttons
10. **Footer** — 4-column: Brand | Quick Links | Services | Contact

### ABOUT PAGE (`about.html`)
1. Navbar
2. **Page Hero** — Compact hero with page title
3. **Our Story** — Image + text with company highlights
4. **Mission & Vision** — 2-column gradient cards
5. **Core Values** — 3×2 value cards with icons
6. **Why We're Different** — Split layout (mirrored from home)
7. **Stats Counter** — 4 counters
8. **Team Section** — Full-width team image with overlay text
9. **CTA Banner**
10. Footer

### SERVICES PAGE (`services.html`)
1. Navbar
2. Page Hero
3. **Services Overview** — 6-card quick grid
4. **Detailed Services** — 6 full alternating sections (image + content):
   - Social Media Marketing (id: `#social-media`)
   - Digital Marketing (id: `#digital-marketing`)
   - Influencer Marketing (id: `#influencer`)
   - Web Development (id: `#web-dev`)
   - Email Marketing (id: `#email`)
   - Search Engine Optimization (id: `#seo`)
5. Stats Counter
6. CTA Banner
7. Footer

### CONTACT PAGE (`contact.html`)
1. Navbar
2. **Page Hero** — Includes quick call/WhatsApp buttons
3. **Contact Section** — 2-column:
   - Left: Contact info cards, quick CTA buttons, social links
   - Right: Contact form + Google Form CTA
4. **Map Placeholder** — Styled placeholder with Google Maps link
5. Stats Counter
6. **FAQ Cards** — 4 common questions
7. CTA Banner
8. Footer

---

## 🔧 JavaScript Features

| Feature | Implementation |
|---|---|
| Navbar scroll effect | IntersectionObserver → adds `.scrolled` class |
| Mobile hamburger menu | CSS transitions + `open` class toggle |
| Scroll reveal animations | IntersectionObserver → adds `.visible` class |
| Counter animation | requestAnimationFrame with ease-out cubic |
| Typed text effect | Custom recursive setTimeout typewriter |
| Testimonial slider | Transform-based sliding with auto-play, touch swipe |
| Active nav link | URL pathname matching |
| Mouse parallax | Mousemove event on hero orbs |
| Form feedback | Visual success state on submit |

### Scroll Reveal Classes
```
.reveal       → fade up
.reveal-l     → fade from left
.reveal-r     → fade from right
.reveal-scale → scale up from 0.9
.d1/.d2/.d3... → transition-delay modifiers (0.1s increments)
```

---

## 🔗 Dynamic Placeholders

Replace these in all HTML files before going live:

| Placeholder | Replace With |
|---|---|
| `[PHONE_NUMBER]` | Actual phone number (e.g., +91 98765 43210) |
| `[WHATSAPP_NUMBER]` | WhatsApp number without + (e.g., 919876543210) |
| `[GOOGLE_FORM_LINK]` | Google Form URL |
| `[EMAIL_ADDRESS]` | Business email |
| `[OFFICE_ADDRESS]` | Full office address |

**WhatsApp Note:** The `https://wa.me/` link requires the number WITHOUT `+` sign.
Example: `https://wa.me/919876543210`

---

## 🖼️ Image Usage Map

| Image File | Used In | Section |
|---|---|---|
| `logo.jpeg` | All pages | Navbar + Footer |
| `img-digital-marketing.jpg` | Home, About | Hero section, Team section |
| `img-social-media.jpg` | Home, Services | Why Choose Us, Social Media service |
| `img-influencer.jpg` | Services | Influencer Marketing service |
| `img-services.jpg` | About, Services | Why We're Different, SEO service |
| `img-team.jpg` | About, Services | Our Story section, Email Marketing service |
| `img-video.png` | Services | Web Development service |

---

## 🎨 Key CSS Patterns

### Glassmorphism Card
```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.07);
backdrop-filter: blur(20px);
border-radius: 24px;
```

### Gradient Text
```css
background: linear-gradient(135deg, #6C63FF, #00D4FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Glowing Card Hover
```css
border-color: rgba(108, 99, 255, 0.35);
box-shadow: 0 0 40px rgba(108, 99, 255, 0.25);
transform: translateY(-8px);
```

### Section Background Orb
```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.1;
  animation: orb-float 10s ease-in-out infinite;
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|---|---|
| `< 1100px` | Footer 2-col, hero image smaller |
| `< 960px` | Nav collapses to hamburger, hero single column, 2-col grids → 1-col |
| `< 640px` | All grids → single column, font sizes reduced, section padding reduced |
| `< 380px` | Hero stats gap reduced, buttons full width |

---

## 🚀 Future Enhancement Ideas

1. **WhatsApp Chat Widget** — Add a floating chat widget instead of just a link
2. **Portfolio/Case Studies Page** — Showcase client results with before/after metrics
3. **Blog Section** — Content marketing integration for SEO
4. **Live Chat** (Tidio, Crisp, or Intercom) — For instant lead capture
5. **Google Analytics 4** — Add GA4 tracking tag to `<head>`
6. **Meta Pixel** — For Facebook/Instagram ad retargeting
7. **Loading Animation** — Add a brief brand preloader on first visit
8. **Video Hero** — Replace hero image with an auto-play muted brand video
9. **Cookie Banner** — GDPR/privacy compliance
10. **AMP Version** — For ultra-fast mobile performance

---

## 📊 Performance Notes

- All images use `loading="lazy"` except the hero (which uses `loading="eager"`)
- Google Fonts loaded with `preconnect` for faster DNS resolution
- CSS uses CSS custom properties for easy theming
- No external JS libraries — pure vanilla JavaScript (~6KB)
- Single CSS file for minimal HTTP requests
- Animations use CSS transforms (GPU-accelerated)
- Smooth scroll uses CSS `scroll-behavior: smooth` + JS fallback

---

## 🔄 How to Update Content

**Change color scheme:** Edit CSS custom properties in `:root` block at top of `styles.css`

**Add a new service card:** Copy a `.svc-card` div and update icon class, name, desc, link

**Update testimonials:** Find `.testi-card` elements in `index.html` and update content

**Update stats numbers:** Change `data-count` attribute on `.stat-num` elements

**Add new pages:** Copy `about.html` as template, update nav `class="active"` to match

---

*Document created for Grow More Digital Solutions website — March 2026*
