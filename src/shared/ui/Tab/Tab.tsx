import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  tabName: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab = ({ tabName, isActive, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        'px-2.5 pt-2.5 pb-4 cursor-pointer text-[#898989]',
        isActive && 'border-b-2 border-brand-blue text-light-black',
      )}
    >
      <p className={twMerge('text-base leading-[1.4] font-medium tracking-[-0.01em]')}>{tabName}</p>
    </div>
  );
};
