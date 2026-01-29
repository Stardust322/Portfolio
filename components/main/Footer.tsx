import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20] relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          
          {/* 1. Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            
            {/* Github Link */}
            <a 
              href="https://github.com/Stardust322" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>

            {/* Discord Link */}
            <a 
              href="https://discord.com" // 디스코드 초대 링크를 넣으세요
              target="_blank" 
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* 2. Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/i_dealize21" // 인스타그램 주소를 넣으세요
              target="_blank" 
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            {/* Github (Duplicate) */}
            <a 
              href="https://github.com/Stardust322" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
          </div>

          {/* 3. About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            
            {/* 내부 링크: 내 소개로 이동 */}
            <a 
              href="#about-me"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>

            {/* 이메일 보내기 */}
            <a 
              href="mailto:stardust@soongsil.ac.kr" // 본인 이메일로 변경하세요
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">stardust@soongsil.ac.kr</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Stardust 2026. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
