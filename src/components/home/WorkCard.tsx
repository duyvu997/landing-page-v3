import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

type WorkCardProps = {
  title: string;
  postedDate: string;
  lastRead: string;
  imageName: string;
  tags: string[];
  description: string;
};

const WorkCard = (props: WorkCardProps) => {
  const workImagesDirPath = '/assets/images/home/';
  const { title, lastRead, postedDate, imageName, tags, description } = props;

  return (
    <div className='bg-black-100 rounded-xl flex-col justify-center items-start flex'>
      <div className='lg:h-[432px] md:h-[360px] h-[40vh] relative w-full overflow-hidden'>
        <Image
          alt=''
          className='object-cover object-center p-2  rounded-xl'
          fill
          src={workImagesDirPath + imageName}
        />
      </div>

      <div className='self-stretch px-8 py-10 rounded-xl shadow flex-col justify-start items-start gap-1 flex'>
        <div className='justify-start items-center gap-2 flex flex-wrap'>
          <div className='text-gray-200 text-sm font-normal leading-[21px]'>
            {dayjs(postedDate).format('MMM D, YYYY')}
          </div>
          <div className='w-1 h-1 bg-gray-200 rounded-full' />
          <div className='text-gray-200 text-sm font-normal leading-[21px]'>
            {lastRead}
          </div>
          <div className='inline-flex gap-1'>
            {tags.map((tag) => (
              <div
                key={tag}
                className='px-2 py-0.5 rounded-md border border-primary justify-center items-center gap-2 flex'
              >
                <div className='text-primary text-sm font-normal leading-[21px]'>
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='self-stretch flex-col justify-start items-start gap-12 flex'>
          <div className='self-stretch flex-col justify-start items-start gap-4 flex'>
            <div className='self-stretch text-white text-[24px] lg:text-[32px] font-semibold leading-[48px]'>
              {title}
            </div>
            <div
              className='self-stretch line-clamp-2 md:line-clamp-3 opacity-70 text-white text-base font-normal leading-normal lg:block'
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
