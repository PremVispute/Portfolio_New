# CLAUDE.md

Guidance for Claude Code (and other AI assistants) when working in this repository.

## Project Overview

Personal portfolio website for **Prem Vispute**, deployed as a static export to **GitHub Pages** under the path `/Portfolio_New/`. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and GSAP for scroll animation.

## Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 3.4 + a single `globals.css` for fonts and a few custom classes
- **Animation**: GSAP 3 (`gsap`, `@gsap/react`, `ScrollTrigger`, `EasePack`)
- **Theming**: `next-themes` (class-based dark mode, `defaultTheme="system"`)
- **Icons**: `react-icons` (Fa, Fa6, Md sets)
- **Node**: 20 (matches CI in `.github/workflows/nextjs.yml`)
- **Deployment**: GitHub Pages via the workflow in `.github/workflows/nextjs.yml` (uses `next build` + `out/` artifact). `next.config.mjs` is intentionally minimal because the workflow injects `basePath`/`unoptimized` images via `actions/configure-pages` with `static_site_generator: next`.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build (no out/ unless GH-Pages action is used)
npm run start    # Serve production build
npm run lint     # next lint
npx tsc --noEmit # Type-check only
```

## Project Layout

```
src/
  app/
    layout.tsx          # Root layout, wires ThemeProvider, <body> bg classes
    page.tsx            # Server component — composes the single page
    globals.css         # Tailwind directives + DIN @font-face + 3 layout classes
  components/
    Hero.tsx            # Full-screen background + GSAP scroll-out animation
    About.tsx           # Profile photo + bio
    Skills.tsx          # Resume CTA + theme toggle + <SkillsCarousel/>
    Work.tsx            # GitHub + LeetCode preview cards
    Contact.tsx         # Social links + embedded Google Map
    ui/
      Header.tsx        # Fixed top nav anchors (#about, #skills, #work, #contact)
      Footer.tsx        # Static footer line
      SkillsCarousel.tsx# Infinite-scrolling tech logo strip
  utils/
    helpers/
      ThemeProvider.tsx # Thin wrapper over next-themes
      skillsData.ts     # Static array of imported logo StaticImageData
      types.ts          # skillsDataItems interface
    images/             # All bitmap assets imported by components
public/
  fonts/                # DIN Regular / Medium / Bold TTFs (served at /Portfolio_New/fonts/...)
  Prem_Vispute_Resume.pdf
  Paper Id 55-Prem Vispute_Certificate.pdf
```

## Key Architectural Notes

### Server vs Client Components

`src/app/page.tsx` is a **server component** — it does not declare `"use client"`. Only the components that actually need hooks/browser APIs are client components:

- `Hero.tsx` (uses `useGSAP`)
- `Skills.tsx` (uses `useState`, `useEffect`, `useTheme`)
- `ui/SkillsCarousel.tsx` (uses `useEffect` + DOM mutation + GSAP)
- `utils/helpers/ThemeProvider.tsx` (next-themes is a client provider)

If you add hooks, browser APIs, or event handlers to `About`, `Work`, `Contact`, `Header`, or `Footer`, you must add `"use client"` at the top of that file.

### GitHub Pages basePath

This site is served from `https://<user>.github.io/Portfolio_New/`. **All public asset URLs are hand-prefixed with `/Portfolio_New/`** in source code:

- `globals.css` `@font-face` `src: url("/Portfolio_New/fonts/...")`
- `Skills.tsx` `href="/Portfolio_New/Prem_Vispute_Resume.pdf"`

This means **`npm run dev` will 404 those assets locally** unless you also serve under `/Portfolio_New/` or temporarily strip the prefix. Don't "fix" these to `/fonts/...` — production deployment depends on the prefix. The CI workflow injects the matching `basePath` via `actions/configure-pages@v5` with `static_site_generator: next`.

### Theme System

- Tailwind is configured with `darkMode: "class"`.
- `next-themes` toggles the `class="dark"` on `<html>`.
- `layout.tsx` sets `<body className="bg-white dark:bg-[#121212] text-slate-900 dark:text-slate-100">`. **Dark mode uses `#121212`, not pure black** (Material/HIG guidance — pure black causes halation and breaks elevation hierarchy on OLED).
- The light/dark toggle lives inside `Skills.tsx`: it's an explicit `role="radiogroup"` with two radios marked `sr-only` (keyboard-reachable; not `hidden`), styled via Tailwind peer-focus utilities.
- `Skills.tsx` returns `null` until mounted to avoid hydration mismatch on the toggle's selected state.

### Header

- `Header.tsx` is **`fixed` at the top of the viewport** with `bg-black/40 backdrop-blur-md` so nav remains reachable from every section.
- `globals.css` sets `scroll-padding-top: 6rem` so anchor jumps (`#about`, `#skills`, etc.) don't land behind the fixed header.
- The header is intentionally compact (single row, horizontal nav on all breakpoints). Don't restore the original `flex-col` mobile stack — it makes the sticky header eat half the mobile viewport.

### Accessibility conventions (enforced)

