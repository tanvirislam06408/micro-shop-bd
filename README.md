# MICRO-SHOP BD — AI Subscriptions & Digital Products Marketplace

![MICRO-SHOP BD Brand Banner](./public/logo.png)

A modern, premium, conversion-focused e-commerce landing website for **MICRO-SHOP BD** — Bangladesh's premier digital marketplace for AI subscriptions, AI tools, developer APIs, and creative software suites.

---

## 🔥 Key Features

- **Official Brand Identity**: Purple/lavender primary gradient theme with official logo badge, glowing accents, rounded cards (`rounded-3xl`), and responsive typography.
- **Dynamic Swiper Hero Slider**: Interactive carousel promoting **Gemini AI Pro 18 Months (@ ৳350)**, **ChatGPT Plus Owner Account (@ ৳1,550)**, and creative tools.
- **Direct WhatsApp Order System**: Integrated purchase flow that automatically generates pre-filled WhatsApp order messages containing product name, plan duration, and price in BDT (৳).
- **Category Filter Marketplace**: Interactive filter tabs (`All`, `AI Subscriptions`, `AI Tools`, `Design Tools`, `Productivity`, `Other`) with instant client-side filtering.
- **Google AI Pro Spotlight Section**: Showcases 7 key features (Gemini Pro, Antigravity, Nano Banana Pro, Veo 3.1, 5TB Storage, Personal Account, 18M Validity).
- **Responsive Layout**: Designed for mobile (320px+), tablet, and desktop screens with zero horizontal overflow.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Carousel**: [Swiper.js 11](https://swiperjs.com/)
- **Language**: TypeScript

---

## 📦 Available Products & Pricing

| Product | Plan & Duration | Price (BDT ৳) | Key Features |
| :--- | :--- | :--- | :--- |
| **Gemini AI Pro** | 18 Months Personal Account | **৳350** | Gemini Pro, Antigravity, Nano Banana Pro, Veo 3.1, 5TB Storage |
| **ChatGPT Plus (Owner)** | Personal Owner Mail | **৳1,550** | GPT-4o, DALL-E 3, Coding, Voice & Custom GPTs |
| **CapCut Pro** | 1 Month Validity | **৳250** | Pro effects, templates, AI captions & 4K export |
| **Codex API** | API Access | **৳650** | High-speed AI code completions |
| **Claude API** | API Access | **৳600** | Claude 3.5 Sonnet 200K context window |
| **Notion Pro** | Pro Subscription | **৳650** | Unlimited Notion AI & workspace storage |
| **VPNs (Nord/Surfshark)** | Premium Access | **৳600** | High-speed streaming & private servers |
| **Wordwall Pro** | Pro Plan | **৳1,400** | Interactive quiz & teaching templates |
| **ElevenLabs** | Monthly Credits | **৳400** | Ultra-realistic AI voice cloning |
| **Zoom Pro** | Pro Plan | **৳1,400** | 30-hour group meetings & 300 participants |
| **Framer Pro** | Pro Plan | **৳6,400** | AI website builder & custom domain |

---

## 📱 WhatsApp Configuration

The central WhatsApp phone number and message link generator are configured in [`src/lib/whatsapp.ts`](./src/lib/whatsapp.ts):

```typescript
// src/lib/whatsapp.ts
export const WHATSAPP_NUMBER = "8801922458412";
```

To change the business phone number in the future, simply update `WHATSAPP_NUMBER` in `src/lib/whatsapp.ts`.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js v18.0.0 or higher
- npm or yarn

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/micro-shop-bd.git
cd micro-shop-bd
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
micro-shop-bd/
├── public/
│   └── logo.png              # Official Brand Logo
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & Swiper overrides
│   │   ├── icon.png          # App favicon
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   └── page.tsx          # Landing page
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header with logo & WhatsApp CTA
│   │   ├── Hero.tsx          # Hero section wrapper
│   │   ├── HeroSlider.tsx    # Swiper hero carousel
│   │   ├── Stats.tsx         # Quick trust stats grid
│   │   ├── ProductSection.tsx# Marketplace container with category filter
│   │   ├── ProductCard.tsx   # Reusable product card component
│   │   ├── CategoryFilter.tsx# Filter tabs
│   │   ├── GoogleAISection.tsx# Dedicated Gemini AI Pro feature grid
│   │   ├── Features.tsx      # Why Choose Us benefit cards
│   │   ├── HowToOrder.tsx    # 3-step order process
│   │   ├── Testimonials.tsx  # Customer review cards
│   │   ├── FAQ.tsx           # Accessible accordion FAQ
│   │   ├── CTA.tsx           # Final conversion banner
│   │   ├── Footer.tsx        # Footer with brand links & social icons
│   │   └── WhatsAppButton.tsx# Fixed bottom-right WhatsApp button
│   ├── data/
│   │   ├── products.ts       # Products dataset & pricing
│   │   ├── stats.ts          # Statistics dataset
│   │   ├── testimonials.ts   # Testimonials dataset
│   │   └── faq.ts            # FAQ dataset
│   ├── lib/
│   │   └── whatsapp.ts       # Central WhatsApp link generator
│   └── types/
│       └── product.ts        # TypeScript interfaces
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📜 License

Copyright © 2026 **MICRO-SHOP BD**. All rights reserved.
