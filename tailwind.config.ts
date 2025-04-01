import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ide-bg': '#1e1e1e',
        'ide-sidebar': '#252526',
        'ide-border': '#3d3d3d',
        'ide-text': '#d4d4d4',
        'ide-line-number': '#858585',
        'terminal-green': '#00ff00',
      },
      fontFamily: {
        mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        typing: 'typing 3.5s steps(40, end)',
        blink: 'blink .75s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00ff00' },
        },
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-invert-body)',
            '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
            '--tw-prose-links': 'var(--tw-prose-invert-links)',
            '--tw-prose-lists': 'var(--tw-prose-invert-lists)',
            '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
            '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
            '--tw-prose-code': 'var(--tw-prose-invert-code)',
            '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
            '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
            '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
            '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
            color: 'var(--tw-prose-invert-body)',
            a: { color: 'var(--tw-prose-invert-links)' },
            strong: { color: 'var(--tw-prose-invert-headings)' },
            'ol > li::marker': { color: 'var(--tw-prose-invert-counters)' },
            'ul > li::marker': { color: 'var(--tw-prose-invert-bullets)' },
            hr: { borderColor: 'var(--tw-prose-invert-hr)' },
            blockquote: { borderColor: 'var(--tw-prose-invert-quote-borders)' },
            h1: { color: 'var(--tw-prose-invert-headings)' },
            h2: { color: 'var(--tw-prose-invert-headings)' },
            h3: { color: 'var(--tw-prose-invert-headings)' },
            h4: { color: 'var(--tw-prose-invert-headings)' },
            'figure figcaption': { color: 'var(--tw-prose-invert-captions)' },
            code: { color: 'var(--tw-prose-invert-code)' },
            'pre code': { color: 'var(--tw-prose-invert-pre-code)' },
            pre: {
              color: 'var(--tw-prose-invert-pre-code)',
              backgroundColor: 'var(--tw-prose-invert-pre-bg)',
              borderColor: 'var(--tw-prose-invert-pre-border)',
            },
          },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
};

export default config;
