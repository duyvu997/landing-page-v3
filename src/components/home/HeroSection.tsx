import React from "react";
import Image from "next/image";
import heroBg from "../../../public/assets/images/home/hero-bg.png";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="lg:ml-[188px] md:ml-[100px] ml-[24px] text-[40px] md:text-[60px] lg:text-[80px] font-bold leading-[96px] z-10">
        <span>Your</span> <span className="text-primary">Problem-Solving</span>
        <br />
        <span>Software Development</span> <br />
        <span>Outsourcing Experts</span>
      </div>

      <Image
        className="absolute z-0 lg:left-[316px] md:left-[200px] top-0 object-cover h-full"
        src={heroBg}
        alt="Picture of the author"
      />
    </div>
  );
};

export default HeroSection;
