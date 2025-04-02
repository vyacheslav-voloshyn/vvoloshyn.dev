import {
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiPhp,
  SiSymfony,
  SiDocker,
  SiRabbitmq,
  SiGraphql,
  SiAmazon,
  SiVite,
  SiStrapi,
  SiServerless,
} from 'react-icons/si';
import { TbBrandRust } from 'react-icons/tb';

import { Project, TechIcons } from './types';

export const techIcons: TechIcons = {
  'Next.js': SiNextdotjs,
  Prisma: SiPrisma,
  'React Query': SiReact,
  zustand: TbBrandRust,
  Tailwind: SiTailwindcss,
  Strapi: SiStrapi,
  React: SiReact,
  Vite: SiVite,
  Serverless: SiServerless,
  'styled-components': SiReact,
  AWS: SiAmazon,
  Lambda: SiAmazon,
  GraphQL: SiGraphql,
  PHP: SiPhp,
  Symphony: SiSymfony,
  Docker: SiDocker,
  Rabbit: SiRabbitmq,
};

export const projects: Project[] = [
  {
    title: 'Pujdu.cz',
    description:
      'A scheduling tool for coordinating meetings and managing availability between people.',
    technologies: ['Next.js', 'Prisma', 'React Query', 'zustand', 'Tailwind'],
    image: '/projects/pujdu.png',
    demo: 'https://pujdu.cz',
  },
  {
    title: 'Centrum Vyber',
    description:
      'News aggregator that collects content from Economia media house publications for registered users.',
    technologies: ['Next.js', 'Strapi', 'Tailwind'],
    image: '/projects/vyber.png',
    demo: 'https://vyber.centrum.cz',
  },
  {
    title: 'Elections Infographics',
    description:
      'Visual representations of election data to present electoral information and results.',
    technologies: ['React', 'Vite', 'React Query', 'Serverless'],
    image: '/projects/elections.png',
    demo: 'https://zpravy.aktualne.cz/domaci/parlamentni-volby-2021-vysledky/r~fe2b3768280211eca7d3ac1f6b220ee8/',
  },
  {
    title: 'Live Sports Stats',
    description:
      'Real-time sports statistics dashboard displaying live match data, scores, and player statistics for football matches.',
    technologies: ['React', 'styled-components', 'Vite', 'AWS', 'Lambda', 'React Query'],
    image: '/projects/sport.png',
    demo: 'https://sport.aktualne.cz/kvalifikace-ms-ve-fotbale-zive-cesko-faerske-ostrovy/r~9ca10e4c031811f0b589ac1f6b220ee8/',
  },
  {
    title: 'Discussions',
    description:
      'A modern commenting system with real-time updates, sorting capabilities, and nested replies support.',
    technologies: ['React', 'React Query', 'GraphQL', 'styled-components'],
    image: '/projects/discussions.png',
  },
  {
    title: 'Cool Credit',
    description:
      'Non-banking online loan service platform offering flexible financial solutions with quick approval process.',
    technologies: ['PHP', 'Symphony', 'Docker', 'Rabbit', 'React'],
    image: '/projects/cool-credit.png',
    demo: 'https://cool-credit.cz',
  },
];
