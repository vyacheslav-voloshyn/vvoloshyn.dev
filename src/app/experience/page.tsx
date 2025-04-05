'use client';

import { motion } from 'framer-motion';

import Navigation from '@/components/layout/Navigation';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';

export default function ExperiencePage() {
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
              <span className="heading-gradient">Experience</span>
            </motion.h1>
            <motion.p
              className="max-w-2xl text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              My professional journey in web development, including roles, projects, and
              achievements.
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
          <Experience />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.7,
          }}
        >
          <Education />
        </motion.div>
      </motion.section>
    </>
  );
}
