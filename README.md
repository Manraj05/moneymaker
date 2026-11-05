# GTA Contractor Website & Programmatic Local SEO Engine

A production-grade, multi-client Next.js 15 web platform built for high-ticket Southern Ontario home service contractors (Epoxy Flooring & Roofing). Features an anti-slop luxury architectural industrial design, interactive instant quote calculator with real 2026 Ontario pricing math, touch/mouse before & after comparison slider, and a Programmatic Local SEO engine generating 28+ pre-rendered local landing pages per client.

---

## 🎯 Pre-Loaded GTA Contractor Leads

| Client Slug | Business Name | Niche | Primary City | Phone | Google Rating |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `purest-epoxy` *(Default)* | **Purest Epoxy** (Kyle) | Epoxy | Hamilton, ON | `(905) 745-6085` | 4.9 ★ (46 reviews) |
| `irongrip-epoxy` | **IronGrip Epoxy** | Epoxy | Brampton, ON | `(416) 574-2452` | 4.6 ★ (10 reviews) |
| `diamond-roof-brampton` | **Diamond Roof Repair** | Roofing | Brampton, ON | `(437) 215-8624` | 4.9 ★ (87 reviews) |
| `swan-roofing-brampton` | **Swan Roofing Services** (James) | Roofing | Brampton, ON | `(905) 458-4065` | 4.9 ★ (54 reviews) |

---

## ⚡ Quick Start & Client Switching

### 1. Preview Purest Epoxy Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Switch to Another Contractor Lead
Run the built-in helper script to switch active business profiles in one command:
```bash
# Switch to IronGrip Epoxy in Brampton
npm run client -- irongrip-epoxy

# Switch to Diamond Roof Repair in Brampton
npm run client -- diamond-roof-brampton

# Switch to Swan Roofing Services in Brampton
npm run client -- swan-roofing-brampton

# Switch back to Purest Epoxy
npm run client -- purest-epoxy
```

### 3. Verify Production Build & Static SEO Generation
```bash
npm run build
```
This builds all 35 static routes (`/`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and 28 `/locations/[city]/[service]` landing pages) with zero errors.

---

## 🏗️ Architecture & Features

### 1. Strict Anti-Slop Design System (Luxury Architectural Industrial)
- **Palette**: Deep Obsidian (`#090D16`), elevated slate cards (`#111827` / `bg-slate-900/80`), crisp 1px borders (`border-white/10` with amber hover glow), high-contrast off-white text (`#F8FAFC`), Safety Amber (`#F59E0B`) CTAs, and Emerald (`#10B981`) WSIB/insurance badges.
- **Typography**: `Space Grotesk` (bold geometric headings), `Inter` (body copy), and `JetBrains Mono` (numbers, CAD prices, warranties, and phone numbers) loaded via `next/font/google`.

### 2. Interactive High-Converting Components
- **Sticky Conversion Navbar**: Live dispatch indicator ("Crew Available in Brampton"), Google rating summary, and direct click-to-call.
- **Asymmetric Split Hero**: Google rating badge, technical guarantees, and embedded **60-Second Instant GTA Price Calculator**.
- **Quote Calculator (`src/components/QuoteCalculator.tsx`)**:
  - 200 to 2,500+ sq ft slider with niche presets (1-car garage, 2-car garage, basement; bungalow, 2-storey detached).
  - 3 selectable material tiers with 2026 Ontario pricing math (Epoxy: $5.50–$16.00/sq ft; Roofing: $4.50–$22.00/sq ft).
  - Live animated CAD price range output + inline lead capture form with instant confirmation reference number.
- **Before/After Comparison Slider (`src/components/BeforeAfterSlider.tsx`)**: Draggable divider with touch and mouse dragging comparing damaged surfaces (salt-pitted concrete / storm-damaged shingles) against showroom polyaspartic / architectural roofs.
- **Bento Grid 4-Step Process & Warranty (`src/components/ProcessBento.tsx`)**: Step-by-step engineering breakdown, ASTM testing specs, and 15-year guarantee.
- **Infinite Review Marquee (`src/components/ReviewMarquee.tsx`)**: Auto-scrolling wall of real Google Maps reviews.

### 3. Programmatic Local SEO Engine (The $250/mo Retainer Deliverable)
- **Dynamic Programmatic Routes (`src/app/locations/[city]/[service]/page.tsx`)**: Pre-renders dedicated landing pages for every combination of client `serviceAreas` × `services` (28 pages per client).
- **Ontario Climate Optimization**: Tailored copy addressing freeze-thaw cycles (-35°C to +35°C rating), road-salt degradation, and ice damming.
- **AI Engine Indexing (`src/app/llms.txt/route.ts`)**: Generates structured markdown for ChatGPT, Perplexity, and Gemini.
- **Dynamic Sitemap (`src/app/sitemap.ts`) & Robots (`src/app/robots.ts`)**.
- **JSON-LD Schema (`src/components/JsonLd.tsx`)**: `HomeAndConstructionBusiness` / `RoofingContractor`, `AggregateRating`, and `FAQPage`.

---

## 🚀 How to Pitch Contractors (The "Value-First" Sales Playbook)

1. **Switch the client**: `npm run client -- purest-epoxy`
2. **Deploy to Vercel**:
   ```bash
   npx vercel --prod
   ```
   Or deploy each client to a dedicated branch/subdomain (e.g., `purest-epoxy.vercel.app`).
3. **Record a 60-Second Loom or Send Direct Message**:
   > *"Hey Kyle, noticed Purest Epoxy didn't have a modern mobile estimate calculator on Google Maps. I built a live working preview for your Hamilton clients here: [Link]. Homeowners can calculate their square footage and book free on-site measures in 60 seconds. If you'd like to put your custom domain on it and turn on the 28 local city SEO pages, we can have it live by tomorrow."*
4. **Offer**:
   - **Setup**: $500 – $1,500 one-time (waived or reduced with 12-month retainer).
   - **Monthly Retainer**: $250 – $350/mo (High-speed hosting, lead delivery, monthly programmatic SEO ranking updates, and 1-hour monthly copy edits).
