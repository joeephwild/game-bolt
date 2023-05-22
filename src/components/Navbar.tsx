import { logo } from "@/images";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#100111] flex items-center justify-around px-5 py-3 text-[#ffff] w-full">
      <Image src={logo} alt="logo" className="h-25 w-25 object-contain" />
      <ul className="flex items-center cursor-pointer space-x-[50px]">
        <li className="text-[16px] leading-[20.48px] font-bold">Sports</li>
        <li className="text-[16px] leading-[20.48px] font-bold">
          Live betting
        </li>
        <li className="text-[16px] leading-[20.48px] font-bold">Poker</li>
      </ul>
      <button className="bg-[#F0AC41] px-4 py-2.5 items-center text-[#000] font-bold text-[16px] rounded-[5px]">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
