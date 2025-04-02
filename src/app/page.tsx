'use client';

import Navigation from '@/components/layout/Navigation';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Hero />
        <Experience />
      </main>
    </>
  );
}
