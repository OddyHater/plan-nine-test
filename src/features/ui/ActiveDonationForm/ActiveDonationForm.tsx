import React from 'react';
import Image from "next/image";
import {Button, FieldLabel, Typography, Modal} from "@/shared/ui";
import EditIcon from '@/shared/assets/icons/pencil-icon.svg';
import DeleteIcon from '@/shared/assets/icons/trash-icon.svg';

interface Props {
  phone: string;
  card: string;
  onStepBack: () => void;
  onDecline: () => void;
}

export const ActiveDonationForm = ({ card, phone, onStepBack, onDecline }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const maskPhone = (phone: string) => {
    if (phone.length < 11) return phone;

    return `+7 ********${phone.slice(-2)}`;
  }

  const maskCard = (card: string) =>{
    if (card.length < 4) return card;

    return `**** **** **** ${card.slice(-4)}`;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(true);
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

          <div className={'bg-white py-[10px] px-3 rounded-xl border border-[#DEE1EA] flex items-center justify-between'}>
            <Typography as={'p'} variant={'body'} color={'secondary'} weight={'medium'}>
              {maskPhone(phone)}
            </Typography>
            <div className={'flex gap-2'}>

              <div onClick={onStepBack} className={'bg-[#F2F3F7] rounded-md w-[24px] h-[24px] flex items-center justify-center cursor-pointer'}>
                <Image src={EditIcon} alt={'edit'} />
              </div>

              <div onClick={onStepBack} className={'bg-alert-red-10 rounded-md w-[24px] h-[24px] flex items-center justify-center cursor-pointer'}>
                <Image src={DeleteIcon} alt={'delete'} />
              </div>
            </div>
          </div>

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

          <div className={'bg-white py-[10px] px-3 rounded-xl border border-[#DEE1EA] flex items-center justify-between'}>
            <Typography as={'p'} variant={'body'} color={'secondary'} weight={'medium'}>
              {maskCard(card)}
            </Typography>
            <div className={'flex gap-2'}>

              <div onClick={onStepBack} className={'bg-[#F2F3F7] rounded-md w-[24px] h-[24px] flex items-center justify-center cursor-pointer'}>
                <Image src={EditIcon} alt={'edit'} />
              </div>

              <div onClick={onStepBack} className={'bg-alert-red-10 rounded-md w-[24px] h-[24px] flex items-center justify-center cursor-pointer'}>
                <Image src={DeleteIcon} alt={'delete'} />
              </div>
            </div>
          </div>

        </div>
        <div className={'flex flex-col items-center gap-4 mt-6'}>
          <Button
            disabled={false}
            className='w-[155px] h-[40px] rounded-lg bg-alert-red-10 text-alert-red self-center'
            type={'submit'}
          >
            Отключить донаты
          </Button>
        </div>
      </form>

      <Modal
        title={'Вы действительно хотите отключить донаты?'}
        description={'Читатели больше не смогут отправлять вам пожертвования'}
        isOpen={isOpen}
        onClose={() => {setIsOpen(false)}}
      >
        <div className={'flex gap-4 items-center justify-center'}>
          <Button
            className={'bg-[#F2F3F7] text-light-black px-[12px] py-[15px] rounded-[12px]'}
            onClick={() => setIsOpen(!isOpen)}
          >
            Отменить
          </Button>
          <Button
            className={'bg-[#F2F3F7] text-alert-red px-[12px] py-[15px] rounded-[12px]'}
            onClick={onDecline}
          >
            Отключить донаты
          </Button>
        </div>
      </Modal>
    </div>
  );
};