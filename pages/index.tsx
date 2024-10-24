import { fadeInUp, routeAnimation, stagger } from '@/animations';
import { ServiceCard } from '@/components';
import { services } from '@/DATA';
import { motion } from 'framer-motion';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import React from 'react';

const Home = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex flex-col flex-grow px-6 pt-1'
    >
      <h5 className='my-3 font-medium'>
        I am an Electrical graduate from NIT Jaipur with over{' '}
        <strong className='text-blue-600'>4 years</strong> of experience in
        cross-platform mobile app development, specializing in React Native and
        Next JS web application. With a keen eye for detail, I have a flair for
        creating stunning animations and delivering pixel-perfect user
        interfaces. My single greatest skill is problem-solving, and I have an
        insatiable desire to learn new skills. My passion lies in solving
        problems with technology, and I have a knack for finding inefficiencies
        in current systems or ways of doing things. Additionally, I possess an
        extremely high intuition for user experience. I am known for being an
        idea machine, always bringing fresh ideas and possibilities to the
        customer instead of waiting for them to come to me.
        <br />
        <br />
        {`My journey as a web developer started at the age of 19 while I was
        attending my bachelor's degree in Electrical Engineering at NIT Jaipur.
        This experience has not only widened my range of knowledge but also
        allowed me to gather experiences in various disciplines, including
        front-end development and motion graphics. With a strong foundation in
        electrical engineering and a passion for technology, I bring a unique
        perspective to my development projects. I am committed to delivering
        high-quality work and exceeding client expectations at every
        opportunity.`}
      </h5>
      <div className='flex-grow p-4 mt-5 -mx-6 bg-gray-400 dark:bg-dark-100'>
        <h6 className='my-3 text-xl font-bold'>What I Offer</h6>
        <motion.div
          variants={stagger}
          initial='initial'
          animate='animate'
          className='grid gap-6 lg:grid-cols-2'
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log('SERVER', services);
//   return {
//     props: { services: data.services },
//   };
// };

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log('SERVER', services);
//   return {
//     props: { services: data.services },
//   };
// };
