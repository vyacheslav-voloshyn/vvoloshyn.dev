import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-2xl">
          <span className="text-primary">Dev</span>Portfolio
        </Link>
        <nav className="ml-auto flex gap-4 items-center">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#contact">
            <Button variant="primary" size="sm">Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
} 
