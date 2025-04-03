export interface ExperienceType {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  employmentType?: string;
  technologies?: Technology[];
}

interface Technology {
  name: string;
  icon: string;
}
