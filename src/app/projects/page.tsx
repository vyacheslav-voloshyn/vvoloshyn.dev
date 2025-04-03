'use client';

import Navigation from '@/components/layout/Navigation';

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <section>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="heading-gradient">Projects</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A collection of projects I&apos;ve worked on, showcasing my skills and expertise in web
            development.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project Title</h3>
                <p className="mt-2 text-muted-foreground">
                  This is a sample project description. Replace with actual project details.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    React
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project Title</h3>
                <p className="mt-2 text-muted-foreground">
                  This is a sample project description. Replace with actual project details.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    TailwindCSS
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project Title</h3>
                <p className="mt-2 text-muted-foreground">
                  This is a sample project description. Replace with actual project details.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    Node.js
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    Express
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
