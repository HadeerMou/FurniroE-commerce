import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  type ImgData = {
    src: string;
    w: number;
    h: number;
    fit: "cover" | "fill";
    top: number;
    left: number | string;
    centerX?: boolean;
  };

  const imagesData: ImgData[] = [
    { src: "/img1.png", w: 274, h: 382, top: 0, left: 0, fit: "cover" },
    { src: "/img2.png", w: 451, h: 312, top: 70, left: 290, fit: "cover" },
    { src: "/img3.png", w: 381, h: 323, top: 400, left: 0, fit: "cover" },
    { src: "/img4.png", w: 344, h: 242, top: 400, left: 397, fit: "fill" },
    { src: "/img5.png", w: 290, h: 348, top: 100, left: 1068, fit: "cover" },
    { src: "/img6.png", w: 425, h: 433, top: 15, left: 1374, fit: "fill" },
    { src: "/img7.png", w: 178, h: 242, top: 463, left: 1068, fit: "fill" },
    { src: "/img8.png", w: 258, h: 196, top: 463, left: 1262, fit: "fill" },
    {
      src: "/img9.png",
      w: 295,
      h: 392,
      top: 156,
      left: "50%",
      fit: "cover",
      centerX: true,
    },
  ];
  return (
    <section className="w-full my-[50px] relative overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center lg:h-[86px] lg:w-[356px] lg:ml-[525px]">
        <p className="md:text-[20px] font-medium text-[rgba(97,97,97,1)] leading-[1.5]">
          Share your setup with
        </p>
        <h2 className="md:text-[40px] font-bold text-[rgba(58,58,58,1)] leading-[1.2]">
          #FuniroFurniture
        </h2>
      </div>

      <div className="w-full h-[721px] relative mt-[20px] lg:mt-[9px]">
        {/* Mobile & Tablet Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-4 lg:hidden">
          {imagesData.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full"
              style={{ aspectRatio: `${img.w} / ${img.h}` }}
            >
              <Image
                src={img.src}
                alt={`Image ${idx + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="absolute h-[721px] overflow-hidden left-1/2 top-0 -translate-x-1/2 w-[1799px] ">
          {imagesData.map((img, idx) => (
            <Image
              key={idx}
              className="absolute"
              style={{
                width: `${img.w}px`,
                height: `${img.h}px`,
                objectFit: img.fit,
                top: `${img.top}px`,
                left: typeof img.left === "number" ? `${img.left}px` : img.left,
                transform: img.centerX ? "translateX(-50%)" : undefined,
              }}
              src={img.src}
              alt={`Image ${idx + 1}`}
              width={img.w}
              height={img.h}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
