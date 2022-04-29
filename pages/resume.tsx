import { fadeInUp, routeAnimation } from '@/animations';
import { Bar } from '@/components';
import { languages, tools } from '@/DATA';
import { motion } from 'framer-motion';
import React from 'react';

const resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      {/* education and experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial={'initial'} animate={'animate'}>
          <h5 className="my-3 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold ">
              Malaviya National Institute of Technology(2015-2019)
            </h5>
            <p className="font-semibold">
              Graduated in Electrical Engineering in 2019
            </p>
            <p className="my-3">Graduated in Electrical Engineering in 2019 </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial={'initial'} animate={'animate'}>
          <h5 className="my-3 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold ">
              I started web development back in 2020...Fast forward to today, I
              am a self taught web and mobile app developer , mainly work on
              frontend these days.
            </h5>
            <p className="font-semibold">
              Graduated in Electrical Engineering in 2019
            </p>
            <p className="my-3">Graduated in Electrical Engineering in 2019 </p>
          </div>
        </motion.div>
      </div>

      {/* languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
