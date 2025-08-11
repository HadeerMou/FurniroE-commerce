"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const images = [
  { id: 1, src: "/Image.png", text: "Bed Room" },
  { id: 2, src: "/image2.png", text: "Living Room" },
  { id: 3, src: "/image3.png", text: "Dining Room" },
];

const RoomInspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const rotatedImages = [
    ...images.slice(currentIndex + 1),
    ...images.slice(0, currentIndex),
  ];
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="h-[670px] w-full bg-[rgba(252,248,243,1)] flex flex-col lg:flex-row overflow-hidden md:gap-10">
      <div className="flex flex-col my-8 ml-6 md:ml-[100px] md:my-auto md:me-20 md:gap-[25px]">
        <div className="w-[280px] mb-5 md:mb-0 md:w-[422px] md:h-[151px]">
          <h3 className="text-xl md:text-[40px] font-bold text-[rgba(51,51,51,1)]">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="text-xs md:text-[16px] font-medium text-[rgba(97,97,97,1)]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
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
          {rotatedImages.map(({ src, id }) => (
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
  );
};

export default RoomInspiration;
