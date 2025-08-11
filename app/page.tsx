"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import HomeProducts from "./components/HomeProducts";
import HeroSection from "./components/HeroSection";
import BrowseRange from "./components/BrowseRange";
import RoomInspiration from "./components/RoomInspiration";
import ImageGrid from "./components/ImageGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrowseRange />
      <HomeProducts />
      <RoomInspiration />
      <ImageGrid />
    </>
  );
}
