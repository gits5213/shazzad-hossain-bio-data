'use client';

import React from 'react';
import { useTabsContext } from './Tabs';

interface TabPanelProps {
  tabId: string;
  children: React.ReactNode;
}

export default function TabPanel({ tabId, children }: TabPanelProps) {
  const { activeTab } = useTabsContext();
  
  if (activeTab !== tabId) {
    return null;
  }
  
  return <>{children}</>;
}
