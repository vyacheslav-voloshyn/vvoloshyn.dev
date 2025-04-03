import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import { ThemeProvider } from '@/lib/theme';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Slava Vvoloshyn',
  description: 'Personal website of Slava Vvoloshyn - Web Developer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100`}
      >
        <ThemeProvider>
          <div className="mx-auto max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="content-box flex flex-col">{children}</div>
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
