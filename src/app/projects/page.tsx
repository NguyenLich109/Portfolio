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
          nameProject="The Website Sells Backpacks"
          image="/images/project_1.jpg"
          content="A commercial e-commerce website selling backpacks. Utilizing the following technologies: for Front-end, I use ReactJs and Redux, for Design, I use Bootstrap, for Back-end, I use NodeJS and Express, and for the Database, I employ MongoDB."
          urlGitHub="https://github.com/NguyenLich109/LVTN_BaloStore"
          urlProject="https://balostore.vercel.app/"
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="story reading website"
          image="/images/project_2.jpg"
          content="A story reading website. Utilizing the following technologies: for FrontEnd, I use NuxtJs and VueJS, Tailwind CSS, TypeScript, for Design, I use Antd, for Backend, I use NodeJS and Express, and for the Database, I employ MongoDB. "
          urlGitHub="https://github.com/NguyenLich109/comic"
          urlProject="https://comic-rho-snowy.vercel.app/"
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="social media website"
          image="/images/project_4.jpg"
          content="A social networking website, for this project, I took inspiration from the Facebook website. I use the following technologies: for Front-end, I use ReactJs and Redux, for Design, I use Antd, and for the Database, I use Firebase."
          urlGitHub="https://github.com/NguyenLich109/Media"
          urlProject="https://media-cd4c3.web.app/"          
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="Clone Zalo"
          image="/images/project_5.jpg"
          content="A project clone zalo, for this project, I took inspiration from the zalo website. I use the following technologies: for Front-end, I use ReactJs and Redux-toolkit, for Design, I use Antd, and for the Database, I use Firebase."
          urlGitHub="https://github.com/NguyenLich109/ChatRoom"
          urlProject="https://chat-zoom-b0763.web.app/"
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="Timekeeping website"
          image="/images/project_8.jpg"
          content="A timekeeping website project. For this project, I drew inspiration from manual timekeeping methods. I utilize the following technologies: for Front-end, I use NextJs, for Design, I employ Mui, for Backend, I utilize NodeJS and Express, and for the Database, I utilize MongoDB."
          urlGitHub="https://github.com/NguyenLich109/Timekeeping"
          urlProject="https://timekeeping-chi.vercel.app/"
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="Clone Trello"
          image="/images/project_3.jpg"
          content="A project clone trello, for this project, I took inspiration from the trello website. I use the following technologies: for Front-end, I use VueJs, for Design, I use Antd, for Backend, I use NodeJS and Express, and for the Database, I employ MongoDB."
          urlGitHub="https://github.com/NguyenLich109/Clone_Trello"
          urlProject="#"
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="Music Website"
          image="/images/project_6.jpg"
          content="A project music, for this project, I took inspiration from the zingmp3 website. I use the following technologies: for Front-end, I use ReactJs."
          urlGitHub="https://github.com/NguyenLich109/Music-App-React"
          urlProject=""
        />
      </div>
      <div className="mb-20">
        <FrameProject
          title="Featured Project"
          nameProject="Portfolio"
          image="/images/project_7.jpg"
          content="A portfolio website project. For this project. I utilize the following technologies: for Front-end, I use NextJs, TailwindCss."
          urlGitHub="https://github.com/NguyenLich109/Portfolio/"
          urlProject="https://portfolio-navy-gamma.vercel.app/"
        />
      </div>
    </div>
  );
}
