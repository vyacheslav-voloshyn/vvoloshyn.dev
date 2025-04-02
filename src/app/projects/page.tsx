import Navigation from '@/components/layout/Navigation';
import { projects } from '@/components/projects/constants';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <h1 className="mb-12 text-4xl font-bold ">My Projects</h1>
          <ProjectGrid projects={projects} />
        </div>
      </main>
    </>
  );
}
