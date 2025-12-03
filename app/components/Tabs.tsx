'use client';

import React, { createContext, useContext, useState, Children, isValidElement } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface TabsContextType {
  activeTab: string;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  tabs: Tab[];
  children: React.ReactNode;
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <TabsContext.Provider value={{ activeTab }}>
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3.5 font-semibold text-sm md:text-base transition-all duration-300 rounded-xl
                relative overflow-hidden group
                ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-lg shadow-rose-300/50 scale-105'
                    : 'bg-white/70 text-gray-700 hover:bg-white hover:text-rose-600 hover:shadow-md border border-rose-200/50'
                }
              `}
            >
              <span className="flex items-center gap-2 relative z-10">
                {tab.icon && <span className="text-lg">{tab.icon}</span>}
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabPanel must be used within Tabs');
  }
  return context;
}
