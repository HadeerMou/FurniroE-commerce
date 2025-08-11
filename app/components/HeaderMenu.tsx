"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const HeaderMenu = ({
  toggleCartVisibility,
}: {
  toggleCartVisibility: () => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {" "}
      {/* Mobile menu icon */}
      <button
        className="block md:hidden p-2"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="absolute top-[60px] left-0 right-0 bg-white shadow-md flex flex-col items-center font-lighter gap-4 py-4 md:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <hr className="border/10 w-80 border-gray-200" />
          <div className="flex items-center gap-6 my-4">
            <img className="w-5 h-4" src="/user.svg" alt="User Icon" />
            <Search className="w-6 h-5" />
            <img
              className="w-6 h-5"
              src="/akar-icons_heart.svg"
              alt="Heart Icon"
            />
            <img
              onClick={() => {
                toggleCartVisibility();
                setMenuOpen(false);
              }}
              className="w-5 h-4"
              src="/cart.svg"
              alt="Cart Icon"
            />
          </div>
        </nav>
      )}
    </div>
  );
};

export default HeaderMenu;
