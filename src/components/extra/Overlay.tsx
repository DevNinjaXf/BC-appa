import Image from "next/image";
import React from "react";

interface txtProp {
  text: string;
  width?: string | number
  color?: string
  backgroundColor?: string
}

const Overlay = ({ text , width=172.99 , color='#7444FD' , backgroundColor='#7444FD26' }: txtProp) => {
  return (
   <div
      style={{ width , color , backgroundColor }}
      className="h-9 rounded-[100px] py-1 px-[10px] flex justify-evenly items-center font-[Urbanist]"
    >
      <p className="text-[18px] leading-7 tracking-[-0.32px] font-bold text-[#7444FD]">
  {text}
</p>

      <Image src="/fireIcon.svg.png" alt="fire-image" width={16} height={17} />
    </div>
  );
};

export default Overlay;
