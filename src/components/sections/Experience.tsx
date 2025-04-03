import ExperienceCard from '@/components/sections/ExperienceCard';

export interface ExperienceType {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  employmentType?: string;
  technologies?: Technology[];
}

interface Technology {
  name: string;
  icon: string;
}

const experiences: ExperienceType[] = [
  {
    company: 'Economia, a.s.',
    position: 'React + TypeScript Developer',
    duration: 'Mar 2022 - Present',
    location: 'Prague, Czech Republic',
    employmentType: 'Full-time',
    description:
      'Contributed to TypeScript projects using React, NextJS, Redux, Zustand, Tailwind, and Styled Components. Worked on both front-end and back-end with NodeJS. Implemented AWS infrastructure and conducted unit tests.',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'NodeJS', icon: 'nodejs' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'React Query', icon: 'react-query' },
    ],
  },
  {
    company: 'COOL CREDIT',
    position: 'PHP/React Developer',
    duration: 'Jul 2020 - Mar 2022',
    location: 'Prague, Czech Republic',
    description:
      'Worked with PHP + Symfony, Doctrine, Webpack, and Twig. Implemented Google API integrations. Developed internal libraries for API communication with banks, SMS gateways, and payment systems.',
    technologies: [
      { name: 'PHP', icon: 'php' },
      { name: 'Symfony', icon: 'symfony' },
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Google API', icon: 'google' },
    ],
  },
  {
    company: 'Jumpshot Inc',
    position: 'Data Analytic',
    duration: 'Jun 2019 - Jul 2020',
    location: 'Prague, Czech Republic',
    description: 'Analyzed user behavior data, compiled reports, and presented analysis results.',
    technologies: [
      { name: 'Data Analysis', icon: 'chart' },
      { name: 'SQL', icon: 'sql' },
      { name: 'Python', icon: 'python' },
    ],
  },
];

export default function Experience() {
  return (
    <div className="mt-12 space-y-12">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} {...experience} />
      ))}
    </div>
  );
}
