"use client";

import React, { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ThreeDCardWrapper = ({ children, className = "" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  // 마우스 위치를 저장할 state 추가 (Overlay용)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !overlayRef.current) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 마우스 위치 저장 (px 단위)
    setMousePosition({ x, y });

    // 회전 각도 계산
    const rotateY = -1 * ((x - rect.width / 2) / 30);
    const rotateX = (y - rect.height / 2) / 30;

    overlay.style.opacity = "1";
    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = () => {
    if (!containerRef.current || !overlayRef.current) return;

    overlayRef.current.style.opacity = "0";
    containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      className={`relative overflow-hidden transition-all duration-100 ease-out z-[30] ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative z-[1] h-full">
        {children}
      </div>

      {/* ★ 수정된 부분: Radial Gradient 적용 */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          // 마우스 위치(x, y)를 중심으로 300px 크기의 원형 빛 생성
          background: `radial-gradient(
            300px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.15),
            transparent 80%
          )`,
          // mixBlendMode: "overlay"가 배경색과 더 자연스럽게 섞입니다.
          mixBlendMode: "overlay", 
          opacity: 0,
          transition: "opacity 0.2s ease", // 부드럽게 사라지도록
        }}
      />
    </div>
  );
};

export default ThreeDCardWrapper;
