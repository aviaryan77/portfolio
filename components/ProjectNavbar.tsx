import { fadeInLeft, stagger } from '@/animations';
import { projectNavBars } from '@/DATA';
import { Category } from '@/type';
import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-green';
  if (active === value) className += ' text-green';
  return (
    <motion.li
      variants={fadeInLeft}
      className={className}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </motion.li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <motion.div
      variants={stagger}
      animate="animate"
      initial="initial"
      className="flex px-3 py-2 space-x-3 overflow-x-auto list-none"
    >
      {projectNavBars.map((nav) => (
        <NavItem value={nav} {...props} />
      ))}
    </motion.div>
  );
};

export default ProjectNavbar;
