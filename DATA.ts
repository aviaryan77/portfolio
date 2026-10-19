import {
  IExperience,
  ILink,
  IProject,
  ISkillGroup,
  IStat,
} from './type';

// Source of truth: context/resume.md (dates and numbers must match it).

export const SITE_URL = 'https://aviaryan.vercel.app';
export const RESUME_PDF = '/Avinash_Aryan_Resume.pdf';

export const profile = {
  name: 'Avinash Aryan',
  title: 'Lead Mobile App Engineer',
  stack: 'React Native, Expo, Next.js, TypeScript',
  location: 'Patna, India',
  email: 'aviaryan77@gmail.com',
  /** WhatsApp chat link; the number itself is not printed on the page. */
  whatsapp: 'https://wa.me/919431210691',
  kicker: 'Lead Mobile App Engineer · Patna, India · Open to remote roles',
  headline: 'I build mobile and web apps that people use every day.',
  pitch:
    "5+ years shipping React Native, Expo, Next.js and TypeScript apps, with a focus on polished UI and smooth animations. For 4+ years I've led mobile development at Splitkaro.",
  summary:
    'Lead Mobile App Engineer with 5+ years building cross-platform apps for iOS, Android and web with React Native, Next.js and TypeScript. Led mobile at Splitkaro (100K+ downloads, 90,000+ active groups). Founder of Lybi.in.',
};

export const socials: (ILink & { id: string })[] = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/avinash-aryan/' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/aviaryan77' },
  { id: 'twitter', label: 'X / Twitter', href: 'https://twitter.com/avi_aryan_' },
  {
    id: 'stackoverflow',
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/15355937/avinash-aryan',
  },
];

export const stats: IStat[] = [
  { value: '100K+', label: 'Splitkaro downloads on Google Play' },
  { value: '90,000+', label: 'Active groups in 2026' },
  { value: '₹93 Cr+', label: 'Settled through the app in 2026' },
  { value: '4.4★', label: 'From 9K+ Play Store reviews' },
];

export const experience: IExperience[] = [
  {
    company: 'Splitkaro',
    title: 'Lead Mobile App Developer',
    period: 'Jun 2022 – Present',
    location: 'Remote',
    summary:
      'Lead mobile development of the React Native + TypeScript app across Android, iOS and web.',
    highlights: [
      "Lead mobile development of Splitkaro's React Native + TypeScript app across Android, iOS and web: 100K+ downloads, 4.4-star rating from 9K+ Google Play reviews",
      'Built real-time group expense tracking with Firebase, powering 90,000+ active groups and ₹93 crore+ in settlements in 2026',
      'Built automatic expense capture from bank SMS, card and bank PDF statements, UPI apps and receipt scanning',
      'Shipped item-wise bill splitting, smart settle-up reminders and one-tap Splitwise balance import',
      'Built analytics dashboards with category-wise spending insights and monthly summaries',
      'Improved retention through UX optimisation and Reanimated animations',
    ],
    projectIds: ['splitkaro-app', 'splitkaro-website'],
  },
  {
    company: 'designs.codes',
    title: 'React Native Developer',
    period: 'May 2021 – Jun 2022',
    location: 'Remote',
    highlights: [
      'Built a ride-sharing app (Peer Dispatch) in React Native with separate driver and passenger apps',
      'Implemented real-time booking and live tracking over WebSockets',
      'Added push notifications and Redux-based state management',
      'Built offline sync using Redux Persist',
    ],
    projectIds: ['peer-dispatch'],
  },
  {
    company: 'Twigo Technology Pvt Ltd',
    period: 'Jan 2020 – May 2021',
    highlights: [],
  },
];

