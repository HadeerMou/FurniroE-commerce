//shop page
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ProductList from "../components/ProductList";
import FeatureHighlights from "../components/FeatureHighlights";
import PageHeader from "../components/PageHeader";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string;
}

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
      <PageHeader title="Shop" />
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
      <FeatureHighlights />
    </>
  );
};

export default Shop;
