import React from 'react';

import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube';
import { GoLocation } from '@react-icons/all-files/go/GoLocation';
import { GiTie } from '@react-icons/all-files/gi/GiTie';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <div>
      {/* <img
        src="/images/profile.png"
        alt="profile avatar"
        className="w-32 h-32 mx-auto border rounded-full"
      /> */}
      <div className="items-center justify-center w-32 h-32 mx-auto border rounded-full ">
        <Image
          src="/images/profile.png"
          alt="profile avatar"
          objectFit="cover"
          width={128}
          height={128}
          layout="intrinsic"
        />
      </div>

      <h1 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Avinash</span> Aryan
      </h1>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        React, React Native Developer
      </p>
      <a
        href="/assets/Avinash Aryan Resume.pdf"
        download="Avinash Aryan Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" /> <span>Download Resume</span>
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="items-center justify-center py-4 my-5 -mx-4 bg-gray-200 dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span>Patna, India</span>
        </div>
        <p className="my-2 ">aviaryan77@gmail.com</p>
        <p className="my-2">9431210691</p>
      </div>
      <div>
        <button className="w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400">
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
