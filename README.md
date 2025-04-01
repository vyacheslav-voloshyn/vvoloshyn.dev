# Vyacheslav Voloshyn's Portfolio

An interactive portfolio website built with Next.js, React, and TypeScript, designed to look and feel like a modern IDE.

## Features

- 🎨 IDE-like interface with file explorer, tabs, and terminal
- ⌨️ Interactive terminal with custom commands
- 📝 Syntax highlighting for different file types
- ✨ Smooth animations and transitions
- 🎮 Easter eggs and fun interactions
- 🌙 Dark theme with neon accents

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vvoloshyn.dev.git
cd vvoloshyn.dev
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Terminal Commands

- `help` - Show available commands
- `ls` - List available sections
- `cd <section>` - Navigate to a section
- `open <project>` - Show project details
- `contact` - Display contact information
- `clear` - Clear terminal
- `sudo` - Try to get admin rights (just for fun)

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── layout/      # Layout components
│   └── ui/          # UI components
└── lib/             # Utilities and content
```

## Technologies Used

- Next.js 14
- React 19
- TypeScript
- TailwindCSS
- Heroicons

## Customization

1. Update content in `src/lib/content.ts`
2. Modify styles in `src/app/globals.css`
3. Add new components in `src/components`
4. Update terminal commands in `src/components/ui/Terminal.tsx`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
