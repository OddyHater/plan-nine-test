import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const Button = ({ className, fullWidth, disabled, ...props }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        'rounded-2xl font-regular transition-colors cursor-pointer text-[14px] leading-[1.2]',
        'bg-brand-blue text-white',
        'hover:bg-brand-blue/90',
        'disabled:bg-brand-blue/30 disabled:cursor-not-allowed',
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    />
  );
};
