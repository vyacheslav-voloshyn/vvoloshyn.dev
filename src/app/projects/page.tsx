'use client';

import { motion } from 'framer-motion';

import Navigation from '@/components/layout/Navigation';
import { projects } from '@/components/projects/constants';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="heading-gradient">Projects</span>
            </motion.h1>
            <motion.p
              className="max-w-2xl text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A collection of projects I&apos;ve worked on, showcasing my skills and expertise in
              web development.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.5,
          }}
        >
          <ProjectGrid projects={projects} />
        </motion.div>
      </motion.section>
    </>
  );
}
