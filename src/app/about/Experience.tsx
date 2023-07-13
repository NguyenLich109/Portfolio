"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Licon from "@/components/Licon";

interface typeDetails {
  postion: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  postion,
  company,
  companyLink,
  time,
  address,
  work,
}: typeDetails) => {
  const ref = useRef<any>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between lg:w-[65%] md:w-[70%]"
    >
      <Licon refLicon={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="text-[24px] font-[600] sm:text-base">
          {postion}{" "}
          <Link className="text-[#b63e96]" href={companyLink}>
            @{company}
          </Link>
        </h3>
        <span className="text-[#5f5f5f]">
          {time} | {address}
        </span>
        <p className="font-[500] sm:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const scrollRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-32 mb-64">
      <h1 className="text-7xl text-center font-[600] mb-20 md:text-6xl sm:text-4xl">
        Experience
      </h1>
      <div
        ref={scrollRef}
        className="w-[75%] mx-auto relative xl:w-[80%] lg:w-[90%] md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0  w-[4px] md:w-[2px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 sm:ml-3">
          <Details
            postion="Software Engineer"
            company="Google"
            companyLink="https://www.google.com.vn/?hl=vi"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, 
            including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            postion="Software Engineer"
            company="Google"
            companyLink="https://www.google.com.vn/?hl=vi"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, 
            including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            postion="Software Engineer"
            company="Google"
            companyLink="https://www.google.com.vn/?hl=vi"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, 
            including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
}
