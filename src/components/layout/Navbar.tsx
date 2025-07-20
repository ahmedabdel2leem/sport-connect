"use client"
import Image from "next/image";
import useLenisScroll from '@/hooks/useLenis';
export default function Navbar() {
    useLenisScroll();
  return (
    <header className="w-full flex justify-between items-center absolute top-0 left-0 z-50  ps-24 pe-32 py-6 gap-4  ">
      <div className="flex items-center gap-2">
        <Image
          width={100}
          height={100}
          className="object-contain w-[2.5vw]"
          src="./logo3.svg"
          alt=""
        />
        <span className="tracking-wide font-bold bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          SportConnect
        </span>
      </div>
      <div className="items-center flex text-white gap-3">
        <span className="relative after:absolute  after:-right-2 after:top-[60%] after:-translate-y-1/2 after:bg-white after:w-1 after:h-1 after:rounded-full">
          AR
        </span>
        <span>EN</span>
      </div>
    </header>
  );
}
