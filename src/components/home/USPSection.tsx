import React from 'react';
import USPCard from './USPCard';

const USPs = [
  {
    id: '1',
    summary: 'Quality Focus',
    describe:
      'We prioritize excellence, ensuring that our solutions meet the highest standards of quality and reliability.',
    iconName: 'usp-focus.svg',
  },
  {
    id: '2',
    summary: 'Rapid Ramp-Up',
    describe:
      'With a highly experienced and skilled resource pool, we can quickly scale up our team to meet project requirements and deliver results efficiently.',
    iconName: 'usp-ramp-up.svg',
  },
  {
    id: '3',
    summary: 'Competitive Pricing',
    describe:
      'We offer reasonable and competitive prices, providing exceptional value for our clients without compromising on quality.',
    iconName: 'usp-price.svg',
  },
  {
    id: '4',
    summary: 'Flexible Adaptability',
    describe:
      "We seamlessly adapt to our clients' and partners' working models and processes, fostering collaboration and ensuring a smooth integration between teams for successful project",
    iconName: 'usp-pieces.svg',
  },
];

function USPSection() {
  return (
    <div className='md:px-[15%] px-6 lg:py-[120px] flex-col gap-14 flex w-full'>
      <div className='flex-col gap-12 items-start flex'>
        <div className='flex-col justify-start gap-4 flex'>
          <div>
            <span className='text-white text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]'>
              Building{' '}
            </span>
            <span className='text-primary text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]'>
              Trust
            </span>
            <span className='text-white text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]'>
               Through Excellence
            </span>
          </div>
          <div className='opacity-70 text-white text-[14px] md:text-base font-normal leading-normal'>
            At WATA TECH, we believe trust is earned through excellence. <br />
            Discover how our unwavering dedication to.
          </div>
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 flex flex-col gap-6 w-full'>
        {/* <USPCard /> */}{' '}
        {USPs.map((usp: any) => (
          <div key={usp.id}>
            <USPCard
              summary={usp.summary}
              describe={usp.describe}
              iconName={usp.iconName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default USPSection;
