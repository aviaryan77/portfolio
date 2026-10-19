import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import {
  about,
  archive,
  certifications,
  education,
  experience,
  getProject,
  profile,
  projects,
  RESUME_PDF,
  skills,
  socials,
  stats,
} from '@/DATA';
import { IExperience, IProject } from '@/type';
import { useBook } from './context';
import {
  ArrowIcon,
  Btn,
  BrowserShot,
  Bullets,
  Chips,
  cx,
  DownloadIcon,
  Kicker,
  Meta,
  PhoneShot,
  socialIcons,
} from '../ui';

export interface BookPage {
  key: string;
  /** Running head printed at the top of the page. */
  head: string;
  /** Hash anchor that opens the book at this page. */
  anchor?: string;
  /** Only shown as the left page of the opening spread on wide screens. */
  spreadOnly?: boolean;
  /** Not rendered in the one-page (scroll) view. */
  bookOnly?: boolean;
  /** Content fills the page edge to edge (no running head or folio). */
  bleed?: boolean;
  Content: FunctionComponent;
}

const H2: FunctionComponent<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <h2 className={cx('font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[34px]', className)}>{children}</h2>
);

const H3: FunctionComponent<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <h3 className={cx('font-display text-[24px] font-semibold leading-tight tracking-[-0.02em]', className)}>{children}</h3>
);

const DetailsBtn: FunctionComponent<{ id: string; label?: string }> = ({ id, label = 'Screens & details' }) => {
  const { openProject } = useBook();
  return (
    <Btn variant="text" onClick={() => openProject(id)}>
      {label} <ArrowIcon aria-hidden />
    </Btn>
  );
};

/* ---------- Opening spread ---------- */

