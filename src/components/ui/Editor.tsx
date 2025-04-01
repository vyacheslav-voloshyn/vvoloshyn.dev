'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { projects, skills, about, contact } from '@/lib/content';

interface EditorProps {
  content?: string;
  language?: 'markdown' | 'json' | 'text';
  filePath?: string;
  onFileOpen?: (_path: string) => void;
}

const Editor: React.FC<EditorProps> = ({ filePath, language = 'text', onFileOpen }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const handleFileOpen = (event: CustomEvent) => {
      onFileOpen?.(event.detail.path);
    };

    window.addEventListener('fileOpen', handleFileOpen as EventListener);
    return () => {
      window.removeEventListener('fileOpen', handleFileOpen as EventListener);
    };
  }, [onFileOpen]);

  const getContent = () => {
    switch (filePath) {
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

  useEffect(() => {
    setContent(getContent());
  }, [filePath]);

  const getLineNumbers = () => {
    if (!content) {
      return [1];
    }

    const lines = content.split('\n');
    return Array.from({ length: Math.max(lines.length, 1) }, (_, i) => i + 1);
  };

  console.log(language);

  const renderContent = () => {
    switch (language) {
      case 'markdown':
        return (
          <div className="prose prose-invert prose-headings:text-[#d4d4d4] prose-p:text-[#d4d4d4] prose-li:text-[#d4d4d4] prose-strong:text-[#d4d4d4] max-w-none px-2">
            <div className="markdown-content">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="mb-4 text-xl font-bold">{children}</h1>,
                  h2: ({ children }) => (
                    <h2 className="text-l mb-3 mt-4 font-semibold">{children}</h2>
                  ),
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  ul: ({ children }) => <ul className="mb-4 list-disc pl-6">{children}</ul>,
                  li: ({ children }) => <li className="mb-2">{children}</li>,
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        );
      case 'json':
        try {
          const formattedJson = JSON.stringify(JSON.parse(content), null, 2);
          return <pre className="whitespace-pre text-[#d4d4d4]">{formattedJson}</pre>;
        } catch {
          return <pre className="whitespace-pre text-[#d4d4d4]">{content}</pre>;
        }
      default:
        return <pre className="whitespace-pre text-[#d4d4d4]">{content}</pre>;
    }
  };

  console.log(renderContent());

  return (
    <div className="flex h-full">
      <div className="w-12 select-none bg-[#1e1e1e] pr-2 pt-4 text-right text-[#858585]">
        {getLineNumbers().map((num) => (
          <div key={num} className="text-xs leading-6">
            {num}
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-auto p-4">{renderContent()}</div>
    </div>
  );
};

export default Editor;
