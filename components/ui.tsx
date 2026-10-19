import Image from 'next/image';
import React, { FunctionComponent, ReactNode } from 'react';
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight';
import { FiDownload } from '@react-icons/all-files/fi/FiDownload';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import { IconType } from '@react-icons/all-files';

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

export const isExternal = (href: string) => /^https?:\/\//.test(href);

export const Kicker: FunctionComponent<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cx('font-mono text-[12px] uppercase tracking-[0.08em] text-mint', className)}>{children}</div>
);

export const Meta: FunctionComponent<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cx('font-mono text-[12px] uppercase tracking-[0.04em] text-text-muted', className)}>{children}</div>
);

export const Chips: FunctionComponent<{ items: string[]; className?: string }> = ({ items, className }) => (
  <ul className={cx('flex flex-wrap gap-1.5 font-mono text-[12px]', className)}>
    {items.map((t) => (
      <li key={t} className="rounded-full border border-ink-line2 px-2.5 py-0.5 text-text-2">
        {t}
      </li>
    ))}
  </ul>
);

export const Bullets: FunctionComponent<{ items: string[]; className?: string }> = ({ items, className }) => (
  <ul className={cx('space-y-1.5 text-text-2', className)}>
    {items.map((t) => (
      <li key={t} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-mint">
        {t}
      </li>
    ))}
  </ul>
);

type BtnProps = {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'text';
  download?: boolean;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export const Btn: FunctionComponent<BtnProps> = ({ href, onClick, variant = 'ghost', download, children, className, ariaLabel }) => {
  const cls = cx(
    'inline-flex min-h-[44px] items-center gap-2 rounded-lg text-[15px] font-semibold transition-colors',
    variant === 'primary' && 'bg-mint px-5 text-ink hover:bg-mint-hover',
    variant === 'ghost' && 'border border-ink-line2 px-5 text-text hover:border-mint hover:text-mint',
    variant === 'text' && 'text-mint hover:text-mint-hover',
    className
  );
  if (href) {
    const ext = isExternal(href);
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        download={download || undefined}
        target={ext ? '_blank' : undefined}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export const ArrowIcon = FiArrowRight;
export const DownloadIcon = FiDownload;

export const socialIcons: Record<string, IconType> = {
  linkedin: FiLinkedin,
  github: FiGithub,
  twitter: FiTwitter,
  stackoverflow: FaStackOverflow,
};

/** Tall app screenshot inside a phone outline. */
export const PhoneShot: FunctionComponent<{ src: string; alt: string; className?: string; sizes?: string; priority?: boolean }> = ({
  src,
  alt,
  className,
  sizes = '(max-width: 1023px) 40vw, 180px',
  priority,
}) => (
  <div className={cx('relative aspect-[9/18] overflow-hidden rounded-[18px] border-[3px] border-ink-line2 bg-black shadow-xl', className)}>
    <Image src={src} alt={alt} layout="fill" objectFit="cover" objectPosition="top" sizes={sizes} priority={priority} />
  </div>
);

/** Website screenshot inside a minimal browser frame. */
export const BrowserShot: FunctionComponent<{ src: string; alt: string; className?: string; sizes?: string }> = ({
  src,
  alt,
  className,
  sizes = '(max-width: 1023px) 90vw, 480px',
}) => (
  <div className={cx('overflow-hidden rounded-lg border border-ink-line2 bg-ink-deep shadow-xl', className)}>
    <div className="flex gap-1.5 border-b border-ink-line px-3 py-2" aria-hidden>
      <span className="h-2 w-2 rounded-full bg-ink-line2" />
      <span className="h-2 w-2 rounded-full bg-ink-line2" />
      <span className="h-2 w-2 rounded-full bg-ink-line2" />
    </div>
    <div className="relative aspect-[16/10]">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" objectPosition="top" sizes={sizes} />
    </div>
  </div>
);
