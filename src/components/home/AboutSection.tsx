import React from "react";
import Image from "next/image";
import colleaguesImage from "../../../public/assets/images/home/about-colleague.png";

function AboutSection() {
  return (
    <div className="lg:px-[316px] md:px-[200px] px-[24px] py-[56px] md:py-[72px] lg:py-[120px] flex flex-col lg:flex-row justify-between gap-8">
      <div className="flex-col lg:max-w-[536px] w-full gap-12 flex">
        <div className="flex-col gap-4 flex flex-start">
          <div className="text-white md:text-5xl text-4xl font-bold capitalize leading-[57.60px]">
            About us
          </div>
          <div className="opacity-70 text-white md:text-base text-[14px] font-normal leading-normal">
            WATA TECH IT outsourcing company established in 2016, is consulting
            and providing our software services and technology advances to a
            large range of customer-driven, consisting of North America, Korea,
            Japan, Singapore, and Australia.
            <br />
            At WATA TECH, with over 100 professionals experting technological
            and innovative progression, we are launching our products and
            services to make up with the solution of Information Technology and
            updated technical growth. We are proud of the ability to adapt,
            adjust, modify, and provide our specialty for various industries.
          </div>
        </div>
        <div className="rounded-xl justify-start items-center gap-6 inline-flex">
          <div className="text-center text-primary text-lg font-semibold leading-[27px] tracking-tight">
            Read more
          </div>
          <div className="p-2.5 bg-primary rounded-[26px] justify-start items-center gap-2.5 flex">
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>

      <div className="max-w-[836px] max-h-[564px]">
        <Image
          alt=""
          className="w-full h-auto min-w-[500px]"
          src={colleaguesImage}
        />
      </div>
    </div>
  );
}

export default AboutSection;
