import Image from "next/image";
import React from "react";

const FeatureHighlights = () => {
  const features = [
    {
      id: 1,
      title: "High Quality",
      desc: "Cafted from top materials",
      img: "/prodVector1.png",
    },
    {
      id: 2,
      title: "Warranty Protection",
      desc: "Over 2 years",
      img: "/prodVector2.png",
    },
    {
      id: 3,
      title: "High Free Shipping",
      desc: "Order over 150 $",
      img: "/prodVector3.png",
    },
    {
      id: 4,
      title: "24 / 7 Support",
      desc: "Dedicated support",
      img: "/prodVector4.png",
    },
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 md:justify-items-center px-2 gap-x-2 items-center bg-[rgba(249,241,231,1)] h-[150px] md:h-[270px] w-full">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-center gap-2 md:gap-4">
          <Image
            className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] md:w-[50px] md:h-[50px]"
            src={feature.img}
            alt="Category"
            width={50}
            height={50}
          />
          <div className="flex flex-col max-w-[150px] sm:max-w-full">
            <h3 className="text-sm md:text-[25px] font-bold text-[rgba(36,36,36,1)]">
              {feature.title}
            </h3>
            <p className="text-xs md:text-[20px] text-[rgba(137,137,137,1)]">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureHighlights;
