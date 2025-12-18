'use client';

import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'bg-white rounded-xl border border-[#E7E8EF] px-4 py-[10px] w-full',
        className,
      )}
      {...props}
    />
  );
}
