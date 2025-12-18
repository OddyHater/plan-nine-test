import { DonateConnection } from '@/features';
import { PageHeader } from '@/widgets/ui';

export default function Home() {
  return (
    <main className={'px-[40px] pt-[104px] pb-[113px]'}>
      <PageHeader title={'Кабинет автора'} />
      <div className={'max-w-(--content-width) mx-auto my-0 mt-8'}>
        <DonateConnection />
      </div>
    </main>
  );
}
