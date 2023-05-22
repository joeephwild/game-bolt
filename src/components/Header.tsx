import React from "react";
import HeaderImages from "./HeaderImages";

const Header = () => {
  return (
    <section className="mt-[175px] relative flex flex-col items-center justify-center min-w-full min-h-full">
      <div className="flex-col flex items-center space-y-9">
        <h2 className="text-[50px] leading-[40.96px] font-black">
          <span className="rotate bg-[#F0AC41] rounded-[50px]  p-5">
            Where 
          </span>
          {""} Sports and <span className="text-[#F0AC41]">Blockchain</span> Collide
        </h2>
        <span className="text-[32px] font-black">
          Stake, Win, and Dominate the Future of Athletic Investments
        </span>
      </div>
      <button className="bg-[#F0AC41] px-8 py-2.5 mt-9 items-center text-[#000] font-bold text-[16px] rounded-[5px]">Connect Wallet</button>
      <HeaderImages />
    </section>
  );
};

export default Header;
