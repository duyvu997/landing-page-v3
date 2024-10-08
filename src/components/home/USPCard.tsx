import React from 'react';
import Image from 'next/image';

type USPCardProps = {
  summary: string;
  description: string;
  iconName: string;
};

const USPCard = (props: USPCardProps) => {
  const { summary, description, iconName } = props;
  const iconDirPath = '/assets/icons/home/';
  return (
    <div className='relative w-full h-full p-10 bg-black-100 rounded-xl flex-col justify-start items-start gap-4 inline-flex overflow-hidden'>
      <div className='px-[250px] py-[200px] bg-primary/5 rounded-[300px] absolute right-[-200px] top-[-30%]'></div>

      <div className='flex w-full h-full justify-between gap-8'>
        <div>
          <div className='text-white text-[24px] md:text-[28px] lg:text-[32px]  font-semibold leading-[48px]'>
            {summary}
          </div>
          <div className='max-w-[284px] text-white text-base font-normal leading-normal'>
            {description}
          </div>
        </div>

        <Image
          src={iconDirPath + iconName}
          alt=''
          width={154}
          height={154}
          className='md:hidden lg:block h-[92px] w-[92px] md:h-[92px] my-auto'
        />
      </div>
    </div>
  );
};

export default USPCard;
