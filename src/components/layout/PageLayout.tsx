import { ReactNode } from 'react';

import Navigation from './Navigation';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="heading-gradient">{title}</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
