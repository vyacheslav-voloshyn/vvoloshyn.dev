'use client';

import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  icon?: string;
  children?: FileItem[];
  path?: string;
}

interface FileExplorerProps {
  onFileSelect?: (_path: string) => void;
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

const FileExplorer: React.FC<FileExplorerProps> = ({ onFileSelect }) => {
  const [expandedFolders, setExpandedFolders] = React.useState<Set<string>>(new Set(['/']));
  const [selectedFile, setSelectedFile] = React.useState<string>('');

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const handleFileClick = (path: string) => {
    setSelectedFile(path);
    onFileSelect?.(path);
  };

  const renderFileItem = (item: FileItem, level: number = 0) => {
    const paddingLeft = `${level * 1.5}rem`;
    const isExpanded = expandedFolders.has(item.path || '');
    const isSelected = selectedFile === item.path;

    return (
      <div key={item.path}>
        <div
          className={`
            flex cursor-pointer items-center px-2 py-1
            ${isSelected ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'}
          `}
          style={{ paddingLeft }}
          onClick={() => {
            if (item.type === 'folder') {
              toggleFolder(item.path || '');
            } else {
              handleFileClick(item.path || '');
            }
          }}
        >
          {item.type === 'folder' ? (
            <FolderIcon
              className={`mr-1 h-4 w-4 text-[#c5c5c5] ${isExpanded ? 'text-[#00ff00]' : ''}`}
            />
          ) : (
            <DocumentIcon className="mr-1 h-4 w-4 text-[#c5c5c5]" />
          )}
          <span className="text-sm">{item.name}</span>
        </div>
        {item.children &&
          isExpanded &&
          item.children.map((child) => renderFileItem(child, level + 1))}
      </div>
    );
  };

  return (
    <div className="p-2">
      <div className="mb-2 text-xs text-[#858585]">EXPLORER</div>
      {fileSystem.map((item) => renderFileItem(item))}
    </div>
  );
};

export default FileExplorer;
