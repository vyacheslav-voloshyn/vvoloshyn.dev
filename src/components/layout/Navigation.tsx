'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import { ThemeSwitcher } from '../ThemeSwitcher';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Experience', path: '/experience' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative w-full backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <span className="hidden sm:inline">Vyacheslav Voloshyn</span>
              <span className="sm:hidden">V.V.</span>
            </Link>

            <div className="hidden md:flex md:space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className="group relative">
                  <span className="text-sm font-medium">{item.name}</span>
                  {pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                  )}
                </Link>
              ))}
              <ThemeSwitcher />
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              <ThemeSwitcher />
              <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col overflow-y-auto bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">V.V.</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <HiX className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto px-4 py-8">
            <div className="mb-8 flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-2xl font-medium transition-colors ${
                    pathname === item.path ? 'text-blue-500' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-blue-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-blue-600"
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
