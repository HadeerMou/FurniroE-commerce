"use client";
import Image from "next/image";
import React from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { isCartVisible, toggleCartVisibility } = useCart();
  if (!isCartVisible) return null;

  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      img: "/cart/asgaard sofa.png",
      price: "250,000.00",
      quantity: "1",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      img: "/cart/casaliving wood.png",
      price: "270,000.00",
      quantity: "1",
    },
  ];
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(/,/g, "")) * parseInt(item.quantity),
    0
  );

  return (
    <>
      {/* Overlay */}
      {isCartVisible && (
        <div
          className="fixed inset-0 h-full bg-[rgba(0,0,0,0.2)] z-40"
          onClick={toggleCartVisibility}
        ></div>
      )}
      <div
        className={`fixed p-[33.6px] top-0 gupter-regular h-full md:h-[746px] bg-white shadow-lg flex flex-col z-50 md:w-[417px] w-full ${
          isCartVisible
            ? "translate-0 right-0 transform transition-transform duration-300"
            : "translate-x-full right-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[24px] font-semibold text-[rgba(0,0,0,1)]">
            Shopping Cart
          </h2>
          <div className="relative w-[16.63] h-[19px]">
            <Image
              src="/cart.png"
              alt="cart"
              fill
              onClick={toggleCartVisibility}
              className="cursor-pointer"
            />
          </div>
        </div>
        <hr className="border border-[rgba(217,217,217,1)] w-[287px]" />
        <div className="flex flex-grow overflow-y-auto flex-col gap-10 mt-10 text-[rgba(0,0,0,1)]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center h-[105px]"
              >
                <div className="flex items-center rounded w-[108px]">
                  <Image
                    className="rounded bg-[rgba(217,217,217,1)] w-[105px] h-[105px]"
                    src={item.img}
                    alt={item.name || "Product"}
                    width={105}
                    height={105}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px]">{item.name}</h3>
                  <div className="flex items-center text-[12px] font-light">
                    <p className="text-[16px] font-light">{item.quantity}</p>
                    <span>X</span>
                    <p className="text-[rgba(184,142,47,1)] font-medium">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-[20px] h-[20px] text-white bg-[rgba(159,159,159,1)] rounded-full">
                  <X className="p-1" />
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        <div className="mb-5">
          <div className="flex gap-30 mb-2">
            <h4>Subtotal</h4>
            <p className="font-semibold text-[rgba(184,142,47,1)]">
              Rs.{subtotal.toLocaleString()}
            </p>
          </div>
          <hr className="border border-[rgba(217,217,217,1)] w-full mb-3" />
          <div className="flex items-center justify-between gap-2 text-[12px]">
            <button className="w-[87px] h-[30px] rounded-[50px] border border-[rgba(0,0,0,1)]">
              Cart
            </button>
            <button className="w-[118px] h-[30px] rounded-[50px] border border-[rgba(0,0,0,1)]">
              Checkout
            </button>
            <button className="w-[135px] h-[30px] rounded-[50px] border border-[rgba(0,0,0,1)]">
              Comparison
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
