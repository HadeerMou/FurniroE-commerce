"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { Trash } from "lucide-react";

const CartItems = () => {
  const { cartItems } = useCart();

  // Calculate subtotal by summing price * quantity for all items
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(/,/g, "")) * parseInt(item.quantity),
    0
  );

  const total = subtotal;

  return (
    <section className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around p-[40px] md:my-5">
      <div className="flex flex-col w-full md:w-[817px]">
        <div className="hidden md:flex items-center justify-between h-[55px] bg-[rgba(249,241,231,1)]">
          <p className="text-transparent">Image</p>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p className="text-transparent">del</p>
        </div>
        <div className="flex flex-row md:flex-col md:items-center gap-4 p-2 mt-10">
          {cartItems.length === 0 && <p>Your cart is empty</p>}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:w-[817px] gap-2 md:gap-0 justify-between"
            >
              <Image
                className="bg-[rgba(217,217,217,1)] rounded-[10px] object-cover w-[100px] h-[100px] md:w-[108px] md:h-[105px]"
                src={item.img}
                alt={item.name}
                width={108}
                height={105}
              />
              <p className="text-[rgba(159,159,159,1)]">{item.name}</p>
              <p className="text-[rgba(159,159,159,1)]">{item.price}</p>
              <p className="flex items-center justify-center text-center w-[32px] h-[32px] border border-[rgba(159,159,159,1)] rounded-[5px]">
                {item.quantity}
              </p>
              <p>
                Rs.{" "}
                {(
                  parseFloat(item.price.replace(/,/g, "")) *
                  parseInt(item.quantity)
                ).toLocaleString()}
              </p>
              <Image src="/Vector.png" alt="trash" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col pb-5 md:pb-0 items-center bg-[rgba(249,241,231,1)] md:w-[393px] md:h-[390px]">
        <h2 className="text-xl md:text-[32px] font-semibold mb-10 md:mb-[61px] mt-4">
          Cart Totals
        </h2>
        <div className="flex flex-col md:text-[16px] gap-8 w-full mb-10">
          <div className="flex justify-around">
            <p className="font-medium">Subtotal</p>
            <p className="text-[rgba(159,159,159,1)]">
              Rs. {subtotal.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-around">
            <p className="font-medium">Total</p>
            <p className="md:text-[20px] text-[rgba(184,142,47,1)]">
              Rs. {subtotal.toLocaleString()}
            </p>
          </div>
        </div>
        <button className="w-[100px] h-[30px] md:w-[222px] md:h-[58.95px] border border-[rgba(0,0,0,1)] rounded md:rounded-[15px] md:text-[20px]">
          Check Out
        </button>
      </div>
    </section>
  );
};

export default CartItems;
