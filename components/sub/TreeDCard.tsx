"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  links: string;
}

const ThreeDCard = ({ src, title, description, links }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !overlayRef.current) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;

    // 카드의 현재 크기와 위치 정보를 가져옴 (반응형 대응)
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // 카드 내의 X 좌표
    const y = e.clientY - rect.top;  // 카드 내의 Y 좌표

    // 회전 각도 계산 (카드 크기에 비례하도록 수학 공식 조정)
    // 중심을 0으로 잡고 움직임에 따라 각도 변경
    const rotateY = -1 * ((x - rect.width / 2) / 20); 
    const rotateX = (y - rect.height / 2) / 20;

    // 오버레이(광원) 위치 계산
    overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
    overlay.style.opacity = "1"; // 마우스가 들어오면 보임

    // 카드 3D 회전 적용
    container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = () => {
    if (!containerRef.current || !overlayRef.current) return;

    // 마우스가 나가면 원래대로 복구
    overlayRef.current.style.opacity = "0";
    containerRef.current.style.transform = `perspective(350px) rotateX(0deg) rotateY(0deg)`;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      onMouseEnter={() => setIsHovered(true)}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-all duration-100 ease-out z-[30]"
      style={{
        // 모바일 등 작은 화면을 위해 기본 크기 설정, max-w로 제한
        width: "100%", 
        maxWidth: "500px", 
        aspectRatio: "16 / 9", // 비율 유지
        transformStyle: "preserve-3d", // 3D 효과 필수
      }}
    >
        <a href={links}>
      {/* 1. 배경 이미지 (Card) */}
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
      />

      {/* 2. 홀로그램 오버레이 (Overlay) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `linear-gradient(105deg, 
            transparent 40%, 
            rgba(255, 219, 112, 0.8) 45%, 
            rgba(132, 50, 255, 0.6) 50%, 
            transparent 54%)`,
          filter: "brightness(1.1) opacity(0.8)",
          mixBlendMode: "color-dodge",
          backgroundSize: "150% 150%",
          opacity: 0, // 기본적으로 숨김
          transition: "opacity 0.1s",
        }}
      />

      {/* 3. 텍스트 정보 (hover 시 나타나게 하거나 항상 표시) */}
      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 z-[3]">
        <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-300 text-center">{description}</p>
      </div>
      </a>
    </div>
  );
};

export default ThreeDCard;
