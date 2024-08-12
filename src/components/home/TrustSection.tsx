import React from "react";

function TrustSection() {
  return (
    <div className="lg:py-20 py-12 md:py-16 bg-black-100 flex-col justify-start items-center gap-16 inline-flex w-full">
      <div className="flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch text-center text-primary text-2xl md:text-[32px]  leading-[48px]">
          15 years of experience in the field
        </div>
        <div className="self-stretch opacity-70 text-center text-white text-base font-normal leading-normal">
          Make your business agile with our professional, scalable development
          teams 
        </div>
      </div>
      <div className="w-full md:grid md:grid-cols-3 px-10 flex flex-col gap-10">
        <div className="flex-col justify-center items-center gap-[18px] flex">
          <div className="flex items-center">
            <div className="text-white text-5xl lg:text-7xl font-normal">
              168
            </div>
            <div className="text-white text-5xl font-normal">+</div>
          </div>
          <div>Global Clients</div>
        </div>
        <div className="flex-col justify-center items-center gap-[18px] flex">
          <div className="flex items-center">
            <div className="text-white text-5xl lg:text-7xl font-normal">
              379
            </div>
            <div className="text-white text-5xl font-normal">+</div>
          </div>
          <div>Projects Completed</div>
        </div>
        <div className="flex-col justify-center items-center gap-[18px] flex">
          <div className="flex items-center">
            <div className="text-white text-5xl lg:text-7xl font-normal">
              10M
            </div>
            <div className="text-white text-5xl font-normal">+</div>
          </div>
          <div>Lines of code</div>
        </div>
      </div>
    </div>
  );
}

export default TrustSection;
