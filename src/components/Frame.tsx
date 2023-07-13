import React from "react";

export default function Frame({ image }: { image: string }) {
  return (
    <div className="relative">
      <div className="relative z-10 bg-[#f5f5f5] border-[2px] border-[#000] rounded-[1rem] p-8">
        <img src={image} className="rounded-[1rem]"></img>
      </div>
      <div className="absolute top-0 left-0 -bottom-[10px] -right-[10px] bg-[#000] rounded-[2rem] rounded-br-[1.5rem]"></div>
    </div>
  );
}
