'use client';

import './styles.css';

// components/IndustryExpertiseSlider.tsx
import React, { useRef } from 'react';

import Carousel from './Carousel';
import Image from 'next/image';
import IndustryExpertiseTag from './IndustryExpertiseTag';
import Slider from 'react-slick';
import WorkItem from './WorkItem';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,
  arrows: false,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ecommerceWorkItems = [
  {
    imageSrc: '/assets/images/portfolio/img.png',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: '/assets/images/portfolio/img-1.png',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: '/assets/images/portfolio/img-2.png',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: 'https://via.placeholder.com/424x282',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: 'https://via.placeholder.com/424x282',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
];

const vrWorkItems = [
  {
    imageSrc: 'https://via.placeholder.com/424x282',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: 'https://via.placeholder.com/424x282',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: 'https://via.placeholder.com/424x282',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: 'https://via.placeholder.com/424x282',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
  {
    imageSrc: 'https://via.placeholder.com/424x282',
    date: 'MAR 27, 2023',
    readTime: '3 Mins read',
    tags: ['AI', 'System Management'],
    title: 'Sammi - Great Eastern',
    description:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
  },
];

const works = [
  {
    name: 'Ecommerce',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
    bookmark: 'ecommerce',
  },
  {
    name: 'Healthcare',
    svgPath: '/assets/svgs/healthcare.svg',
    items: ecommerceWorkItems,
    bookmark: 'healthcare',
  },
  {
    name: 'Insurance',
    svgPath: '/assets/svgs/insurance.svg',
    items: ecommerceWorkItems,
    bookmark: 'insurance',
  },
  {
    name: 'Real Estate',
    svgPath: '/assets/svgs/real_estate.svg',
    items: ecommerceWorkItems,
    bookmark: 'real-estate',
  },
  {
    name: 'Business Process Management',
    svgPath: '/assets/svgs/management.svg',
    items: ecommerceWorkItems,
    bookmark: 'management',
  },
  {
    name: 'Custom ERP',
    svgPath: '/assets/svgs/esp.svg',
    items: ecommerceWorkItems,
    bookmark: 'erp',
  },
  {
    name: 'Web Content Management',
    svgPath: '/assets/svgs/content.svg',
    items: ecommerceWorkItems,
    bookmark: 'content',
  },
  {
    name: 'AR / VR',
    items: vrWorkItems,
    svgPath: '/assets/svgs/vr.svg',
    bookmark: 'vr',
  },
  {
    name: 'Logistics & Supply Chain Management',
    svgPath: '/assets/svgs/logistic.svg',
    items: ecommerceWorkItems,
    bookmark: 'logistic',
  },
];

const arrows = [
  {
    src: '/assets/svgs/arrow_right.svg',
    alt: 'Previous',
    width: 20,
    height: 20,
    className: 'text-5xl ',
  },
  {
    src: '/assets/svgs/arrow_right.svg',
    alt: 'Next',
    width: 20,
    height: 20,
    className: 'rotate-180 text-5xl ',
  },
];

export default function IndustryExpertiseSlider() {
  const sliderRefs = useRef<(Slider | null)[]>([]);

  return (
    <div className='md:px-[15%] flex flex-col gap-2 px-6'>
      {works.map((work, index) => {
        return (
          <div
            key={work.name}
            id={work.bookmark}>
            <hr className='my-8 border-gray-600' />

            <div className='h-14 justify-between items-center flex mb-4'>
              <div className='flex justify-start items-center'>
                <IndustryExpertiseTag
                  svgPath={work.svgPath}
                  text={work.name}
                  bookmark={work.bookmark}
                />
              </div>
              <div className='justify-end items-center gap-4 flex'>
                <div
                  className='cursor-pointer p-2.5 border border-[#38b6ff] rounded-[26px] justify-start items-center gap-2.5 flex transition duration-300 ease-in-out hover:border-[#70CBFF]'
                  onClick={() => sliderRefs.current[index]?.slickPrev()}>
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
                  onClick={() => sliderRefs.current[index]?.slickNext()}>
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

            <Carousel
              work={work}
              ref={(el) => (sliderRefs.current[index] = el) as any}
            />
          </div>
        );
      })}
    </div>
  );
}
