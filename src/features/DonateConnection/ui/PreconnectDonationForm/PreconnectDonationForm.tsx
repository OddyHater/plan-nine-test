'use client';

import React, { useState } from 'react';

import { FaqItem } from '@/entities/ui';
import ChecksIcon from '@/shared/assets/icons/checks-icon.svg';
import HandHeartIcon from '@/shared/assets/icons/hand-heart-icon.svg';
import QuestionMarkIcon from '@/shared/assets/icons/сard-holder-icon.svg';
import { Button, Checkbox, Typography } from '@/shared/ui';

interface Props {
  onSubmit: () => void;
}

export const PreconnectDonationForm = ({ onSubmit }: Props) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className={'flex flex-col items-center'}>
      <Typography as={'p'} variant={'h3'} weight={'semibold'} className={'text-center mb-2'}>
        Активируйте прием донатов и любой пользователь платформы сможет отправить Вам пожертвование
        буквально в 1 клик!
      </Typography>
      <div className="flex flex-col gap-3 max-w-[370px] mb-6">
        <FaqItem
          icon={QuestionMarkIcon}
          content={
            <div>
              <Typography className={'inline'} as={'p'} variant={'body-sm'} color={'secondary'}>
                Прием денег на{' '}
              </Typography>
              <Typography
                className={'inline'}
                as={'p'}
                variant={'body-sm'}
                color={'secondary'}
                weight={'semibold'}
              >
                любую карту РФ банка
              </Typography>
            </div>
          }
          tooltipText={'Реально на любую'}
        />
        <FaqItem
          icon={HandHeartIcon}
          content={
            <div>
              <Typography className={'inline'} as={'p'} variant={'body-sm'} color={'secondary'}>
                Пожертвования{' '}
              </Typography>
              <Typography
                className={'inline'}
                as={'p'}
                variant={'body-sm'}
                color={'secondary'}
                weight={'semibold'}
              >
                не облагаются налогами
              </Typography>
            </div>
          }
          tooltipText={'Это правда'}
        />
        <FaqItem
          icon={ChecksIcon}
          content={
            <div>
              <Typography className={'inline'} as={'p'} variant={'body-sm'} color={'secondary'}>
                Мгновенные{' '}
              </Typography>
              <Typography
                className={'inline'}
                as={'p'}
                variant={'body-sm'}
                color={'secondary'}
                weight={'semibold'}
              >
                зачисления
              </Typography>
            </div>
          }
          tooltipText={'А что тут может быть непонятно? Реально мгновенно'}
        />
      </div>
      <div className="flex flex-col items-center gap-[10px] self-stretch">
        <Button
          disabled={!accepted}
          className="w-[155px] rounded-lg px-3 py-[15px]"
          onClick={onSubmit}
        >
          Подключить донаты
        </Button>

        <label className="flex items-start gap-3 max-w-xl cursor-pointer self-start">
          <Checkbox checked={accepted} onCheckedChange={(value) => setAccepted(Boolean(value))} />

          <Typography
            onClick={() => setAccepted(!accepted)}
            as="span"
            variant="caption"
            className={'leading-[1.3] max-w-[250px] select-none'}
          >
            Я соглашаюсь с Условиями использования и Пользовательским соглашением
          </Typography>
        </label>
      </div>
    </div>
  );
};
