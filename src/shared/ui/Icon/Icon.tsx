import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  onClick: () => void;
  icon: string;
  alt: string;
  className?: string;
}

export const Icon = ({ onClick, icon, alt, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        'rounded-md w-[24px] h-[24px] flex items-center justify-center cursor-pointer',
        className,
      )}
    >
      <Image src={icon} alt={alt} />
    </div>
  );
};
