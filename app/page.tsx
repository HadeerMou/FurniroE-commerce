"use client";
import { ArrowLeft, Bold, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { text } from "stream/consumers";
import HomeProducts from "./components/HomeProducts";

const images = [
  { id: 1, src: "/Image.png", text: "Bed Room" },
  { id: 2, src: "/image2.png", text: "Living Room" },
  { id: 3, src: "/image3.png", text: "Dining Room" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 400; // adjust based on image width + margin

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
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
    <>
      <section>
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[717px]">
          <Image
            src="/HomeWidget.png"
            alt="Mask Group"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute flex flex-col p-[40px_20px] sm:p-[50px_30px] md:p-[62px_43px_37px_39px] w-[90%] max-w-[643px] top-[15%] sm:top-[18%] md:top-[21.95%] left-1/2 sm:left-[48%] md:left-[51.32%] h-auto md:h-[443px] -translate-x-1/2 sm:-translate-x-[40%] md:translate-x-0 bg-[rgba(255,243,227,1)] rounded-[10px]">
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
      <section className="md:w-[1183px] md:h-[685px] mx-auto my-8 md:my-[127.53px] flex flex-col md:gap-y-[62px]">
        <div className="flex flex-col w-[300px] md:w-[559px] h-[76.71px] text-center justify-center mx-auto">
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
      <HomeProducts />
      <section className="h-[670px] w-full bg-[rgba(252,248,243,1)] flex flex-col lg:flex-row overflow-hidden">
        <div className="flex flex-col my-8 ml-6 md:ml-[100px] md:my-auto md:me-20 md:gap-[25px]">
          <div className="w-[280px] mb-5 md:mb-0 md:w-[422px] md:h-[151px]">
            <h3 className="text-xl md:text-[40px] font-bold text-[rgba(51,51,51,1)]">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="text-xs md:text-[16px] font-medium text-[rgba(97,97,97,1)]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <button className="btn sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[rgba(184,142,47,1)] md:text-[16px] text-[rgba(255,255,255,1)] w-[176px] lg:h-[48px]">
            Explore More
          </button>
        </div>
        <div className="relative h-[400px] w-[300px] md:h-[582px] md:w-[404px] mt-[20px] mx-auto md:mx-0 md:mt-[44px] flex-shrink-0 md:me-[24px] ">
          <Image
            src={images[currentIndex].src}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="transition-opacity duration-500"
            priority
          />
          <div className="absolute flex items-end top-[260px] left-4 sm:top-[350px] sm:left-5 lg:top-[428px] lg:left-6">
            <div className="flex flex-col gap-2 justify-center items-center w-[160px] h-[100px] md:w-[217px] md:h-[130px] top-0 left-0 p-4 bg-[rgba(255,255,255,0.72)] backdrop-blur-sm">
              <p className="flex items-center justify-center gap-1 text-xs md:text-[16px] font-medium text-[rgba(97,97,97,1)] leading-[1.5]">
                0{images[currentIndex].id}
                <span className="relative w-[27px] h-[1px] md:w-[35px] md:h-[2px]">
                  <Image
                    src="/Vector 1.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
                <span>{images[currentIndex].text}</span>
              </p>
              <h3 className="text-lg md:text-[28px] leading-[1.2]">
                Inner Peace
              </h3>
            </div>
            <div className="w-[35px] h-[35px] md:w-[48px] md:h-[48px] bg-[rgba(184,142,47,1)] flex justify-center items-center">
              <div className="relative w-[18px] h-[12px] sm:w-[22px] sm:h-[15px] lg:w-[18px] lg:h-[12px]">
                <Image
                  src="/Vector 2.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* Mobile arrows (hidden on desktop) */}
          <div className="absolute inset-0 flex justify-between items-center px-4 lg:hidden">
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? images.length - 1 : currentIndex - 1
                )
              }
              className="w-[40px] h-[40px] bg-white/70 rounded-full flex items-center justify-center shadow-md"
            >
              <ChevronLeft className="text-[rgba(184,142,47,1)]" size={20} />
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === images.length - 1 ? 0 : currentIndex + 1
                )
              }
              className="w-[40px] h-[40px] bg-white/70 rounded-full flex items-center justify-center shadow-md"
            >
              <ChevronRight className="text-[rgba(184,142,47,1)]" size={20} />
            </button>
          </div>
        </div>
        <div className="relative flex-grow ml-8 hidden lg:flex flex-col mt-[44px]">
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="relative flex overflow-x-hidden whitespace-nowrap space-x-6 max-w-full "
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map(({ src, id }) => (
              <div
                key={id}
                className={`relative flex-shrink-0 cursor-pointer rounded-md border-4 ${
                  currentIndex === id - 1
                    ? "border-[rgba(184,142,47,1)]"
                    : "border-transparent"
                }`}
                style={{ width: 372, height: 486 }}
                onClick={() => setCurrentIndex(id - 1)}
              >
                <Image src={src} alt={`Image ${id}`} fill />
              </div>
            ))}
          </div>
          {/* Desktop arrow */}
          <div className="absolute flex top-50 left-83 h-full w-full justify-between px-4">
            <button
              onClick={nextImage}
              aria-label="Scroll Next"
              className="w-[48px] h-[48px] rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center"
            >
              <ChevronRight className="text-[rgba(184,142,47,1)]" size={24} />
            </button>
          </div>
          {/* Desktop Dots vertical */}
          <div
            className="flex mt-[40px] items-center justify-center gap-[20px]"
            style={{ width: 120, height: 27 }}
          >
            {images.map((_, index) => (
              <div
                key={index}
                className={`flex justify-center items-center w-[27px] h-[27px] ${
                  currentIndex === index
                    ? "border rounded-full border-[rgba(184,142,47,1)]"
                    : ""
                }`}
              >
                <button
                  className={`rounded-full w-[11px] h-[11px] ${
                    currentIndex === index
                      ? "bg-[rgba(184,142,47,1)]"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
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
                  left:
                    typeof img.left === "number" ? `${img.left}px` : img.left,
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
    </>
  );
}
