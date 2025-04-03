'use client';

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
      <nav className="mb-8 w-full border-b border-gray-200 pb-4 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-primary">V.</span>Voloshyn
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ${
                    pathname === item.path ? 'w-full' : 'group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <ThemeSwitcher />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeSwitcher />
            <button
              className="rounded-full p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-gray-900">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary">V.</span> Voloshyn
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="rounded-full bg-white p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-1 flex-col px-4 py-8">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-2xl font-medium text-gray-900 transition-colors hover:text-primary dark:text-gray-100 dark:hover:text-primary`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto">
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-primary px-6 py-3 text-center font-medium text-white transition-colors hover:bg-primary/90"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
