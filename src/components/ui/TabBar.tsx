'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface Tab {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
}

interface TabBarProps {
  tabs: Tab[];
  onTabClose: (_tabId: string) => void;
  onTabActivate: (_tabId: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, onTabClose, onTabActivate }) => {
  return (
    <div className="flex items-center border-b border-[#3d3d3d] bg-[#252526]">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`
            flex items-center border-r border-[#3d3d3d] px-4 py-2
            ${tab.isActive ? 'bg-[#1e1e1e]' : 'bg-[#2d2d2d] hover:bg-[#2a2d2e]'}
            cursor-pointer
          `}
          onClick={() => onTabActivate(tab.id)}
        >
          <span className="text-sm">{tab.name}</span>
          <button
            className="ml-2 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(tab.id);
            }}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
