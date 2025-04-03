'use client';

import PageLayout from '@/components/layout/PageLayout';
import { projects } from '@/components/projects/constants';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      description="A collection of projects I've worked on, showcasing my skills and expertise in web development."
    >
      <ProjectGrid projects={projects} />
    </PageLayout>
  );
}
