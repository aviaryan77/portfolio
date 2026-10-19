# Portfolio – context for Claude

## Goal
Update this portfolio (Next.js) into a recruiter-facing site for remote senior
frontend / React Native roles. All content must match my LinkedIn and resume
exactly: titles, dates and numbers.

## Positioning
Avinash Aryan – Lead Mobile App Engineer | React Native, Expo, Next.js, TypeScript | 5+ yrs
Based in Patna, India. Open to remote roles.

## Source of truth (read these first)
- `context/resume.md` – current resume; use its wording, dates and numbers
- `context/design-reference.html` – approved design for the new home page
  (built in a design tool; use it as the visual and content reference for
  layout, sections, colours, fonts and copy. Do NOT copy its markup or
  `{{accent}}` template syntax – rebuild it with this repo's components/styles)
- LinkedIn dates win over anything else: https://www.linkedin.com/in/avinash-aryan/

## Design tokens (from the design reference)
- Background #0E1512, raised surface #142019, borders #1F2B26 / #33443C
- Text #E8EDE9, secondary #C9D3CD, muted #A9B6AF
- Accent #7BE0A8 (mint)
- Fonts: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (labels)

## Page structure
1. Nav: Work, Experience, Skills, About, Contact + Resume button
2. Hero: title line, headline, short pitch, "View my work" + "Download resume"
3. Numbers band: 100K+ downloads · 90,000+ active groups (2026) · ₹93 Cr+ settled (2026) · 4.4★ from 9K+ reviews
4. Selected work: Splitkaro (large case study), Lybi.in, Qtopia, ride-sharing app (Peer Dispatch, built at designs.codes)
5. Experience: Splitkaro (Jun 2022 – Present), designs.codes (May 2021 – Jun 2022),
   Twigo Technology Pvt Ltd (Jan 2020 – May 2021, keep even though it's not on the resume)
6. Skills: Mobile / Frontend / State & data / Backend & cloud
7. About: 2 short paragraphs, no self-praise
8. Contact: email, LinkedIn, GitHub, resume PDF

## Remove from the old site
- "What I Offer" freelance services section (SEO, UI/graphic designer, etc.)
- Old About text and any "4 years" mention
- Old `CV_Avinash.pdf` – replace with the new resume PDF (I'll add it to /public)
- Phone number from the public page (a "Message on WhatsApp" button via wa.me is OK – don't print the number as text)
- (Twitter and Stack Overflow are confirmed active – keep them)

## Assets
Screenshots for Splitkaro, Lybi.in, Qtopia and the ride-sharing app go in
`public/images/`. Until they exist, keep labelled placeholders.

## Rules
- Keep the existing Next.js setup and Vercel deploy config
- Must work well on phones
- Plain, specific language; numbers over adjectives; no invented stats
- Show me a plan before large changes; don't commit or push unless I ask

## Decisions (Oct 2026)
- Presentation is an interactive book: pages turn with a 3D flip (two-page
  spread on desktop, single page on phones), plus a "Read as one page" view.
  Desktop nav lives in a left sidebar; clicking the empty space beside the
  book turns the page. Content lives in `DATA.ts`; pages in `components/book/pages.tsx`.
- Phones (<768px) open in the one-page view by default; tablets and desktop open the book.
  A reader's own choice is remembered.
- Keep every older freelance/side project in the Archive chapter.
- Remove links that no longer resolve (checked Oct 2026: picmate.ai, qtopia.in,
  bindubhai.com and the Qtopia / Twigo Shopee / Cryptonomy Play Store pages are dead).
- English only.
- Dark is the default theme; a light "paper" theme is available via the toggle
  (colours are CSS variables in `styles/globals.css`, saved in localStorage).
- SEO and link previews are required: title/description, canonical, Open Graph +
  Twitter card with `public/og.jpg` (1200×630, keep under 300 KB for WhatsApp),
  JSON-LD Person, `robots.txt`, `sitemap.xml`. Regenerate `og.jpg` if the
  headline numbers change.

