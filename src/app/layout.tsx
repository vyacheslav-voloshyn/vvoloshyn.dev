import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vvoloshyn.dev'),
  title: 'Vyacheslav Voloshyn | Fullstack Developer',
  description:
    'Passionate software developer based in Prague, Czech Republic. Specialized in TypeScript, React, Next.js, PHP, and Symfony development.',
  keywords: [
    'Fullstack Developer',
    'Software Engineer',
    'TypeScript',
    'React',
    'Next.js',
    'PHP',
    'Symfony',
    'Prague',
  ],
  authors: [{ name: 'Vyacheslav Voloshyn' }],
  creator: 'Vyacheslav Voloshyn',
  publisher: 'Vyacheslav Voloshyn',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vvoloshyn.dev',
    siteName: 'Vyacheslav Voloshyn Portfolio',
    title: 'Vyacheslav Voloshyn | Fullstack Developer',
    description:
      'Passionate software developer based in Prague, Czech Republic. Specialized in TypeScript, React, Next.js, PHP, and Symfony development.',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Vyacheslav Voloshyn',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-[rgb(0_0_0/var(--tw-bg-opacity,1))] text-gray-100`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
