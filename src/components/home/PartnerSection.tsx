'use client';

import React, { useRef } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';

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

  let sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <>
      <div className='w-full md:px-[15%] px-6 pb-14 lg:py-[100px] rounded-[7px] flex-col justify-start items-start gap-14 flex'>
        <div className='self-stretch justify-between items-end inline-flex'>
          <div>
            <span className='text-white text-5xl capitalize font-bold leading-[57.60px]'>
              Our{' '}
            </span>
            <span className='text-primary text-5xl capitalize font-bold leading-[57.60px]'>
              partners
            </span>
          </div>

          <div className='justify-end items-end gap-4 flex md:hidden'>
            <div
              className='cursor-pointer p-2.5 border border-[#38b6ff] rounded-[26px] justify-start items-center gap-2.5 flex transition duration-300 ease-in-out hover:border-[#70CBFF]'
              onClick={previous}>
              <Image
                src='/assets/svgs/arrow_right.svg'
                alt='Previous'
                width={20}
                height={20}
                className='text-5xl'
              />
            </div>
            <div
              className='cursor-pointer p-2.5 border border-[#38b6ff] rounded-[26px] justify-start items-center gap-2.5 flex rotate-180'
              onClick={next}>
              <Image
                src='/assets/svgs/arrow_right.svg'
                alt='Next'
                width={20}
                height={20}
                className='text-5xl'
              />
            </div>
          </div>
        </div>
        <div className='w-full md:grid lg:grid-cols-6 lg:gap-x-6 lg:gap-y-4 md:grid-cols-4 md:gap-4 grid-cols-2 gap-6 hidden'>
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
      <div className='slider-container w-full px-6 pb-14 md:hidden'>
        <Slider
          ref={(slider) => {
            sliderRef = slider as any;
          }}
          {...settings}>
          {partnerImageNames.map((partner) => (
            <div
              key={partner}
              className='!w-[95%] h-[120px] bg-white rounded-lg'>
              <div className='h-full w-full flex items-center'>
                <Image
                  src={imageDirPath + partner}
                  alt=''
                  width={100}
                  height={100}
                  className='w-auto h-auto object-contain p-2 mx-auto'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default PartnerSection;
