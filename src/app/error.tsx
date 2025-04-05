'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">500</h1>
      <h2 className="text-2xl font-semibold">Something went wrong!</h2>
      <p className="max-w-md text-gray-600 dark:text-gray-400">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
