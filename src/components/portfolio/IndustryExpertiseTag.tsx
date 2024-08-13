'use client';

import Image from 'next/image';
import Link from 'next/link';

interface IndustryExpertiseTagProps {
  svgPath: string;
  text: string;
  bookmark?: string;
  isActive?: boolean;
}

export default function IndustryExpertiseTag({
  svgPath,
  text,
  bookmark,
  isActive = false,
}: IndustryExpertiseTagProps) {
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    if (bookmark) {
      const element = document.getElementById(bookmark);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div
      onClick={handleBookmark}
      className={`h-12 md:h-14 p-2 md:p-3 rounded-xl flex items-center gap-2 cursor-pointer ${
        isActive ? 'bg-[#38b6ff]' : 'bg-[#0b2535]'
      } hover:bg-[#38b6ff] transition-colors duration-300`}
    >
      {svgPath && (
        <div className="w-6 md:w-8 h-6 md:h-8 relative">
          <Image src={svgPath} alt={text} layout="fill" objectFit="contain" />
        </div>
      )}
      <div className="text-white text-sm md:text-lg font-semibold leading-[20px] md:leading-[27px]">
        {text}
      </div>
    </div>
  );
}
