'use client';

import { useState } from 'react';

import { Tab, Typography } from '@/shared/ui';

import { mockTabs } from './mock';

interface Props {
  title: string;
}

export const PageHeader = ({ title }: Props) => {
  const [currentTab, setCurrentTab] = useState(mockTabs[1]);

  return (
    <div className={'flex flex-col gap-4'}>
      <Typography className={'uppercase tracking-[-0.02em]'} as="h1" variant="h1" weight={'black'}>
        {title}
      </Typography>
      <div className={'flex gap-4 bg-white rounded-[10px] px-4 py-[18px] '}>
        {mockTabs.map((tab) => (
          <Tab
            key={tab.name}
            tabName={tab.name}
            isActive={currentTab.name === tab.name}
            disable={tab.disable}
            onClick={() => {
              setCurrentTab(tab);
            }}
          />
        ))}
      </div>
    </div>
  );
};
