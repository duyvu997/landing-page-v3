import React from "react";
import Tooltip from "../../components/common/Tooltip"; // Import the Tooltip component

interface WorkItemProps {
  imageSrc: string;
  date: string;
  readTime: string;
  tags: string[];
  title: string;
  description: string;
}

export default function WorkItem({
  imageSrc,
  date,
  readTime,
  tags,
  title,
  description,
}: WorkItemProps) {
  return (
    <div className="w-full max-w-[424px] bg-[#051219] rounded-xl flex flex-col">
      <img
        className="w-full h-[auto] rounded-t-xl object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className='flex items-center gap-2 text-[#767575] text-sm font-normal font-["Poppins"]'>
            <span>{date}</span>
            <div className="w-1 h-1 bg-[#767575] rounded-full" />
            <span>{readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="px-2 py-0.5 rounded-md border border-primary flex items-center"
              >
                <span className="text-primary text-sm font-normal">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Tooltip text={title}>
            <div className="text-white text-2xl font-semibold leading-tight truncate">
              {title}
            </div>
          </Tooltip>
          <div className="text-white text-sm font-normal opacity-70 line-clamp-3">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
