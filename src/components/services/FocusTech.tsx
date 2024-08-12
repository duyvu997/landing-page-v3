import Image from 'next/image';
import React from 'react';

function FocusTech() {
  const imageDirPath = '/assets/images/services/tech/';
  const partnerImageNames = [
    'frame140.png',
    'frame141.png',
    'frame142.png',
    'frame143.png',
    'frame144.png',
    'frame145.png',
    'frame146.png',
    'frame147.png',
    'frame148.png',
    'frame149.png',
    'frame150.png',
    'frame151.png',
    'frame152.png',
    'frame153.png',
  ];
  return (
    <div className='w-full lg:px-[316px] md:px-[200px] px-[24px] pb-[56px] lg:py-[100px] rounded-[7px] flex-col justify-start items-start gap-14 inline-flex'>
      <div className='self-stretch justify-between items-start inline-flex'>
        <div>
          <span className='text-white text-5xl capitalize font-bold leading-[57.60px]'>
            Focus{' '}
          </span>
          <span className='text-primary text-5xl capitalize font-bold leading-[57.60px]'>
            Technologies
          </span>
        </div>
      </div>
      <div className='w-full grid lg:grid-cols-7 lg:gap-x-6 lg:gap-y-4 md:grid-cols-4 md:gap-4 grid-cols-2 gap-6'>
        {partnerImageNames.map((partner) => (
          <div
            key={partner}
            className='flex items-center justify-center bg-white rounded-lg '>
            <Image
              src={imageDirPath + partner}
              alt=''
              width={1000}
              height={1000}
              className='w-auto h-auto object-contain p-2'
            />
          </div>
        ))}
      </div>
      <div className='lg:w-[552px] lg:h-[76px] px-6 py-4 bg-[#0b2535] rounded-xl justify-between items-center inline-flex'>
        <div className="text-white text-lg font-semibold font-['Poppins'] leading-[27px]">
          And much more...
        </div>
        <div className='rounded-xl justify-start items-center gap-6 flex'>
          <div className="text-center text-[#38b6ff] text-lg font-semibold font-['Poppins'] leading-[27px] tracking-tight">
            Talk to us to discover
          </div>
          <div className='p-2.5 bg-black color-black rounded-[26px] justify-start items-center gap-2.5 flex'>
            <Image
              src='/assets/svgs/arrow_right.svg'
              alt='Logo'
              width={36} // w-9 corresponds to 36px (9 * 4px)
              height={36} // h-6 corresponds to 24px (6 * 4px)
              className='h-6 w-6 pl-1 lg:w-9 lg:h-9 rotate-180'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusTech;
