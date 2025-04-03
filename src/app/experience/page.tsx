import Navigation from '@/components/layout/Navigation';

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <section>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="heading-gradient">Experience</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            My professional journey in web development, including roles, projects, and achievements.
          </p>

          <div className="mt-12 space-y-12">
            <div className="relative border-l border-gray-200 pl-8 dark:border-gray-800">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <span className="h-3 w-3 rounded-full bg-white" />
              </div>
              <time className="mb-2 block text-sm font-medium text-muted-foreground">
                2021 - Present
              </time>
              <h3 className="text-xl font-semibold">Senior Web Developer</h3>
              <p className="mb-2 text-muted-foreground">Company Name</p>
              <p className="text-base text-muted-foreground">
                Led the development of multiple web applications using React, Next.js, and Node.js.
                Implemented modern UI designs, optimized performance, and mentored junior
                developers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  React
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Next.js
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Node.js
                </span>
              </div>
            </div>

            <div className="relative border-l border-gray-200 pl-8 dark:border-gray-800">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <span className="h-3 w-3 rounded-full bg-white" />
              </div>
              <time className="mb-2 block text-sm font-medium text-muted-foreground">
                2019 - 2021
              </time>
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="mb-2 text-muted-foreground">Previous Company</p>
              <p className="text-base text-muted-foreground">
                Developed and maintained web applications for various clients. Collaborated with
                designers to implement responsive web designs and ensure optimal user experience.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  JavaScript
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  CSS
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  HTML
                </span>
              </div>
            </div>

            <div className="relative border-l border-gray-200 pl-8 dark:border-gray-800">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <span className="h-3 w-3 rounded-full bg-white" />
              </div>
              <time className="mb-2 block text-sm font-medium text-muted-foreground">
                2017 - 2019
              </time>
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <p className="mb-2 text-muted-foreground">First Company</p>
              <p className="text-base text-muted-foreground">
                Started my career as a junior developer working on web applications. Gained
                experience in front-end technologies and agile development practices.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  jQuery
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Bootstrap
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  PHP
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            <div className="relative border-l border-gray-200 pl-8 dark:border-gray-800">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <span className="h-3 w-3 rounded-full bg-white" />
              </div>
              <time className="mb-2 block text-sm font-medium text-muted-foreground">
                2013 - 2017
              </time>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University Name</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
