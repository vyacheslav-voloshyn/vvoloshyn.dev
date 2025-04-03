import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vyacheslav Voloshyn. All rights reserved.
          </div>
          <nav className="flex gap-6">
            <Link
              href="https://github.com/slava-voloshyn"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/vyacheslav-voloshyn-74ab3b194/"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:vyacheslav.voloshyn@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Email
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
