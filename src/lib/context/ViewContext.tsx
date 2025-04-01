import React, { createContext, useContext, useEffect, useState } from 'react';

type ViewMode = 'portfolio' | 'ide';

interface ViewContextType {
  viewMode: ViewMode;
  toggleView: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    // Check localStorage first, then URL params, default to 'portfolio'
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('viewMode') as ViewMode;
      if (stored) return stored;

      const params = new URLSearchParams(window.location.search);
      const urlMode = params.get('mode') as ViewMode;
      if (urlMode && (urlMode === 'portfolio' || urlMode === 'ide')) {
        return urlMode;
      }
    }
    return 'portfolio';
  });

  useEffect(() => {
    // Update localStorage and URL when view mode changes
    localStorage.setItem('viewMode', viewMode);
    const params = new URLSearchParams(window.location.search);
    params.set('mode', viewMode);
    window.history.replaceState({}, '', `?${params.toString()}`);
  }, [viewMode]);

  const toggleView = () => {
    setViewMode((prev) => (prev === 'portfolio' ? 'ide' : 'portfolio'));
  };

  return <ViewContext.Provider value={{ viewMode, toggleView }}>{children}</ViewContext.Provider>;
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};
