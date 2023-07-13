"use client";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface typeFrameProject {
  title: string;
  nameProject: string;
  image: string;
  content: string;
  urlGitHub: string;
  urlProject: string;
}

export default function FrameProject({
  title,
  nameProject,
  image,
  content,
  urlGitHub,
  urlProject,
}: typeFrameProject) {
  return (
    <div className={`relative`}>
      <div className="grid grid-cols-2 gap-6 relative z-10 bg-[#f5f5f5] border-[2px] border-[#000] rounded-[1rem] p-8 items-center">
        <div className="col-span-1 rounded-[1rem] overflow-hidden lg:col-span-2">
          <Link href="#">
            <img
              src={image}
              className="rounded-[1rem] hover:scale-[1.05] duration-[400ms]"
            ></img>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-2xl text-[#b63e96] font-[500] md:text-xl">
            {title}
          </h1>
          <h2 className="text-4xl text-black font-[600] py-1.5 lg:text-3xl">
            {nameProject}
          </h2>
          <p className="font-[400] pb-1.5 md:text-sm">{content}</p>
          <div className="flex items-center justify-start">
            <Link href={urlGitHub} className="text-4xl pr-1">
              <AiFillGithub />
            </Link>
            <Link href={urlProject}>
              <button
                className="flex items-center mt-2 py-2 px-6 border-2 rounded-lg
           text-lg md:text-base font-[600] text-[#fff] bg-[#000] hover:bg-transparent hover:border-[#000] hover:text-[#000]"
              >
                Visit Project
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 -bottom-[10px] -right-[10px] bg-[#000] rounded-[2rem] rounded-br-[1.5rem]"></div>
    </div>
  );
}
