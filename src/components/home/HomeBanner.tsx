import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function HomeBanner() {
  return (
    <div className="flex items-center justify-between relative  px-16">
      <div className="BannerDesc ps-10">
        <h1 className="text-6xl font-bold text-white uppercase tracking-wide w-[37vw]">
          Welcome to the Future of Sports
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Discover the latest in athletic performance and innovation.
        </p>
        {/* <button className="mt-6 px-6 py-3 border border-blue-700 text-white rounded-lg hover:bg-blue-700 transition">
          Explore Now
        </button> */}
        <div className="mt-6">
          <InteractiveHoverButton className="rounded-lg bg-none py-3 text-white border-blue-500">
            Explore Now
          </InteractiveHoverButton>
          ;
        </div>
      </div>

      <div className="relative w-[50%] h-[100vh] ms-auto">
        <Image className="object-contain" fill alt="" src={"/athlets.webp"} />
      </div>
    </div>
  );
}
