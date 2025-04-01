import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A passionate developer with a focus on creating exceptional digital experiences
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I&apos;m a full stack developer with over 5 years of experience building web applications. 
                I specialize in React, TypeScript, and modern backend technologies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I believe in writing clean, maintainable code and applying best practices. 
                My focus is on creating responsive, accessible, and performant applications.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I&apos;m passionate about continuous learning and staying up-to-date with the latest technologies. 
                I enjoy solving complex problems and creating elegant solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 
