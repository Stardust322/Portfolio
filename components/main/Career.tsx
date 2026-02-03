"use client";

import React from "react";
// 1. Variants 타입 추가 import
import { motion, Variants } from "framer-motion"; 

// 2. 변수에 타입 지정 (: Variants)
const slideUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Career = () => {
  return (
    <section
      id="career"
      className="flex flex-col items-center justify-center gap-5 md:gap-10 py-20 relative z-[20]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Journey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-10">
        {/* 1. Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="flex flex-col gap-4 p-6 rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            🎓 Education.
          </h2>
          {educationData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-500/30 text-xs font-medium min-w-fit">
                {item.date}
              </span>
              <span className="text-gray-300 text-sm md:text-base">{item.content}</span>
            </div>
          ))}
        </motion.div>

        {/* 2. Certificate */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="flex flex-col gap-4 p-6 rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            📜 Certificate.
          </h2>
          {certificateData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-500/30 text-xs font-medium min-w-fit">
                {item.date}
              </span>
              <span className="text-gray-300 text-sm md:text-base">{item.content}</span>
            </div>
          ))}
        </motion.div>

        {/* 3. Career */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="flex flex-col gap-4 p-6 rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            💼 Career.
          </h2>
          {careerData.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="w-fit px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-500/30 text-xs font-medium">
                {item.date}
              </span>
              <ul className="list-disc list-inside text-gray-300 text-sm md:text-base pl-1">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="mt-1">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* 4. Award */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="flex flex-col gap-4 p-6 rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            🥇 Award.
          </h2>
          {awardData.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="w-fit px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-500/30 text-xs font-medium">
                {item.date}
              </span>
              <ul className="list-disc list-inside text-gray-300 text-sm md:text-base pl-1">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="mt-1">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Career;

// --- 데이터 영역 (나중에 수정하기 편하게 아래에 모아두었습니다) ---

const educationData = [
  { date: "2024.02", content: "예산고등학교 졸업" },
  { date: "2024.03", content: "숭실대학교 AI융합학부 입학" },
  { date: "2026.01", content: "숭실대학교 AI소프트웨어학부 전과" },
];

const certificateData = [
{ date: "2020.02", content: "한국사검정능력시험 2급" },
{ date: "2020.11", content: "한식조리기능사" },
  { date: "2025.09", content: "ADsP (데이터분석준전문가)" },
  { date: "2025.11", content: "TOPCIT 3 수준" },
  { date: "2025.12", content: "Microsoft Excel Expert 2016" },
  { date: "2025.12", content: "Coding Specialist Pro 1급 (Python)" },
  { date: "2026.01", content: "프로그래밍 기능사 (필기)" },
];

const careerData = [
  {
    date: "2024",
    details: ["숭실대학교 AI융합학부 입학"],
  },
  {
    date: "2025",
    details: [
      "AI융합학부 제10대 학생회, 너울 복지국원",
      "AI융합학부 데이터사이언스 소모임 복지국원",
      "IT대학 볼링 소모임, \"슈페어\" 서기",
      "숭실대학교 중앙동아리, \"아리랑\" 회장",
      "숭실대학교 봄 축제 Global Day 한국 부스 대표자"
    ],
  },
  {
    date: "2026",
    details: [
      "숭실대학교 중앙동아리, \“아리랑\” 비상대책위원장"
    ,"숭실대학교 예비대학 AI대학 멘토"
    ],
  },
];

const awardData = [
  {
    date: "2024",
    details: ["AI융합학부 코드챌린지, AICC 1학년부 6위"],
  },
  {
    date: "2025",
    details: [
      "ICPC 숭실대학교 예선 입상 (31팀 중 15위)",
      "AI융합학부 코드챌린지, AICC 전학년부 4위",
    ],
  },
];
