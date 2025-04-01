import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment processing, user authentication, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "Dashboard Application",
      description: "An analytics dashboard with real-time data visualization, user permissions, and reporting features.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Network",
      description: "A community platform with user profiles, messaging, content sharing, and notifications.",
      technologies: ["React", "GraphQL", "PostgreSQL", "Redis"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Some of my recent work and personal projects
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
                <Button variant="primary" size="sm">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
