'use client';

import './styles.css';

import IndustryExpertiseTag from './IndustryExpertiseTag';
// components/IndustryExpertiseSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import WorkItem from './WorkItem';

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 z-10 flex items-center justify-center w-12 h-12 rounded-full text-white`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 z-10 flex items-center justify-center w-12 h-12 rounded-full text-white`}
      style={{ ...style }}
      onClick={onClick}></div>
  );
}

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
    name: 'Ecommerce1',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'Ecommerce2',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'Ecommerce3',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'Ecommerce4',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'Ecommerce5',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'Ecommerce6',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'Ecommerce7',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'Ecommerce8',
    svgPath: '/assets/svgs/ecom.svg',
    items: ecommerceWorkItems,
  },
  {
    name: 'VR',
    items: vrWorkItems,
    svgPath: '/assets/svgs/vr.svg',
  },
];

export default function IndustryExpertiseSlider() {
  return (
    <div className='md:px-[15%] flex flex-col gap-2'>
      {works.map((work) => {
        return (
          <div key={work.name}>
            <div className='flex justify-start mt-10'>
              <IndustryExpertiseTag
                svgPath={work.svgPath}
                text={work.name}
              />
            </div>
            <Slider {...sliderSettings}>
              {(work.items || []).map((item, index) => (
                <div
                  key={index}
                  className='py-2'>
                  <WorkItem {...item} />
                </div>
              ))}
            </Slider>
          </div>
        );
      })}
    </div>
  );
}
