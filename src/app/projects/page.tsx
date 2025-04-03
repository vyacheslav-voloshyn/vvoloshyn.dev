'use client';

import Navigation from '@/components/layout/Navigation';
import { projects } from '@/components/projects/constants';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="heading-gradient">Projects</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              A collection of projects I&apos;ve worked on, showcasing my skills and expertise in
              web development.
            </p>
          </div>
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
