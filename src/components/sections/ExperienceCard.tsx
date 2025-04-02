import Image from 'next/image';
import { IconType } from 'react-icons';
import { BiBarChartAlt } from 'react-icons/bi';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiAmazon,
  SiPhp,
  SiSymfony,
  SiJavascript,
  SiGoogle,
  SiPython,
  SiMysql,
} from 'react-icons/si';

interface Technology {
  name: string;
  icon: string;
}

interface ExperienceCardProps {
  company: string;
  logo: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  employmentType?: string;
  technologies?: Technology[];
}

const iconMap: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  zustand: SiRedux,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  aws: SiAmazon,
  php: SiPhp,
  symfony: SiSymfony,
  javascript: SiJavascript,
  google: SiGoogle,
  python: SiPython,
  sql: SiMysql,
  chart: BiBarChartAlt,
};

export default function ExperienceCard({
  company,
  logo,
  position,
  duration,
  location,
  description,
  employmentType,
  technologies = [],
}: ExperienceCardProps) {
  return (
    <div className="border-border group rounded-xl border bg-card/50 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-card hover:shadow-lg dark:shadow-secondary/10 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={logo}
            alt={company}
            fill
            className="rounded-lg object-contain dark:brightness-90"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                {position}
              </h3>
              <p className="text-sm text-muted-foreground transition-colors sm:text-base">
                {company}
                {employmentType && ` • ${employmentType}`}
              </p>
            </div>
            <span className="text-xs text-muted-foreground transition-colors sm:text-sm">
              {duration}
            </span>
          </div>
          <p className="text-sm text-muted-foreground transition-colors sm:text-base">{location}</p>
          <p className="text-sm text-muted-foreground transition-colors sm:text-base">
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const IconComponent = iconMap[tech.icon];
                return IconComponent ? (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1 rounded-md bg-secondary/50 px-2 py-1 text-xs text-secondary-foreground backdrop-blur-sm transition-all hover:bg-secondary/80 dark:bg-secondary/30 dark:hover:bg-secondary/50"
                    title={tech.name}
                  >
                    <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">{tech.name}</span>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
