'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import IDE from '@/components/layout/IDE';
import Portfolio from '@/components/sections/Portfolio';
import ViewToggle from '@/components/ui/ViewToggle';
import { ViewProvider } from '@/lib/context/ViewContext';
import { useView } from '@/lib/context/ViewContext';

const MainContent = () => {
  const { viewMode } = useView();

  return (
    <AnimatePresence mode="wait">
      {viewMode === 'portfolio' ? (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Portfolio />
        </motion.div>
      ) : (
        <motion.div
          key="ide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <IDE />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  return (
    <ViewProvider>
      <main className="min-h-screen bg-background text-foreground">
        <ViewToggle />
        <MainContent />
      </main>
    </ViewProvider>
  );
}
