import { ProjectCard } from './ProjectCard';
import { ProjectGridProps } from './types';

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};
