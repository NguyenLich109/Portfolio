import React from "react";
import Frame from "@/components/Frame";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

export const metadata = {
  title: "About",
  images: "/images/about.jpg",
  description: "Portfolio CV online",
  openGraph: {
    title: "About",
    images: "/images/about.jpg",
    description: "Portfolio CV online",
  },
};

export default function PageAbout() {
  return (
    <div className="px-[128px] pt-16 pb-32 xl:px-[64px] md:px-[48px] sm:pt-8 sm:px-[32px]">
      <h1 className="text-7xl text-center font-[600] pb-[32px] md:text-6xl sm:text-4xl">
        Passion Fuels Purpose!
      </h1>
      <div className="grid grid-cols-8 xl:grid-cols-6 md:grid-cols-3 gap-10">
        <div className="hidden col-span-3 md:block">
          <Frame image={"/use.jpg"} />
        </div>
        <div className="col-span-3 animate-slide-up">
          <h1 className="font-[600] text-[18px]">BIOGRAPHY</h1>
          <p className="pt-3 ">
            Hi, I&apos;m Nguyễn Văn Lịch, a web developer. I am
            always looking for new and innovative ways to bring my clients
            visions to life.
          </p>
          <p className="pt-3">
            I believe that design is about more than just making things look
            pretty – it is about solving problems and creating intuitive,
            enjoyable experiences for users. Whether I am working on a website,
            mobile app, or other digital product, I bring my commitment to
            design excellence and user-centered thinking to every project I work
            on. I look forward to the opportunity to bring my skills and passion
            to your next project.
          </p>
        </div>
        <div className="col-span-3 md:hidden">
          <Frame image={"/use.jpg"} />
        </div>
        <div className="col-span-2 xl:col-span-6 md:col-span-3 flex flex-col items-end xl:flex-row xl:justify-between animate-slide-right">
          <div className="pb-14 xl:pb-0">
            <h1 className="text-end text-7xl font-[600] xl:text-center lg:text-6xl">
              10+
            </h1>
            <p className="text-xl font-[500] xl:text-center lg:text-base">
              Projects Completed
            </p>
          </div>
          <div>
            <h1 className="text-end text-7xl font-[600] xl:text-center lg:text-6xl">
              2+
            </h1>
            <p className="text-xl font-[500] xl:text-center lg:text-base">
              Months Of Experience
            </p>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}
