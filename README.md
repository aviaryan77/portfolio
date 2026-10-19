# Avinash Aryan – portfolio

Live: https://aviaryan.vercel.app

An interactive, book-style portfolio built with Next.js, Tailwind CSS and Framer Motion.
Pages turn with a 3D flip: two-page spreads on desktop, one page at a time on phones.
There's also a "Read as one page" view.

## Run locally

```bash
yarn        # or npm install
yarn dev    # http://localhost:3000
yarn build && yarn start
```

## Where things live

- `DATA.ts` – all content (profile, numbers, experience, skills, projects). Edit this first.
- `components/book/pages.tsx` – the book's pages, in reading order.
- `components/book/Book.tsx` – page-turn engine (flip animation, swipe, keyboard).
- `components/ProjectDialog.tsx` – project details with screenshot carousel.
- `pages/index.tsx` – SEO tags, JSON-LD and layout.
- `public/og.jpg` – link-preview image (1200×630).
- `public/Avinash_Aryan_Resume.pdf` – resume download.

Navigation: click beside the book, use ← → / PageUp / PageDown / Home / End, swipe on touch screens,
or jump with links such as `/#work`, `/#experience`, `/#skills`, `/#about`, `/#archive`, `/#contact`.
