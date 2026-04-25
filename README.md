# Swift Fix Manchester — Plumbing & Heating Website

Modern, fast-loading site for Swift Fix Manchester plumbing and heating services.

## Project Structure

```
swiftfix/
├── app/
│   ├── layout.tsx     ← Main layout
│   ├── page.tsx       ← Imports SwiftFix component
│   └── globals.css    ← Global styles
├── components/
│   └── SwiftFix.tsx   ← Main site component
├── lib/
│   └── config.ts      ← Business configuration
└── public/
    ├── favicon.ico
    └── og-image.jpg (1200x630)
```

## Editing the Site

1. **Update business info**: Edit `lib/config.ts` with contact details, hours, services
2. **Customize design**: Modify colors and branding in `lib/config.ts`
3. **Test locally**: `npm run dev`
4. **Deploy**: `npm run build && npm start` or use Vercel

## Colours

All colours flow from `config.ts` as CSS variables:
- `var(--color-primary)` — main brand colour
- `var(--color-secondary)` — accent
- `var(--grad-brand)` — gradient shorthand
- `var(--color-dark)` — page background
- `var(--color-border)` — subtle borders

Change colours in `config.ts` only. Nothing else needed.

## Component Rules

Each client component must:
- Start with `'use client'`
- Be a default export
- Use CSS variables for all brand colours
- Import `siteConfig` from `@/lib/config` for contact/hours/ordering data
"# swiftfix" 