export const skills: ISkillGroup[] = [
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'iOS', 'Android', 'Reanimated', 'Lottie', 'Push notifications', 'Offline-first sync'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Chakra UI', 'Bootstrap', 'Framer Motion'],
  },
  {
    title: 'State & data',
    items: ['Redux', 'Redux-Saga', 'Redux Persist', 'React Query', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    title: 'Backend & cloud',
    items: ['Node.js', 'Express.js', 'Firebase', 'MongoDB', 'AWS', 'GCP', 'NextAuth', 'JWT', 'Razorpay', 'RBAC'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Claude Code', 'Figma', 'Adobe XD', 'Slack', 'Trello', 'HubStaff'],
  },
];

export const education = {
  degree: 'B.Tech, Electrical Engineering',
  school: 'Malaviya National Institute of Technology (MNIT) Jaipur',
  period: '2015 – 2019',
  notes: [
    'Cleared JEE Main and JEE Advanced in 2015',
    'Intermediate from Patna Collegiate School',
    'Matriculation from HS Bedauli, Patna',
  ],
};

export const certifications = [
  'Claude Code in Action',
  'React Native – The Practical Guide',
  'React Native Expo for Multiplatform Mobile App Development',
];

export const about = [
  "I studied Electrical Engineering at NIT Jaipur (2015 – 2019) and started building for the web there, at 19. I've built cross-platform mobile apps with React Native since 2020.",
  "I enjoy the space where engineering meets product: fast execution, polished UI, and features people actually use. Outside work, I'm building Lybi.in to bring library discovery and booking online for students in smaller cities.",
];

export const projects: IProject[] = [
  {
    id: 'lybi',
    name: 'Lybi.in',
    role: 'Founder & Product Engineer',
    period: 'Aug 2025 – Present',
    summary: 'Library discovery and seat booking for students in Tier-2 and Tier-3 cities.',
    description: [
      'A platform where students discover and book library seats, and library owners manage their spaces, aimed at Tier-2 and Tier-3 cities.',
    ],
    highlights: [
      'Designed the end-to-end frontend architecture with Next.js and React Native',
      'Built daily and monthly seat-booking views and role-based auth for students and library owners',
      'Built Redux-Saga dashboards handling high-volume booking data',
    ],
    featuredImage: '/images/lybi/desktop.jpg',
    imageArray: ['/images/lybi/desktop.jpg', '/images/lybi/mobile-home.jpg'],
    imageShape: 'wide',
    links: [{ label: 'Visit lybi.in', href: 'https://lybi.in' }],
    category: ['next js', 'react', 'react-native', 'web-app', 'mobile-app'],
    key_techs: ['Next.js', 'React Native', 'Redux-Saga', 'RBAC'],
  },
  {
    id: 'splitkaro-app',
    name: 'Splitkaro App',
    role: 'Lead Mobile App Developer',
    period: 'Jun 2022 – Present',
    summary: 'Group expense manager and payments app for India. 100K+ downloads.',
    description: [
      "Splitkaro is India's first group expense manager and group payments app. It aims to change how people spend together, and is built for the Indian market.",
      'Who uses it: friends, flatmates, travel buddies, colleagues, hostel mates, partners, families, co-living and roommates.',
    ],
    sections: [
      {
        title: 'Why people use it',
        items: [
          'Save money and time',
          'Keep track of group spending',
          'Control money outflow',
          'Keep relationships with friends healthy',
          'Improve spending habits',
          'Get money back from friends on time',
          'No manual calculations',
          'Trip budget planner',
        ],
      },
      {
        title: 'What sets it apart',
        items: [
          'Free to use',
          'Intelligent, automated expense reminders',
          'One tap to fetch bills from order history',
          'Pay-per-use with item-wise splitting',
          'Built-in expense calculator',
          'Auto expense tracker',
          'Settle bills by priority',
          'Safe in-app payments',
          'Easy bill management',
        ],
      },
      {
        title: 'Features',
        items: [
          'Split equally, unequally or item-wise',
          'Item-wise splitting by what each person consumed',
          'Import food and grocery bills from Swiggy, Zomato, BigBasket and Swiggy Instamart',
          'Collections to group related bills',
          'Instant Bills to prioritise an expense and get paid on time',
          'Automatic reminders sent to friends on your behalf',
          'Groups for people you spend with regularly, with member-wise tracking',
          'UPI payments via PhonePe, Google Pay, WhatsApp, BHIM UPI and Paytm',
          'Home bills manager for recurring rent, electricity, broadband and subscriptions',
          'Import existing balances from Splitwise and other apps',
        ],
      },
    ],
    quotes: [
      'The app has a refreshing, cool, easy on the eyes interface with a strong focus on customer experience and navigation.',
      "The onboarding, payment flow, and user experience are smooth. Using it the next time I'm going for a trip with friends.",
      "I'd call this amazing feature 'Splitting on Autopilot'.",
    ],
    featuredImage: '/images/splitkaro-app/bill-split.webp',
    imageArray: [
      '/images/splitkaro-app/events.webp',
      '/images/splitkaro-app/bill-split.webp',
      '/images/splitkaro-app/settlements.webp',
      '/images/splitkaro-app/vendors.webp',
    ],
    imageShape: 'phone',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.bsquare.splitkaro',
      },
      { label: 'splitkaro.com', href: 'https://www.splitkaro.com' },
    ],
    category: ['react-native', 'mobile-app'],
    key_techs: [
      'React Native', 'TypeScript', 'Jotai', 'Decentro', 'UPI payments', 'Moment.js',
      'Reanimated', 'Animated API', 'Firebase', 'MoEngage', 'WebView', 'react-native-share',
      'Gifted Charts', 'CodePush', 'Mixpanel', 'Lottie', 'App Center Analytics', 'Push notifications',
    ],
  },
  {
    id: 'splitkaro-website',
    name: 'Splitkaro Website',
    role: 'Lead Mobile App Developer',
    summary: 'Marketing website for Splitkaro, built with Next.js.',
    description: [
      "Splitkaro's vision is a world where social spending is fair and seamless, however people choose to pay, making money between friends and family easier to handle.",
      'The platform simplifies paying with friends, removes the awkwardness of asking for money, and lets people settle debts on the go.',
    ],
    featuredImage: '/images/splitkaro-website/hero.webp',
    imageArray: [
      '/images/splitkaro-website/hero.webp',
      '/images/splitkaro-website/mobile.webp',
      '/images/splitkaro-website/why.webp',
      '/images/splitkaro-website/rent.webp',
      '/images/splitkaro-website/product.webp',
    ],
    imageShape: 'wide',
    links: [{ label: 'splitkaro.com', href: 'https://www.splitkaro.com' }],
    category: ['react', 'web-app', 'next js'],
    key_techs: ['React', 'Next.js', 'AOS', 'Framer Motion', 'Moment.js', 'React Icons', 'Chakra UI', 'Firebase'],
  },
  {
    id: 'qtopia-app',
    name: 'Qtopia App',
    role: 'Freelance Frontend Consultant',
    period: 'Jun 2023 – Dec 2024',
    summary: 'EdTech quiz app: live quizzes, themed quizzes and 1v1 challenges.',
    description: [
      'A quiz app with live quizzes, themed quizzes, 1v1 challenges and more, plus content for learning new facts across many subjects.',
    ],
    highlights: [
      'Led frontend development for the Next.js web platform and the React Native app',
      'Built AI-powered question generation with image scanning',
      'Implemented role-based access control for students and teachers',
      'Improved quiz completion rates by optimising event subscriptions',
    ],
    featuredImage: '/images/qtopia-app/dashboard.webp',
    imageArray: [
      '/images/qtopia-app/dashboard.webp',
      '/images/qtopia-app/wow.webp',
      '/images/qtopia-app/quiz.webp',
      '/images/qtopia-app/score.webp',
      '/images/qtopia-app/leaderboard.webp',
    ],
    imageShape: 'phone',
    links: [],
    category: ['mobile-app', 'react-native'],
    key_techs: ['React Native', 'Redux', 'Redux-Saga', 'Redux Persist', 'Firebase', 'OTA updates', 'Moment.js'],
  },
  {
    id: 'qtopia-website',
    name: 'Qtopia Website',
    role: 'Freelance Frontend Consultant',
    period: 'Jun 2023 – Dec 2024',
    summary: 'Landing pages for the Qtopia quiz platform, built from scratch.',
    highlights: ['Built new landing pages from scratch'],
    featuredImage: '/images/qtopia-website/hero.webp',
    imageArray: [
      '/images/qtopia-website/hero.webp',
      '/images/qtopia-website/features.webp',
      '/images/qtopia-website/quizzes.webp',
      '/images/qtopia-website/footer.webp',
      '/images/qtopia-website/mobile-hero.webp',
      '/images/qtopia-website/drawer.webp',
    ],
    imageShape: 'wide',
    links: [],
    category: ['next js', 'react', 'web-app'],
    key_techs: ['Next.js', 'Chakra UI', 'Moment.js'],
  },
  {
    id: 'peer-dispatch',
    name: 'Peer Dispatch',
    role: 'React Native Developer · designs.codes',
    period: 'May 2021 – Jun 2022',
    summary: 'Ride-sharing and delivery app with separate driver and passenger flows.',
    description: ['A cross-platform taxi app for ride sharing and delivery, built in bare React Native.'],
    highlights: [
      'Built driver and passenger screens in a single app, with data persisted locally',
      'Real-time booking and live tracking, broadcasting over socket.io to many drivers and clients at once',
      'In-app chat between driver and client, plus an assistant chat',
      'Firebase push notifications and toast messages for in-app notifications',
      'State management with Redux, Redux-Saga and Redux Persist',
      'Centralised API helpers to control and debug API calls',
      'Google Maps, animations, modals, validated forms and star-rating feedback',
      'Reusable components, tuned for performance across many iOS and Android devices',
      'Tested and debugged with redux-logger and react-native-debugger',
    ],
    featuredImage: '/images/peerdispatch/passenger.webp',
    imageArray: [
      '/images/peerdispatch/account.webp',
      '/images/peerdispatch/login.webp',
      '/images/peerdispatch/passenger.webp',
      '/images/peerdispatch/newOrder.webp',
      '/images/peerdispatch/more.webp',
      '/images/peerdispatch/payment.webp',
      '/images/peerdispatch/searching.webp',
      '/images/peerdispatch/type.webp',
      '/images/peerdispatch/chat.webp',
      '/images/peerdispatch/deliveries.webp',
      '/images/peerdispatch/rating.webp',
      '/images/peerdispatch/deliveryDetails.webp',
    ],
    imageShape: 'phone',
    links: [
      {
        label: 'Design prototype',
        href: 'https://xd.adobe.com/view/eeb082a2-b9e1-42af-b8a1-06788791d2a3-bbe3/screen/4ef8765b-e3e7-4177-a441-0fafbca2e4c3/',
      },
    ],
    category: ['express', 'react-native', 'node', 'mobile-app', 'mongo'],
    key_techs: [
      'React Native', 'Express', 'Node', 'MongoDB', 'Google Maps', 'Google Cloud Platform',
      'Facebook SDK', 'Redux', 'Redux-Saga', 'Formik', 'Redux Persist', 'socket.io',
      'Toast messages', 'react-native-animatable', 'Moment.js', 'react-native-sound',
      'Apple Sign In', 'Twilio Conversations', 'Firebase push notifications',
    ],
  },
  {
    id: 'picmate',
    name: 'Picmate',
    summary: 'AI profile-picture generator with 50+ styles.',
    description: [
      'An AI model that turns ordinary photos into eye-catching profile pictures to increase engagement, shares and likes. Offers 50+ styles for men and women.',
    ],
    featuredImage: '/images/picmate/hero.webp',
    imageArray: [
      '/images/picmate/dashboard.webp',
      '/images/picmate/hero.webp',
      '/images/picmate/styles.webp',
      '/images/picmate/styles_female.png',
      '/images/picmate/pricing.webp',
      '/images/picmate/testimonials.webp',
    ],
    imageShape: 'wide',
    links: [],
    category: ['react', 'web-app'],
    key_techs: ['React', 'Chakra UI', 'Stripe', 'Rewardful API'],
  },
  {
    id: 'bol-bihar',
    name: 'Bol Bihar',
    summary: 'Blog with admin and user roles on a GraphQL CMS.',
    featuredImage: '/images/bol-bihar/home.webp',
    imageArray: ['/images/bol-bihar/home.webp', '/images/bol-bihar/post.webp', '/images/bol-bihar/footer.webp'],
    imageShape: 'wide',
    links: [
      { label: 'Live site', href: 'https://bol-bihar.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/aviaryan77/bol-bihar' },
    ],
    category: ['react', 'next js', 'web-app'],
    key_techs: ['React', 'Next.js', 'Tailwind CSS', 'GraphQL', 'GraphQL CMS'],
  },
  {
    id: 'twigo-shopee',
    name: 'Twigo Shopee',
    summary: 'MERN-stack e-commerce Android app with MongoDB and Express.',
    featuredImage: '/images/twigo-shopee/product.jpeg',
    imageArray: [
      '/images/twigo-shopee/product.jpeg',
      '/images/twigo-shopee/cart.jpeg',
      '/images/twigo-shopee/account.jpeg',
      '/images/twigo-shopee/login.jpeg',
      '/images/twigo-shopee/search.jpeg',
    ],
    imageShape: 'phone',
    links: [],
    category: ['react-native', 'mongo', 'express', 'mobile-app', 'node'],
    key_techs: ['React Native', 'MongoDB', 'Expo', 'Redux', 'Redux Thunk', 'Express', 'JWT'],
  },
  {
    id: 'bindu-bhai',
    name: 'Bindu Bhai',
    summary: 'Responsive, multi-language lawyer website built with Next.js.',
    featuredImage: '/images/bindu-bhai/home.webp',
    imageArray: [
      '/images/bindu-bhai/home.webp',
      '/images/bindu-bhai/services.webp',
      '/images/bindu-bhai/contact.webp',
      '/images/bindu-bhai/about.webp',
    ],
    imageShape: 'wide',
    links: [],
    category: ['react', 'next js', 'web-app'],
    key_techs: ['React', 'Next.js', 'Nodemailer', 'Chakra UI', 'Framer Motion', 'Formik'],
  },
  {
    id: 'chat-app',
    name: 'Realtime Chat App',
    summary: 'Real-time one-to-one chat built with Expo and Firebase.',
    featuredImage: '/images/expoChatApp/chat.jpeg',
    imageArray: ['/images/expoChatApp/chat.jpeg', '/images/expoChatApp/register.jpeg'],
    imageShape: 'phone',
    links: [{ label: 'GitHub', href: 'https://github.com/aviaryan77/firebaseChat' }],
    category: ['react-native', 'mobile-app'],
    key_techs: ['React Native', 'Expo', 'Firebase'],
  },
  {
    id: 'cryptonomy',
    name: 'Cryptonomy',
    summary: 'Real-time crypto price tracker app.',
    featuredImage: '/images/crypto/crypto2.webp',
    imageArray: ['/images/crypto/crypto2.webp', '/images/crypto/crypto.webp'],
    imageShape: 'phone',
    links: [{ label: 'GitHub', href: 'https://github.com/aviaryan77/Cryptonomy' }],
    category: ['react-native', 'mobile-app'],
    key_techs: ['React Native', 'Gifted Chat', 'TypeScript', 'AdMob'],
  },
  {
    id: 'hylog',
    name: 'Hylog',
    summary: 'Social chat and discussion app built with React Native and Firebase.',
    featuredImage: '/images/hylog/hy1.webp',
    imageArray: [
      '/images/hylog/hy1.webp',
      '/images/hylog/hy2.webp',
      '/images/hylog/hy3.webp',
      '/images/hylog/hy4.webp',
      '/images/hylog/hy5.webp',
      '/images/hylog/hy6.webp',
    ],
    imageShape: 'phone',
    links: [],
    category: ['react-native', 'mobile-app'],
    key_techs: ['React Native', 'Gifted Chat', 'AdMob', 'Firebase'],
  },
  {
    id: 'cloud-flog',
    name: 'Cloud Flog',
    summary: 'B2B trading community app for luxury watch dealers.',
    description: [
      'A B2B trading group community app for the luxury watch trade, connecting luxury watch dealers around the world to support and grow their businesses.',
    ],
    featuredImage: '/images/cloudflog/cf.webp',
    imageArray: [
      '/images/cloudflog/cf.webp',
      '/images/cloudflog/cf1.webp',
      '/images/cloudflog/cf2.webp',
      '/images/cloudflog/cf3.webp',
      '/images/cloudflog/cf4.webp',
    ],
    imageShape: 'phone',
    links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.cloudflog' }],
    category: ['react-native', 'mobile-app'],
    key_techs: ['React Native', 'Firebase Auth', 'Redux', 'Formik', 'Moment.js', 'Firebase push notifications'],
  },
  {
    id: 'trip-planner',
    name: 'Trip Planner',
    summary: 'Trip planning app built with React Native and Firebase.',
    featuredImage: '/images/tripPlanner/home.webp',
    imageArray: [
      '/images/tripPlanner/home.webp',
      '/images/tripPlanner/login.webp',
      '/images/tripPlanner/landing.webp',
      '/images/tripPlanner/date.webp',
      '/images/tripPlanner/profile.webp',
      '/images/tripPlanner/docs.webp',
      '/images/tripPlanner/others.webp',
    ],
    imageShape: 'phone',
    links: [{ label: 'User flow (PDF)', href: '/tripPlanner/Userflowv1mvp.pdf' }],
    category: ['react-native', 'mobile-app'],
    key_techs: [
      'React Native', 'Firebase Auth', 'Mapbox API', 'Redux', 'Redux-Saga', 'Formik',
      'Redux Persist', 'Toast messages', 'react-native-animatable', 'Moment.js', 'Firebase push notifications',
    ],
  },
  {
    id: 'qwertybit',
    name: 'QwertyBit Website',
    summary: 'Tech services website for a client, built with Next.js.',
    featuredImage: '/images/qb/home.webp',
    imageArray: ['/images/qb/home.webp'],
    imageShape: 'wide',
    links: [{ label: 'Live site', href: 'https://qwertybit.com/' }],
    category: ['react', 'next js', 'web-app'],
    key_techs: ['React', 'Redux', 'Next.js', 'WP API', 'Sass', 'Chakra UI'],
  },
  {
    id: 'express-login',
    name: 'Express Login Template',
    summary: 'Authentication template using Node and Express.',
    featuredImage: '/images/expressAuth/login.webp',
    imageArray: ['/images/expressAuth/login.webp', '/images/expressAuth/dashboard.webp'],
    imageShape: 'wide',
    links: [{ label: 'GitHub', href: 'https://github.com/aviaryan77/express-login-system' }],
    category: ['node', 'express'],
    key_techs: ['Node', 'Express', 'Bootstrap'],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);

const MOBILE_ARCHIVE = ['splitkaro-app', 'qtopia-app', 'peer-dispatch', 'twigo-shopee', 'cloud-flog', 'chat-app', 'cryptonomy', 'hylog', 'trip-planner'];
const WEB_ARCHIVE = ['lybi', 'splitkaro-website', 'qtopia-website', 'picmate', 'bol-bihar', 'bindu-bhai', 'qwertybit', 'express-login'];

export const archive = {
  mobile: MOBILE_ARCHIVE.map(getProject),
  web: WEB_ARCHIVE.map(getProject),
};
