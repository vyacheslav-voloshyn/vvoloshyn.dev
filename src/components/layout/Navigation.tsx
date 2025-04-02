'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import { ThemeSwitcher } from '../ThemeSwitcher';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-sm">
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

        {isOpen && (
          <div className="absolute left-0 right-0 top-16 p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium ${pathname === item.path ? 'text-blue-500' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
