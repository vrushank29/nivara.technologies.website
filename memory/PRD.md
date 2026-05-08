# Nivara Ltd — Landing Page PRD

## Original problem statement
Create a modern, clean, premium single-page IT consulting website redesign for "Nivara Ltd" using
business-card-inspired branding. Theme: calm, professional, trustworthy. White background, bold red
accents (#D90429), dark navy/charcoal (#1D3557) typography, smooth red wave/curve shapes, subtle dot
texture, soft shadows, rounded corners. **No backend** — pure landing page.

## Architecture
- Vite 6 + React 19 + TypeScript at `/app/frontend`
- Tailwind v4 (`@tailwindcss/vite`) with custom `@theme` brand tokens
- `motion/react` for entrance & hover animations
- `lucide-react` icons
- Supervisor runs `yarn start` (aliased to `vite --port=3000 --host=0.0.0.0`)
- `vite.config.ts` has `allowedHosts: true` for the cluster preview domain

## User personas
1. **SME owner / Operations director** — needs reliable IT support without IT jargon
2. **Office / studio manager** — looking for managed M365 + cyber + helpdesk
3. **Existing client** — wants quick contact (phone, mailto)

## Core requirements (static)
- Headline: "Digital Peace of Mind"
- Phone: 074 8050 6197
- Email: nivaraltd.dpm@outlook.com
- Services (6): IT Consulting, Managed IT Support, Cloud Solutions, Cyber Security,
  Remote Assistance, Backup & Recovery
- Sections: Nav, Hero, Logo strip, About, Services, Why Us + How-we-work, Testimonials,
  Contact, Footer, Back-to-top
- Mobile-first responsive, smooth scrolling, hover micro-interactions

## What's been implemented (2026-01)
- ✅ Sticky nav with scroll-blur effect, mobile hamburger menu, phone CTA in nav
- ✅ Hero with red squiggle underline on "Peace", floating helpdesk + issue-resolved cards,
  trust badges (GDPR & Cyber Essentials, 15min response, 120+ businesses), dual CTAs
- ✅ Animated marquee logo strip
- ✅ About section with image, 10+ years stat card and 4 brand pillars
- ✅ 6-card services grid with hover lift + icon-fill transition
- ✅ Why Us — 4 stat cards + navy "How we work" 3-step panel with red ribbon
- ✅ 3 testimonial cards (middle one navy variant for rhythm)
- ✅ Contact section: phone tile, email tile, location, working hours card,
  contact form (mailto-based), red ribbon section divider
- ✅ Footer: navy with red ribbon top edge, inverted logo, services / company / legal columns
- ✅ Back-to-top floating button with motion fade
- ✅ Custom favicon (red rounded square with italic N)
- ✅ Unique data-testids for all interactive elements
- ✅ Tested via testing_agent_v3 — 51/52 checks pass; duplicate testid fixed

## Prioritized backlog
- **P1** Replace placeholder testimonial avatars with real client photos
- **P1** Add real-life Nivara logo if/when supplied (replace text wordmark + "N" mark)
- **P2** Wire up form to a real submission endpoint (Formspree / SendGrid / FastAPI) instead of mailto
- **P2** Add a proper services page or per-service detail modal
- **P2** Add dedicated Cyber Essentials / certifications strip with badges
- **P3** Add UK regions served map + service-area schema markup for local SEO
- **P3** Add blog / case studies section for content marketing
- **P3** Cookie banner (GDPR) and privacy / terms / cookie policy pages

## Files of interest
- `/app/frontend/src/App.tsx` — all sections (single-file redesign)
- `/app/frontend/src/index.css` — Poppins + Inter, brand tokens, dot grid, ribbon utilities
- `/app/frontend/index.html` — meta description, theme-color, favicon
- `/app/design_guidelines.json` — design agent blueprint
