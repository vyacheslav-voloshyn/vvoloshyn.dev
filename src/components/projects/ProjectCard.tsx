import Image from 'next/image';
import Link from 'next/link';

import { TechnologyBadge } from './TechnologyBadge';
import { ProjectCardProps } from './types';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-md transition-all hover:shadow-lg dark:border-gray-800">
      {project.demo && (
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-white dark:bg-gray-800/90 dark:text-gray-100 dark:hover:bg-gray-800"
        >
          Visit
        </Link>
      )}
      <div className="aspect-video w-full overflow-hidden">
        <div className="h-full w-full">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={225}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground mt-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};
