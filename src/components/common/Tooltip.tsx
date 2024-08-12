// Tooltip.tsx
import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className='relative inline-block group w-full'>
      <div className='tooltip-trigger'>
        {children}
        <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap'>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
