import { ISkill } from '@/type';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r to-green from-blue-600 "
        style={{ width: bar_width }}
        variants={variants}
        initial={'initial'}
        animate={'animate'}
      >
        <Icon className="w-6 h-6 mr-3 bg-blue-600 rounded-full" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
