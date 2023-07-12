import Image from 'next/image';
import { IProject } from '@/type';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp, stagger } from '@/animations';
import React, { FunctionComponent } from 'react';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { AiFillProject } from '@react-icons/all-files/ai/AiFillProject';

import dynamic from 'next/dynamic';
const Carousel = dynamic(() => import('react-multi-carousel'));
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetails: null | string;
  handleShowDetails: (id: null | string) => void;
}> = ({
  project: {
    id,
    name,
    featuredImage,
    imageArray,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetails,
  handleShowDetails,
}) => {
  const createMarkup = () => ({ __html: description });

  
  return (
    <div>
      <Image
        src={featuredImage}
        alt={name}
        className="cursor-pointer"
        onClick={() => handleShowDetails(id)}
        width={300}
        height={category?.includes('react-native') ? 600 : 150}
        layout="responsive"
      />

      <p className="my-2 text-center">{name}</p>
      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid p-2 text-black bg-gray-100 border rounded-lg md:p-10 dark:text-white dark:bg-dark-100 gap-x-12 md:grid-cols-2">
          <motion.div
            className="overflow-hidden "
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gray-500 border-4 border-gray-100 "
            >
              <Carousel infinite={true} responsive={responsive}>
                {imageArray?.map((item, index) => {
                  return (
                    <Image
                      key={index}
                      alt={name}
                      width={300}
                      height={category?.includes('react-native') ? 600 : 150}
                      src={item}
                      objectFit="contain"
                      layout="responsive"
                    />
                  );
                })}
              </Carousel>
            </motion.div>
            <motion.div
              variants={fadeInLeft}
              className="flex justify-center my-4 space-x-3"
            >
              {!!github_url ? (
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 "
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
              ) : null}
              {!!deployed_url ? (
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              ) : null}
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.div variants={fadeInUp} className="mb-3 font-medium">
              <p dangerouslySetInnerHTML={createMarkup()} />
            </motion.div>
            <motion.div
              variants={stagger}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <motion.span
                  variants={fadeInUp}
                  key={tech}
                  className="px-2 py-2 my-1 capitalize bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          <button className="absolute p-1 bg-gray-200 rounded-full dark:bg-dark-200 top-3 right-3 focus:outline-none">
            <MdClose size={30} onClick={() => handleShowDetails(null)} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
