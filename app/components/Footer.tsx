import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t lg:h-[505px] border-[rgba(0,0,0,0.17)] [font-family:var(--font-poppins)]">
      <div className="mt-12 mx-auto px-6 md:px-[100px] flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        <div className="flex-1">
          <h3 className="font-bold text-2xl mb-9">Furniro.</h3>
          <div className="text-base text-[rgba(159,159,159,1)] font-normal max-w-[285px]">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1">
          <p className="text-base text-[rgba(159,159,159,1)] mb-6 md:mb-[55px] font-medium">
            Links
          </p>
          <div className="flex flex-col gap-4 md:gap-[46px] font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* Help */}
        <div className="flex-1">
          <p className="text-base text-[rgba(159,159,159,1)] mb-6 md:mb-[55px]">
            Help
          </p>
          <div className="flex flex-col gap-4 md:gap-[46px]">
            <Link href="/payment">Payment Options</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/privacy-policy">Privacy Policies</Link>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex-1">
          <p className="text-base text-[rgba(159,159,159,1)] mb-6 md:mb-[55px]">
            Newsletter
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm gap-4 sm:gap-2">
            <input
              className="border-b border-[rgba(0,0,0,1)] text-[rgba(159,159,159,1)] pe-5 pb-1 focus:outline-none w-full sm:w-auto"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <button className="uppercase border-b border-[rgba(0,0,0,1)] font-medium pb-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="pt-12 w-full md:w-[1240px] mx-auto px-6 md:px-0">
        <hr className="border-t border-[rgba(217,217,217,1)]" />
        <p className="mt-6 text-base font-normal text-[rgba(0,0,0,1)]">
          © 2023 Furniro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
