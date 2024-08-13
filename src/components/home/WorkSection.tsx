import React from 'react';
import WorkCard from './WorkCard';
import Image from 'next/image';
import Link from 'next/link';

const ourWorks = [
  {
    id: '1',
    title: 'SW-Online',
    postedDate: '2023-03-27',
    lastRead: '3 Mins read',
    imageName: 'work-sw-online.png',
    tags: ['AI', 'Business intelligence'],
    describe:
      'SW-Online was created to help customers find the most comprehensive information (addresses, phone numbers, …) about companies and decision-makers in Switzerland for marketing purposes.',
  },
  {
    id: '2',
    title: 'Klara',
    postedDate: '2023-03-27',
    lastRead: '3 Mins read',
    imageName: 'work-klara.png',
    tags: ['ERP', 'System Management'],
    describe:
      "KLARA was created by the will to help reduce your SMEs' administrative efforts. KLARA takes care of all relevant administrative tasks in your business or in your households.",
  },
  {
    id: '3',
    title: 'Mobile payment',
    postedDate: '2023-03-27',
    lastRead: '3 Mins read',
    imageName: 'work-mobile-payment.png',
    tags: ['App', 'Fintech'],
    describe:
      'Mobile payments can be made easily almost everywhere, not only at supermarkets, online shops but also at many other places such as parking slots, vending machines, farm shops, etc.',
  },
  {
    id: '4',
    title: 'Metatrader platform',
    postedDate: '2023-03-27',
    lastRead: '3 Mins read',
    imageName: 'work-metatrader-platform.png',
    tags: ['Platform', 'Fintech'],
    describe:
      'MetaTrader is platform suite from MetaQuotes Software Corporation, with 2 popular versions MetaTrader 4 (MT4) and MetaTrader 5 (MT5). Our client also recently introduced the ability for users to connect their accounts to TradingView, a popular third-party charting platform.',
  },
];

function WorkSection() {
  return (
    <div className=' w-full md:px-[15%] px-6 py-14 lg:py-[120px] flex-col justify-start items-center gap-14 inline-flex'>
      <div className='self-stretch w-full justify-between items-start inline-flex'>
        <div className='flex-col justify-start items-start gap-12 inline-flex'>
          <div className='h-[58px] flex-col justify-start items-start gap-4 flex'>
            <div className='self-stretch'>
              <span className='text-white text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]'>
                Our{' '}
              </span>
              <span className='text-primary text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]'>
                Works
              </span>
            </div>
          </div>
        </div>
        <div className='rounded-xl justify-start items-center gap-6 flex'>
          <div className='text-center text-primary text-lg font-semibold leading-[27px] tracking-tight'>
            Read more
          </div>
          <div className='p-2.5 bg-primary rounded-[26px] justify-start items-center gap-2.5 flex'>
            <Link href={'portfolio'}>
              <Image
                src='/assets/svgs/arrow_right1.svg'
                alt='Logo'
                width={24}
                height={24}
                className='h-6 w-6  lg:w-9 lg:h-9 '
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-8 w-full'>
        {ourWorks.map((work) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </div>
    </div>
  );
}

export default WorkSection;