- **Headings**: exactly one `<h1>` ("PREM VISPUTE" in Header). Every section has an `<h2>`. Don't add additional h1s or skip levels.
- **Sections**: each page section is `<section id="..." aria-labelledby="...-heading">`. Footer is `<footer>`. Header nav is inside `<nav aria-label="Primary">`.
- **Contrast**: never use `text-gray-400` on a white background. Use `text-gray-600 dark:text-gray-400` (or `text-gray-700 dark:text-gray-300`) to satisfy WCAG AA in light mode. Inside the dark cards (`bg-gray-900`), use `text-gray-300` for body and `text-slate-100` for emphasis.
- **Focus**: every interactive element has `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`. Don't remove these.
- **Icon-only links**: must carry an `aria-label`. External links: `target="_blank"` **plus** `rel="noopener noreferrer"`. `mailto:` links should not have `target="_blank"`.
- **`prefers-reduced-motion`**: enforced two ways — (a) CSS in `globals.css` forces ≤0.01ms animation/transition durations, and (b) `Hero.tsx` and `SkillsCarousel.tsx` check `window.matchMedia("(prefers-reduced-motion: reduce)").matches` before calling `gsap.to(...)`. Keep this check on any new GSAP animation.

### GSAP Animations

- **Hero scroll-out** (`Hero.tsx`): `.mainBG` fades + scales 4x as the user scrolls past the hero. Uses `ScrollTrigger` with `.content-with-border` as the trigger element. Plugins registered at module scope.
- **Skills carousel** (`SkillsCarousel.tsx`): the carousel `<div>` content is **duplicated via `innerHTML += innerHTML`** after mount, then `gsap.to` translates it by `-totalWidth/2` (the captured original width) on a 20s linear infinite repeat to produce a seamless loop. Note that the duplicated nodes are outside React's reconciliation tree — do not try to update carousel content after mount.

### Image handling

- All images are imported as ES modules and use `next/image`. Many are passed `unoptimized` because GitHub Pages cannot run the image optimizer (`actions/configure-pages` sets `unoptimized` globally in static export mode, but the explicit prop is harmless).
- Don't reintroduce the deprecated `layout="fill"` / `objectFit="cover"` props. Use `fill` and `className="object-cover"` (or `style={{ objectFit: ... }}`).

### Fonts

- Custom DIN font, three weights (400/500/700), declared as three `@font-face` blocks in `globals.css`.
- `tailwind.config.ts` exposes it as `font-din` (`fontFamily: { din: ["din", "sans-serif"] }`).
- `next.config.mjs` sets `optimizeFonts: false` because the fonts are self-hosted under the basePath and we don't want Next's font optimizer to touch them.

## Conventions

- **No comments in code** unless explaining a non-obvious *why*. Prefer descriptive names.
- **No emojis** in code or markdown unless explicitly requested.
- **Pure presentational components** — no data fetching, no API calls. Everything is static.
- **One file per component**, named in PascalCase, default-exported.
- **Tailwind utility-first**. Use `globals.css` only for things Tailwind can't express cleanly (`@font-face`, the layered `.content-with-border` / `.border-image` / `.content` overlay).
- **External links** use `target="_blank"` **with** `rel="noopener noreferrer"` and an `aria-label`.
- **Accessibility**: provide meaningful `alt` text (or empty `alt=""` for decorative images), iframe `title`, and `aria-label` on icon-only links.

## Known Quirks

- `tailwind.config.ts` declares `'border-image': "url('/src/utils/images/p icons.png')"`. The file doesn't exist (real file is `p_icons.jpeg`) and the path wouldn't be served anyway because it points inside `src/` rather than `public/`. The class `bg-border-image` in `SkillsCarousel.tsx` therefore has no visual effect today. Left as-is to avoid unintended visual changes; reintroduce only with an explicit design decision and the asset moved to `public/`.
- `next.config.mjs` is intentionally minimal — `basePath`, `images.unoptimized`, and static `output: "export"` are injected by `actions/configure-pages` at build time in CI. Do not hardcode `basePath` here unless you also adjust the workflow.
- `SkillsCarousel` duplicates DOM via `innerHTML`. This is fine for the static-image use case but **don't add interactive elements** (buttons, links with handlers) inside the carousel — duplicated copies won't have React handlers attached.

## What NOT to Change Without Discussion

- The `/Portfolio_New/` prefix on public asset URLs (breaks production).
- The server/client component split in `page.tsx` and its children (affects bundle size and hydration).
- The GSAP plugin registration site (module scope is intentional to avoid duplicate registration).
- The `innerHTML += innerHTML` trick in `SkillsCarousel` without replacing the whole infinite-scroll approach.
- The `.github/workflows/nextjs.yml` deployment workflow.

## Quick Checklist Before Committing

- [ ] `npm run lint` clean
- [ ] `npx tsc --noEmit` clean
- [ ] `npm run build` succeeds
- [ ] No new `"use client"` on files that don't actually need it
- [ ] New external `<a>` links have `target="_blank"` + `rel="noopener noreferrer"`
- [ ] New `<Image>` uses `fill`/explicit dimensions, not deprecated `layout`
- [ ] New images have real `alt` text or `alt=""` if decorative
