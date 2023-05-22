import { boxing, football, golf, rugby, sport1 } from "@/images";
import Image from "next/image";
import React from "react";

const HeaderImages = () => {
  return (
    <div className="mt-[120px]">
      <div >
        <Image src={golf} alt="golf" className="absolute left-[36px] w-[168px] h-[168px] bottom-18" />
        <Image src={football} alt="golf" className="absolute left-[20%] w-[168px] h-[168px]  top-[120%]"  />
        <Image src={boxing} alt="golf" className="absolute left-[30%] w-[168px] h-[168px] bottom-18" />
        <Image src={rugby} alt="golf" className="absolute left-[35%] w-[168px] h-[168px]  top-[149%]"  />
        <Image src={golf} alt="golf" width={150} height={150} className="absolute right-[20%] w-[168px] h-[168px]  bottom-0"  />
        <Image src={sport1} alt="golf" width={150} height={150} className="absolute right-[10%] w-[168px] h-[168px] top-[" />
      </div>
    </div>
  );
};

export default HeaderImages;
