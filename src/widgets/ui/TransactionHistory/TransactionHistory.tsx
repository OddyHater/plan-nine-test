import React from 'react';

import { transactionsMock } from './mock';
import { TransactionItem } from '@/entities/ui';
import { formatAmount, formatDate, formatTime } from '@/shared/lib';
import { Typography } from '@/shared/ui';

interface Props {
  status: 'preconnect' | 'enter' | 'active';
}

export const TransactionHistory = ({ status }: Props) => {
  const title = () => {
    switch (status) {
      case 'preconnect':
        return 'Так может выглядеть Ваша история зачислений:';
      case 'enter':
        return 'История зачислений:';
      case 'active':
        return 'История зачислений:';
    }
  };

  const totalSum = transactionsMock.reduce((acc, transaction) => {
    return acc + (transaction.type === 'income' ? transaction.sum : -transaction.sum);
  }, 0);

  return (
    <div>
      <Typography className={'uppercase mb-[30px]'} as={'h2'} variant={'h2'} weight={'black'}>
        {title()}
      </Typography>
      <div className={'mb-4'}>
        <Typography
          className={'mb-4 inline'}
          as={'h3'}
          variant={'h3'}
          weight={'semibold'}
          color={'secondary'}
        >
          Всего получено за последние 7 дней:
        </Typography>
        <Typography className={'mb-4 inline'} as={'h3'} variant={'h3'} weight={'semibold'}>
          {' '}
          {formatAmount(totalSum)} руб.
        </Typography>
      </div>
      <div className={'flex flex-col gap-1'}>
        {transactionsMock.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            sum={transaction.sum}
            type={transaction.type}
            currency={transaction.currency}
            description={transaction.description}
            date={{
              day: formatDate(transaction.date),
              time: formatTime(transaction.date),
            }}
          />
        ))}
      </div>
    </div>
  );
};
