'use client';

import React, { useState } from 'react';

import Editor from '../ui/Editor';
import FileExplorer from '../ui/FileExplorer';
import TabBar from '../ui/TabBar';
import Terminal from '../ui/Terminal';

interface Tab {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
}

const IDE: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleFileSelect = (path: string) => {
    const fileName = path.split('/').pop() || '';

    // Add new tab if it doesn't exist
    if (!tabs.find((tab) => tab.path === path)) {
      const newTab: Tab = {
        id: Math.random().toString(36).substr(2, 9),
        name: fileName,
        path,
        isActive: true,
      };

      setTabs((prev) => prev.map((tab) => ({ ...tab, isActive: false })).concat(newTab));
      setActiveTab(newTab.id);
    } else {
      // Activate existing tab
      setTabs((prev) =>
        prev.map((tab) => ({
          ...tab,
          isActive: tab.path === path,
        }))
      );
      setActiveTab(tabs.find((tab) => tab.path === path)?.id || null);
    }
  };

  const closeTab = (tabId: string) => {
    setTabs((prev) => {
      const newTabs = prev.filter((tab) => tab.id !== tabId);
      if (activeTab === tabId && newTabs.length > 0) {
        setActiveTab(newTabs[0].id);
      } else if (newTabs.length === 0) {
        setActiveTab(null);
      }
      return newTabs;
    });
  };

  const activateTab = (tabId: string) => {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === tabId,
      }))
    );
    setActiveTab(tabId);
  };

  return (
    <div className="flex h-screen flex-col bg-[#1e1e1e] text-[#d4d4d4]">
      {/* Top Bar */}
      <div className="flex h-8 items-center border-b border-[#3d3d3d] bg-[#2d2d2d] px-4">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* File Explorer */}
        <div className="w-64 border-r border-[#3d3d3d] bg-[#252526]">
          <FileExplorer onFileSelect={handleFileSelect} />
        </div>

        {/* Editor Area */}
        <div className="flex flex-1 flex-col">
          <TabBar tabs={tabs} onTabClose={closeTab} onTabActivate={activateTab} />
          <div className="flex-1 overflow-auto">
            {activeTab && (
              <Editor
                filePath={tabs.find((tab) => tab.id === activeTab)?.path}
                language={
                  tabs.find((tab) => tab.id === activeTab)?.path?.endsWith('.md')
                    ? 'markdown'
                    : tabs.find((tab) => tab.id === activeTab)?.path?.endsWith('.json')
                      ? 'json'
                      : 'text'
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="h-64 border-t border-[#3d3d3d] bg-[#1e1e1e]">
        <Terminal />
      </div>
    </div>
  );
};

export default IDE;
