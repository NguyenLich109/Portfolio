import React from "react";
import FrameProject from "@/components/FrameProject";

export const metadata = {
  title: "Projects",
  images: "/images/project_logo.jpg",
  description: "Portfolio CV online",
  openGraph: {
    title: "Projects",
    images: "/images/project_logo.jpg",
    description: "Portfolio CV online",
  },
};

export default function PageProjects() {
  return (
    <div className="px-[128px] pt-16 pb-32 xl:px-[64px] md:px-[48px] sm:pt-8 sm:px-[32px]">
      <h1 className="text-7xl text-center font-[600] pb-[32px] md:text-6xl sm:text-4xl">
        All of my projects
      </h1>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="Crypto Screener Application"
          image="/images/project.jpg"
          content="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
          urlGitHub=""
          urlProject=""
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="Crypto Screener Application"
          image="/images/project.jpg"
          content="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
          urlGitHub=""
          urlProject=""
        />
      </div>
    </div>
  );
}
