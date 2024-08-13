import React from 'react';
import USPCard from './USPCard';

const USPs = [
  {
    id: '1',
    summary: 'Quality Focus',
    describe:
      'We prioritize excellence, ensuring that our solutions meet the highest standards of quality and reliability.',
    iconName: 'usp-talent.svg',
  },
  {
    id: '2',
    summary: 'Rapid Ramp-Up',
    describe:
      'With a highly experienced and skilled resource pool, we can quickly scale up our team to meet project requirements and deliver results efficiently.',
    iconName: 'usp-delivery.svg',
  },
  {
    id: '3',
    summary: 'Competitive Pricing',
    describe:
      'We offer reasonable and competitive prices, providing exceptional value for our clients without compromising on quality.',
    iconName: 'usp-cost.svg',
  },
  {
    id: '4',
    summary: 'Flexible Adaptability',
    describe:
      "We seamlessly adapt to our clients' and partners' working models and processes, fostering collaboration and ensuring a smooth integration between teams for successful project",
    iconName: 'usp-partnership.svg',
  },
];

function USPSection() {
  return (
    <div className='md:px-[15%] px-6 lg:py-[120px] py-14 flex-col gap-14 flex w-full'>
      <div>
        <span className='text-primary text-4xl capitalize font-bold leading-[43.20px]'>
          Why
        </span>
        <span className='text-white text-4xl capitalize font-bold leading-[43.20px]'>
          {' '}
          us?
        </span>
      </div>

      <div className='md:grid md:grid-cols-2 flex flex-col gap-6 w-full'>
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
