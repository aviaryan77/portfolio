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
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h5 className="my-3 font-medium">
        I am MERN Stack frontend Developer. I have 3+ years of experience in Web
        Development and Mobile App Development using React, Next JS, React
        Native and other technologies. I am currently working with Designs.codes
        as a React Native Developer. I am also working with
      </h5>
      <div className="flex-grow p-4 mt-5 -mx-6 bg-gray-400 dark:bg-dark-100">
        <h6 className="my-3 text-xl font-bold">What I Offer</h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
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
