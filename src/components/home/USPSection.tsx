import React from "react";
import USPCard from "./USPCard";

const USPs = [
  {
    id: "1",
    summary: "Quality Focus",
    describe:
      "We prioritize excellence, ensuring that our solutions meet the highest standards of quality and reliability.",
    iconName: "usp-focus.svg",
  },
  {
    id: "2",
    summary: "Rapid Ramp-Up",
    describe:
      "With a highly experienced and skilled resource pool, we can quickly scale up our team to meet project requirements and deliver results efficiently.",
    iconName: "usp-ramp-up.svg",
  },
  {
    id: "3",
    summary: "Competitive Pricing",
    describe:
      "We offer reasonable and competitive prices, providing exceptional value for our clients without compromising on quality.",
    iconName: "usp-price.svg",
  },
  {
    id: "4",
    summary: "Flexible Adaptability",
    describe:
      "We seamlessly adapt to our clients' and partners' working models and processes, fostering collaboration and ensuring a smooth integration between teams for successful project",
    iconName: "usp-pieces.svg",
  },
];

function USPSection() {
  return (
    <div className="lg:px-[316px] md:px-[200px] px-[24px] lg:py-[120px] flex-col justify-start items-center gap-14 inline-flex w-full">
      <div className="self-stretch flex-col justify-start items-start gap-12 flex">
        <div className="flex-col gap-4 flex">
          <div className="self-stretch">
            <span className="text-white text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]">
              Building{" "}
            </span>
            <span className="text-primary text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]">
              Trust
            </span>
            <span className="text-white text-4xl lg:text-5xl font-bold capitalize leading-[57.60px]">
               Through Excellence
            </span>
          </div>
          <div className="w-[536px] opacity-70 text-white text-base font-normal leading-normal">
            At WATA TECH, we believe trust is earned through excellence.
            Discover how our unwavering dedication to .
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 flex flex-col gap-6 w-full">
        {/* <USPCard /> */}{" "}
        {USPs.map((usp: any) => (
          <div key={usp.id}>
            <USPCard
              summary={usp.summary}
              describe={usp.describe}
              iconName={usp.iconName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default USPSection;
