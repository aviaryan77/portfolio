import { RiComputerLine } from '@react-icons/all-files/ri/RiComputerLine';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { AiOutlineAntDesign } from '@react-icons/all-files/ai/AiOutlineAntDesign';
import { AiOutlineApi } from '@react-icons/all-files/ai/AiOutlineApi';
import { MdDeveloperMode } from '@react-icons/all-files/md/MdDeveloperMode';
import { BsCircleFill } from '@react-icons/all-files/bs/BsCircleFill';
import { CgFigma } from '@react-icons/all-files/cg/CgFigma';
import { SiGooglecloud } from '@react-icons/all-files/si/SiGooglecloud';
import { SiSlack } from '@react-icons/all-files/si/SiSlack';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiBootstrap } from '@react-icons/all-files/si/SiBootstrap';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { CgFramer } from '@react-icons/all-files/cg/CgFramer';
import { AiFillHtml5 } from '@react-icons/all-files/ai/AiFillHtml5';
import { IoLogoJavascript } from '@react-icons/all-files/io/IoLogoJavascript';
import { IoLogoNodejs } from '@react-icons/all-files/io/IoLogoNodejs';
import { Category, IProject, IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>. I have hand on experience working with <b> Tailwind CSS, Chakra UI, Bootstrap ReactStrap </b> etc...',
  },
  {
    Icon: FaServer,
    title: 'SEO',
    about:
      ' With help of <b>NEXT Js</b> features, websites not only look stunning but also have high performance and good SEO score on all devices. Most of the project website have 90-100 score',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust  REST API using  <b>Node-express API</b> & <b>Graph QL </b>',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Mobile App Development',
    about:
      'Build and deploy pixel perfect mobile app with <b>React Native</b>  and <b>Animated API</b> for both iOS and Android',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'Stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  },
];

export const languages: ISkill[] = [
  { name: 'JavaScript', level: '70%', Icon: IoLogoJavascript },
  { name: 'HTML & CSS', level: '75%', Icon: AiFillHtml5 },
  { name: 'TypeScript', level: '35%', Icon: SiTypescript },
  { name: 'React Native', level: '90%', Icon: MdDeveloperMode },
  { name: 'React, Redux, Hooks', level: '80%', Icon: SiReact },
  { name: 'Bootstrap', level: '58%', Icon: SiBootstrap },
  { name: 'Next JS', level: '80%', Icon: SiNextDotJs },
  { name: 'Node', level: '25%', Icon: IoLogoNodejs },
];

export const projectNavBars: Category[] | string[] = [
  'all',
  'mobile-app',
  'web-app',
  'react',
  'react-native',
  'next',
  'node',
  'express',
  'mongo',
];

export const tools: ISkill[] = [
  { name: 'Figma & XD', level: '50%', Icon: CgFigma },
  { name: 'Google Cloud Platform', level: '80%', Icon: SiGooglecloud },
  { name: 'Slack,Trello, HubStaff', level: '90%', Icon: SiSlack },
  { name: 'Git', level: '75%', Icon: SiGithub },
  { name: 'Framer Motion & Animated API', level: '70%', Icon: CgFramer },
];

