# GitHub Copilot Instructions

Project context for GitHub Copilot (and Copilot Chat) when generating code in this repo.

## What this repo is

Personal portfolio site for **Prem Vispute**, statically exported and deployed to GitHub Pages at `/Portfolio_New/`. Single-page layout composed of a few presentational React components.

## Stack and versions

- Next.js **14.2.5** with the **App Router** (`src/app/`)
- React 18, TypeScript 5 (strict)
- Tailwind CSS 3.4 with `darkMode: "class"`
- GSAP 3 (`gsap`, `@gsap/react`, `ScrollTrigger`, `EasePack`) for scroll-driven animation
- `next-themes` for light/dark switching
- `react-icons` for all icons
- Node 20 (matches CI)

No backend, no API routes, no database, no tests, no state management library. Everything is static and presentational.

## File layout

```
src/app/                 # App Router: layout.tsx + page.tsx + globals.css
src/components/          # Section components: Hero, About, Skills, Work, Contact
src/components/ui/       # Header, Footer, SkillsCarousel
src/utils/helpers/       # ThemeProvider, static data, types
src/utils/images/        # Imported images (StaticImageData)
public/                  # Fonts and PDFs (served under /Portfolio_New/...)
```

## Conventions Copilot should follow

### Component style

- **Default to server components.** Only add `"use client"` when the file uses hooks (`useState`, `useEffect`, `useGSAP`, `useTheme`, etc.), event handlers, or browser-only APIs.
- One default-exported component per file, PascalCase filename matching the export.
- Pure presentational JSX. No data fetching.
- Don't import `React` just to write JSX (Next 14 / React 18 doesn't need it).

### Styling

- Tailwind utility classes first. Use `globals.css` only for `@font-face` and the few layered layout classes already there (`.content-with-border`, `.border-image`, `.content`).
- Dark mode: `dark:` variants. The toggle is wired through `next-themes` in `Skills.tsx`.
- The custom font is `font-din` (declared in `tailwind.config.ts`).

### Images

- Always use `next/image`'s `<Image>`, never raw `<img>`.
- For full-bleed/cover images use the `fill` prop with `className="object-cover"` (and a positioned parent). **Do not use** the deprecated `layout="fill"` or `objectFit` props.
- Pass `unoptimized` for images that GitHub Pages can't optimize.
- Always provide meaningful `alt` text. Use `alt=""` for purely decorative images.

### Links

- External links: `target="_blank"` **with** `rel="noopener noreferrer"`. Add an `aria-label` if the link's content is icon-only.
- Internal anchor nav uses plain `<a href="#section-id">` against the section `id`s in each component.

### Animation (GSAP)

- Register plugins at module scope, once: `gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);`
- Use the `useGSAP` hook from `@gsap/react` inside client components.
- `Hero.tsx` already wires the hero scroll-out; mirror that pattern for new scroll animations.

### GitHub Pages basePath quirk

The site is served from `/Portfolio_New/`. **Public asset URLs are hand-prefixed with `/Portfolio_New/`** in source — e.g. `/Portfolio_New/fonts/DIN-Regular.ttf`, `/Portfolio_New/Prem_Vispute_Resume.pdf`. Preserve this prefix when adding new asset references in CSS or `href` attributes. (Imported images via `next/image` don't need the prefix — only raw URL strings do.)

### Accessibility

- Real `alt` text on content images, `alt=""` on decoration.
- `title` on `<iframe>`.
- `aria-label` on icon-only buttons/links.
- Unique element `id`s — don't put the same `id` on a parent and child.

### TypeScript

- Strict mode is on. **Never** use `any` — pull the right type from the library (e.g. `ThemeProviderProps` from `next-themes/dist/types`).
- Image imports are `StaticImageData`. The carousel data type is `skillsDataItems` in `src/utils/helpers/types.ts`.

### Commit hygiene

- Don't add code comments that just describe what the code does. A short comment is fine if it explains a non-obvious *why* (e.g. why the carousel duplicates DOM via `innerHTML`).
- Don't introduce dependencies for trivial helpers.
- Don't reformat unrelated files when making a focused change.

## Things to avoid

- Adding `"use client"` to `page.tsx` or `layout.tsx`.
- Removing the `/Portfolio_New/` prefix from public asset URLs.
- Reintroducing deprecated `next/image` props (`layout`, `objectFit`, `objectPosition`).
- `target="blank"` (missing underscore) — always `target="_blank"`.
- Duplicate DOM `id`s.
- Hardcoding `basePath` in `next.config.mjs` (the GH Pages workflow injects it).
- Adding interactive elements (buttons, handler-bearing links) inside `.skills-container` — its DOM is cloned imperatively after mount and clones lose their React handlers.
- `text-gray-400` on a white background — fails WCAG AA. Use `text-gray-600 dark:text-gray-400`.
- Pure `bg-black` for dark mode — use `bg-[#121212]` (Material/HIG guidance).
- New GSAP animations without a `prefers-reduced-motion` guard.
- Removing `focus-visible:ring-*` classes from interactive elements.
- Putting more than one `<h1>` on the page (it's reserved for "PREM VISPUTE" in the Header).
- Switching the Header back to `absolute` or restoring the mobile vertical nav stack.

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build
npm run lint       # ESLint via next lint
npx tsc --noEmit   # type-check only
```

CI: `.github/workflows/nextjs.yml` builds and deploys to GitHub Pages on every push to `main`.
