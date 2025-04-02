'use client';

import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Hero />
      </main>
    </>
  );
}
