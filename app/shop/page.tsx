//shop page
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Shop = () => {
  return (
    <div>
      <div className="relative h-[316px] w-full">
        <Image
          src="/Rectangle 1.png"
          alt="Shop Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col items-center absolute top-[221px] left-[658px] w-[124px] h-[72px] text-[rgba(0,0,0,1)] font-medium">
        <h2 className="text-[48px]">Shop</h2>
        <p className="flex items-center gap-1 text-[16px]">
          Home <ChevronRight size={20} /> Shop
        </p>
      </div>
    </div>
  );
};

export default Shop;
