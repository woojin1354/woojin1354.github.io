import "./ProjectTop.css";
import Profileimage from "./assets/images/ProfileImage.png";
import { useState, useEffect } from "react";
function ProjectTop() {
  const [statusCount, setStatusCount] = useState({ done: 0, ongoing: 0 });

  useEffect(() => {
    fetch("/projects.json") // public/projects.json 경로
      .then((res) => res.json())
      .then((data) => {

        // 상태 개수 세기
        const counts = data.projects.reduce((acc, p) => {
          acc[p.status] = (acc[p.status] || 0) + 1;
          return acc;
        }, {});
        setStatusCount({
          done: counts["완료"] || 0,
          ongoing: counts["진행 중"] || 0,
        });
      })
      .catch((err) => console.error("프로젝트 로드 실패:", err));
  }, []);


  return (
    <div className="projects-section">
      <div className="profile">
        <img
          className="image"
          alt="Profile"
          src={Profileimage}
        />
      </div>

      <div className="container">
        <div className="div">
          <div className="text-wrapper">프로젝트</div>
        </div>
        <div className="div">
          <p className="p">
            <span className="span">지금까지 진행한 </span>
            <span className="text-wrapper-2">다양한 프로젝트들</span>
            <span className="span">을 소개합니다.</span>
          </p>
        </div>
        <div className="stats-info">
          <div className="stat-item">
            <div className="stat-number">{statusCount.done}</div>
            <div className="stat-text">완료된 프로젝트</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{statusCount.ongoing}</div>
            <div className="stat-text">진행 중인 프로젝트</div>
          </div>
          <div className="stat-item">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTop;