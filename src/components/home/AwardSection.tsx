import React from 'react';
import Image from 'next/image';

function AwardSection() {
  const imageDirPath = '/assets/images/home/';
  const awardImageNames = [
    'awards-01.png',
    'awards-02.png',
    'awards-03.png',
    'awards-04.png',
    'awards-05.png',
    'awards-06.png',
    'awards-07.png',
    'awards-08.png',
    'awards-09.png',
    'awards-10.png',
    'awards-11.png',
    'awards-12.png',
    'awards-13.png',
    'awards-14.png',
    'awards-15.png',
    'awards-16.png',
    'awards-17.png',
    'awards-18.png',
    'awards-19.png',
    'awards-20.png',
    'awards-21.png',
  ];
  return (
    <div className='w-full md:px-[15%] px-6 py-14 lg:py-[100px] rounded-[7px] flex-col justify-start items-start gap-14 inline-flex'>
      <div className='self-stretch justify-between items-start inline-flex'>
        <div>
          <span className='text-white text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]'>
            Recognitions &{' '}
          </span>
          <span className='text-primary text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]'>
            Awards
          </span>
        </div>

        {/* <div className="justify-start items-start gap-6 flex">
          <div className="p-3 rounded-[29px] border border- justify-start items-center gap-2.5 flex">
            <div className="w-6 h-6 relative origin-top-left rotate-180" />
          </div>
          <div className="p-3 origin-top-left rotate-180 bg-white rounded-[29px] justify-start items-center gap-2.5 flex">
            <div className="w-6 h-6 relative origin-top-left rotate-180" />
          </div>
        </div> */}
      </div>
      <div className='grid md:grid-cols-7 grid-cols-3 md:gap-6 gap-x-3 gap-y-6 w-full'>
        {awardImageNames.map((award) => (
          <Image
            key={award}
            src={imageDirPath + award}
            alt=''
            width={100}
            height={100}
            className='mx-auto object-contain lg:p-6 md:p-2 md:w-full md:h-full lg:min-w-[140px] lg:min-h-[130px] md:min-w-[80px] md:min-h-[70px]'
          />
        ))}
      </div>
    </div>
  );
}

export default AwardSection;
