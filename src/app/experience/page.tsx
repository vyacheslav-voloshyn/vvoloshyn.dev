import Navigation from '@/components/layout/Navigation';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="heading-gradient">Experience</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              My professional journey in web development, including roles, projects, and
              achievements.
            </p>
          </div>
          <Experience />

          <Education />
        </div>
      </section>
    </>
  );
}
