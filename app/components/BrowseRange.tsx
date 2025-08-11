import Image from "next/image";
import React from "react";

const BrowseRange = () => {
  return (
    <section className="md:w-[1183px] md:h-[685px] mx-auto my-8 md:my-[127.53px] px-2 flex flex-col gap-y-4 md:gap-y-[62px]">
      <div className="flex flex-col md:w-[559px] h-[76.71px] text-center justify-center mx-auto">
        <h3 className="text-2xl md:text-[32px] font-bold text-[rgba(51,51,51,1)]">
          Browse The Range
        </h3>
        <p className="text-sm sm:text-base md:text-[20px] text-[rgba(102,102,102,1)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex gap-3 md:gap-[20px]">
        <div className="flex flex-col items-center gap-3 md:gap-[30px]">
          <Image
            src="/dinning.png"
            alt=""
            width={381}
            height={480}
            className="object-cover"
          />
          <p>Dinning</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-[30px]">
          <Image
            src="/living.png"
            alt=""
            width={381}
            height={480}
            className="object-cover"
          />
          <p>Living</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-[30px]">
          <Image
            src="/bedroom.png"
            alt=""
            width={381}
            height={480}
            className="object-cover"
          />
          <p>Bedroom</p>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
