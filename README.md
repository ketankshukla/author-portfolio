<div align="center">

# 📚 Author Portfolio — Ketan Shukla

### *Three series. Twenty-two books. One shelf.*

**The official author site presenting the complete published catalogue**

[![Series](https://img.shields.io/badge/series-3-1E3A8A?style=for-the-badge)](#-the-three-series)
[![Books](https://img.shields.io/badge/books-22-1D4ED8?style=for-the-badge)](#-the-three-series)
[![Genres](https://img.shields.io/badge/genres-Fantasy%20·%20Philosophy%20·%20Performance-2563EB?style=for-the-badge)](#-the-three-series)

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel)](https://vercel.com)

</div>

---

## 📖 Table of Contents

- [What This Is](#-what-this-is)
- [The Three Series](#-the-three-series)
- [Site Architecture](#-site-architecture)
- [The Asset Library](#-the-asset-library)
- [SEO & Discoverability](#-seo--discoverability)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
- [Design Notes](#-design-notes)

---

## 🎯 What This Is

A single-page **Next.js 16** author site that presents three complete book series — twenty-two books in total — spanning epic fantasy, philosophy, and performance science.

The site is deliberately narrow in scope: it exists to make the catalogue legible at a glance. A dark, cinematic hero; a showcase that walks through each series with its covers and box-set art; a short author section; and a footer. No blog, no store, no CMS.

Each series has its own dedicated production repository. This one is the shop window.

---

## 📚 The Three Series

<table>
<tr>
<th width="34%">Series</th>
<th width="12%">Books</th>
<th>What It Is</th>
</tr>
<tr>
<td><b>⚔️ Aztec Samurai Adventures</b></td>
<td align="center"><b>12</b></td>
<td>An epic fantasy saga fusing Mesoamerican warrior traditions with samurai philosophy. Three acts, 288 chapters, 30 named characters.</td>
</tr>
<tr>
<td><b>🌑 Reality Without Belief</b></td>
<td align="center"><b>5</b></td>
<td>A non-fiction sequence arguing that belief is not a virtue and that clarity lies beyond both belief and disbelief.</td>
</tr>
<tr>
<td><b>🔁 Repetition — Mother Of Mastery</b></td>
<td align="center"><b>5</b></td>
<td>A non-fiction sequence on the science of repetition — myelination, habit systems, and the techniques behind fast learning.</td>
</tr>
</table>

<div align="center"><b>22 books across 3 series</b></div>

---

## 🏗️ Site Architecture

The page is composed of four components, rendered in order:

```
   app/page.tsx
        │
        ├── <Hero />              🌌  Full-bleed cinematic opening
        ├── <SeriesShowcase />    📚  All three series, covers + box sets
        ├── <AuthorSection />     ✍️   Author bio and positioning
        └── <Footer />            🔗  Links and closing
```

| Component | Responsibility |
|:----------|:---------------|
| `Hero` | First impression — dark, full-viewport, sets the tone |
| `SeriesShowcase` | The core of the site: each series with cover art, box sets, and series logo |
| `AuthorSection` | Author bio, photo, and positioning statement |
| `Footer` | Navigation and closing links |

---

## 🎨 The Asset Library

Every cover, box set, and series logo is served locally from `public/images/`, organised by series:

| Series | Assets |
|:-------|:-------|
| **Aztec** | 12 book covers · 3 box-set landscapes · complete-series cover · series logo |
| **Reality** | 5 book covers · complete-series landscape · series logo |
| **Repetition** | 5 book covers · complete-series landscape · series logo |
| **Author** | Portrait photograph |

All art is AI-generated and produced through the per-series repositories, then copied here at web resolution.

---

## 🔍 SEO & Discoverability

The site ships with a full discoverability layer rather than relying on defaults:

- **`src/app/sitemap.ts`** — programmatic sitemap generation
- **`src/app/robots.ts`** — crawler directives
- **Google Search Console** — verified via the token file in `public/`, with setup steps recorded in `GOOGLE-SEARCH-CONSOLE-SETUP.md`
- **Open Graph imagery** — social card generation prompt kept in `OG-IMAGE-PROMPT.md`
- **Custom favicon** — `public/favicon.svg`

---

## 🗂️ Repository Structure

```
author-portfolio/
│
├── src/
│   └── app/
│       ├── page.tsx                # 🏠 Composes Hero → Showcase → Author → Footer
│       ├── layout.tsx              # 🧱 Root layout, fonts, metadata
│       ├── globals.css             # 🎨 Global styles and theme tokens
│       ├── sitemap.ts              # 🔍 Generated sitemap
│       └── robots.ts               # 🔍 Crawler rules
│
├── public/
│   ├── images/
│   │   ├── aztec/                  # ⚔️  12 covers, 3 box sets, series cover, logo
│   │   ├── reality/                # 🌑 5 covers, series cover, logo
│   │   ├── repetition/             # 🔁 5 covers, series cover, logo
│   │   └── ketan-shukla.jpeg       # 📷 Author portrait
│   ├── favicon.svg
│   └── google*.html                # ✅ Search Console verification
│
├── BUSINESS-STRATEGY.md            # 💼 Positioning and services strategy
├── GOOGLE-SEARCH-CONSOLE-SETUP.md  # 🔍 SEO setup runbook
└── OG-IMAGE-PROMPT.md              # 🎨 Social card generation prompt
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

**Stack:** Next.js 16.1.6 (App Router) · React 19.2.3 · TypeScript 5 · Tailwind CSS 4 · Lucide React
**Deployment:** Vercel, auto-deploying from GitHub

---

## 🎨 Design Notes

- **Dark by default.** The page renders on a black ground (`bg-black`) — the covers carry the colour, so the interface stays out of their way.
- **Pinch-zoom is suppressed.** `page.tsx` registers passive-false `touchmove` and `gesture*` listeners to block multi-touch zoom, keeping the showcase framed as designed on mobile.
- **Client component.** The page is `"use client"` because of those gesture listeners.
- **No CMS.** Series data and imagery are committed to the repository — the catalogue changes rarely, and a build step is cheaper than a content backend.

---

<div align="center">

**Ketan Shukla** · 3 series · 22 books

*Epic fantasy · Philosophy · Performance science*

</div>
