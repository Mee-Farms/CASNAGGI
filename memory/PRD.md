# CASNAGGI – Product Requirements & Build Log

## Original Problem Statement
> Redesign this Charity organisations website to have a professional and international look: https://caresupportfortheneedy.com/

## User Choices (Jan 2026)
- **Scope**: Full multi-page marketing site (Home, About, Programs, Impact, Get Involved, Donate, Contact)
- **Content**: Scrape current site and reuse real copy + images
- **Donate**: Static CTA only (no payment integration)
- **Backend**: None – frontend-only
- **Design**: "Surprise me" → design agent chose Organic & Earthy archetype (terracotta + forest + sand, Outfit + Work Sans)

## User Personas
1. **Donors / Funders** – need trust signals, transparent "ways to give", impact proof
2. **Partners / NGOs / Govt** – need credibility, governance posture, contact path
3. **Volunteers / Community** – need clear entry points (Get Involved, Contact)
4. **Media / Journalists** – need leadership bios, mission, timeline

## Core Static Requirements
- 7 responsive pages, sticky glass header, massive editorial footer
- Earth-tone palette with terracotta accents, bold display typography
- Real org content (CASNAGGI, Bayelsa, Nigeria) and real trustee photos
- 100% data-testid coverage on interactive elements
- Scroll-triggered animations (framer-motion) and values marquee (react-fast-marquee)

## Architecture
- **Stack**: React 19 + React Router 7 + Tailwind 3 + framer-motion + react-fast-marquee + lucide-react
- **Structure**:
  - `src/App.js` – router shell (Header + Routes + Footer)
  - `src/components/` – Header, Footer, PageHeader, Reveal
  - `src/pages/` – Home, About, Programs, Impact, GetInvolved, Donate, Contact
  - `src/data/content.js` – single source of truth for all org content
  - `src/index.css` – fonts, brand tokens, component utilities
  - `tailwind.config.js` – custom `brand.*` color palette

## What's Been Implemented (20-Apr-2026)
- [x] Design system: Outfit display + Work Sans body, terracotta/forest/sand palette, custom CSS components (`.btn-primary`, `.card-tactile`, `.overline`, etc.)
- [x] Global shell: utility top strip (phone/email), sticky glass header with mobile menu, massive "Hope, in action" footer with CTA
- [x] **Home**: Immersive hero, values marquee, mission bento, 6-card core values grid, 3-card programs preview, 4-stat impact band, founder pull-quote, terracotta CTA strip
- [x] **About**: Mission/Vision split cards, unveiling image band, 3 objective cards (Humanitarian / Empowerment / Governance), 7-item Code of Ethics list, 3 trustee profile cards
- [x] **Programs**: Chip index + 6 alternating program showcases with images and bullets, bottom partner CTA
- [x] **Impact**: 4-color stats bento, 3 success stories, pull-quote, 4-step timeline
- [x] **Get Involved**: 4 large action cards (Volunteer / Fundraise / Advocate / Partner) + volunteer image band + newsletter form
- [x] **Donate**: 4 amount suggestions ($25/$75/$200/$500), bank transfer card, contact-the-team card with copy-email, transparency pledge
- [x] **Contact**: Info column + 7-field form with "Message sent" confirmation
- [x] All images (Pexels/Unsplash + caresupportfortheneedy.com assets) loading with 0 broken
- [x] Testing agent: 46/46 frontend assertions passed, 0 bugs, 0 console errors

## Prioritized Backlog
### P0 – Pre-launch polish (pending)
- Replace placeholder social URLs (`#`) with real Facebook/Twitter/Instagram/YouTube links
- Replace bank details with actual CASNAGGI account info (or keep "available on request")
- Add real donation flow (Stripe / Paystack / Razorpay) if/when requested
- Add Gallery page (link exists on original site)

### P1 – Growth features
- Wire Contact + Newsletter forms to a backend (FastAPI + MongoDB) or a form provider (Formspree/Resend)
- Blog / News / Press Releases page for ongoing SEO and credibility
- Multilingual support (English + Pidgin / local languages)
- Open Graph / social preview images and SEO metadata

### P2 – Enhancements
- Interactive impact map of Nigeria
- Volunteer application form + dashboard
- Annual report download center
- Donor recognition wall

## Next Action Items (for main agent in next session)
1. Gather real social URLs + bank details and swap placeholders
2. Decide on payment integration (Stripe / Paystack) and wire /donate
3. Optional: add Gallery page pulling from original site's gallery
