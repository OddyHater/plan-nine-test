'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import RubCurrencyIcon from '@/shared/assets/icons/rub-currency-icon.svg';
import { TransactionHistory } from '@/widgets/ui';

import { ActiveDonationForm, EnterDonationForm, PreconnectDonationForm } from './ui';

export const DonateConnection = () => {
  const [currentStatus, setCurrentStatus] = useState<'preconnect' | 'enter' | 'active'>(
    'preconnect',
  );

  const [userData, setUserData] = useState({
    phone: '',
    card: '',
  });

  const onStepBack = () => {
    setCurrentStatus('enter');
  };

  const onDecline = () => {
    setCurrentStatus('preconnect');
  };

  return (
    <>
      <div className={'flex flex-col gap-6 max-w-[440px] mx-auto my-0 mb-[76px]'}>
        <div className={'flex items-center justify-center p-4 bg-[#E3E5ED] rounded-xl self-center'}>
          <Image src={RubCurrencyIcon} alt={'logo'} width={24} height={24} />
        </div>
        {currentStatus === 'preconnect' && (
          <PreconnectDonationForm onSubmit={() => setCurrentStatus('enter')} />
        )}
        {currentStatus === 'enter' && (
          <EnterDonationForm setData={setUserData} onSubmit={() => setCurrentStatus('active')} />
        )}
        {currentStatus === 'active' && (
          <ActiveDonationForm
            onDecline={onDecline}
            onStepBack={onStepBack}
            phone={userData.phone}
            card={userData.card}
          />
        )}
      </div>

      <TransactionHistory status={currentStatus} />
    </>
  );
};
