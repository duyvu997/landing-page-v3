import React from 'react';
import Image from 'next/image';

type USPCardProps = {
  summary: string;
  description: string;
  iconName: string;
};

function USPCard(props: USPCardProps) {
  const iconDirPath = '/assets/icons/about/';
  const { summary, description, iconName } = props;
  return (
    <div className='bg-black-100 rounded-xl shadow flex-col lg:flex-row justify-start items-start flex h-full'>
      <div className='md:hidden  px-6 pt-6 justify-start items-center gap-2.5 inline-flex'>
        <Image
          src={iconDirPath + iconName}
          alt=''
          width={154}
          height={154}
          className='w-[84px] h-[84px]'
        />
      </div>
      <div className='px-6 py-10 flex-col gap-4 flex lg:w-[65%]'>
        <div className='text-white text-[24px] leading-[36px] lg:text-[32px] lg:leading-[48px] font-semibold'>
          {summary}
        </div>
        <div className='items-center gap-4 inline-flex'>
          <div className='grow shrink basis-0 text-white font-normal text-[14px] leading-[21px] lg:text-base lg:leading-6'>
            {description}
          </div>
        </div>
      </div>

      <div className='hidden lg:flex items-center justify-center lg:w-[35%] h-full'>
        <Image
          src={iconDirPath + iconName}
          alt=''
          width={154}
          height={154}
          className='w-[84px] h-[84px]'
        />
      </div>
    </div>
  );
}

export default USPCard;
