'use client';

import { PreconnectDonationForm, EnterDonationForm, ActiveDonationForm } from '@/features/ui';
import React, { useState } from 'react';

interface Props {
  status: 'preconnect' | 'enter' | 'active';
  setStatus: React.Dispatch<React.SetStateAction<'preconnect' | 'enter' | 'active'>>;
}

export const DonateConnection = ({ status, setStatus }: Props) => {
  const [userData, setUserData] = useState({
    phone: '',
    card: '',
  });

  const onStepBack = () => {
    setStatus('enter');
  };

  const onDecline = () => {
    setStatus('preconnect');
  };

  return (
    <div className={'flex flex-col gap-6 max-w-[440px] mx-auto my-0'}>
      {status === 'preconnect' && <PreconnectDonationForm onSubmit={() => setStatus('enter')} />}
      {status === 'enter' && (
        <EnterDonationForm setData={setUserData} onSubmit={() => setStatus('active')} />
      )}
      {status === 'active' && (
        <ActiveDonationForm
          onDecline={onDecline}
          onStepBack={onStepBack}
          phone={userData.phone}
          card={userData.card}
        />
      )}
    </div>
  );
};
