"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const refText = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const typed = new Typed(refText.current, {
      strings: ["Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className=" px-[128px] lg:p-[64px] md:p-[32px] ">
      <div className="grid grid-cols-2 gap-2 items-center">
        <div className="lg:col-span-2 lg:flex lg:justify-center">
          <img
            src="/developer-pic.png"
            className="lg:w-[70%] md:w-[100%]"
          ></img>
        </div>
        <div className="headline animate-slide-up lg:col-span-2 lg:text-center ">
          <h2 className="text-7xl font-[600] lg:text-6xl md:text-4xl">Hello</h2>
          <h1 className="text-5xl font-[600] py-3 lg:text-4xl lg:py-2 md:text-2xl md:py-1">
            I&apos;m Nguyễn Văn Lịch
          </h1>
          <h2 className="text-4xl font-[600] pb-3 text-[#b63e96] lg:text-3xl lg:pb-2 md:text-xl md:py-1">
            And I&apos;m a <span ref={refText}></span>
          </h2>
          <span className="text-base lg:text-sm">
            As a Front end developer, I am dedicated to turning ideas into
            innovative web applications. Explore my latest projects, showcasing
            my expertise in React.js and web development.
          </span>
          <br></br>
          <Link className="text-xl font-[400] lg:text-sm pt-2" href={"mailto:nguyenvanlich199@gmail.com"}>Gmail: nguyenvanlich199@gmail.com</Link>
          <div className="lg:flex lg:justify-center">
            <button
              className="flex items-center mt-2 py-3 px-5 border-2 rounded-lg
           text-base font-[600] text-[#fff] bg-[#000] hover:bg-transparent hover:border-[#000] hover:text-[#000]"
            >
              Resume
              <span className="pl-2">
                <FaExternalLinkAlt />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
