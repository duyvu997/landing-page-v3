import React from 'react';
import Image from 'next/image';

const missions = [
  {
    id: '1',
    title: 'Our Vision',
    detail:
      'To become a globally recognized leader in software development, renowned for our cutting-edge solutions, exceptional client service, and commitment to fostering a thriving tech community.',
    iconName: 'mission-vision.svg',
  },
  {
    id: '2',
    title: 'Our Mission',
    detail:
      'To become a globally recognized leader in software development, renowned for our cutting-edge solutions, exceptional client service, and commitment to fostering a thriving tech community.',
    iconName: 'mission-mission.svg',
  },
  {
    id: '3',
    title: 'Core Value',
    detail:
      'We prioritize innovation and passion, upholding integrity and quality in every project. Our people-centric approach ensures that we focus on the needs and success of our clients and team members, fostering a collaborative and supportive environment.',
    iconName: 'mission-core-value.svg',
  },
];

function MissionSection() {
  const iconDirPath = '/assets/icons/about/';
  return (
    <div className='flex flex-col gap-6 px-6 w-full md:px-[15%]'>
      <Image
        src={'/assets/images/about/mission-avatar.png'}
        alt=''
        height={1000}
        width={1000}
        className='w-full md:hidden'
      />
      <div className='text-primary text-4xl font-bold capitalize leading-[57.60px]'>
        Vision, mission & Value
      </div>

      <div className='w-full hidden md:block'>
        <div className='grid grid-cols-3 gap-6'>
          <div className='py-8 px-6 flex flex-col gap-8 items-end'>
            <Image
              src={iconDirPath + missions[0].iconName}
              alt=''
              width={154}
              height={154}
              className='w-[120px]'
            />

            <div className='text-white text-2xl md:text-[32px] font-semibold leading-9 text-right'>
              {' '}
              {missions[0].title}
            </div>

            <div className='text-white text-sm md:text-base font-normal leading-[21px] text-right'>
              {missions[0].detail}
            </div>
          </div>

          <div className='pt-[34px] px-[25%] flex items-center'>
            <Image
              src='/assets/images/about/mission-missile.png'
              alt=''
              width={208}
              height={383}
              className='w-full h-auto object-contain mx-auto'
            />
          </div>

          <div className='py-8 px-6 flex flex-col gap-8 justify-start'>
            <Image
              src={iconDirPath + missions[1].iconName}
              alt=''
              width={154}
              height={154}
              className='w-[120px]'
            />

            <div className='text-white text-2xl md:text-[32px] font-semibold leading-9'>
              {' '}
              {missions[1].title}
            </div>

            <div className='text-white text-sm md:text-base font-normal leading-[21px]'>
              {missions[1].detail}
            </div>
          </div>
        </div>

        <div className='mx-auto mt-6 py-8 px-6 flex flex-col gap-8 items-center w-[33%]'>
          <Image
            src={iconDirPath + missions[2].iconName}
            alt=''
            width={154}
            height={154}
            className='w-[120px]'
          />

          <div className='text-white text-2xl md:text-[32px] font-semibold leading-9 text-center'>
            {' '}
            {missions[2].title}
          </div>

          <div className='text-white text-sm md:text-base font-normal leading-[21px] text-center'>
            {missions[2].detail}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-8 md:hidden'>
        {missions.map((mission) => (
          <div key={mission.id} className='py-8 px-6 flex flex-col gap-8'>
            <Image
              src={iconDirPath + mission.iconName}
              alt=''
              width={154}
              height={154}
              className='w-[100px]'
            />

            <div className='text-white text-2xl md:text-[32px] font-semibold leading-9'>
              {' '}
              {mission.title}
            </div>

            <div className='text-white text-sm md:text-base font-normal leading-[21px]'>
              {mission.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionSection;
