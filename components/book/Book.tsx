import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { forwardRef, FunctionComponent, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FiChevronLeft } from '@react-icons/all-files/fi/FiChevronLeft';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';
import { FiChevronsLeft } from '@react-icons/all-files/fi/FiChevronsLeft';
import { FiChevronsRight } from '@react-icons/all-files/fi/FiChevronsRight';
import { IconType } from '@react-icons/all-files';
import { BookPage } from './pages';
import { cx } from '../ui';

export interface BookHandle {
  flipTo: (index: number) => void;
}

interface Props {
  pages: BookPage[];
  /** Two-page spread (wide screens) or one page at a time (phones). */
  spread: boolean;
  initialIndex: number;
  /** Printed folio for a page index, or null for unnumbered pages. */
  folioOf: (index: number) => number | null;
  /** Called after every completed turn with the first visible page index. */
  onSettle: (index: number) => void;
  /** Keyboard turning is paused while a dialog is open. */
  keysEnabled: boolean;
}

type Slot = 'left' | 'right' | 'single';

const EASE: [number, number, number, number] = [0.645, 0.045, 0.355, 1];

const PageFrame: FunctionComponent<{ page: BookPage; folio: number | null; slot: Slot }> = ({ page, folio, slot }) => {
  const { Content } = page;
  if (page.bleed) {
    return <Content />;
  }
  return (
    <div className="page-scroll">
      <div
        className={cx(
          'flex min-h-full flex-col px-6 py-5 sm:px-8 lg:py-7',
          slot === 'left' && 'lg:pl-10 lg:pr-12',
          slot === 'right' && 'lg:pl-12 lg:pr-10'
        )}
      >
        <div
          className={cx(
            'mb-5 flex min-h-[16px] font-mono text-[11px] uppercase tracking-[0.1em] text-text-faint',
            slot === 'left' ? 'justify-start' : 'justify-end'
          )}
          aria-hidden
        >
          {page.anchor ? '' : page.head}
        </div>
        <div className="flex flex-1 flex-col">
          <Content />
        </div>
        {folio !== null && (
          <div
            className={cx('mt-5 font-mono text-[12px] text-text-faint', slot === 'left' ? 'text-left' : 'text-right', slot === 'single' && 'text-center')}
            aria-hidden
          >
            {folio}
          </div>
        )}
      </div>
    </div>
  );
};

/** The empty space beside the book: clicking it turns the page that way. */
const SideZone: FunctionComponent<{ dir: 'prev' | 'next'; disabled: boolean; onClick: () => void }> = ({ dir, disabled, onClick }) => {
  const Icon = dir === 'next' ? FiChevronRight : FiChevronLeft;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'next' ? 'Next page' : 'Previous page'}
      className={cx(
        'group hidden min-w-[var(--zone-w)] flex-1 items-center md:flex',
        dir === 'next' ? 'cursor-e-resize justify-start pl-5 xl:pl-8' : 'cursor-w-resize justify-end pr-5 xl:pr-8',
        'disabled:cursor-default'
      )}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink-line2 bg-ink-raised/60 text-text-muted transition-all group-hover:scale-105 group-hover:border-mint group-hover:text-mint group-disabled:opacity-0">
        <Icon size={26} />
      </span>
    </button>
  );
};

const CtrlBtn: FunctionComponent<{ onClick: () => void; disabled: boolean; label: string; Icon: IconType }> = ({ onClick, disabled, label, Icon }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    title={label}
    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-line2 text-text transition-colors hover:border-mint hover:text-mint disabled:opacity-30 disabled:hover:border-ink-line2 disabled:hover:text-text"
  >
    <Icon size={20} />
  </button>
);

interface Flip {
  from: number;
  to: number;
  dir: 1 | -1;
}

