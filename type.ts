export type Category =
  | 'react'
  | 'node'
  | 'express'
  | 'mongo'
  | 'next js'
  | 'mobile-app'
  | 'web-app'
  | 'react-native';

export interface ILink {
  label: string;
  href: string;
}

export interface IDetailSection {
  title: string;
  items: string[];
}

export interface IProject {
  id: string;
  name: string;
  /** One line shown on archive cards */
  summary: string;
  /** Longer text shown in the project details dialog */
  description?: string[];
  highlights?: string[];
  sections?: IDetailSection[];
  quotes?: string[];
  role?: string;
  period?: string;
  featuredImage: string;
  imageArray: string[];
  /** 'phone' images are tall app screens, 'wide' are website screenshots */
  imageShape: 'phone' | 'wide';
  links: ILink[];
  category: Category[];
  key_techs: string[];
}

export interface IExperience {
  company: string;
  title?: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  projectIds?: string[];
}

export interface IStat {
  value: string;
  label: string;
}

export interface ISkillGroup {
  title: string;
  items: string[];
}
