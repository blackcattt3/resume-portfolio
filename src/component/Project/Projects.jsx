import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectList = [
    {
      title : 'J.nail website (HTML ver.)',
      subtitle : '직접 브랜드를 커스텀하여 직접 운영 해보고싶은 나만의 네일 브랜드 쇼핑몰 웹사이트를 구현하였습니다',
      skills : ['HTML5', 'CSS3', 'Bootstrap'],
      content : [
        'HTML, CSS 기반의 반응형 쇼핑몰 페이지',
        '부트스트랩을 이용한 반응형 웹페이지',
        '브랜드 콘셉트(J.nail)의 시각적 아이덴티티를 강조한 UI/UX 디자인',
        '기초 웹 구조를 익히며 웹 프론트엔드의 기초를 다짐'
      ]
    },
    {
      title : 'My Weather app',
      subtitle : 'OpenWeather API를 활용한 React 기반 실시간 날씨 앱',
      skills: ["React", "JavaScript (ES6+)", "API"],
      content : [
        "OpenWeather API를 이용해 도시별 실시간 날씨 데이터 요청 및 표시",
        "useState, useEffect 훅을 활용한 비동기 데이터 렌더링",
        "날씨 상태(맑음, 흐림, 비 등)에 따라 배경 이미지와 테마 동적으로 변경",
        "react-spinners 라이브러리를 이용한 로딩스피너 구현",
        "배포 시 환경변수(.env) 관리 및 Netlify 환경변수 설정을 통해 API Key 보안 처리"
      ]
    },
    {
      title : '가위 바위 보!',
      subtitle : 'React 훅 기반 가위바위보 게임',
      skills: ["React.js", "useState", "useEffect", "CSS3"],
      content : [
        "useState, useEffect를 활용해 유저와 컴퓨터의 선택 상태 관리",
        "조건문과 랜덤 함수를 이용한 게임 로직 구현",
        "점수판, 결과 메세지, 리셋 버튼 등 인터랙티브 UI 구성",
        "게임 로직 설계 과정을 통해 React 상태관리의 이해 심화"
      ]
    },
    // {
    //   title : 'J.nail Website (React ver.)',
    //   subtitle : 'React 기반으로 재구성한 브랜드 쇼핑몰 사이트',
    //   skills: ["React.js", "React Router", "JSON-server", "Axios"],
    //   content : [
    //     "HTML 버전에서 제작한 쇼핑몰을 React SPA 구조로 리빌드",
    //     "React Router를 활용해 페이지 간 라우팅 및 동적 렌더링 구현",
    //     "JSON-server를 이용해 상품 데이터 CRUD 기능 구축",
    //     "컴포넌트 재사용성과 props 구조 개선으로 유지보수성 향상",
    //     "브랜드 아이덴티티와 디자인 콘셉트를 반영한 UI 완성도 강화"
    //   ]
    // }
  ]
  return (
    <div className='projects-section'>
      <h1>projects</h1>
      {projectList.map((item)=>(
        <ProjectCard item={item}/>
      ))}
    </div>
  )
}

export default Projects
