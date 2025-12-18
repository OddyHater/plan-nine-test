import React from 'react';
import { Typography } from "@/shared/ui";
import { DateObject, TransactionDate } from "@/widgets/ui";
import { Currency, getCurrencySymbol } from "@/shared/lib";

interface Props {
  sum: number | string;
  type: 'income' | 'outcome';
  currency: Currency;
  description: string;
  date: TransactionDate;
}

export const TransactionItem = ({ sum, type, currency, description, date }: Props) => {

  const isDateObject = (date: TransactionDate): date is DateObject => {
    return typeof date === 'object' && date !== null && 'day' in date;
  };

  return (
    <div className={'bg-white rounded-2xl flex items-center justify-between px-5 py-4'}>
      <div>
        <Typography
          as='p'
          variant='body'
          className='mb-1'
        >
          { type === 'income' ? '+' : '-' }
          { sum + " "}
          { getCurrencySymbol(currency) }
        </Typography>

        <Typography
          as='p'
          variant='caption'
          color='description'
        >
          {description}
        </Typography>
      </div>

      {isDateObject(date) ? (
        <div className="flex gap-1">
          <Typography as="p" variant="caption" color="description">
            {date.day}
          </Typography>
          <Typography as="p" variant="caption" color="description">
            {date.time}
          </Typography>
        </div>
      ) : (
        <Typography as="p" variant="caption" color="description">
          {date}
        </Typography>
      )}
    </div>
  );
};