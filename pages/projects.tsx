import { fadeInUp, routeAnimation, stagger } from '@/animations';
import { ProjectCard, ProjectNavbar } from '@/components';

import { projects } from '@/DATA';
import { Category } from '@/type';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Projects = () => {
  const [filteredProject, setFilteredProject] = useState(projects);
  const [active, setActive] = useState<Category | 'all'>('all');
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setActive('all');
      setFilteredProject(projects);
      return;
    }
    const newArray = projects.filter((project) =>
      project.category.includes(category)
    );
    setFilteredProject(newArray);
    setActive(category);
  };
  const handleShowDetails = (id: number | null) => {
    setShowDetails(id);
    if (!!id) {
      const newArray = projects.filter((project) => project.id === id);
      setFilteredProject(newArray);
    } else {
      handleFilterCategory(active);
    }
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
    >
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-3 my-3"
      >
        {filteredProject.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              handleShowDetails={handleShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
