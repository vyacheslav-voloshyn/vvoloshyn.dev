'use client';

import PageLayout from '@/components/layout/PageLayout';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';

export default function ExperiencePage() {
  return (
    <PageLayout
      title="Experience"
      description="My professional journey in web development, including roles, projects, and achievements."
    >
      <div className="space-y-12">
        <Experience />
        <Education />
      </div>
    </PageLayout>
  );
}
