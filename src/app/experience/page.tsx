import Navigation from '@/components/layout/Navigation';
import Experience from '@/components/sections/Experience';

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <h1 className="mb-12 text-4xl font-bold ">Work Experience</h1>
          <Experience />
        </div>
      </main>
    </>
  );
}
