"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
  pageSize?: number; // number of unique products per page (default 4)
  duplicates?: number; // how many times to duplicate each product (default 4)
  showPagination?: boolean; // whether to show pagination controls (default true)
  isHome?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  pageSize = 4,
  duplicates = 4,
  showPagination = true,
  isHome = false,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages based on total products and pageSize
  const totalPages = Math.ceil(products.length / pageSize);

  // Get the slice of products for current page
  const pageProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Duplicate each product 'duplicates' times
  const displayedProducts = Array(duplicates).fill(pageProducts).flat();

  return (
    <>
      {isHome && (
        <h2 className="text-2xl md:text-[40px] font-bold text-center">
          Our Products
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center px-4 md:px-8 gap-4 md:gap-10 mt-6 md:mt-10 mb-8 md:mb-10">
        {displayedProducts.map((product, index) => {
          const discountedPrice =
            product.price * (1 - (product.discount ?? 0) / 100);

          return (
            <div
              className="w-[160px] h-[250px] md:w-[285px] md:h-[446px]"
              key={`${product.id}-${index}`}
            >
              <img
                className="w-full object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="flex flex-col bg-[rgba(244,245,247,1)] py-2 px-2 md:pt-4 md:pr-5 md:pb-7 md:pl-4 h-[90px] md:h-[145px]">
                <h2 className="text-sm md:text-[24px] font-medium truncate">
                  {product.name}
                </h2>
                <p className="text-[10px] md:text-[16px] text-[rgba(137,137,137,1)] line-clamp-2">
                  {product.description}
                </p>
                {product.discount ? (
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <p className="text-sm md:text-[20px] text-[rgba(58,58,58,1)]">
                      {discountedPrice.toLocaleString()}
                    </p>
                    <p className="text-[10px] md:text-[16px] text-[rgba(176,176,176,1)] line-through">
                      {product.price.toLocaleString()}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm md:text-[20px] text-[rgba(58,58,58,1)]">
                    {product.price.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {isHome && (
        <div className="flex justify-center md:mb-10">
          <button
            onClick={() => router.push("/shop")}
            className="cursor-pointer border border-[rgba(184,142,47,1)] bg-[rgba(255,255,255,1)] text-[rgba(184,142,47,1)] text-xs md:text-[16px] w-[120px] h-[30px] md:w-[245px] md:h-[48px] rounded hover:border-yellow-600 transition"
          >
            Show More
          </button>
        </div>
      )}
      {/* Pagination controls */}
      <div className="flex justify-center gap-4 mb-10">
        {/* Prev button */}
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-md bg-[rgba(249,241,231,1)] text-black md:text-[20px]"
          >
            &lt;
          </button>
        )}

        {showPagination !== false && totalPages > 1 && (
          <div className="flex justify-center gap-2 md:gap-4 md:mb-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-md md:text-[20px] ${
                  currentPage === i + 1
                    ? "bg-[rgba(184,142,47,1)] text-white"
                    : "bg-[rgba(249,241,231,1)] text-black"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
        {/* Next button */}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="h-[30px] w-[49px] md:w-[98px] md:h-[60px] rounded-md bg-[rgba(249,241,231,1)] text-[rgba(0,0,0,1)] md:text-[20px] font-light"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default ProductList;
