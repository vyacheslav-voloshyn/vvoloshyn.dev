import React, { useState, useRef, useEffect } from 'react';

import { projects, skills, about, contact } from '@/lib/content';

interface Command {
  input: string;
  output: string;
}

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  path: string;
  children?: FileItem[];
}

const fileSystem: FileItem[] = [
  {
    name: 'Vyacheslav-Voloshyn',
    type: 'folder',
    path: '/',
    children: [
      {
        name: 'projects',
        type: 'folder',
        path: '/projects',
        children: [
          { name: 'project1', type: 'file', path: '/projects/project1' },
          { name: 'project2', type: 'file', path: '/projects/project2' },
        ],
      },
      { name: 'README.md', type: 'file', path: '/README.md' },
      { name: 'skills.json', type: 'file', path: '/skills.json' },
      { name: 'contact.txt', type: 'file', path: '/contact.txt' },
    ],
  },
];

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([
    {
      input: '',
      output: `Welcome to Vyacheslav's Dev IDE
Type "help" for available commands.`,
    },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentDirectory, setCurrentDirectory] = useState('/');
  const terminalRef = useRef<HTMLDivElement>(null);

  const getFileContent = (path: string): string => {
    switch (path) {
      case '/README.md':
        return about;
      case '/skills.json':
        return JSON.stringify(skills, null, 2);
      case '/contact.txt':
        return contact;
      case '/projects/project1':
        return JSON.stringify(projects[0], null, 2);
      case '/projects/project2':
        return JSON.stringify(projects[1], null, 2);
      default:
        return '';
    }
  };

  const findFileItem = (path: string, items: FileItem[] = fileSystem): FileItem | null => {
    for (const item of items) {
      if (item.path === path) return item;
      if (item.children) {
        const found = findFileItem(path, item.children);
        if (found) return found;
      }
    }
    return null;
  };

  const handleCommand = (command: string) => {
    let output = '';
    const args = command.split(' ');
    const cmd = args[0].toLowerCase();

    switch (cmd) {
      case 'help':
        output = `Available commands:
- ls: List available sections
- cd <section>: Navigate to a section
- cat <file>: Display file contents
- open <file>: Open file in editor
- contact: Display contact information
- clear: Clear terminal
- sudo: Try to get admin rights (just for fun)
- pwd: Show current directory`;
        break;
      case 'ls':
        const currentItem = findFileItem(currentDirectory);
        if (currentItem?.children) {
          output = currentItem.children
            .map((item) => `${item.name}${item.type === 'folder' ? '/' : ''}`)
            .join('\n');
        } else {
          output = 'Directory not found';
        }
        break;
      case 'cd':
        if (args.length < 2) {
          output = 'Please specify a directory';
          break;
        }
        const targetDir = args[1].toLowerCase();
        const targetPath =
          targetDir === '..'
            ? currentDirectory.split('/').slice(0, -1).join('/') || '/'
            : `${currentDirectory}${currentDirectory === '/' ? '' : '/'}${targetDir}`;

        const targetItem = findFileItem(targetPath);
        if (targetItem?.type === 'folder') {
          setCurrentDirectory(targetPath);
          output = `Navigating to ${targetPath}...`;
        } else {
          output = `Directory not found: ${targetDir}`;
        }
        break;
      case 'cat':
        if (args.length < 2) {
          output = 'Please specify a file';
          break;
        }
        const filePath = `${currentDirectory}${currentDirectory === '/' ? '' : '/'}${args[1]}`;
        const fileContent = getFileContent(filePath);
        if (fileContent) {
          output = fileContent;
        } else {
          output = `File not found: ${args[1]}`;
        }
        break;
      case 'open':
        if (args.length < 2) {
          output = 'Please specify a file';
          break;
        }
        const openPath = `${currentDirectory}${currentDirectory === '/' ? '' : '/'}${args[1]}`;
        const fileItem = findFileItem(openPath);
        if (fileItem?.type === 'file') {
          // Trigger file open event
          const event = new CustomEvent('fileOpen', { detail: { path: openPath } });
          window.dispatchEvent(event);
          output = `Opening ${args[1]} in editor...`;
        } else {
          output = `File not found: ${args[1]}`;
        }
        break;
      case 'contact':
        output = `Contact Information:
Email: your.email@example.com
GitHub: github.com/yourusername
LinkedIn: linkedin.com/in/yourusername`;
        break;
      case 'sudo':
        output = `Nice try! But you don't have sudo rights here 😄`;
        break;
      case 'pwd':
        output = currentDirectory;
        break;
      case 'clear':
        setCommands([
          {
            input: '',
            output: `Welcome to Vyacheslav's Dev IDE
Type "help" for available commands.`,
          },
        ]);
        return;
      default:
        output = `Command not found: ${cmd}`;
    }
    return output;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      const output = handleCommand(currentInput.trim());
      if (output) {
        setCommands((prev) => [...prev, { input: currentInput, output }]);
      }
      setCurrentInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div
      className="h-full overflow-auto bg-[#1e1e1e] p-4 font-mono text-[#00ff00]"
      ref={terminalRef}
    >
      {commands.map((cmd) => (
        <div key={cmd.input} className="mb-2">
          {cmd.input && (
            <div className="flex items-center">
              <span className="mr-2 text-[#00ff00]">$</span>
              <span>{cmd.input}</span>
            </div>
          )}
          <div className="whitespace-pre-wrap">{cmd.output}</div>
        </div>
      ))}
      <div className="flex items-center">
        <span className="mr-2 text-[#00ff00]">$</span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border-none bg-transparent font-mono text-[#00ff00] outline-none"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
