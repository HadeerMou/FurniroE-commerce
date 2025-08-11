"use client";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
import HeaderMenu from "./HeaderMenu";
import { useCart } from "../context/CartContext";
import Image from "next/image";

const Header = () => {
  const { toggleCartVisibility } = useCart();

  return (
    <header className="shadow px-5 md:px-[77px] flex justify-between items-center h-[60px] md:h-[100px]">
      <div className="flex items-center">
        <Image
          className="w-[50px] h-[32px] object-cover"
          src="/logo.png"
          alt="Furniro Logo"
          width={50}
          height={32}
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
      <nav className="hidden md:flex items-center gap-[38px]">
        <Image src="/user.svg" alt="User Icon" width={23} height={23} />
        <Search size={23} />
        <Image
          src="/akar-icons_heart.svg"
          alt="Heart Icon"
          width={23}
          height={23}
        />
        <Image
          src="/cart.svg"
          alt="Cart Icon"
          width={23}
          height={23}
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
