import React from 'react';
import Image from 'next/image';

type USPCardProps = {
  summary: string;
  describe: string;
  iconName: string;
};

function USPCard(props: USPCardProps) {
  const iconDirPath = '/assets/icons/about/';
  const { summary, describe, iconName } = props;
  return (
    <div className='bg-black-100 rounded-xl shadow flex-col justify-center items-start inline-flex'>
      <div className='px-6 pt-6 justify-start items-center gap-2.5 inline-flex'>
        <Image
          src={iconDirPath + iconName}
          alt=''
          width={154}
          height={154}
          className='md:hidden lg:block w-[84px] h-[84px]'
        />
      </div>
      <div className='p-6 flex-col gap-4 flex'>
        <div className='text-white text-2xl font-semibold leading-9'>
          {summary}
        </div>
        <div className='items-center gap-4 inline-flex'>
          <div className='grow shrink basis-0 text-white text-sm font-normal leading-[21px]'>
            {describe}
          </div>
        </div>
      </div>
    </div>
  );
}

export default USPCard;
