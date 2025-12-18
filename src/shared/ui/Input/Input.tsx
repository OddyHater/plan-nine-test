'use client';

import { twMerge } from 'tailwind-merge';

interface InputProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'tel';
  className?: string;
}

export function Input({ value, onChange, placeholder, type = 'text', className }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={twMerge(
        'bg-white rounded-xl border border-[#E7E8EF] px-4 py-[10px] w-full',
        className,
      )}
      onChange={(e) => (onChange ? onChange(e.target.value) : null)}
    />
  );
}
