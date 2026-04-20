# CASNAGGI – Product Requirements & Build Log

## Original Problem Statement
> Redesign this Charity organisations website to have a professional and international look: https://caresupportfortheneedy.com/

## User Choices (Jan 2026)
- **Scope**: Full multi-page marketing site (Home, About, Programs, Events, Impact, Get Involved, Donate, Contact)
- **Content**: Scrape current site + integrate official PDF (CASNAGGI ORIGINAL.pdf)
- **Donate**: Static CTA only (no payment integration)
- **Backend**: None – frontend-only
- **Design**: Agent-chosen Organic & Earthy archetype (terracotta + forest + sand, Outfit + Work Sans)

## Follow-up Request (Iteration 2)
User provided official organization PDF and asked for:
1. Integrate PDF content (full board of directors, real contact info, real impact numbers, named programs, registration details)
2. Dedicated Events page to post humanitarian outreaches with images
3. Hero image → carousel

## User Personas
1. **Donors / Funders** – need trust, transparency, impact proof, registration credentials
2. **Partners / Govt / Int'l Agencies** – need governance posture, board credibility, contact path
3. **Volunteers / Community** – need clear entry points
4. **Media / Journalists** – need leadership bios, event archive, organizational milestones

## Architecture
- **Stack**: React 19 + React Router 7 + Tailwind 3 + framer-motion + react-fast-marquee + embla-carousel-react + lucide-react
- **Structure**:
  - `src/App.js` – router shell (Header + 8 routes + Footer)
  - `src/components/` – Header, Footer, PageHeader, Reveal, HeroCarousel
  - `src/pages/` – Home, About, Programs, Events, Impact, GetInvolved, Donate, Contact
  - `src/data/content.js` – single source of truth (ORG, MEDIA, HERO_SLIDES, NAV, CORE_VALUES, PROGRAMS, TRUSTEES, ETHICS, OBJECTIVES, IMPACT_STATS, EVENTS, STRATEGIC_PLAN, PROJECTED_2035)

## What's Been Implemented
### Iteration 1 (MVP)
- [x] Design system: Outfit + Work Sans; terracotta/forest/sand palette; custom component utilities
- [x] Global shell: utility top strip, sticky glass header with mobile menu, massive "Hope, in action" footer
- [x] 7 pages built (Home, About, Programs, Impact, Get Involved, Donate, Contact)
- [x] Framer-motion scroll reveals, react-fast-marquee values ribbon
- [x] 46/46 testing agent assertions passed (0 broken images, 0 console errors)

### Iteration 2 (PDF Integration + Events + Carousel) — 20 Apr 2026
- [x] **Hero carousel** on Home: 4 auto-advancing slides (6s), prev/next buttons, dot indicators, framer-motion text crossfade, autoplay resets on user interaction
- [x] **Events page at /events**: filter chips (All + 7 categories), featured latest event, 8-card grid, 9 real events from PDF including Nobis Hall Jalingo Jan 2026 cash gifts, Taraba relief (500 families), Minna/Yenagoa medical (650), YG2F Youth Forum (200), Public Dialogue, 150 women graduation, volunteer mobilization, board inaugural, CAC registration
- [x] **Board of Directors expansion** on About: 5 trustees – Founder/CEO + Chairman as 2 large cards, 3 Directors below (Dr Chima Ikoro, Mrs Eucharia Nganya, Mrs Blessing Chinwe Okorie)
- [x] **Registration credentials strip** on About: Registrar (CAC), RC: 8722526, Registered 21 Aug 2025, Head Office Bayelsa
- [x] **Code of Ethics expanded**: now shows title + detailed body for each of 7 principles
- [x] **Programs expanded**: 7 thematic areas with named sub-initiatives (She Leads, Health on Wheels, Transparency Watch, Peace Clubs, Clean Water for All, Women in Enterprise, etc.)
- [x] **Real impact stats**: 5,000+ lives touched, 1,200 food packs, 650 medical beneficiaries, 15,000 reached via #CASNAGGIVoice
- [x] **Contact info updated**: casnaggi@gmail.com, website www.csnagginigeria.org, RC line in footer
- [x] **Events nav** added to header (desktop + mobile)
- [x] 50+ testing agent assertions passed (0 broken of 51 images, 0 console errors, 100% test pass rate)

### Iteration 3 (Strategic Plan + Event Detail Pages) — 20 Apr 2026
- [x] **Strategic Action Plan 2025–2035** on /impact: 3-phase timeline cards (Foundation / Expansion / Nationwide Scale) with numbered badges, connecting rule line, and 4-goal checklist per phase
- [x] **Projected 2035** section on /impact: terracotta block with 5 numbered target lines ("50,000+ households reached...") + dual CTA (Fund the roadmap / Partner with us)
- [x] **Event detail pages** at `/events/:slug`: cinematic hero (image + overlay + category/date/location/tags), sticky stats sidebar, long-form story (3 paragraphs per event), share button (navigator.share + clipboard fallback), tag chips, prev/next navigation (loops through archive, scrolls to top), related events (always 3, same-category-first)
- [x] Event data enriched with `story` (paragraph array) and `stats` (3 value/label metrics) per event
- [x] Invalid event slug redirects to /events
- [x] Testing agent: 100% pass, 0 bugs, 0 broken images, all 9 event slugs validated

## Prioritized Backlog
### P0 – Pre-launch polish
- Replace 3 placeholder trustee photos (Rev Fr Mbara, Dr Ikoro, Mrs Blessing Okorie)
- Replace placeholder social URLs with real handles
- Confirm bank transfer details for /donate

### P1 – Growth features
- Wire Contact + Newsletter forms to backend (FastAPI + MongoDB) or form provider
- Real donation flow (Stripe or Paystack for NGN) with tiers
- Strategic Action Plan 2025-2035 dedicated section (data exists in content.js as STRATEGIC_PLAN, not yet rendered)
- Blog / Press Releases page
- SEO metadata + Open Graph images

### P2 – Enhancements
- Events detail pages per event (deep-link to /events/:slug)
- Admin UI to post new events (would need auth + backend)
- Interactive Nigeria impact map
- Multilingual (English + Pidgin)
- Annual report PDF download

## Next Action Items
1. Collect 3 missing trustee photos + real social URLs + bank details
2. Decide on payment integration (Stripe / Paystack)
3. Consider rendering STRATEGIC_PLAN + PROJECTED_2035 arrays on /about or /impact
4. Add events detail pages when event archive grows
