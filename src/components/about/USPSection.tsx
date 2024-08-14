import React from 'react';
import USPCard from './USPCard';

const USPs = [
  {
    id: '1',
    summary: 'Elite Talent Powerhouse',
    description:
      'Our globally seasoned talent pool boasts 8+ years of cross-industry expertise, spanning sectors like healthcare, finance, retail, AI/AR, and more. Our dedicated and experienced team members serve as catalysts for your success.',
    iconName: 'usp-talent.svg',
  },
  {
    id: '2',
    summary: 'Gold-Standard Delivery',
    description:
      'Our ISO 27001 certification guarantees international quality standards for all projects. Agile methodologies like Scrum and MVP development accelerate delivery, ensuring fast turnaround times. Team setup requires minimal time (3-5 days).',
    iconName: 'usp-delivery.svg',
  },
  {
    id: '3',
    summary: 'Effective Cost',
    description:
      'We prioritize crafting solutions that align with expectations, ensuring prompt delivery and maximizing client satisfaction.',
    iconName: 'usp-cost.svg',
  },
  {
    id: '4',
    summary: 'Lifetime Partnership',
    description:
      'We firmly believe in the power of long-term collaboration, as evidenced by the many clients who have been with us since day one. Establishing lasting partnerships is our top priority with every client, as they are the foundation of mutual success.',
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
          <div key={usp.id} className='h-full'>
            <USPCard
              summary={usp.summary}
              description={usp.description}
              iconName={usp.iconName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default USPSection;
