import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow px-[77px] flex justify-between items-center h-[100px]">
      <div className="flex items-center">
        <img className="w-[50px] h-[32px]" src="/logo.png" alt="Furniro Logo" />
        <h2 className="text-[34px] font-bold [font-family:var(--font-montserrat)]">
          Furniro
        </h2>
      </div>
      <nav className="flex gap-[66px]">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav className="flex items-center gap-[45px]">
        <img src="/user.svg" alt="User Icon" />
        <Search />
        <img src="/akar-icons_heart.svg" alt="Heart Icon" />
        <img src="/cart.svg" alt="Cart Icon" />
      </nav>
    </header>
  );
};

export default Header;
