import { ExperienceType } from './Experience';

export default function ExperienceCard({
  company,
  position,
  duration,
  description,
  technologies = [],
}: ExperienceType) {
  return (
    <div key={company} className="relative border-l border-gray-200 pl-8 dark:border-gray-800">
      <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
        <span className="h-3 w-3 rounded-full bg-white" />
      </div>
      <time className="mb-2 block text-sm font-medium text-muted-foreground">{duration}</time>
      <h3 className="text-xl font-semibold">{position}</h3>
      <p className="mb-2 text-muted-foreground">{company}</p>
      <p className="text-base text-muted-foreground">{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {tech.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
