import { techIcons } from './constants';
import { TechnologyBadgeProps } from './types';

export const TechnologyBadge = ({ tech }: TechnologyBadgeProps) => {
  const IconComponent = techIcons[tech];

  return (
    <div
      className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
      title={tech}
    >
      {IconComponent && <IconComponent className="h-4 w-4" />}
      <span>{tech}</span>
    </div>
  );
};
