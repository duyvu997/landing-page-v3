import Image from 'next/image';
import React from 'react';

function PartnerSection() {
  const imageDirPath = '/assets/images/home/';
  const partnerImageNames = [
    'partner-01.png',
    'partner-02.png',
    'partner-03.png',
    'partner-04.png',
    'partner-05.png',
    'partner-06.png',
    'partner-07.png',
    'partner-08.png',
    'partner-09.png',
    'partner-10.png',
    'partner-11.png',
    'partner-12.png',
  ];
  return (
    <div className='w-full lg:px-[316px] md:px-[200px] px-[24px] pb-[56px] lg:py-[100px] rounded-[7px] flex-col justify-start items-start gap-14 inline-flex'>
      <div className='self-stretch justify-between items-start inline-flex'>
        <div>
          <span className='text-white text-5xl capitalize font-bold leading-[57.60px]'>
            Our{' '}
          </span>
          <span className='text-primary text-5xl capitalize font-bold leading-[57.60px]'>
            partners
          </span>
        </div>
      </div>
      <div className='w-full grid lg:grid-cols-6 lg:gap-x-6 lg:gap-y-4 md:grid-cols-4 md:gap-4 grid-cols-2 gap-6'>
        {partnerImageNames.map((partner) => (
          <div
            key={partner}
            className='md:max-w-[200px] w-full h-[120px] flex items-center justify-center bg-white rounded-lg '>
            <Image
              src={imageDirPath + partner}
              alt=''
              width={100}
              height={100}
              className='w-auto h-auto object-contain p-2'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnerSection;
