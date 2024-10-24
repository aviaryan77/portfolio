import { RiComputerLine } from '@react-icons/all-files/ri/RiComputerLine';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { AiOutlineAntDesign } from '@react-icons/all-files/ai/AiOutlineAntDesign';
import { AiOutlineApi } from '@react-icons/all-files/ai/AiOutlineApi';
import { MdDeveloperMode } from '@react-icons/all-files/md/MdDeveloperMode';
import { BsCircleFill } from '@react-icons/all-files/bs/BsCircleFill';
import { TiCodeOutline } from '@react-icons/all-files/ti/TiCodeOutline';
// import { MdOutlineFindInPage } from '@react-icons/all-files/md/MdOutlineFindInPage';
import { AiFillFund } from '@react-icons/all-files/ai/AiFillFund';
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
    Icon: AiFillFund,
    title: 'SEO',
    about:
      ' With help of <b>NEXT Js</b> features, websites not only look stunning but also have high performance and good SEO score on all devices. Most of the project website have 90-100 score',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Integration',
    about:
      'I can connect REST API with Front-end technologies. For Mobile Technologies I can connect the Core mobile api like camera, GPS, mic, etc..',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Mobile App Development',
    about:
      'Build and deploy pixel perfect mobile app with <b>React Native</b>  and <b>Animated API</b> for both iOS and Android',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/Graphic designer',
    about:
      'Stunning user interface designer using <b>Figma</b> ,<b>Canva</b>  and  <b>Framer</b> ',
  },
  {
    Icon: TiCodeOutline,
    title: 'Code review and refactoring',
    about:
      'I focus on clean and manageable code, scalability & reusability of components, integrate market leading tools and technologies',
  },
];

