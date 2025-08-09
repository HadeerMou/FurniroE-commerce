"use client";
import { ArrowLeft, Bold, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { text } from "stream/consumers";

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

  return (
    <>
      <div className="relative w-full h-[716.83px]">
        <Image
          src="/Mask Group.jpg"
          alt="Mask Group"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="w-[1183px] h-[685px] mx-auto my-[127.53px] flex flex-col gap-y-[62px]">
        <div className="flex flex-col w-[559px] h-[76.71px] text-center justify-center mx-auto">
          <h3 className="text-[32px] font-bold text-[rgba(51,51,51,1)]">
            Browse The Range
          </h3>
          <p className="text-[20px] text-[rgba(102,102,102,1)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col items-center gap-[30px]">
            <Image
              src="/dinning.png"
              alt=""
              width={381}
              height={480}
              className="object-cover"
            />
            <p>Dinning</p>
          </div>
          <div className="flex flex-col items-center gap-[30px]">
            <Image
              src="/living.png"
              alt=""
              width={381}
              height={480}
              className="object-cover"
            />
            <p>Living</p>
          </div>
          <div className="flex flex-col items-center gap-[30px]">
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
      <section className="h-[670px] w-full bg-[rgba(252,248,243,1)] flex overflow-hidden">
        <div className="flex flex-col ml-[100px] my-auto">
          <div className="w-[422px] h-[151px]">
            <h3 className="text-[24px] font-bold text-[rgba(51,51,51,1)]">
              Explore Our Designs
            </h3>
            <p className="text-[16px] font-medium text-[rgba(97,97,97,1)]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[rgba(184,142,47,1)] text-[16px] text-[rgba(255,255,255,1)] lg:w-[176px] lg:h-[48px]">
            Explore More
          </button>
        </div>
        <div className="relative h-[582px] w-[404px] mt-[44px] flex-shrink-0 me-[24px] ">
          <Image
            src={images[currentIndex].src}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="transition-opacity duration-500"
            priority
          />
          <div
            className="absolute flex items-end"
            style={{
              top: `${3235 - 2807}px`,
              left: `${588 - 564}px`,
            }}
          >
            <div className="flex flex-col gap-2 justify-center items-center w-[217px] h-[130px] top-0 left-0 p-4 bg-[rgba(255,255,255,0.72)] backdrop-blur-sm">
              <p className="flex items-center gap-2 text-[16px] font-medium text-[rgba(97,97,97,1)] leading-[1.5]">
                0{images[currentIndex].id}
                <Image src="/Vector 1.svg" alt="" width={27} height={1} />
                <span>{images[currentIndex].text}</span>
              </p>
              <h3 className="text-[28px] leading-[1.2]">Inner Peace</h3>
            </div>
            <div className="w-[48px] h-[48px] bg-[rgba(184,142,47,1)] flex justify-center items-center">
              <Image src="/Vector 2.svg" alt="" width={18} height={12} />
            </div>
          </div>
        </div>
        <div className="relative flex-grow ml-8 flex flex-col mt-[44px]">
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
          {/* Arrows */}
          <div className="absolute flex top-50 left-83 h-full w-full justify-between px-4">
            <button
              onClick={nextImage}
              aria-label="Scroll Next"
              className="w-[48px] h-[48px] rounded-full bg-white shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center"
            >
              <ChevronRight className="text-[rgba(184,142,47,1)]" size={24} />
            </button>
          </div>
          {/* Dots vertical */}
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
        <div className="flex flex-col items-center justify-center text-center h-[86px] w-[356px] ml-[525px]">
          <p className="text-[20px] font-medium text-[rgba(97,97,97,1)] leading-[1.5]">
            Share your setup with
          </p>
          <h2 className="text-[40px] font-bold text-[rgba(58,58,58,1)] leading-[1.2]">
            #FuniroFurniture
          </h2>
        </div>
        <div className="w-full h-[721px] relative mt-[9px]">
          <div className="absolute h-[721px] overflow-hidden left-1/2 top-0 -translate-x-1/2 w-[1799px] ">
            <Image
              className="absolute top-[0px] bottom-0 left-[0px]"
              style={{ width: "274px", height: "382px", objectFit: "cover" }}
              src="/img1.png"
              alt="Image 1"
              width={274}
              height={382}
            />
            <Image
              className="absolute top-[70px] bottom-0 left-[290px]"
              style={{ width: "451px", height: "312px", objectFit: "cover" }}
              src="/img2.png"
              alt="Image 2"
              width={451}
              height={312}
            />
            <Image
              className="absolute top-[400px] left-[0px]"
              style={{ width: "381px", height: "323px", objectFit: "cover" }}
              src="/img3.png"
              alt="Image 3"
              width={381}
              height={323}
            />
            <Image
              className="absolute top-[400px] left-[397px]"
              style={{ width: "344px", height: "242px", objectFit: "fill" }}
              src="/img4.png"
              alt="Image 4"
              width={344}
              height={242}
            />
            <Image
              className="absolute top-[100px] left-[1068px]"
              style={{ width: "290px", height: "348px", objectFit: "cover" }}
              src="/img5.png"
              alt="Image 5"
              width={290}
              height={348}
            />
            <Image
              className="absolute top-[15px] left-[1374px]"
              style={{ width: "425px", height: "433px", objectFit: "fill" }}
              src="/img6.png"
              alt="Image 6"
              width={425}
              height={433}
            />
            <Image
              className="absolute top-[463px] left-[1068px]"
              style={{ width: "178px", height: "242px", objectFit: "fill" }}
              src="/img7.png"
              alt="Image 7"
              width={178}
              height={242}
            />
            <Image
              className="absolute top-[463px] left-[1262px]"
              style={{ width: "258px", height: "196px", objectFit: "fill" }}
              src="/img8.png"
              alt="Image 8"
              width={258}
              height={196}
            />
            <Image
              className="absolute top-[156px] left-1/2 -translate-x-1/2"
              style={{ width: "295px", height: "392px", objectFit: "cover" }}
              src="/img9.png"
              alt="Image 9"
              width={295}
              height={392}
            />
          </div>
        </div>
      </section>
    </>
  );
}
