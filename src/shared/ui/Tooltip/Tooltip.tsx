'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import QuestionMarkIcon from '@/shared/assets/icons/question-mark-icon.svg';
import { twMerge } from 'tailwind-merge';

interface TooltipProps {
  content: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const Tooltip = ({ content, children, className }: TooltipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children ?? (
        <span className="flex h-[16px] w-[16px] cursor-pointer items-center justify-center rounded-full border border-[#E7E8EF] bg-white">
          <Image src={QuestionMarkIcon} alt="Help" width={10} height={10} />
        </span>
      )}

      {open && (
        <div
          className={twMerge(
            'absolute left-1/2 top-full z-50 mt-2 w-max max-w-xs -translate-x-1/2 rounded-xl bg-black px-3 py-2 text-xs text-white shadow-lg',
            className,
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
