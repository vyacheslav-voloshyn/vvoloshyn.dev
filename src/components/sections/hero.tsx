import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-primary">Full Stack</span> Developer
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Building beautiful, functional, and responsive web applications with modern
              technologies.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/#projects">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
