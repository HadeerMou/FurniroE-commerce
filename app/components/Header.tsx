"use client";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
import HeaderMenu from "./HeaderMenu";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { toggleCartVisibility } = useCart();

  return (
    <header className="bg-white shadow px-5 md:px-[77px] flex justify-between items-center h-[60px] md:h-[100px]">
      <div className="flex items-center">
        <img
          className="w-[50px] h-[32px] object-cover"
          src="/logo.png"
          alt="Furniro Logo"
        />
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold [font-family:var(--font-montserrat)]">
          Furniro
        </h2>
      </div>
      {/* Desktop navigation - visible md and up */}
      <nav className="hidden md:flex gap-[66px]">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      {/* Desktop icons - visible md and up */}
      <nav className="hidden md:flex items-center gap-[45px]">
        <img src="/user.svg" alt="User Icon" />
        <Search />
        <img src="/akar-icons_heart.svg" alt="Heart Icon" />
        <img
          src="/cart.svg"
          alt="Cart Icon"
          className="cursor-pointer"
          onClick={toggleCartVisibility}
        />
      </nav>
      {/*  menu - visible in mobile */}
      <div className="flex md:hidden">
        <HeaderMenu toggleCartVisibility={toggleCartVisibility} />
      </div>
    </header>
  );
};

export default Header;
