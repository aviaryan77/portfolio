import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { FiChevronLeft } from '@react-icons/all-files/fi/FiChevronLeft';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';
import { FiX } from '@react-icons/all-files/fi/FiX';
import { IProject } from '@/type';
import { ArrowIcon, Btn, Bullets, Chips, cx, Meta } from './ui';

const Carousel: FunctionComponent<{ project: IProject }> = ({ project }) => {
  const [i, setI] = useState(0);
  const n = project.imageArray.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const touchX = useRef<number | null>(null);
  const phone = project.imageShape === 'phone';

  return (
    <div className="flex flex-col gap-3">
      <div
        className={cx(
          'relative mx-auto w-full overflow-hidden rounded-xl border border-ink-line2 bg-ink-deep',
          phone ? 'aspect-[9/18] max-w-[260px]' : 'aspect-[16/10]'
        )}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={project.imageArray[i]}
              alt={`${project.name} screenshot ${i + 1} of ${n}`}
              layout="fill"
              objectFit={phone ? 'cover' : 'contain'}
              objectPosition="top"
              sizes={phone ? '260px' : '(max-width: 768px) 92vw, 480px'}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {n > 1 && (
        <div className="flex items-center justify-center gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line2 hover:border-mint hover:text-mint">
            <FiChevronLeft />
          </button>
          <div className="flex flex-wrap justify-center gap-1.5">
            {project.imageArray.map((src, j) => (
              <button
                key={src}
                type="button"
                onClick={() => setI(j)}
                aria-label={`Show screenshot ${j + 1}`}
                aria-current={i === j}
                className={cx('h-2 rounded-full transition-all', i === j ? 'w-5 bg-mint' : 'w-2 bg-ink-line2 hover:bg-text-faint')}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line2 hover:border-mint hover:text-mint">
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

const ProjectDialog: FunctionComponent<{ project: IProject | null; onClose: () => void }> = ({ project, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border border-ink-line bg-ink-raised p-5 sm:rounded-2xl sm:p-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ink-line2 bg-ink-raised hover:border-mint hover:text-mint"
            >
              <FiX size={20} />
            </button>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <Carousel key={project.id} project={project} />
              <div className="flex flex-col gap-4">
                {(project.role || project.period) && <Meta className="pr-12">{[project.role, project.period].filter(Boolean).join(' · ')}</Meta>}
                <h2 id="project-title" className="pr-12 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em]">
                  {project.name}
                </h2>
                {(project.description || [project.summary]).map((d) => (
                  <p key={d} className="text-text-2">
                    {d}
                  </p>
                ))}
                {project.highlights && <Bullets items={project.highlights} className="text-[15px]" />}
                {project.sections?.map((s) => (
                  <div key={s.title} className="flex flex-col gap-2">
                    <h3 className="font-display text-[17px] font-semibold">{s.title}</h3>
                    <Bullets items={s.items} className="text-[15px]" />
                  </div>
                ))}
                {project.quotes && (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-[17px] font-semibold">What users say</h3>
                    {project.quotes.map((q) => (
                      <blockquote key={q} className="border-l-2 border-mint/60 pl-3 text-[15px] italic text-text-2">
                        &ldquo;{q}&rdquo;
                      </blockquote>
                    ))}
                  </div>
                )}
                <Chips items={project.key_techs} className="pt-1" />
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-6">
                    {project.links.map((l) => (
                      <Btn key={l.href} variant="text" href={l.href}>
                        {l.label} <ArrowIcon aria-hidden />
                      </Btn>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDialog;
