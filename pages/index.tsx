import Head from 'next/head';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Book, { BookHandle } from '@/components/book/Book';
import { BookContext, BookCtx, ViewMode } from '@/components/book/context';
import { BookPage, PAGES } from '@/components/book/pages';
import ProjectDialog from '@/components/ProjectDialog';
import { MobileBar, SideNav } from '@/components/SiteHeader';
import { education, getProject, profile, SITE_URL, socials } from '@/DATA';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const SPREAD_QUERY = '(min-width: 1024px)';
const PHONE_QUERY = '(max-width: 767px)';
const MODE_KEY = 'aa-view-mode';

const TITLE = 'Avinash Aryan – Lead Mobile App Engineer | React Native, Next.js, TypeScript';
const DESCRIPTION = profile.summary;
const OG_IMAGE = `${SITE_URL}/og.jpg`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.JPG`,
  jobTitle: profile.title,
  description: DESCRIPTION,
  email: `mailto:${profile.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Patna', addressRegion: 'Bihar', addressCountry: 'IN' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: education.school },
  worksFor: { '@type': 'Organization', name: 'Splitkaro', url: 'https://www.splitkaro.com' },
  knowsAbout: ['React Native', 'Expo', 'Next.js', 'React', 'TypeScript', 'JavaScript', 'Mobile app development', 'Redux', 'Firebase'],
  sameAs: socials.map((s) => s.href),
};

const pagesFor = (spread: boolean) => PAGES.filter((p) => spread || !p.spreadOnly);

const Home = () => {
  const [mode, setMode] = useState<ViewMode>('book');
  const [spread, setSpread] = useState(false);
  const [booted, setBooted] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [active, setActive] = useState<string | undefined>(undefined);
  const bookRef = useRef<BookHandle>(null);
  // The page the reader is on, by key, so it survives layout changes.
  const currentKey = useRef<string>('title');

  const pages = useMemo(() => pagesFor(spread), [spread]);

  const indexOfAnchor = useCallback(
    (list: BookPage[], anchor: string) => list.findIndex((p) => p.anchor === anchor),
    []
  );

  const folioOf = useCallback(
    (i: number) => {
      const p = pages[i];
      if (!p || p.bleed) return null;
      return i + 1 - (spread ? 1 : 0);
    },
    [pages, spread]
  );

  // Read layout, saved view mode and the URL hash before first paint.
  useIsoLayoutEffect(() => {
    const mq = window.matchMedia(SPREAD_QUERY);
    const isSpread = mq.matches;
    setSpread(isSpread);
    try {
      const saved = window.localStorage.getItem(MODE_KEY);
      if (saved === 'scroll' || saved === 'book') setMode(saved);
      // Phones open as one scrolling page unless the reader picked the book before.
      else if (window.matchMedia(PHONE_QUERY).matches) setMode('scroll');
    } catch {}
    const anchor = window.location.hash.slice(1);
    const list = pagesFor(isSpread);
    const i = anchor ? indexOfAnchor(list, anchor) : -1;
    if (i >= 0) {
      currentKey.current = list[i].key;
      setActive(anchor);
    }
    setBooted(true);
    const onChange = (e: MediaQueryListEvent) => setSpread(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [indexOfAnchor]);

  const initialIndex = Math.max(0, pages.findIndex((p) => p.key === currentKey.current));

  const updateHash = useCallback((anchor: string | undefined) => {
    const url = anchor && anchor !== 'top' ? `#${anchor}` : window.location.pathname;
    window.history.replaceState(null, '', url);
  }, []);

  const onSettle = useCallback(
    (i: number) => {
      currentKey.current = pages[i].key;
      // Name the chapter the reader is in, for sharing links.
      const upto = spread ? i + 1 : i;
      let anchor: string | undefined;
      for (let k = upto; k >= 0; k--) {
        if (pages[k]?.anchor) {
          anchor = pages[k].anchor;
          break;
        }
      }
      setActive(anchor);
      updateHash(anchor);
    },
    [pages, spread, updateHash]
  );

  const goTo = useCallback(
    (anchor: string) => {
      if (mode === 'scroll') {
        const el = document.getElementById(anchor);
        if (anchor === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
        else el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateHash(anchor);
        return;
      }
      const target = anchor === 'contents' ? pages.findIndex((p) => p.key === 'contents') : indexOfAnchor(pages, anchor);
      if (target >= 0) bookRef.current?.flipTo(target);
    },
    [mode, pages, indexOfAnchor, updateHash]
  );

  // Highlight the chapter in view while reading as one page.
  useEffect(() => {
    if (mode !== 'scroll') return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [mode]);

  // Links like /#skills typed or pasted into the address bar.
  useEffect(() => {
    const onHash = () => {
      const a = window.location.hash.slice(1);
      if (a) goTo(a);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [goTo]);

  const changeMode = (m: ViewMode) => {
    setMode(m);
    try {
      window.localStorage.setItem(MODE_KEY, m);
    } catch {}
    const page = PAGES.find((p) => p.key === currentKey.current);
    if (m === 'scroll') {
      requestAnimationFrame(() => {
        const anchor = page?.anchor;
        if (anchor && anchor !== 'top') document.getElementById(anchor)?.scrollIntoView();
        else window.scrollTo(0, 0);
      });
    }
  };

  const ctx: BookCtx = useMemo(
    () => ({
      mode,
      goTo,
      openProject: setProjectId,
      pageNumberOf: (anchor: string) => {
        const i = indexOfAnchor(pages, anchor);
        return i >= 0 ? folioOf(i) : null;
      },
    }),
    [mode, goTo, pages, folioOf, indexOfAnchor]
  );

  const closeProject = useCallback(() => setProjectId(null), []);
  const project = projectId ? getProject(projectId) || null : null;

  return (
    <BookContext.Provider value={ctx}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content={profile.name} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content={profile.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Avinash Aryan, Lead Mobile App Engineer" />
        <meta property="profile:first_name" content="Avinash" />
        <meta property="profile:last_name" content="Aryan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@avi_aryan_" />
        <meta name="twitter:creator" content="@avi_aryan_" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="flex">
        <SideNav mode={mode} onModeChange={changeMode} goTo={goTo} active={active} />
        {mode === 'book' ? (
          <div className="app-h flex min-w-0 flex-1 flex-col overflow-hidden">
            <MobileBar mode={mode} onModeChange={changeMode} goTo={goTo} />
            <main id="top" className="flex-1">
              <Book
                key={`${spread}-${booted}`}
                ref={bookRef}
                pages={pages}
                spread={spread}
                initialIndex={initialIndex}
                folioOf={folioOf}
                onSettle={onSettle}
                keysEnabled={!project}
              />
            </main>
          </div>
        ) : (
          <div className="min-w-0 flex-1">
            <MobileBar mode={mode} onModeChange={changeMode} goTo={goTo} />
            <main id="top">
              {PAGES.filter((p) => !p.bookOnly).map((p) => {
                const { Content } = p;
                return (
                  <section key={p.key} id={p.anchor} className={p.anchor ? 'scroll-mt-20 border-t border-ink-line first:border-t-0' : ''}>
                    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-8 sm:py-14">
                      <Content />
                    </div>
                  </section>
                );
              })}
            </main>
          </div>
        )}
      </div>

      <ProjectDialog project={project} onClose={closeProject} />
    </BookContext.Provider>
  );
};

export default Home;
