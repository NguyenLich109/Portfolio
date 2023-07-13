"use client";
import ReactModal from "react-modal";
import { usePathname, useRouter } from "next/navigation";
import { Navbar } from "@/data/Navbar";

export default function Modal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: any;
}) {
  const { dataNavbar } = Navbar();
  const href = usePathname();
  const router = useRouter();
  return (
    <>
      <ReactModal
        isOpen={open}
        onRequestClose={handleClose}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="flex flex-col items-center p-32 bg-[#1b1b1be6]">
          {dataNavbar.map((data, index) => {
            return (
              <span
                key={index}
                onClick={() => router.push(data.href)}
                className={`font-[500] first:mb-1.5 last:mt-1.5 relative group cursor-pointer text-white ${
                  index !== 0 && index !== dataNavbar.length - 1 ? "my-1.5" : ""
                }`}
              >
                {data.text}
                <span
                  className={`absolute rounded-sm left-0 -bottom-1 w-full h-[0.12rem] bg-white
                      transition-all duration-300 ease transform origin-left group-hover:scale-x-100
                ${href === data.href ? "scale-x-100" : "scale-x-0"}`}
                ></span>
              </span>
            );
          })}
        </div>
      </ReactModal>
    </>
  );
}