export const projects: IProject[] = [
  {
    id: '6c',
    name: 'Qtopia app',
    featuredImage: '/images/qtopia-app/dashboard.webp',
    imageArray: [
      '/images/qtopia-app/dashboard.webp',
      '/images/qtopia-app/wow.webp',
      '/images/qtopia-app/quiz.webp',
      '/images/qtopia-app/score.webp',
      '/images/qtopia-app/leaderboard.webp',
    ],
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.qtopiaandroid',
    github_url: null,
    category: ['mobile-app', 'react-native'],
    description: `Frontend team lead
    Trivia app with real money game
    State management using redux, redux-saga, redux-persist
    Working on UPI payment integration with Decentro
    Added Auth flow
    Pub-sub event subscription for live quizzes
  `,
    key_techs: [
      'React-native',
      'Redux',
      'Redux-saga',
      'Redux-persist',
      'Firebase',
      'OTA-update',
      'moment js',
    ],
  },
  {
    id: '6b',
    name: 'Qtopia website',
    featuredImage: '/images/qtopia-website/hero.webp',
    imageArray: [
      '/images/qtopia-website/hero.webp',
      '/images/qtopia-website/features.webp',
      '/images/qtopia-website/quizzes.webp',
      '/images/qtopia-website/footer.webp',
      '/images/qtopia-website/mobile-hero.webp',
      '/images/qtopia-website/drawer.webp',
    ],
    deployed_url: 'https://qtopia.in/',
    github_url: null,
    category: ['next', 'react', 'web-app'],
    description: `<b>Realmoney quiz trivia app</b> 
     <li> Developed brand new landing pages with scratch
    </li>
  `,
    key_techs: ['NEXT JS', 'chakra-ui', 'moment js'],
  },
  {
    id: '6',
    name: 'Peer Dispatch',
    featuredImage: '/images/peerdispatch/account.webp',
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
    deployed_url:
      'https://xd.adobe.com/view/eeb082a2-b9e1-42af-b8a1-06788791d2a3-bbe3/screen/4ef8765b-e3e7-4177-a441-0fafbca2e4c3/',
    github_url: null,
    category: ['express', 'react-native', 'node', 'mobile-app', 'mongo'],
    description: `<b>Ride Sharing + Delivery App: Bare react native</b> 

     <li> Developed bare react native, cross-platform user-facing taxi app for delivery and ride
      sharing
      </li>
      
      <li> Designed and build modern user interfaces to enhance application performance
      </li>
      <li> Build reusable components and front-end libraries for future use.
      </li>
      <li> Optimized components for maximum performance across a number of iOS and android
      devices </li>
      <li> State management using Redux. Redux-persist with saga middlewares</li>
      <li>Centralized API helpers to control and debug API calls</li>
     <li>Added Logic to use Client and Driver screens in a single app with persisting data locally
      </li>
      <li>Used modern packages for advance features to use in Google maps, smooth animations,
     </li>
     
     <li>beautiful modals, validated forms, star rated feedback and other components
     </li>

     <li> Broadcasted data with help of socket.io to use in multiple driver and multiple clients
      screens simultaneously
      </li>
      <li>Added in-app chat features to Driver-client chat and Assistant chat
      </li>
      <li>For user engagement implemented firebase push notifications and toast messages for in-app notification
      </li>
      <li>Tested and Debugged using redux-logger, react-native-debugger with added colors and
      </li>
  `,

    key_techs: [
      'express ',
      'react-native',
      'node',
      'mongo',
      'Google Map',
      'Google Cloud Platform',
      'Fb-sdk',
      'redux',
      'redux-saga',
      'formik',
      'redux-persist',
      'socket.io',
      'Toast-message',
      'react-native-animatable',
      'moment js',
      'react-native-sound',
      'apple authentication',
      'twilio conversations',
      'firebase push notifications',
    ],
  },
  {
    id: '1',
    name: 'Bol Bihar',
    description: 'This is blog app with admin and user roles in GRAPHQL CMS',
    featuredImage: '/images/bol-bihar/home.webp',
    imageArray: [
      '/images/bol-bihar/home.webp',
      '/images/bol-bihar/post.webp',
      '/images/bol-bihar/footer.webp',
    ],
    deployed_url: 'https://bol-bihar.vercel.app/',
    github_url: 'https://github.com/aviaryan77/bol-bihar',
    category: ['react', 'next', 'web-app'],
    key_techs: ['React', 'Next JS', 'Tailwind CSS', 'Graph QL', 'GraphQL CMS'],
  },
  {
    id: '1a',
    name: 'Twigo Shopee',
    description:
      'A complete MERN stack E-commerce android application with Mongo DB and express',
    featuredImage: '/images/twigo-shopee/product.jpeg',
    imageArray: [
      '/images/twigo-shopee/product.jpeg',
      '/images/twigo-shopee/cart.jpeg',
      '/images/twigo-shopee/account.jpeg',
      '/images/twigo-shopee/login.jpeg',
      '/images/twigo-shopee/search.jpeg',
    ],
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.twigo.shopee&hl=en&gl=in',
    github_url: null,
    category: ['react-native', 'mongo', 'express', 'mobile-app', 'node'],
    key_techs: [
      'React-native',
      'Mongo DB',
      'expo',
      'Redux',
      'Redux-thunk',
      'express',
      'jwt',
    ],
  },
  {
    id: '2',
    name: 'Bindu Bhai',
    featuredImage: '/images/bindu-bhai/home.webp',
    imageArray: [
      '/images/bindu-bhai/home.webp',
      '/images/bindu-bhai/services.webp',
      '/images/bindu-bhai/contact.webp',
      '/images/bindu-bhai/about.webp',
    ],
    deployed_url: 'https://bindubhai.com/',
    github_url: null,
    category: ['react', 'next', 'web-app'],
    description:
      'A production ready responsive dynamic lawyer website made with next JS, support multi-languages.',
    key_techs: ['React', 'Nodemailer', 'chakra-UI', 'Framer Motion', 'formik'],
  },

  {
    id: '4a',
    name: 'Realtime Chat App',
    featuredImage: '/images/expoChatApp/chat.jpeg',
    imageArray: [
      '/images/expoChatApp/chat.jpeg',
      '/images/expoChatApp/login.jpeg',
    ],
    deployed_url: null,
    github_url: 'https://github.com/aviaryan77/firebaseChat',
    category: ['react-native', 'mobile-app'],
    description: 'Basic Realtime Chat App where one can talk to each other',
    key_techs: ['React-native', 'expo', 'firebase'],
  },
  {
    id: '4c',
    name: 'Cryptonomy',
    featuredImage: '/images/crypto/crypto2.webp',
    imageArray: ['/images/crypto/crypto2.webp', '/images/crypto/crypto.webp'],
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.cryptonomy',
    github_url: 'https://github.com/aviaryan77/Cryptonomy',
    category: ['react-native', 'mobile-app'],
    description: 'Cryptonomy is a real-time crypto price tracker app.',
    key_techs: ['React-native', 'gifted-chat', 'TypeScript', 'admob', 'crypto'],
  },
  {
    id: '4b',
    name: 'Hylog',
    featuredImage: '/images/hylog/hy1.webp',
    imageArray: [
      '/images/hylog/hy1.webp',
      '/images/hylog/hy2.webp',
      '/images/hylog/hy3.webp',
      '/images/hylog/hy4.webp',
      '/images/hylog/hy5.webp',
      '/images/hylog/hy6.webp',
    ],
    deployed_url: null,
    github_url: null,
    category: ['react-native', 'mobile-app'],
    description:
      'Hylog is a social media chat and discussion app build with react native and firebase',
    key_techs: ['React-native', 'gifted-chat', 'admob', 'firebase'],
  },
  {
    id: '8a',
    name: 'Express Login Template',
    featuredImage: '/images/expressAuth/login.webp',
    imageArray: [
      '/images/expressAuth/login.webp',
      '/images/expressAuth/dashboard.webp',
    ],
    deployed_url: 'https://github.com/aviaryan77/express-login-system',
    github_url: null,
    category: ['node', 'express'],
    description: 'Auth template using Node and Express',
    key_techs: ['Node', 'Express', 'Bootstrap'],
  },

  {
    id: '7a',
    name: 'Cloud Flog',
    featuredImage: '/images/cloudflog/cf.webp',
    imageArray: [
      '/images/cloudflog/cf.webp',
      '/images/cloudflog/cf1.webp',
      '/images/cloudflog/cf2.webp',
      '/images/cloudflog/cf3.webp',
      '/images/cloudflog/cf4.webp',
    ],
    deployed_url: 'https://play.google.com/store/apps/details?id=com.cloudflog',
    github_url: null,
    category: ['react-native', 'mobile-app'],
    description:
      'The Cloud Flog is the Leading B2B trading group community app for the luxury watch trade. We connect Luxury Watch Dealers around the World to support and grow their businesses.',
    key_techs: [
      'Firebase Auth',
      'react-native',
      'redux',
      'formik',
      'moment js',
      'firebase push notifications',
    ],
  },
  {
    id: '7',
    name: 'Trip Planner',
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
    deployed_url: '/tripPlanner/Userflowv1mvp.pdf',
    github_url: null,
    category: ['react-native', 'mobile-app'],
    description: 'A trip planner app using Firebase and React native',
    key_techs: [
      'Firebase Auth',
      'react-native',
      'MapBox API',
      'redux',
      'redux-saga',
      'formik',
      'redux-persist',
      'Toast-message',
      'react-native-animatable',
      'moment js',
      'firebase push notifications',
    ],
  },
  {
    id: '8',
    name: 'QwertyBit Website',
    featuredImage: '/images/qb/home.webp',
    imageArray: ['/images/qb/home.webp'],
    deployed_url: 'https://qwertybit.com/',
    github_url: null,
    category: ['react', 'next', 'web-app'],
    description: 'A tech service website for client using NEXT Js',
    key_techs: ['React', 'Redux', 'Next Js', 'WP Api', 'Sass', 'Chakra UI'],
  },
];
