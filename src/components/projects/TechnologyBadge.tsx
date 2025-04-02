import { techIcons } from './constants';
import { TechnologyBadgeProps } from './types';

export const TechnologyBadge = ({ tech }: TechnologyBadgeProps) => {
  const IconComponent = techIcons[tech];

  return (
    <div
      className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      title={tech}
    >
      {IconComponent && <IconComponent className="h-4 w-4" />}
      <span>{tech}</span>
    </div>
  );
};
