"use client";
import Image from "next/image";
import React from "react";
import { ChevronRight } from "lucide-react";

type PageHeaderProps = {
  title: string;
  showLogo?: boolean; // optional flag to show logo above title (only in cart page)
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, showLogo = false }) => {
  return (
    <div className="">
      <div className="relative h-[120px] md:h-[316px] w-full">
        <Image
          src="/Rectangle 1.png"
          alt={`${title} Banner`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className={`flex flex-col items-center absolute ${
          showLogo ? "top-10 md:top-[160px]" : "top-20 md:top-[221px]"
        }  left-1/2 -translate-x-1/2 md:translate-x-0  md:left-[658px] md:w-[124px] md:h-[72px] text-[rgba(0,0,0,1)] font-medium`}
      >
        {showLogo && (
          <div className="">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="mx-auto object-contain"
            />
          </div>
        )}
        <h2 className="text-[20px] md:text-[48px] leading-tight">{title}</h2>
        <div className="flex items-center md:gap-1 text-xs md:text-[16px]">
          Home{" "}
          <div className="w-4 h-4 md:w-5 md:h-5">
            <ChevronRight className="w-full h-full" />
          </div>{" "}
          {title}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
