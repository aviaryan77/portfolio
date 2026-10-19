import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';
import { FiAlignLeft } from '@react-icons/all-files/fi/FiAlignLeft';
import { FiBookOpen } from '@react-icons/all-files/fi/FiBookOpen';
import { FiDownload } from '@react-icons/all-files/fi/FiDownload';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { FiMoon } from '@react-icons/all-files/fi/FiMoon';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { FiX } from '@react-icons/all-files/fi/FiX';
import { profile, RESUME_PDF, socials } from '@/DATA';
import { ViewMode } from './book/context';
import { cx, socialIcons } from './ui';
import { useTheme } from './useTheme';

export const NAV = [
  { anchor: 'work', label: 'Work', num: '01' },
  { anchor: 'experience', label: 'Experience', num: '02' },
  { anchor: 'skills', label: 'Skills', num: '03' },
  { anchor: 'about', label: 'About', num: '04' },
  { anchor: 'archive', label: 'Archive', num: '05' },
  { anchor: 'contact', label: 'Contact', num: '06' },
];

/** Maps the chapter the reader is in to the nav item that owns it. */
const OWNER: Record<string, string> = { numbers: 'work', education: 'skills' };

interface Props {
  mode: ViewMode;
  onModeChange: (m: ViewMode) => void;
  goTo: (anchor: string) => void;
  active?: string;
}

const useNavClick = (goTo: (a: string) => void, after?: () => void) => (anchor: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  after?.();
  goTo(anchor);
};

const modeMeta = (mode: ViewMode) =>
  mode === 'book'
    ? { next: 'scroll' as ViewMode, Icon: FiAlignLeft, label: 'Read as one page' }
    : { next: 'book' as ViewMode, Icon: FiBookOpen, label: 'Read as a book' };

const ThemeButton: FunctionComponent<{ withLabel?: boolean }> = ({ withLabel }) => {
  const { theme, toggle } = useTheme();
  const Icon = theme === 'dark' ? FiSun : FiMoon;
  const label = theme === 'dark' ? 'Light mode' : 'Dark mode';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${label.toLowerCase()}`}
      title={label}
      className={cx(
        'inline-flex h-11 items-center justify-center gap-2 rounded-lg text-text-muted hover:text-mint',
        withLabel ? 'text-[14px]' : 'w-11'
      )}
    >
      <Icon size={18} aria-hidden /> {withLabel && label}
    </button>
  );
};

/** Left sidebar on wide screens, like the outline pane of a PDF reader. */
export const SideNav: FunctionComponent<Props> = ({ mode, onModeChange, goTo, active }) => {
  const click = useNavClick(goTo);
  const m = modeMeta(mode);
  const current = active ? OWNER[active] || active : undefined;
  return (
    <aside className="sticky top-0 hidden h-screen w-[var(--side-w)] shrink-0 flex-col border-r border-ink-line px-6 py-8 lg:flex">
      <div>
        <div className="flex items-center justify-between gap-2">
          <a href="#top" onClick={click('top')} className="min-w-0 font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-text">
            {profile.name}
          </a>
          <div className="-mr-3 shrink-0">
            <ThemeButton />
          </div>
        </div>
        <p className="text-[14px] leading-snug text-text-muted">{profile.title}</p>
      </div>
      <nav aria-label="Main" className="mt-10">
        <ul className="space-y-0.5">
          {NAV.map((n) => {
            const on = current === n.anchor;
            return (
              <li key={n.anchor}>
                <a
                  href={`#${n.anchor}`}
                  onClick={click(n.anchor)}
                  aria-current={on ? 'true' : undefined}
                  className={cx(
                    'group flex min-h-[40px] items-center gap-3 rounded-lg px-2 text-[15px] transition-colors',
                    on ? 'bg-ink-raised text-text' : 'text-text-muted hover:text-text'
                  )}
                >
                  <span className={cx('font-mono text-[12px]', on ? 'text-mint' : 'text-text-faint group-hover:text-mint')}>{n.num}</span>
                  {n.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col gap-2">
        <button
          type="button"
          onClick={() => onModeChange(m.next)}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg text-[14px] text-text-muted hover:text-mint"
        >
          <m.Icon aria-hidden /> {m.label}
        </button>
        <a
          href={RESUME_PDF}
          download
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-mint text-[15px] font-semibold text-mint hover:bg-mint hover:text-ink"
        >
          <FiDownload aria-hidden /> Resume
        </a>
      </div>
      <ul className="mt-4 flex justify-between">
        {socials.map((s) => {
          const Icon = socialIcons[s.id];
          return (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted hover:bg-ink-raised hover:text-mint"
              >
                <Icon size={18} />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

/** Slim top bar on phones and tablets. */
export const MobileBar: FunctionComponent<Props> = ({ mode, onModeChange, goTo }) => {
  const [open, setOpen] = useState(false);
  const click = useNavClick(goTo, () => setOpen(false));
  const m = modeMeta(mode);
  return (
    <header className={cx('z-40 h-[var(--header-h)] shrink-0 border-b border-ink-line bg-ink/95 backdrop-blur lg:hidden', mode === 'scroll' ? 'sticky top-0' : 'relative')}>
      <nav aria-label="Main" className="flex h-full items-center justify-between gap-2 px-4">
        <a href="#top" onClick={click('top')} className="whitespace-nowrap font-display text-[17px] font-bold tracking-[-0.02em] text-text sm:text-[18px]">
          {profile.name}
        </a>
        <div className="flex items-center gap-0.5">
          <ThemeButton />
          <button
            type="button"
            onClick={() => onModeChange(m.next)}
            className="flex h-11 w-10 items-center justify-center rounded-lg text-text-muted hover:text-mint"
            aria-label={m.label}
            title={m.label}
          >
            <m.Icon size={18} />
          </button>
          <a href={RESUME_PDF} download className="inline-flex h-10 items-center rounded-lg border border-mint px-2.5 text-[14px] font-semibold text-mint sm:px-3">
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-text"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-full z-50 border-b border-ink-line bg-ink px-4 py-2 shadow-2xl"
          >
            {NAV.map((n) => (
              <li key={n.anchor}>
                <a href={`#${n.anchor}`} onClick={click(n.anchor)} className="flex min-h-[48px] items-center gap-3 text-[17px] text-text-2">
                  <span className="font-mono text-[12px] text-mint">{n.num}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};
