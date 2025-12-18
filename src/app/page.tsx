'use client'

import { PageHeader, TransactionHistory, DonateConnection } from "@/widgets/ui";
import { useState } from "react";

export default function Home() {
  const [currentStatus, setCurrentStatus] = useState<'preconnect' | 'enter' | 'active'>('preconnect');

  return (
    <main className={'px-[40px] pt-[104px] pb-[113px]'}>
      <PageHeader title={'Кабинет автора'} />
      <div className={'max-w-(--content-width) mx-auto my-0 mt-8'}>
        <div className={'mb-[76px]'}>
          <DonateConnection status={currentStatus} setStatus={setCurrentStatus} />
        </div>
        <TransactionHistory status={currentStatus} />
      </div>
    </main>
  );
}
