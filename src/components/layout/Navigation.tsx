'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import { ThemeSwitcher } from '../ThemeSwitcher';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="mb-8 w-full border-b border-gray-200 pb-4 dark:border-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">V.</span>Voloshyn
            </Link>
          </motion.div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={item.path}
                  className={`group relative text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 ${
                      pathname === item.path ? 'w-full' : 'group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <ThemeSwitcher />
            </motion.div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeSwitcher />
            <motion.button
              className="rounded-full p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary">V.</span> Voloshyn
                  </Link>
                </motion.div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full bg-white p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiX className="h-6 w-6 text-black" />
                </motion.button>
              </div>
            </div>

            <div className="flex flex-1 flex-col px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => {
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                        href={item.path}
                        className={`text-2xl font-medium text-gray-900 transition-colors hover:text-primary dark:text-gray-100 dark:hover:text-primary`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-primary px-6 py-3 text-center font-medium text-white transition-colors hover:bg-primary/90"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
