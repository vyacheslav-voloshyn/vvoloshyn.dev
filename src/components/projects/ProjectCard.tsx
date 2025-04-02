import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';

import { TechnologyBadge } from './TechnologyBadge';
import { ProjectCardProps } from './types';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border-border group relative overflow-hidden rounded-xl border bg-card shadow-lg transition-all duration-300 hover:shadow-2xl">
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
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
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
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            Visit Site
            <BiLinkExternal className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};
