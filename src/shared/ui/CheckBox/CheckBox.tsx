import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import CheckIcon from '@/shared/assets/icons/check-icon.svg';

interface Props {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
}

export const Checkbox = ({ checked, onCheckedChange }: Props) => {
  return (
    <div
      onClick={() => onCheckedChange(!checked)}
      className={twMerge(
        'h-4 w-4 rounded-md border flex items-center justify-center focus:outline-none focus:outline-offset-0',
        checked ? 'bg-brand-blue border-brand-blue' : 'bg-transparent border-[#DEE1EA]',
      )}
    >
      {checked && <Image src={CheckIcon} alt={''} width={10} height={10} />}
    </div>
  );
};
