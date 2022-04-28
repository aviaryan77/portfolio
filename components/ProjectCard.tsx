import Image from 'next/image';
import { IProject } from '@/type';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp, stagger } from '@/animations';
import React, { FunctionComponent } from 'react';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { AiFillProject } from '@react-icons/all-files/ai/AiFillProject';

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetails: null | number;
  handleShowDetails: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetails,
  handleShowDetails,
}) => {
  return (
    <>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => handleShowDetails(id)}
        width={300}
        height={150}
        layout="responsive"
      />

      <p className="my-2 text-center">{name}</p>
      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:text-white dark:bg-dark-100 gap-x-12 md:grid-cols-2">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                alt={name}
                width={300}
                height={150}
                src={image_path}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInLeft}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 "
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={stagger}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <motion.span
                  variants={fadeInUp}
                  key={tech}
                  className="px-2 py-2 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
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
    </>
  );
};

export default ProjectCard;
