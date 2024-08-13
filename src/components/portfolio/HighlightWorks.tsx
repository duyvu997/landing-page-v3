'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Slide {
  text1: string;
  text2: string;
  image: string;
}

const slides: Slide[] = [
  {
    text1: 'Sammi - Great Eastern',
    text2:
      'The high-level scope of SAMMI is to function as a sales activity management mobile application, aiding GEL’s representatives...',
    image: '/assets/images/portfolio/Group.svg',
  },
  {
    text1: 'Another Project Title',
    text2: 'Description for the second project or slide goes here.',
    image: '/assets/images/portfolio/Group.svg',
  },
  // Add more slides as needed
];

export default function HighlightWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className='md:relative flex flex-col md:flex-row items-center px-4'>
      {/* Slide Content */}
      <div className='relative lg:w-[30%] md:w-[28%] lg:h-[528px] md:h-[424px] bg-[#0a293a] rounded-xl shadow '>
        <div className='z-50 pt-[64px] px-[32px] mb-[8px] h-[290px]'>
          <div className="text-white  text-4xl font-bold font-['Poppins'] leading-tight mb-4">
            {slides[currentSlide].text1}
          </div>
          <div className="text-white text-base font-medium font-['Poppins'] leading-relaxed mb-4">
            {slides[currentSlide].text2}
          </div>
        </div>
        <img
          className='w-full  rounded-xl h-[242px]  md:absolute md:bottom-0  object-cover z-0'
          src={slides[currentSlide].image}
          alt='Slide Image'
        />
      </div>

      {/* Main Image */}

      <img
        className='lg:h-[476px] h-[357px] md:w-[55%] object-cover rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none px-6 '
        src='/assets/images/portfolio/imgBanner.png'
        alt='Highlight'
      />
      <div className='justify-end items-center gap-4 flex mt-5'>
        <div
          className='cursor-pointer p-2.5 border border-[#38b6ff] rounded-[26px] justify-start items-center gap-2.5 flex transition duration-300 ease-in-out hover:border-[#70CBFF]'
          onClick={prevSlide}>
          <Image
            src='/assets/svgs/arrow_right.svg'
            alt='Previous'
            width={20}
            height={20}
            className='text-5xl'
          />
        </div>
        <div className='text-white ld:text-lg md:text-sm font-semibold'>
          {currentSlide + 1}
        </div>
        <div
          className='cursor-pointer p-2.5 border border-[#38b6ff] rounded-[26px] justify-start items-center gap-2.5 flex rotate-180'
          // onClick={() => sliderRefs.current[index]?.slickNext()}
          onClick={nextSlide}>
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
  );
}
