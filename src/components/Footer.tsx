import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Vyacheslav Voloshyn. All rights reserved.
          </div>
          <nav className="flex gap-4">
            <Link
              href="https://github.com/slava-voloshyn"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/vyacheslav-voloshyn-74ab3b194/"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:vyacheslav.voloshyn@gmail.com"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Email
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
