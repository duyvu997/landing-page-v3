'use client';

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
    image: 'https://via.placeholder.com/484x262',
  },
  {
    text1: 'Another Project Title',
    text2: 'Description for the second project or slide goes here.',
    image: 'https://via.placeholder.com/484x262',
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
    <div className='md:relative flex flex-col md:flex-row h-auto md:h-[528px]'>
      {/* Slide Content */}
      <div className='relative flex flex-col md:flex-row md:w-[35%] p-4 md:p-8 bg-[#0a293a] rounded-xl shadow md:absolute md:left-0'>
        <div className="text-white text-xl md:text-2xl lg:text-4xl font-bold font-['Poppins'] leading-tight mb-4">
          {slides[currentSlide].text1}
        </div>
        <div className="text-white text-base md:text-sm lg:text-base font-medium font-['Poppins'] leading-relaxed mb-4">
          {slides[currentSlide].text2}
        </div>
        <img
          className='w-full h-auto md:h-3/5 rounded-xl'
          src={slides[currentSlide].image}
          alt="Slide Image"
        />
      </div>

      {/* Main Image */}
      <div className='md:relative flex-1'>
        <img
          className='w-full h-auto md:h-[476px] rounded-xl'
          src='https://via.placeholder.com/760x476'
          alt="Highlight"
        />
      </div>

      {/* Navigation Buttons */}
      <div className='md:absolute top-1/2 right-4 md:right-8 flex md:flex-col justify-center items-center gap-4 transform mt-2 md:-translate-y-1/2'>
        <button
          className='w-10 h-10 flex items-center justify-center rounded-full bg-[#38b6ff] text-white rotate-180'
          onClick={prevSlide}
        >
          <svg className='w-5 h-5 transform rotate-180' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className='text-white text-lg font-semibold'>
          {currentSlide + 1} / {slides.length}
        </div>
        <button
          className='w-10 h-10 flex items-center justify-center rounded-full bg-[#38b6ff] text-white'
          onClick={nextSlide}
        >
          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
