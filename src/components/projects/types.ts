import { IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demo?: string;
}

export interface TechnologyBadgeProps {
  tech: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectGridProps {
  projects: Project[];
}

export type TechIcons = Record<string, IconType>;
