import React from 'react';
import Image from 'next/image';

type MemberCardProps = {
  name: string;
  position: string;
  information: string;
  imageName: string;
  keyActivities: string[];
};

function MemberCard(props: MemberCardProps) {
  const iconDirPath = '/assets/images/about/';
  const { name, position, information, imageName, keyActivities } = props;
  return (
    <div className='bg-black-100 rounded-[20px] flex-col justify-start items-start flex'>
      <Image
        src={iconDirPath + imageName}
        alt=''
        width={2048}
        height={1365}
        className='w-full h-auto rounded-t-[20px]'
      />
      <div className='p-6 flex-col justify-end items-start gap-2 flex'>
        <div className='self-stretch text-white text-2xl md:text-[32px] font-semibold leading-[36px] md:leading-[48px]'>
          {name.toUpperCase()}
        </div>
        <div className='self-stretch text-primary text-base font-bold uppercase leading-normal tracking-tight'>
          {position.toUpperCase()}
        </div>
        <div className='self-stretch line-clamp-[7] overflow-hidden text-ellipsis  text-[#cecece] text-sm font-normal leading-[21px]'>
          {information}
        </div>
        <div className='self-stretch'>
          <span className='text-[#cecece] text-sm font-bold leading-[21px]'>
            Key activities:
            <br />
          </span>
          <span className='text-[#cecece] text-sm font-normal leading-[21px]'>
            {keyActivities.map((activy) => {
              return (
                <>
                  {activy}
                  <br />
                </>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
