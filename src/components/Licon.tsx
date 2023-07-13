import React from "react";
import { motion, useScroll } from "framer-motion";

export default function Licon({ refLicon }: { refLicon: any }) {
  const { scrollYProgress } = useScroll({
    target: refLicon,
    offset: ["start end", "center center"],
    layoutEffect: false,
  });
  return (
    <>
      <figure className="absolute left-0 stroke-black">
        <svg
          className="-rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy="50"
            r="15"
            className="stroke-[#b63e96] stroke-1 fill-none"
          />
          <motion.circle
            cx="75"
            cy="50"
            r="15"
            className="stroke-[5px] md:stroke-[3px] fill-[#f5f5f5]"
            style={{ pathLength: scrollYProgress }}
          />
          <circle
            cx="75"
            cy="50"
            r="7"
            className="animate-pulse stroke-1 fill-[#b63e96]"
          />
        </svg>
      </figure>
    </>
  );
}
