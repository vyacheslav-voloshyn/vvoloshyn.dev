import { experiences } from '@/components/sections/constants';
import ExperienceCard from '@/components/sections/ExperienceCard';

export default function Experience() {
  return (
    <div className="mt-12 space-y-12">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} {...experience} />
      ))}
    </div>
  );
}
