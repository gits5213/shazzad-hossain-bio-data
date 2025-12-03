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
        <div className="flex flex-wrap gap-2 mb-8 border-b border-rose-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 font-medium text-sm md:text-base transition-all duration-200
                border-b-2 relative
                ${
                  activeTab === tab.id
                    ? 'text-rose-700 border-rose-600 bg-rose-50/50'
                    : 'text-gray-600 border-transparent hover:text-rose-600 hover:border-rose-300'
                }
              `}
            >
              <span className="flex items-center gap-2">
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </span>
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
