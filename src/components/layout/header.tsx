import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="border-border/40 bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">Dev</span>Portfolio
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#contact">
            <Button variant="primary" size="sm">
              Contact
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
