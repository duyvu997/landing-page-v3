import Image from 'next/image';
import ServiceCard from './ServiceCard';
import { title } from 'process';

export default function OurServiceSection() {
  const services = [
    {
      title: 'Software Engineering',
      items: [
        'Custom Software Solutions',
        'Software Enhancement',
        'Software Testing',
        'Software Maintenance',
      ],
      icon: '/assets/images/services/software.svg',
    },
    {
      title: 'Cutting-Edge Solution',
      items: [
        'Business intelligence',
        'Data Analytics',
        'AI & Machine Learning',
      ],
      icon: '/assets/images/services/solution.svg',
    },
    {
      title: 'Technical Architecture',
      items: [
        'Custom Software Solutions',
        'Software Enhancement',
        'Software Testing',
        'NodeJS',
        'Software Maintenance',
      ],
      icon: '/assets/images/services/data.svg',
    },
    {
      title: 'Talent Hub',
      items: [
        'Scrum Master',
        'Project Manager',
        'Software Developer',
        'UX/UI Designer',
        'Quality Control',
      ],
      icon: '/assets/images/services/hub.svg',
    },
  ];
  return (
    // lg:h-[1098px] lg:px-[300px] lg:py-[120px] px-6 justify-center items-center gap-6 inline-flex
    // lg:w-[1320px] flex-col justify-center items-start gap-6 inline-flex

    <div className='md:px-[15%] px-6 lg:py-[120px] md:py-[72px] py-[56px] flex-col gap-14 flex w-full'>
      <div className='h-[58px] flex-col justify-start items-start gap-12 flex'>
        <div className='self-stretch h-[58px] flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch'>
            <span className="text-white text-5xl font-bold font-['Poppins'] capitalize leading-[57.60px]">
              Our{' '}
            </span>
            <span className="text-[#38b6ff] text-5xl font-bold font-['Poppins'] capitalize leading-[57.60px]">
              Services
            </span>
          </div>
        </div>
      </div>
      {/* justify-start items-center gap-6 lg:grid lg:grid-cols-2 */}
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 '>
        {services.map((service) => (
          <div key={service.title} className=''>
            <ServiceCard
              title={service.title}
              items={service.items}
              icon={service.icon}
            />
          </div>


        ))}
      </div>
    </div>

  );
}
