import { IconType } from '@react-icons/all-files';

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: string;
  featuredImage: string;
  name: string;
  description: string;
  imageArray: string[];
  deployed_url: string | null;
  github_url: string | null;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | 'react'
  | 'node'
  | 'express'
  | 'mongo'
  | 'next'
  | 'mobile-app'
  | 'web-app'
  | 'react-native';