const Book = forwardRef<BookHandle, Props>(({ pages, spread, initialIndex, folioOf, onSettle, keysEnabled }, ref) => {
  const norm = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(pages.length - 1, i));
    return spread ? clamped - (clamped % 2) : clamped;
  }, [pages.length, spread]);

  const [current, setCurrent] = useState(() => norm(initialIndex));
  const [flip, setFlip] = useState<Flip | null>(null);
  const flipping = useRef(false);
  const reduced = useReducedMotion();
  const rotate = useMotionValue(0);
  const shade = useTransform(rotate, [-180, -90, 0], [0, 0.4, 0]);
  const lift = useTransform(rotate, [-180, -90, 0], [0, 0.5, 0]);

  const flipTo = useCallback(
    (target: number) => {
      const to = norm(target);
      if (flipping.current || to === current) return;
      if (reduced) {
        setCurrent(to);
        onSettle(to);
        return;
      }
      const dir: 1 | -1 = to > current ? 1 : -1;
      flipping.current = true;
      setFlip({ from: current, to, dir });
      rotate.set(dir === 1 ? 0 : -180);
      animate(rotate, dir === 1 ? -180 : 0, {
        duration: spread ? 0.8 : 0.6,
        ease: EASE,
        onComplete: () => {
          setCurrent(to);
          setFlip(null);
          flipping.current = false;
          onSettle(to);
        },
      });
    },
    [current, norm, reduced, rotate, spread, onSettle]
  );

  useImperativeHandle(ref, () => ({ flipTo }), [flipTo]);

  const step = spread ? 2 : 1;
  const next = useCallback(() => flipTo(current + step), [flipTo, current, step]);
  const prev = useCallback(() => flipTo(current - step), [flipTo, current, step]);
  const atStart = current === 0;
  const atEnd = current + step >= pages.length;

  useEffect(() => {
    if (!keysEnabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target as HTMLElement;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        flipTo(0);
      } else if (e.key === 'End') {
        flipTo(pages.length - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [keysEnabled, next, prev, flipTo, pages.length]);

  // Horizontal swipe turns the page; vertical swipes still scroll the page.
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const p = e.touches[0];
    touch.current = { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const p = e.changedTouches[0];
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) next();
      else prev();
    }
  };

  // Which pages sit flat on the book (under any turning leaf).
  let visible: number[];
  let front: number | null = null;
  let back: number | null = null;
  if (spread) {
    if (!flip) visible = [current, current + 1];
    else if (flip.dir === 1) {
      visible = [flip.from, flip.to + 1];
      front = flip.from + 1;
      back = flip.to;
    } else {
      visible = [flip.to, flip.from + 1];
      front = flip.to + 1;
      back = flip.from;
    }
  } else {
    if (!flip) visible = [current];
    else if (flip.dir === 1) {
      visible = [flip.to];
      front = flip.from;
    } else {
      visible = [flip.from];
      front = flip.to;
    }
  }

  const slotOf = (i: number): Slot => (spread ? (i % 2 === 0 ? 'left' : 'right') : 'single');
  const slotClass = { left: 'page-left', right: 'page-right', single: 'page-single' };
  const leafSlot: Slot = spread ? 'right' : 'single';

  const label = (() => {
    const shown = spread ? [current, current + 1] : [current];
    const nums = shown.map(folioOf).filter((n) => n !== null);
    const head = pages[shown[shown.length - 1]]?.head || pages[shown[0]]?.head;
    if (!nums.length) return head || (current === 0 ? 'Cover' : 'Back cover');
    return `${nums.join('–')}${head ? ` · ${head}` : ''}`;
  })();
  const lastFolio = folioOf(pages.length - 2) ?? pages.length;
  const progress = (current + step) / pages.length;

  return (
    <div className="flex flex-col">
      <div className="book-stage flex items-stretch justify-center" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <SideZone dir="prev" disabled={atStart || !!flip} onClick={prev} />
        <div className="flex items-center">
        <div className="book">
          {pages.map((p, i) => {
            const slot = slotOf(i);
            const show = visible.includes(i);
            return (
              <section
                key={p.key}
                id={p.anchor ? `page-${p.anchor}` : undefined}
                aria-hidden={!show}
                className={cx('page', slotClass[slot], reduced && 'page-fade')}
                style={{ display: show ? 'block' : 'none', zIndex: 1 }}
              >
                <PageFrame page={p} folio={folioOf(i)} slot={slot} />
              </section>
            );
          })}

          {flip && front !== null && (
            <motion.div
              className={cx('leaf', spread ? 'left-1/2 w-1/2' : 'left-0 w-full')}
              style={{ rotateY: rotate }}
              aria-hidden
            >
              <div className={cx('leaf-face page', slotClass[leafSlot], 'left-0 w-full')}>
                <PageFrame page={pages[front]} folio={folioOf(front)} slot={leafSlot} />
                <motion.div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: shade }} />
              </div>
              <div className={cx('leaf-face leaf-back page', spread ? 'page-left' : 'paper-back page-single', 'left-0 w-full')}>
                {spread && back !== null && <PageFrame page={pages[back]} folio={folioOf(back)} slot="left" />}
                <motion.div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: shade }} />
              </div>
            </motion.div>
          )}

          {flip && (
            <motion.div
              className="pointer-events-none absolute inset-y-0 z-10"
              style={{
                left: spread ? '50%' : 0,
                width: spread ? '50%' : '100%',
                opacity: lift,
                background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent 60%)',
              }}
            />
          )}

        </div>
        </div>
        <SideZone dir="next" disabled={atEnd || !!flip} onClick={next} />
      </div>

      <div className="flex h-[var(--controls-h)] items-center justify-center gap-2 px-3 sm:gap-3">
        <CtrlBtn onClick={() => flipTo(0)} disabled={atStart} label="First page" Icon={FiChevronsLeft} />
        <CtrlBtn onClick={prev} disabled={atStart} label="Previous page" Icon={FiChevronLeft} />
        <div className="flex w-[240px] min-w-0 shrink flex-col items-center gap-1.5">
          <div className="w-full truncate text-center font-mono text-[12px] text-text-muted" aria-live="polite">
            {label} <span className="text-text-faint">/ {lastFolio}</span>
          </div>
          <div className="h-[2px] w-full overflow-hidden rounded bg-ink-line">
            <div className="h-full bg-mint transition-[width] duration-500" style={{ width: `${Math.min(1, progress) * 100}%` }} />
          </div>
        </div>
        <CtrlBtn onClick={next} disabled={atEnd} label="Next page" Icon={FiChevronRight} />
        <CtrlBtn onClick={() => flipTo(pages.length - 1)} disabled={atEnd} label="Last page" Icon={FiChevronsRight} />
      </div>
    </div>
  );
});

Book.displayName = 'Book';

export default Book;
