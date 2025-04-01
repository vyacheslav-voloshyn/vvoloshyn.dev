export default function SkillsSection() {
  const skills = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML/CSS'],
    Backend: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs'],
    Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'],
    DevOps: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Vercel'],
    Tools: ['Git', 'VS Code', 'Figma', 'Jest', 'Storybook'],
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The technologies, tools, and frameworks I work with
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, technologies]) => (
            <div key={category} className="rounded-lg border border-border p-6">
              <h3 className="mb-4 text-xl font-bold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="rounded-md bg-secondary px-2.5 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