export const languages: ISkill[] = [
  { name: 'JavaScript', level: '70%', Icon: IoLogoJavascript },
  { name: 'HTML & CSS', level: '75%', Icon: AiFillHtml5 },
  { name: 'TypeScript', level: '65%', Icon: SiTypescript },
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
  'next js',
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
    id: '16',
    name: 'Splitkaro Website',
    featuredImage: '/images/splitkaro-website/hero.webp',
    imageArray: [
      '/images/splitkaro-website/hero.webp',
      '/images/splitkaro-website/mobile.webp',
      '/images/splitkaro-website/why.webp',
      '/images/splitkaro-website/rent.webp',
      '/images/splitkaro-website/product.webp',
    ],
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.bsquare.splitkaro&hl=en_IN&gl=US',
    github_url: null,
    category: ['react', 'web-app', 'next js' ],
    description: `<h2 class="framer-text" style="--font-selector: R0Y7SW50ZXItcmVndWxhcg==; --framer-font-family: &quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-1021654d-251a-4750-952b-de3f7005260e, rgb(136, 136, 136));">At Splitkaro, our vision is to create a world where social spending is fair and seamless, regardless of how people choose to pay. We want to transform how people handle money between friends and family, making it easier and more convenient for everyone.<br class="framer-text"><br class="framer-text">Our goal is to provide a platform that simplifies the process of paying with friends, removes the awkwardness of asking for money, and allows people to settle debts on the go. We believe that this will create stronger, more honest relationships and help people avoid the pitfalls that often come with sharing expenses.<br class="framer-text"><br class="framer-text">With Splitkaro, our hope is to empower people to spend time with their loved ones without worrying about the financial logistics. We are committed to innovation, excellence, and customer satisfaction, and we believe that our vision will have a significant impact in the lives of people across India and beyond.</h2>
  `,
    key_techs: ['React', 'Next JS', 'AOS', 'Framer-motion', 'Moment JS', 'React-icons', 'Chakra UI', 'Firebase', ],
  },
  {
    id: '15',
    name: 'Splitkaro App',
    featuredImage: '/images/splitkaro-app/bill-split.webp',
    imageArray: [
      '/images/splitkaro-app/events.webp',
      '/images/splitkaro-app/bill-split.webp',
      '/images/splitkaro-app/settlements.webp',
      '/images/splitkaro-app/vendors.webp',
    ],
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.bsquare.splitkaro&hl=en_IN&gl=US',
    github_url: null,
    category: ['react-native', 'mobile-app', ],
    description: `<div>Splitkaro is India's first group expense manager and group payments solution provider that aims to transform how people spend together. It specialises in the Indian market 🇮🇳 and is made in India, with love! ♥️<br><br>💫 Who should use Splitkaro?<br>People in India who spend with:<br>Friends 👯‍♂️, flatmates 👥, travel buddies 🪂, co-workers/colleagues 🧑‍💻, hostel mates 🧑‍🏫, partner 👩‍❤️‍👨, family 👨‍👩‍👧‍👦, co-living 🛌, roommates 🤼<br><br>💫 Why should you use Splitkaro?<br>- Save money 💸 and time ⏱️<br>- Keep track of your group spending 💰<br>- Control your money outflow 🤑<br>- Keep relationships with friends healthy 👬🏻<br>- Improve your spending habits 💎<br>- Deal with the social stigma of appearing unfriendly/being labeled kanjus 🤩<br>- Get money from friends on time ⌛<br>- Say bye to calculations 🧮<br>- No tension of chillr 🏧<br>- Trip budget planner 🛄<br><br>💫 Key Market Differentiators<br>- It’s Free 🆓<br>- Intelligent and Automated expense reminder system 🤖<br>- Single Tap to fetch your bills from Order History 🍕🍔🍬<br>- Pay-per-use with item-wise splitting 🧾<br>- Inbuilt expense calculator 📟<br>- Auto Expense Tracker 🛤️<br>- Settle Bills as per set Priority 😎<br>- In-App Safe and Secure Payments 🔐<br>- Easy bill management 🧑‍💼<br>- Manage personal finance 💹*<br>- Home setup 🏡*<br>- Home budget planner 💲*<br><br>💫 Our Industry-Leading Features<br>- Split wisely as per your requirement- equally, unequally, or item-wise 🥮.<br>- Item-wise splitting allows splitting bills as per the items consumed by each individual 🍜. <br>- Import online food 🧋🍟🍰🍭 and grocery 🧅🍉 bills from your order history of different vendors like Swiggy, Zomato, Big Basket, and Swiggy Instamart.<br>- Create a collection to add related bills together. They act as a basic bills manager 👔.<br>- Prioritize an expense and get money on time with Instant Bills 🗓️.<br>- An intelligent reminder system sends automatic reminders to friends on your behalf 🤖<br>- Form groups with people you spend with regularly 💑- .<br>- Track your group expenses member-wise 📝.<br>- Pay friends you owe money to with UPI Payments via PhonePe, Google Pay, WhatsApp, Bhim UPI, Paytm, etc 📲 <br>- Set Up your home and live hassle-free forever with our home bills manager. - - It auto pays all your monthly recurring household bills like rent 🏘️, electricity 💡, BroadBand 🌐, Netflix/Hotstar/Amazon Prime subscription 📽️, etc.*<br>- Import existing balances from other apps like Splitwise, Walnut, YNAB, etc ☑️* <br><br>💫 What our Customers have to say:<br># “The app has a refreshing, cool, easy on the eyes interface with a strong focus on customer experience and navigation.”<br># “The onboarding, payment flow, and user experience are smooth. Using it the next time I'm going for a trip with friends.”<br># “I’d call this amazing feature ‘Splitting on Autopilot’ since instead of going through the hassle of finding a paper, drawing several columns, writing down each item’s bill according to the assignees, and then adding them up, you can rely on Splitkaro to do it for you automatically.”<br><br>💫 Why Splitkaro needs the following permission:<br># READ CONTACTS<br>We identify your friends with their contact numbers. Contact number is used to make UPI payments. Also, your balances and payments are tracked against these contact numbers.<br><br>We would love to understand how you liked our App. For any feedback, requests, questions, or concerns, reach us at support@splitkaro.com<br><br>* Upcoming features</div>
  `,
    key_techs: ['React-Native', 'Jotai', 'Decentro', 'UPI payment', 'Moment JS', 'React-native-reanimated', 'Animated API', 'Firebase', 'react-native-moengage', 'react-native-webview','react-native-share', 'react-native-gifted-charts','react-native-code-push','mixpanel-react-native', 'lottie' , 'appcenter-analytics', 'react-native-push-notification'],
  },
  {
    id: '14',
    name: 'Picmate',
    featuredImage: '/images/picmate/hero.webp',
    imageArray: [
      '/images/picmate/dashboard.webp',
      '/images/picmate/hero.webp',
      '/images/picmate/styles.webp',
      '/images/picmate/styles_female.webp',
      '/images/picmate/pricing.webp',
      '/images/picmate/testimonials.webp',
    ],
    deployed_url: 'https://picmate.ai',
    github_url: null,
    category: ['react', 'web-app'],
    description: `Picmate uses ai AI model that turns ordinary photos into captivating profile pictures, increasing engagement, shares and likes,
    offer 50+ styles for males and females 

  `,
    key_techs: ['React', 'Chakra-UI', 'Stripe Payment', 'Rewardful API'],
  },
  {
    id: '13',
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
    description: `<div>Are you a trivia buff looking for a fun and engaging way to test your knowledge? Look no further than Qtopia! Our app features a wide range of quiz formats to suit every taste, including live quizzes, themed quizzes, 1v1 challenges, and more.<br><br>But that's not all - Qtopia is also a great place to learn new facts and expand your knowledge. With a wealth of interesting and informative content on a variety of subjects, you're sure to come away from each quiz with new insights and information.<br><br>Whether you're a casual player or a die-hard quiz enthusiast, QuizMaster is the perfect choice for anyone who loves to learn and have fun. So why wait? Download Qtopia today and start playing!</div>
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
    id: '12',
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
    category: ['next js', 'react', 'web-app'],
    description: `<b>Realmoney quiz trivia app</b> 
     <li> Developed brand new landing pages with scratch
    </li>
  `,
    key_techs: ['NEXT JS', 'chakra-ui', 'moment js'],
  },
  {
    id: '11',
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
    id: '10',
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
    category: ['react', 'next js', 'web-app'],
    key_techs: ['React', 'Next JS', 'Tailwind CSS', 'Graph QL', 'GraphQL CMS'],
  },
  {
    id: '9',
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
    id: '8',
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
    category: ['react', 'next js', 'web-app'],
    description:
      'A production ready responsive dynamic lawyer website made with next JS, support multi-languages.',
    key_techs: ['React', 'Nodemailer', 'chakra-UI', 'Framer Motion', 'formik'],
  },

  {
    id: '7',
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
    id: '6',
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
    id: '5',
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
    id: '4',
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
    id: '3',
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
    id: '2',
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
    id: '1',
    name: 'QwertyBit Website',
    featuredImage: '/images/qb/home.webp',
    imageArray: ['/images/qb/home.webp'],
    deployed_url: 'https://qwertybit.com/',
    github_url: null,
    category: ['react', 'next js', 'web-app'],
    description: 'A tech service website for client using NEXT Js',
    key_techs: ['React', 'Redux', 'Next Js', 'WP Api', 'Sass', 'Chakra UI'],
  },
];
