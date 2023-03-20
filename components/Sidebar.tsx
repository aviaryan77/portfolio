import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { GoLocation } from '@react-icons/all-files/go/GoLocation';
import { GiTie } from '@react-icons/all-files/gi/GiTie';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <div>
      <div className="items-center justify-center w-32 h-32 mx-auto overflow-hidden rounded-full ">
        <Image
          width={128}
          height={128}
          objectFit="cover"
          layout="intrinsic"
          alt="profile avatar"
          src="/images/profile.png"
        />
      </div>

      <h1 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue-600 ">Avinash</span> Aryan
      </h1>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        React, React Native Developer
      </p>
      <a
        href="/CV_Avinash_APR_2023.pdf"
        download="CV_Avinash.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" /> <span>Download Resume[Aug 2022]</span>
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-600 md:w-full">
        <a href="https://twitter.com/avi_aryan_">
          <AiOutlineTwitter className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/aviaryan77">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/avinash-aryan/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="items-center justify-center py-4 my-5 -mx-4 bg-gray-200 dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span>Patna, India</span>
        </div>
        <p
          onClick={() => window.open('mailto:aviaryan77@gmail.com')}
          className="my-2 "
        >
          aviaryan77@gmail.com
        </p>
        <p onClick={() => window.open('tel:+919431210691')} className="my-2">
          +91 9431210691
        </p>
      </div>
      <div>
        <button
          onClick={() => window.open('mailto:aviaryan77@gmail.com')}
          className="w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        >
          Email Me
        </button>
        <button
          onClick={changeTheme}
          className="w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
