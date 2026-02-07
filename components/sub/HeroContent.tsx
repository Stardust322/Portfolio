"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="flex flex-row items-center justify-center px-5 md:px-20 mt-40 w-full z-[20]"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* 상단 뱃지 */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] opacity-[0.9] flex items-center w-fit"
          viewport={{ once: false, amount: 0.3 }}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            InfoSecurity Developer.
          </h1>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="leading-tight">
            황홀한 매력, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Stardust.{" "}
            </span>
            {/* exprience 오타 수정 완료 */}
          </span>
        </motion.div>

        {/* 설명 문구 */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
          viewport={{ once: false, amount: 0.3 }}
        >
          창의적이고 효율적인 개발부터, 완벽한 보안까지.
          <br/> 
          AI/정보보안 연구자, 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}이상화{" "}</span>
          입니다.
        </motion.p>

        {/* 버튼 */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#career"
          className="button-primary text-center text-white cursor-pointer max-w-[200px]"
          viewport={{ once: false, amount: 0.3 }}
        >
              Learn More!

        </motion.a>
      </div>

      {/* 우측 아이콘 */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center hidden md:flex"
        viewport={{ once: false , amount: 0.3}}
      >
        <Image src="/mainIconsdark.svg" alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;