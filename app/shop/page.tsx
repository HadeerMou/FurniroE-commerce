//shop page
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ProductList from "../components/ProductList";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string;
}

const offer = [
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

const Shop = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setAllProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  return (
    <>
      <div>
        <div className="relative h-[120px] md:h-[316px] w-full">
          <Image
            src="/Rectangle 1.png"
            alt="Shop Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center absolute top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-[221px] md:left-[658px] md:w-[124px] md:h-[72px] text-[rgba(0,0,0,1)] font-medium">
          <h2 className="text-[20px] md:text-[48px]">Shop</h2>
          <div className="flex items-center md:gap-1 text-xs md:text-[16px]">
            Home{" "}
            <div className="w-4 h-4 md:w-5 md:h-5">
              <ChevronRight className="w-full h-full" />
            </div>{" "}
            Shop
          </div>
        </div>
      </div>
      <section className="flex md:flex-row flex-col items-center justify-around bg-[rgba(249,241,231,1)] h-[100px] w-full">
        <div className="flex items-center gap-4 md:gap-10">
          <span className="flex items-center gap-2 md:gap-4 md:text-[20px] ">
            <Image
              className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
              src="/filter.svg"
              alt="Filter"
              width={24}
              height={24}
            />
            Filter
          </span>
          <div className="flex gap-4 md:gap-10">
            <Image
              className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
              src="/cat.svg"
              alt="Category"
              width={24}
              height={24}
            />
            <Image
              className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
              src="/prod.svg"
              alt="Sort"
              width={24}
              height={24}
            />
          </div>
          <div className="flex items-center border-l-2 h-[37px] border-[rgba(159,159,159,1)] text-xs md:text-[16px] text-[rgba(0,0,0,1)]">
            <p className="ml-2 md:ml-[34px]"></p>Showing 1-16 of 32 results
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-[29px]">
          <div className="flex items-center gap-2 md:gap-[17px]">
            <p className="text-sm md:text-base">Show</p>
            <span className="w-[25px] h-[25px] md:w-[55px] md:h-[55px] bg-[rgba(255,255,255,1)] text-[rgba(159,159,159,1)] text-xs md:text-[20px] flex items-center justify-center">
              16
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-[17px]">
            <p className="text-sm md:text-base">Sort by</p>
            <span className="w-[80px] h-[25px] md:w-[188px] md:h-[55px] bg-[rgba(255,255,255,1)] text-[rgba(159,159,159,1)] text-xs md:text-[20px] flex items-center justify-center">
              Default
            </span>
          </div>
        </div>
      </section>
      <ProductList products={allProducts} />
      <section className="grid grid-cols-2 md:grid-cols-4 md:justify-items-center px-2 gap-x-2 items-center bg-[rgba(249,241,231,1)] h-[150px] md:h-[270px] w-full">
        {offer.map((o) => (
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] md:w-[50px] md:h-[50px]"
              src={o.img}
              alt="Category"
              width={50}
              height={50}
            />
            <div className="flex flex-col max-w-[150px] sm:max-w-full">
              <h3 className="text-sm md:text-[25px] font-bold text-[rgba(36,36,36,1)]">
                {o.title}
              </h3>
              <p className="text-xs md:text-[20px] text-[rgba(137,137,137,1)]">
                {o.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Shop;
