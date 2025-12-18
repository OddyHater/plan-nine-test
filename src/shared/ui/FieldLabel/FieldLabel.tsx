import type { ReactNode } from 'react';
import { Tooltip, Typography } from '@/shared/ui';

interface FieldLabelProps {
  children: ReactNode;
  tooltip?: string;
}

export const FieldLabel = ({ children, tooltip }: FieldLabelProps) => {
  return (
    <div className="mb-2 flex items-center gap-2">
      <Typography as={'p'} variant={'body'} color={'secondary'} weight={'semibold'}>
        {children}
      </Typography>

      {tooltip && <Tooltip content={tooltip} />}
    </div>
  );
};
