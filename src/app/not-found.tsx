import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="max-w-md text-gray-600 dark:text-gray-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or
        doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Return Home
      </Link>
    </div>
  );
}
