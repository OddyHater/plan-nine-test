import type { ElementType } from 'react';
import type {
  TypographyColor,
  TypographyProps,
  TypographyVariant,
  TypographyWeight,
} from './types';
import { twMerge } from 'tailwind-merge';

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-[40px] leading-[1.05]',
  h2: 'text-[22px] leading-[1.15]',
  h3: 'text-[20px] leading-[1.15]',
  body: 'text-[16px] leading-[1.4]',
  'body-sm': 'text-[14px] leading-[1.2]',
  caption: 'text-xs leading-snug',
};

const weightClasses: Record<TypographyWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  black: 'font-black',
};

const colorClasses: Record<TypographyColor, string> = {
  primary: 'text-light-black',
  secondary: 'text-gray',
  description: 'text-light-gray',
  danger: 'text-alert-red',
};

export function Typography<T extends ElementType = 'p'>({
  as,
  variant = 'body',
  weight = 'regular',
  color = 'primary',
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as || 'p';

  return (
    <Component
      className={twMerge(
        variantClasses[variant],
        weightClasses[weight],
        colorClasses[color],
        className,
      )}
      {...props}
    />
  );
}
