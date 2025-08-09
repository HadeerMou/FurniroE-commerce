import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t h-[505px] border-[rgba(0,0,0,0.17)] [font-family:var(--font-poppins)]">
      <div className="mt-[48px] mx-auto px-[100px] flex justify-between">
        <div>
          <h3 className="font-bold text-[24px] mb-[36px]">Furniro.</h3>
          <div className="text-[16px] text-[rgba(159,159,159,1)] font-normal w-[285px] h-[72px]">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>
        <div>
          <p className="text-[16px] text-[rgba(159,159,159,1)] mb-[55px] font-medium">
            Links
          </p>
          <div className="flex flex-col gap-y-[46px] font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-[16px] text-[rgba(159,159,159,1)] mb-[55px]">
            Help
          </p>
          <div className="flex flex-col gap-y-[46px]">
            <Link href="/payment">Payment Options</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/privacy-policy">Privacy Policies</Link>
          </div>
        </div>
        <div>
          <p className="text-[16px] text-[rgba(159,159,159,1)] mb-[55px]">
            Newsletter
          </p>
          <div className="flex items-center gap-2">
            <input
              className="border-b border-[rgba(0,0,0,1)] text-[rgba(159,159,159,1)] text-[14px] pe-5"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <button className="uppercase border-b border-[rgba(0,0,0,1)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[48px] w-[1240px] mx-auto">
        <hr className="border-t border-[rgba(217,217,217,1)]" />
        <p className="mt-[24px] text-[16px] font-normal text-[rgba(0,0,0,1)]">
          © 2023 Furniro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
