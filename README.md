# Mall of America — Interactive Sales Experience

A premium, cinematic B2B platform designed for Mall of America's leasing, sponsorship, and partnership teams. This experience transforms statistics into a visionary journey for global brands.

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 4 (using the new JIT engine)
- **Animations**: Framer Motion 12 (for cinematic transitions and micro-interactions)
- **Routing**: TanStack Router
- **3D Visuals**: React Three Fiber + Three.js
- **AI Core**: Google Gemini 3 flash preview via the `@google/generative-ai` SDK
- **Data Fetching**: TanStack Query

## AI-Powered Tools

To enhance the B2B sales experience, we've integrated specialized AI tools:

1. **The MoA Visionary (AI Concierge)**
   - **Purpose**: A 24/7 luxury partnership consultant that provides instant answers about leasing, traffic, and demographics.
   - **Context**: Primed with MoA's specific data (40M+ annual guests, 5.6M sq ft) to act as a subject matter expert.

2. **Smart Brand Matcher**
   - **Purpose**: Helps potential lessees identify their ideal location.
   - **Mechanism**: Analyzes brand descriptions and categorizes them into one of MoA's three "Theatres": Retail, Lifestyle & Dining, or Entertainment.

3. **Dynamic ROI Predictor**
   - **Purpose**: Provides data-driven impact statements for potential partners.
   - **Mechanism**: Generates visionary ROI predictions based on business category and scale, leveraging MoA's massive foot traffic data.

## Design Decisions

- **Cinematic Aesthetic**: We prioritized a "premium" feel using glassmorphism, subtle grain overlays, and a sophisticated color palette (OKLCH color space for vibrant dark modes).
- **Typography**: Paired the elegant **Fraunces** serif for headings with the functional **Inter** sans-serif for a high-end editorial look.
- **Micro-Animations**: Used smooth, non-intrusive animations (staggered entries, floating elements) to keep the experience feeling "alive" and interactive.
- **Asset Optimization**: Implemented high-performance GL power preferences for 3D particle fields and optimized video backgrounds for smooth playback across devices.

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js 20+
- A Google Gemini API Key (get one at [Google AI Studio](https://aistudio.google.com/))

### 2. Installation
```bash
# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your API key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Locally
```bash
npm run dev
```

## Project Structure
- `/src/components`: Core UI components and AI-driven tools.
- `/src/components/three`: React Three Fiber scenes.
- `/src/lib/gemini.ts`: AI service layer for Gemini API integration.
- `/src/routes`: File-based routing with TanStack Router.
- `/src/styles.css`: Global styles and Tailwind configuration.
