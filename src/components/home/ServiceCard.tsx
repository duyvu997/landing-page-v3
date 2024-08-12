import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  name: string;
  describe: string;
  iconName: string;
};

const ServiceCard = (props: ServiceCardProps) => {
  const { name, describe, iconName } = props;
  const iconDirPath = "/assets/icons/home/";
  return (
    <div className="w-full bg-black-100 rounded-xl shadow justify-start items-center flex">
      <div className="grow shrink basis-0 self-stretch px-6 py-10 bg-black-100 rounded-xl flex-col justify-start items-start inline-flex">
        <div className="p-6 lg:p-12 justify-center items-center lg:hidden">
          {/* <div className="w-[101.57px] h-[84.88px] left-[15.57px] top-[37.45px] absolute"></div> */}
          <Image
            src={iconDirPath + iconName}
            alt=""
            width={101.57}
            height={84.88}
          />
        </div>
        <div className="p-6 lg:py-10">
          <div className="self-stretch text-white text-[24px] md:text-[32px] font-semibold leading-[36px] md:leading-[48px]">
            {name}
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 text-white text-[14px] md:text-base font-normal leading-normal">
              {describe}
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 justify-center items-center gap-2 hidden lg:flex">
        {/* <div className="w-[101.57px] h-[84.88px] left-[15.57px] top-[37.45px] absolute"></div> */}
        <Image
          src={iconDirPath + iconName}
          alt=""
          width={101.57}
          height={84.88}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
