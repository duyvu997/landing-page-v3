import React from 'react';
import Image from 'next/image';
import heroBg from '../../../public/assets/images/about/hero-bg.png';

function HeroSection() {
  return (
    <div className='min-h-[50vh] px-[20%] md:pt-20 flex-col justify-center items-center gap-2 flex relative'>
      <Image
        className='absolute z-0 top-0 object-cover h-full'
        src={heroBg}
        alt='Picture of the author'
        layout='fill'
      />
      <div className='absolute inset-0 bg-black/90 z-10' />

      <div className=' py-[15%] flex-col justify-center items-center gap-10 flex z-20'>
        <div className='text-center md:text-[32px] md:leading-[48px] text-2xl leading-[36px]'>
          <span className='text-white font-semibold '>
            WATA TECH boasts a team of{' '}
          </span>
          <span className=' text-primary font-semibold '>100+ IT experts</span>
          <span className='text-white font-semibold '>
            {' '}
            delivering innovative software, solutions, and outsourcing across
            industries. We stand out by integrating developers early, ensuring
            they understand your needs and deliver{' '}
          </span>
          <span className=' text-primary font-semibold '>
            value-driven features
          </span>
          <span className='text-white font-semibold '>.</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
