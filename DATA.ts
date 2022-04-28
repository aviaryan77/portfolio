import { RiComputerLine } from '@react-icons/all-files/ri/RiComputerLine';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { AiOutlineAntDesign } from '@react-icons/all-files/ai/AiOutlineAntDesign';
import { AiOutlineApi } from '@react-icons/all-files/ai/AiOutlineApi';
import { MdDeveloperMode } from '@react-icons/all-files/md/MdDeveloperMode';
import { BsCircleFill } from '@react-icons/all-files/bs/BsCircleFill';
import { CgFigma } from '@react-icons/all-files/cg/CgFigma';
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
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>. I have hand on experience working with <b> Tailwind CSS, Chakra UI, Bootstrap ReactStrap </b> etc...</>',
  },
  {
    Icon: FaServer,
    title: 'SEO',
    about:
      ' With help of <b>NEXT Js</> features, websites not only look stunning but also have high performance and good SEO score on all devices. Most of the project website have 90-100 score',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust  REST API using  <b>Node-express API</b> & <b>Graph QL </>',
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
  { name: 'HTML & CSS', level: '85%', Icon: AiFillHtml5 },
  { name: 'TypeScript', level: '55%', Icon: SiTypescript },
  { name: 'React Native', level: '80%', Icon: MdDeveloperMode },
  { name: 'React', level: '70%', Icon: SiReact },
  { name: 'Bootstrap', level: '58%', Icon: SiBootstrap },
  { name: 'Next JS', level: '80%', Icon: SiNextDotJs },
  { name: 'Node', level: '35%', Icon: IoLogoNodejs },
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

  { name: 'Framer', level: '70%', Icon: CgFramer },
];

export const projects: IProject[] = [
  {
    id: '1',
    name: 'COVID Tracker',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/covid.jpeg',
    deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
    github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
    category: ['react'],
    key_techs: ['React', 'Chart.js', 'Material UI'],
  },
  {
    id: '2',
    name: 'Algorithm Visualizer',
    image_path: '/images/algoVisual.png',
    deployed_url: 'https://visual-algorithm.web.app/',
    github_url: 'https://github.com/Dey-Sumit/algorithm-visualizer',
    category: ['react'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    key_techs: ['React', 'firebase', 'Framer Motion'],
  },

  {
    id: '3',
    name: 'Dev Talks',
    image_path: '/images/dev.jpeg',
    deployed_url: 'https://dev-talks.herokuapp.com/',
    github_url: 'https://github.com/Dey-Sumit/Dev-talks',
    category: ['node', 'mongo', 'react'],
    description:
      'Social Media app for developers who can share project,create posts,etc...',
    key_techs: [
      'React',
      'Redux',
      'Node',
      'Express',
      'Mongo',
      'REST API',
      'Bootstrap',
      'react-native',
    ],
  },

  {
    id: '4',
    name: 'Realtime Chat App',
    image_path: '/images/chatapp.jpeg',
    deployed_url: 'https://sumit-chat.netlify.app/',
    github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
    category: ['node', 'react'],
    description:
      'Basic Realtime Chat App where one can create a room can talk to each other',
    key_techs: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  },

  {
    id: '5',
    name: 'Tweeter Clone',
    image_path: '/images/tweetme.jpeg',
    deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
    github_url: 'https://github.com/Dey-Sumit/tweetme',
    category: ['react', 'react-native'],
    description:
      'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
    key_techs: ['React', 'react-native'],
  },

  {
    id: '6',
    name: 'Color Classification using tf.js',
    image_path: '/images/color.jpeg',
    deployed_url: '!#',
    github_url: 'https://github.com/Dey-Sumit/color-classification',
    category: ['express', 'react-native'],
    description:
      'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
    key_techs: ['Express', 'TensorFlow.js', 'Vanilla js'],
  },
  {
    id: '7',
    name: 'YouTube using YouTube ',
    image_path: '/images/youtubeClone.png',
    deployed_url: 'https://not-utube.web.app/',
    github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
    category: ['express'],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      'React',
      'Redux',
      'Firebase Auth',
      'YouTube API',
      'Sass',
      'Bootstrap',
    ],
  },
  {
    id: '8',
    name: 'Football App',
    image_path: '/images/football.png',
    deployed_url: 'https://o-my-goal.web.app/',
    github_url: 'https://github.com/Dey-Sumit/football-app',
    category: ['react', 'web-app'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    key_techs: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  },
  {
    id: '9',
    name: 'Football App',
    image_path: '/images/football.png',
    deployed_url: 'https://o-my-goal.web.app/',
    github_url: 'https://github.com/Dey-Sumit/football-app',
    category: ['react', 'web-app'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    key_techs: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  },
];
