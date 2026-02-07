import React from "react";
import ThreeDCard from "../sub/TreeDCard"; // 방금 만든 컴포넌트 import

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      {/* 반응형 그리드 적용: 모바일 1열, PC 3열 */}
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
        
        <ThreeDCard
          src="/SSUTUDY1.png"
          title="SSU:TUDY"
          description="DB와 AI 모델을 사용하여, 사용자의 성적을 입력 받아 다음 학기 과목 성적을 예측하는 웹 서비스."
          links="https://github.com/Stardust322/SSU-TUDY"
        />
        
        <ThreeDCard
          src="/RUNNINGX1.png"
          title="RunningX"
          description="Rest API를 사용하여, 러닝 중 가까운 화장실과 편의점 위치를 표시하여 편의성을 더한 러닝 앱 서비스."
          links="https://github.com/Stardust322/RunningX"
        />
        
        <ThreeDCard
          src="/LMS1.png"
          title="Soongsil Univ, LMS"
          description="request를 사용하여, SAP 기반 LMS 사이트 로그인 및 과제 정보를 가져오는 프로그램."
          links="https://github.com/Stardust322/SSU_LMS"
        />

      </div>
    </div>
  );
};

export default Projects;
