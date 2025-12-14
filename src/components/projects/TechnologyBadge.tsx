import { techIcons } from './constants';
import { TechnologyBadgeProps } from './types';

export const TechnologyBadge = ({ tech }: TechnologyBadgeProps) => {
  const IconComponent = techIcons[tech];

  return (
    <div
      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1.5 rounded-full px-3 py-1 text-sm transition-colors"
      title={tech}
    >
      {IconComponent && <IconComponent className="h-4 w-4" />}
      <span>{tech}</span>
    </div>
  );
};
