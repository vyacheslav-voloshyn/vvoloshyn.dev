import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';

import { TechnologyBadge } from './TechnologyBadge';
import { ProjectCardProps } from './types';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} tech={tech} />
          ))}
        </div>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Visit Site
            <BiLinkExternal className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};