const Portrait = () => (
  <div className="relative h-full w-full">
    <Image
      src="/images/profile.JPG"
      alt="Avinash Aryan"
      layout="fill"
      objectFit="cover"
      objectPosition="50% 35%"
      sizes="(max-width: 1023px) 100vw, 50vw"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A100D] via-[#0A100D]/40 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
      <div className="font-display text-[44px] font-bold leading-none tracking-[-0.035em] text-[#E8EDE9]">
        Avinash
        <br />
        Aryan
      </div>
      <div className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[#7BE0A8]">
        {profile.title} · {profile.location}
      </div>
    </div>
  </div>
);

const TitlePage = () => {
  const { goTo, mode } = useBook();
  return (
    <div className="flex h-full flex-col justify-center gap-6 py-4">
      <div className="flex items-center gap-4 lg:hidden">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-ink-line2">
          <Image src="/images/profile.JPG" alt="Avinash Aryan" layout="fill" objectFit="cover" objectPosition="50% 30%" sizes="64px" priority />
        </div>
        <div>
          <div className="font-display text-[22px] font-semibold tracking-[-0.02em]">{profile.name}</div>
          <div className="text-[14px] text-text-muted">{profile.stack}</div>
        </div>
      </div>
      <Kicker>{profile.kicker}</Kicker>
      <h1 className="font-display text-[clamp(34px,4.4vw,52px)] font-semibold leading-[1.04] tracking-[-0.035em]">{profile.headline}</h1>
      <p className="text-[17px] leading-relaxed text-text-muted lg:text-[18px]">{profile.pitch}</p>
      <div className="flex flex-wrap gap-3 pt-1">
        <Btn variant="primary" onClick={() => goTo('work')}>
          View my work
        </Btn>
        <Btn href={RESUME_PDF} download>
          <DownloadIcon aria-hidden /> Download resume
        </Btn>
      </div>
      {mode === 'book' && (
        <p className="pt-4 font-mono text-[12px] text-text-faint">
          <span className="hidden md:inline">Turn the page: click beside the book or use the ← → keys.</span>
          <span className="md:hidden">Swipe or use the arrows below to turn the page.</span>
        </p>
      )}
    </div>
  );
};

const CONTENTS: { anchor: string; label: string; num?: string }[] = [
  { anchor: 'numbers', label: 'Splitkaro at a glance' },
  { anchor: 'work', label: 'Selected work', num: '01' },
  { anchor: 'experience', label: 'Experience', num: '02' },
  { anchor: 'skills', label: 'Skills', num: '03' },
  { anchor: 'education', label: 'Education & certifications' },
  { anchor: 'about', label: 'About', num: '04' },
  { anchor: 'archive', label: `Archive: all ${projects.length} projects`, num: '05' },
  { anchor: 'contact', label: 'Contact', num: '06' },
];

const ContentsPage = () => {
  const { goTo, pageNumberOf } = useBook();
  return (
    <div className="flex h-full flex-col gap-8">
      <div>
        <Kicker>Contents</Kicker>
        <H2 className="mt-2">Inside this book</H2>
      </div>
      <nav aria-label="Table of contents">
        <ol className="space-y-1">
          {CONTENTS.map((c) => (
            <li key={c.anchor}>
              <button
                type="button"
                onClick={() => goTo(c.anchor)}
                className="group flex min-h-[44px] w-full items-end text-left text-[16px] text-text-2 hover:text-mint"
              >
                <span className="w-8 shrink-0 font-mono text-[13px] text-mint">{c.num || '·'}</span>
                <span>{c.label}</span>
                <span className="leader" aria-hidden />
                <span className="font-mono text-[13px] text-text-muted group-hover:text-mint">{pageNumberOf(c.anchor) ?? ''}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

const GlancePage = () => (
  <div className="flex h-full flex-col justify-center gap-8">
    <div>
      <Kicker>At a glance</Kicker>
      <H2 className="mt-2">Splitkaro, by the numbers</H2>
    </div>
    <dl className="grid grid-cols-2 border-t border-ink-line">
      {stats.map((s, i) => (
        <div key={s.value} className={cx('flex flex-col gap-1 border-b border-ink-line py-6', i % 2 === 0 ? 'pr-4' : 'border-l pl-5')}>
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display text-[clamp(32px,3.6vw,44px)] font-semibold leading-none tracking-[-0.03em]">{s.value}</dd>
          <dd className="text-[14px] leading-snug text-text-muted">{s.label}</dd>
        </div>
      ))}
    </dl>
    <p className="text-[15px] text-text-muted">
      I&apos;ve led Splitkaro&apos;s mobile app since June 2022, across Android, iOS and web.
    </p>
  </div>
);

/* ---------- 01 Selected work ---------- */

const SplitkaroPage = () => (
  <article className="flex flex-col gap-5">
    <div>
      <Kicker>01 · Selected work</Kicker>
      <H2 className="mt-2">Products I&apos;ve built</H2>
    </div>
    <div className="flex flex-col gap-4 border-t border-ink-line pt-5">
      <Meta>Lead Mobile App Developer · Jun 2022 – Present</Meta>
      <H3 className="text-[30px]">Splitkaro</H3>
      <p className="text-text-2">
        An expense-splitting and money-tracking app for flats, trips, couples and teams. I lead its React Native + TypeScript app across Android, iOS and web.
      </p>
      <Bullets
        items={[
          'Real-time group expense tracking with Firebase',
          'Automatic expense capture from bank SMS, PDF statements, UPI apps and receipt scanning',
          'Item-wise bill splitting, smart settle-up reminders and Splitwise import',
          'Analytics dashboards with category-wise spending insights',
        ]}
      />
      <Chips items={['React Native', 'TypeScript', 'Firebase', 'Reanimated']} />
      <Btn variant="text" href="https://www.splitkaro.com">
        Visit splitkaro.com <ArrowIcon aria-hidden />
      </Btn>
    </div>
  </article>
);

const SplitkaroScreens = () => (
  <div className="flex h-full flex-col justify-center gap-6">
    <div className="grid grid-cols-3 items-end gap-3">
      <PhoneShot src="/images/splitkaro-app/events.webp" alt="Splitkaro groups and events screen" className="translate-y-4" />
      <PhoneShot src="/images/splitkaro-app/bill-split.webp" alt="Splitkaro item-wise bill split screen" />
      <PhoneShot src="/images/splitkaro-app/settlements.webp" alt="Splitkaro settlements screen" className="translate-y-4" />
    </div>
    <div className="mt-4 space-y-3">
      <p className="text-[15px] text-text-muted">
        100K+ downloads · 4.4★ from 9K+ Google Play reviews · 90,000+ active groups and ₹93 Cr+ settled in 2026.
      </p>
      <div className="flex flex-wrap gap-x-6">
        <DetailsBtn id="splitkaro-app" />
        <Btn variant="text" href="https://play.google.com/store/apps/details?id=com.bsquare.splitkaro">
          Google Play <ArrowIcon aria-hidden />
        </Btn>
      </div>
    </div>
  </div>
);

const LybiPage = () => (
  <article className="flex h-full flex-col justify-center gap-5">
    <div className="relative pb-10 pr-12">
      <BrowserShot src="/images/lybi/desktop.jpg" alt="Lybi.in home page on desktop" />
      <div className="absolute bottom-0 right-0 w-[24%]">
        <PhoneShot src="/images/lybi/mobile-home.jpg" alt="Lybi.in on a phone" sizes="120px" />
      </div>
    </div>
    <Meta>Founder & Product Engineer · Aug 2025 – Present</Meta>
    <H3>Lybi.in</H3>
    <p className="text-text-2">
      A platform where students discover and book library seats, and library owners manage their spaces, built for Tier-2 and Tier-3 cities.
    </p>
    <Chips items={['Next.js', 'React Native', 'Redux-Saga']} />
    <div className="flex flex-wrap gap-x-6">
      <Btn variant="text" href="https://lybi.in">
        Visit lybi.in <ArrowIcon aria-hidden />
      </Btn>
      <DetailsBtn id="lybi" label="Details" />
    </div>
  </article>
);

const QtopiaPage = () => (
  <article className="flex h-full flex-col justify-center gap-5">
    <div className="relative pb-10 pr-12">
      <BrowserShot src="/images/qtopia-website/hero.webp" alt="Qtopia website" />
      <div className="absolute bottom-0 right-0 w-[24%]">
        <PhoneShot src="/images/qtopia-app/dashboard.webp" alt="Qtopia app dashboard" sizes="120px" />
      </div>
    </div>
    <Meta>Freelance Frontend Consultant · Jun 2023 – Dec 2024</Meta>
    <H3>Qtopia</H3>
    <p className="text-text-2">
      An EdTech quiz platform. Led the frontend for its Next.js web app and React Native app, including AI-powered question generation from scanned images.
    </p>
    <Chips items={['Next.js', 'React Native', 'AI', 'RBAC']} />
    <div className="flex flex-wrap gap-x-6">
      <DetailsBtn id="qtopia-app" label="App details" />
      <DetailsBtn id="qtopia-website" label="Website details" />
    </div>
  </article>
);

const PeerPage = () => (
  <article className="flex h-full flex-col justify-center gap-5">
    <div className="grid grid-cols-3 items-end gap-3">
      <PhoneShot src="/images/peerdispatch/passenger.webp" alt="Peer Dispatch passenger screen" />
      <PhoneShot src="/images/peerdispatch/searching.webp" alt="Peer Dispatch searching for a driver" className="-translate-y-3" />
      <PhoneShot src="/images/peerdispatch/chat.webp" alt="Peer Dispatch in-app chat" />
    </div>
    <Meta>designs.codes · May 2021 – Jun 2022</Meta>
    <H3>Ride-sharing app · Peer Dispatch</H3>
    <p className="text-text-2">
      Separate driver and passenger apps with real-time booking and live tracking over WebSockets, push notifications and offline sync.
    </p>
    <Chips items={['React Native', 'WebSockets', 'Redux']} />
    <DetailsBtn id="peer-dispatch" />
  </article>
);

/* ---------- 02 Experience ---------- */

const Job: FunctionComponent<{ job: IExperience; first?: boolean }> = ({ job, first }) => (
  <div className={cx('flex flex-col gap-3 py-5', !first && 'border-t border-ink-line')}>
    <Meta>
      {job.period}
      {job.location ? ` · ${job.location}` : ''}
    </Meta>
    <H3 className="text-[21px]">{job.title ? `${job.title} · ${job.company}` : job.company}</H3>
    {job.highlights.length > 0 && <Bullets items={job.highlights} className="text-[15px]" />}
  </div>
);

const ExperiencePage = () => (
  <div className="flex flex-col gap-2">
    <div className="pb-2">
      <Kicker>02 · Experience</Kicker>
      <H2 className="mt-2">Where I&apos;ve worked</H2>
    </div>
    <div className="border-t border-ink-line">
      <Job job={experience[0]} first />
    </div>
  </div>
);

const ExperiencePage2 = () => {
  const side = projects.filter((p) => p.id === 'lybi' || p.id === 'qtopia-app');
  return (
    <div className="flex flex-col">
      {experience.slice(1).map((job, i) => (
        <Job key={job.company} job={job} first={i === 0} />
      ))}
      <div className="flex flex-col gap-3 border-t border-ink-line py-5">
        <Meta>Founder & freelance</Meta>
        <ul className="space-y-3">
          {side.map((p) => (
            <li key={p.id}>
              <div className="font-display text-[18px] font-semibold">
                {p.role} · {p.id === 'qtopia-app' ? 'Qtopia' : p.name}
              </div>
              <div className="font-mono text-[12px] uppercase text-text-muted">{p.period}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ---------- 03 Skills / education ---------- */

const SkillsPage = () => (
  <div className="flex flex-col gap-5">
    <div>
      <Kicker>03 · Skills</Kicker>
      <H2 className="mt-2">What I work with</H2>
    </div>
    <div className="grid gap-3">
      {skills.map((g) => (
        <div key={g.title} className="rounded-xl border border-ink-line px-4 py-3">
          <h3 className="font-display text-[17px] font-semibold">{g.title}</h3>
          <p className="mt-1 text-[15px] leading-relaxed text-text-2">{g.items.join(', ')}</p>
        </div>
      ))}
    </div>
  </div>
);

const EducationPage = () => (
  <div className="flex flex-col gap-8">
    <section className="flex flex-col gap-3">
      <Kicker>Education</Kicker>
      <H3>{education.degree}</H3>
      <p className="text-text-2">{education.school}</p>
      <Meta>{education.period}</Meta>
      <Bullets items={education.notes} className="pt-1 text-[15px]" />
    </section>
    <section className="flex flex-col gap-3 border-t border-ink-line pt-6">
      <Kicker>Certifications</Kicker>
      <ul className="space-y-3">
        {certifications.map((c) => (
          <li key={c} className="font-display text-[18px] font-medium leading-snug">
            {c}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

/* ---------- 04 About ---------- */

const AboutPage = () => (
  <div className="flex h-full flex-col justify-center gap-6">
    <div>
      <Kicker>04 · About</Kicker>
      <H2 className="mt-2">A bit about me</H2>
    </div>
    {about.map((p) => (
      <p key={p} className="text-[18px] leading-relaxed text-text-2">
        {p}
      </p>
    ))}
    <p className="flex items-center gap-2 font-mono text-[13px] text-text-muted">
      <FiMapPin aria-hidden /> Based in {profile.location}. Open to remote roles.
    </p>
  </div>
);

/* ---------- 05 Archive ---------- */

const ArchiveItem: FunctionComponent<{ project: IProject }> = ({ project }) => {
  const { openProject } = useBook();
  return (
    <li>
      <button
        type="button"
        onClick={() => openProject(project.id)}
        className="group flex w-full items-center gap-4 rounded-xl border border-transparent p-2 text-left transition-colors hover:border-ink-line hover:bg-ink/40"
      >
        <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-ink-line2 bg-ink-deep">
          <Image src={project.featuredImage} alt="" layout="fill" objectFit="cover" objectPosition="top" sizes="64px" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-[17px] font-semibold group-hover:text-mint">{project.name}</span>
          <span className="block text-[14px] leading-snug text-text-muted">{project.summary}</span>
          <span className="mt-1 block truncate font-mono text-[11px] text-text-faint">{project.key_techs.slice(0, 4).join(' · ')}</span>
        </span>
        <ArrowIcon aria-hidden className="shrink-0 text-text-faint group-hover:text-mint" />
      </button>
    </li>
  );
};

const archivePage = (title: string, items: IProject[], intro?: boolean) => {
  const ArchivePage = () => (
    <div className="flex flex-col gap-4">
      {intro && (
        <div className="pb-1">
          <Kicker>05 · Archive</Kicker>
          <H2 className="mt-2">Everything I&apos;ve shipped</H2>
          <p className="mt-2 text-[15px] text-text-muted">Client, freelance and side projects since 2020. Tap any project for screens and details.</p>
        </div>
      )}
      <Meta>{title}</Meta>
      <ul className="-mx-2 flex flex-col gap-1">
        {items.map((p) => (
          <ArchiveItem key={p.id} project={p} />
        ))}
      </ul>
    </div>
  );
  return ArchivePage;
};

/* ---------- 06 Contact / back cover ---------- */

const ContactPage = () => (
  <div className="flex h-full flex-col justify-center gap-6">
    <div className="flex items-center gap-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-mint/60">
        <Image src="/images/profile.JPG" alt="Avinash Aryan" layout="fill" objectFit="cover" objectPosition="50% 30%" sizes="80px" />
      </div>
      <div>
        <div className="font-display text-[22px] font-semibold tracking-[-0.02em]">{profile.name}</div>
        <div className="text-[14px] text-text-muted">{profile.title}</div>
      </div>
    </div>
    <Kicker>06 · Contact</Kicker>
    <H2 className="text-[clamp(30px,3.4vw,42px)]">Open to remote senior frontend and React Native roles.</H2>
    <div className="flex flex-col gap-3">
      <Btn variant="primary" href={`mailto:${profile.email}`} className="self-start">
        <FiMail aria-hidden /> {profile.email}
      </Btn>
      <Btn href={profile.whatsapp} className="self-start">
        <FaWhatsapp aria-hidden /> Message on WhatsApp
      </Btn>
      <Btn href={RESUME_PDF} download className="self-start">
        <DownloadIcon aria-hidden /> Download resume (PDF)
      </Btn>
    </div>
    <ul className="grid grid-cols-2 gap-2">
      {socials.map((s) => {
        const Icon = socialIcons[s.id];
        return (
          <li key={s.id}>
            <Btn href={s.href} className="w-full">
              <Icon aria-hidden /> {s.label}
            </Btn>
          </li>
        );
      })}
    </ul>
    <p className="flex items-center gap-2 font-mono text-[13px] text-text-muted">
      <FiMapPin aria-hidden /> {profile.location}
    </p>
  </div>
);

const BackCover = () => {
  const { goTo, mode } = useBook();
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-8 text-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-mint/60 shadow-xl">
        <Image src="/images/profile.JPG" alt="Avinash Aryan" layout="fill" objectFit="cover" objectPosition="50% 30%" sizes="128px" />
      </div>
      <div>
        <div className="font-display text-[24px] font-semibold tracking-[-0.02em]">{profile.name}</div>
        <div className="text-[14px] text-text-muted">{profile.title}</div>
      </div>
      <p className="max-w-[280px] text-[17px] text-text-2">Thanks for reading. I&apos;d be glad to hear from you.</p>
      <div className="flex flex-wrap justify-center gap-3">
        {mode === 'book' && (
          <Btn onClick={() => goTo('top')}>Back to the start</Btn>
        )}
        <Btn variant="primary" href={`mailto:${profile.email}`}>
          Email me
        </Btn>
      </div>
      <p className="font-mono text-[12px] text-text-faint">© 2026 {profile.name} · {profile.location} · Built with Next.js</p>
    </div>
  );
};

const half = (list: IProject[], n: number) => [list.slice(0, n), list.slice(n)];
const [mobileA, mobileB] = half(archive.mobile, 4);
const [webA, webB] = half(archive.web, 4);

export const PAGES: BookPage[] = [
  { key: 'portrait', head: '', spreadOnly: true, bookOnly: true, bleed: true, Content: Portrait },
  { key: 'title', head: profile.name, anchor: 'top', Content: TitlePage },
  { key: 'contents', head: 'Contents', bookOnly: true, Content: ContentsPage },
  { key: 'glance', head: 'At a glance', anchor: 'numbers', Content: GlancePage },
  { key: 'splitkaro', head: '01 · Selected work', anchor: 'work', Content: SplitkaroPage },
  { key: 'splitkaro-screens', head: '01 · Selected work', Content: SplitkaroScreens },
  { key: 'lybi', head: '01 · Selected work', Content: LybiPage },
  { key: 'qtopia', head: '01 · Selected work', Content: QtopiaPage },
  { key: 'peer', head: '01 · Selected work', Content: PeerPage },
  { key: 'experience', head: '02 · Experience', anchor: 'experience', Content: ExperiencePage },
  { key: 'experience-2', head: '02 · Experience', Content: ExperiencePage2 },
  { key: 'skills', head: '03 · Skills', anchor: 'skills', Content: SkillsPage },
  { key: 'education', head: 'Education & certifications', anchor: 'education', Content: EducationPage },
  { key: 'about', head: '04 · About', anchor: 'about', Content: AboutPage },
  { key: 'archive-1', head: '05 · Archive', anchor: 'archive', Content: archivePage(`Mobile apps · ${archive.mobile.length}`, mobileA, true) },
  { key: 'archive-2', head: '05 · Archive', Content: archivePage('Mobile apps, continued', mobileB) },
  { key: 'archive-3', head: '05 · Archive', Content: archivePage(`Websites & web apps · ${archive.web.length}`, webA) },
  { key: 'archive-4', head: '05 · Archive', Content: archivePage('Websites & web apps, continued', webB) },
  { key: 'contact', head: '06 · Contact', anchor: 'contact', Content: ContactPage },
  { key: 'back', head: '', bleed: true, Content: BackCover },
];

export { getProject };
