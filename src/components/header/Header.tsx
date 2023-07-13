"use client";
import { Navbar } from "@/data/Navbar";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import "./style.css";
import Modal from "./Modal";

export default function Header() {
  const { dataNavbar } = Navbar();
  const href = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center h-[74px] px-[128px] xl:px-[64px] md:px-[48px] sm:px-[32px]">
      <div className="lg:hidden">
        {dataNavbar.map((data, index) => {
          return (
            <span
              key={index}
              onClick={() => router.push(data.href)}
              className={`font-[500] first:mr-4 last:ml-4 relative group cursor-pointer ${
                index !== 0 && index !== dataNavbar.length - 1 ? "m-4" : ""
              }`}
            >
              {data.text}
              <span
                className={`absolute rounded-sm left-0 -bottom-1 w-full h-[0.12rem] bg-[#1b1b1b]
                      transition-all duration-300 ease transform origin-left group-hover:scale-x-100
                ${href === data.href ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </span>
          );
        })}
      </div>
      <div
        className="hidden lg:block text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        <Modal open={open} handleClose={() => setOpen(false)} />
      </div>
      <div className="flex items-center">
        <Link
          href="https://github.com/NguyenLich109"
          className="text-2xl first:mr-[8px]"
        >
          <AiFillGithub />
        </Link>
        <Link
          href="#"
          className="text-2xl last:ml-[8px] text-blue-400 rounded-sm"
        >
          <AiFillFacebook />
        </Link>
      </div>
    </div>
  );
}
