import React from 'react';
import Image from 'next/image';
import serviceBg from '../../../public/assets/images/home/service-bg.png';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: '1',
    name: 'Custom Sofware Solutions',
    describe:
      'Our software engineering services cover the entire development lifecycle. We analyze your requirements, design intuitive user interfaces, develop clean code, and conduct rigorous testing to ensure high-quality software. We deliver solutions that are reliable, efficient, and maintainable.',
    iconName: 'services-custom-sofware-solutions.png',
  },
  {
    id: '2',
    name: 'Cutting-Edge Solution',
    describe:
      'Our provides innovative software development and IT consulting services, empowering businesses to achieve digital transformation',
    iconName: 'services-cutting-edge-solution.png',
  },
  {
    id: '3',
    name: 'Technical Architecture',
    describe:
      'Our offers comprehensive technical architecture services, designing scalable and secure IT systems tailored to your specific needs. Our experienced architects leverage cutting-edge technologies to optimize performance and reduce costs.',
    iconName: 'services-technical-architecture.svg',
  },
  {
    id: '4',
    name: 'Talent Hub',
    describe:
      'Is your one-stop talent solution. We offer expert recruitment, training, and talent management. Our advanced HR system optimizes your hiring process, saving time and money. Build high-performing teams with Wata Tech.',
    iconName: 'services-talent-hub.svg',
  },
];

function ServicesSection() {
  return (
    // <div className="h-screen flex items-center">
    //   <Image src={serviceBg} alt="" />
    // </div>

    <div className='md:px-[15%] px-6 py-14 lg:py-[120px] flex-col justify-center gap-[58px] inline-flex relative'>
      <Image
        src={serviceBg}
        alt=''
        className='absolute inset-0 z-0 object-cover h-full w-auto'
      />
      <div className='absolute inset-0 bg-black/90 z-10' />

      <div className='flex justify-between z-20'>
        <div className='flex flex-col gap-2'>
          <div>
            <span className='text-white text-5xl font-bold capitalize leading-[57.60px]'>
              Our 
            </span>
            <span className='text-primary text-5xl font-bold capitalize leading-[57.60px]'>
              Services
            </span>
          </div>
          <div className='md:w-[60%] opacity-70 text-white text-base font-normal leading-normal'>
            WATA Tech specializes in creating custom software solutions for
            various industries - spanning different levels and requirements.
          </div>
        </div>
        <div className='hidden lg:flex lg:flex-col lg:justify-end'>
          <div className='inline-flex gap-6 items-center'>
            <div className='text-center text-primary text-lg font-semibold leading-[27px] tracking-tight'>
              Talk to us
            </div>
            <div className='p-2.5 bg-primary rounded-[26px] justify-start items-center gap-2.5 flex'>
              <div className='w-6 h-6 relative' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-6 w-full z-20'>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
