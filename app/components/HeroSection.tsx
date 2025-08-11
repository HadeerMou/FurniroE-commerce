import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[717px]">
        <Image
          src="/HomeWidget.png"
          alt="Mask Group"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute flex flex-col p-[40px_20px] sm:p-[50px_30px] md:p-[62px_43px_37px_39px] w-[80%] max-w-[643px] top-[15%] sm:top-[18%] md:top-[21.95%] left-1/2 sm:left-[48%] md:left-[51.32%] h-auto md:h-[443px] -translate-x-1/2 sm:-translate-x-[40%] md:translate-x-0 bg-[rgba(255,243,227,1)] rounded-[10px]">
          <p className="mb-[4px] text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(51,51,51,1)] leading-[100%] tracking-[3px]">
            New Arrival
          </p>

          <h2 className="text-[28px] sm:text-[40px] md:text-[53px] mb-[17px] font-bold text-[rgba(184,142,47,1)] leading-[1.1] md:leading-[65px] w-full md:w-[559px]">
            Discover Our New Collection
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-[46px] text-[rgba(51,51,51,1)] leading-[20px] md:leading-[24px] w-full md:w-[546px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="btn sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[rgba(184,142,47,1)] text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(255,255,255,1)] leading-[100%] uppercase lg:w-[222px] lg:h-[74px] opacity-100 relative gap-[10px]">
            Buy now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
