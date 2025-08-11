"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string;
}

const HomeProducts = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setAllProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList
        products={allProducts}
        pageSize={allProducts.length}
        duplicates={1}
        showPagination={false}
        isHome={true}
      />
    </div>
  );
};

export default HomeProducts;
