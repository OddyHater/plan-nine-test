'use client'

import React, {useState} from 'react';
import { Button, FieldLabel, Typography, MaskedInput } from "@/shared/ui";
import {formatCard, formatPhone} from "@/shared/lib";

interface Props {
  onSubmit: () => void;
  setData: (data: {phone: string, card: string}) => void;
}

export const EnterDonationForm = ({ onSubmit, setData }: Props) => {
  const [phone, setPhone] = useState('+7');
  const [card, setCard] = useState('');

  const isValid =
    phone.replace(/\D/g, '').length === 11 &&
    card.replace(/\D/g, '').length === 16;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit()
    setData({
      phone,
      card
    })
  }

  return (
    <div>
      <Typography as={'p'} variant={'h3'} weight={'semibold'} className={'text-center mb-2'} >
        Мои реквизиты
      </Typography>
      <form className="max-w-xl" onSubmit={handleSubmit}>
        <div className='mb-2'>
          <FieldLabel tooltip="Необходим для приема пожертвований">
            1. Номер телефона
          </FieldLabel>

          <MaskedInput
            value={phone}
            onChange={setPhone}
            format={formatPhone}
            placeholder="+7 ___ ___ __ __"
          />

          <Typography
            as="p"
            variant="caption"
            color="description"
            className="mt-[10px]"
          >
            Номер телефона необходимо указать согласно законам РФ для получения
            пожертвований. Платформа не имеет доступа к вашему номеру.
          </Typography>
        </div>

        <div>
          <FieldLabel tooltip="Данные карты хранятся у банка">
            2. Банковская карта
          </FieldLabel>

          <MaskedInput
            value={card}
            onChange={setCard}
            format={formatCard}
          />

          <Button
            disabled={!isValid}
            className='w-[155px] h-[40px] rounded-lg my-[10px]'
            type={'submit'}
          >
            Подключить
          </Button>

          <Typography
            as="p"
            variant="caption"
            color="description"
            className="max-w-[420px]"
            weight={'regular'}
          >
            У платформы TaleStorm нет и не будет доступа к реквизитам Вашей карты.
            Они хранятся на стороне Банка-подрядчика, отвечающего за переводы.
            Подробнее в Условиях использования
          </Typography>
        </div>
      </form>
    </div>
  );
};