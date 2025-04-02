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
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
};

export default config;
