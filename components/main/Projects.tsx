import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SSUTUDY1.png"
          title="SSU:TUDY"
          description="DB와 AI 모델을 사용하여, 사용자의 성적을 입력 받아 다음 학기 과목 성적을 예측하는 웹 서비스."
        />
        <ProjectCard
          src="/RUNNINGX1.png"
          title="RunningX"
          description="Rest API를 사용하여, 러닝 중 가까운 화장실과 편의점 위치를 표시하여 편의성을 더한 러닝 앱 서비스."
        />
        <ProjectCard
          src="/LMS1.png"
          title="Soongsil Univ, LMS"
          description="request를 사용하여, SAP 기반 LMS 사이트를 로그인 및 과제 정보를 가져오는 프로그램."
        />
      </div>
    </div>
  );
};

export default Projects;
