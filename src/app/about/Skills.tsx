"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-[600] bg-black text-white
               py-3 px-6 shadow-[#000] cursor-pointer absolute md:py-2 md:px-3 md:text-sm sm:bg-transparent sm:text-black"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <h1 className="text-7xl text-center font-[600] mt-32 md:text-6xl sm:text-5xl">
        Skills
      </h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-gradient_xl lg:bg-gradient_lg lg:h-[85vh] md:bg-gradient_md md:h-[50vh]">
        <motion.div
          className="flex items-center justify-center rounded-full font-[600] bg-black text-white
               p-8 shadow-[#000] cursor-pointer md:py-4 md:px-6 md:text-sm  sm:p-1"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-19vw" y="5vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="4vw" />
        <Skill name="TypeScript" x="15vw" y="15vw" />
        <Skill name="ReactJS" x="32vw" y="-5vw" />
        <Skill name="NextJS" x="0vw" y="-20vw" />
        <Skill name="Redux Toolkit" x="17vw" y="-13vw" />
        <Skill name="VueJS" x="-20vw" y="-18vw" />
        <Skill name="FireBase" x="-30vw" y="-5vw" />
        <Skill name="GitHub" x="-15vw" y="20vw" />
        <Skill name="NuxtJS" x="-2vw" y="12vw" />
        <Skill name="Tailwind CSS" x="-32vw" y="13vw" />
      </div>
    </>
  );
}
