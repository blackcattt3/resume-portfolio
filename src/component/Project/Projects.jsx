import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';



const Projects = () => {

  const jnailImgs = import.meta.glob('../../assets/img/JnailHTML/*.{png,jpg,jpeg,svg}', { eager: true })
  const weatherImgs = import.meta.glob('../../assets/img/WeatherApp/*.{png,jpg,jpeg,svg}', { eager: true })
  const jnail2Imgs = import.meta.glob('../../assets/img/JnailREACT/*.{png,jpg,jpeg,svg}', { eager: true })
  const rspImgs = import.meta.glob('../../assets/img/RSPGame/*.{png,jpg,jpeg,svg}', { eager: true })
  const portfolioImgs = import.meta.glob('../../assets/img/Portfolio/*.{png,jpg,jpeg,svg}', { eager: true })


  const jnailImages = Object.values(jnailImgs).map((img) => img.default);
  const weatherImages = Object.values(weatherImgs).map((img) => img.default);
  const jnail2Images = Object.values(jnail2Imgs).map((img) => img.default);
  const rspImages = Object.values(rspImgs).map((img) => img.default);
  const portfolioImages = Object.values(portfolioImgs).map((img) => img.default);


  const projectList = [
    {
      title : 'J.nail website (HTML ver.)',
      subtitle : '직접 커스텀한 브랜드를 이용한 나만의 네일 브랜드 쇼핑몰 웹사이트',
      skills : ['HTML5', 'CSS3', 'Bootstrap'],
      content : [
        'HTML, CSS 기반의 반응형 쇼핑몰 페이지',
        '부트스트랩을 이용한 반응형 웹페이지',
        '브랜드 콘셉트(J.nail)의 시각적 아이덴티티를 강조한 UI/UX 디자인',
        '기초 웹 구조를 익히며 웹 프론트엔드의 기초를 다짐'
      ],
      demo : 'https://jnail.netlify.app/',
      github : 'https://github.com/blackcattt3/J.nail-website',
      projectImg :jnailImages,
    },
    {
      title : 'My Weather app',
      subtitle : 'OpenWeather API를 활용한 React 기반 실시간 날씨 앱',
      skills: ["React", "JavaScript(ES6+)", "API"],
      content : [
        "OpenWeather API를 이용해 도시별 실시간 날씨 데이터 요청 및 표시",
        "useState, useEffect 훅을 활용한 비동기 데이터 렌더링",
        "날씨 상태(맑음, 흐림, 비 등)에 따라 배경 이미지와 테마 동적으로 변경",
        "react-spinners 라이브러리를 이용한 로딩스피너 구현",
        "배포 시 환경변수(.env) 관리 및 Netlify 환경변수 설정을 통해 API Key 보안 처리"
      ],
      demo : 'https://mini-weathers.netlify.app/',
      github : 'https://github.com/blackcattt3/weather_app_project',
      projectImg :weatherImages
    },
    {
      title : '가위 바위 보!',
      subtitle : 'React 훅 기반 가위바위보 게임',
      skills: ["React", "useState", "useEffect", "CSS3"],
      content : [
        "useState, useEffect를 활용해 유저와 컴퓨터의 선택 상태 관리",
        "조건문과 랜덤 함수를 이용한 게임 로직 구현",
        "점수판, 결과 메세지, 리셋 버튼 등 인터랙티브 UI 구성",
        "게임 로직 설계 과정을 통해 React 상태관리의 이해 심화"
      ],
      demo : 'https://my-rsp-game.netlify.app/',
      github : 'https://github.com/blackcattt3/rock-scissors-paper-game',
      projectImg : rspImages
    },
    {
      title : "Jaehee's portfolio" ,
      subtitle : 'React 기반 나의 이력서 포트폴리오',
      skills: ["React", "useState", "useEffect", "CSS3"],
      content : [
        "프로젝트 목록을 카드 형태로 구성하고 map을 활용한 동적 렌더링",
        "'More Details' 토글 버튼으로 상세 설명 펼치기/접기 기능 구현",
        "이미지 클릭 시 모달 오픈 및 프로젝트 이미지 슬라이더 구현",
        "모달 외부 클릭 시 닫기 기능 — 이벤트 버블링 제어(stopPropagation)",
        "컴포넌트 단위 UI 설계 경험 및 재사용 가능한 카드 컴포넌트 구현",
        "Transform-origin을 활용해 자연스러운 애니메이션 효과 구현"
      ],
      demo : 'https://my-rsp-game.netlify.app/',
      github : 'https://github.com/blackcattt3/resume-portfolio',
      projectImg : portfolioImages
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

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div>
      <div className='projects-section'>
        <h1>projects</h1>
        {/* <motion.div className='text-box'
          initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
        >테스트</motion.div> */}
        {projectList.map((item,i)=>(
          <ProjectCard item={item} index={i} delayBase={0.15} duration={0.6}
          onDetailClick={()=>setActiveProject(item)} activeProject={activeProject}/>
        ))}

      </div>

      { activeProject &&
        <ProjectModal activeProject={activeProject}
        setActiveProject={setActiveProject}
        onClose={()=>setActiveProject(null)}/>
      }
    </div>
    
  )
}

export default Projects


// 모달바 구현시 onDetailClick={()=>setActiveProject(item)} 주의! 어떤 아이템인지 아예 props로 넘겨줘야한다.
// 안그럼 어떤 정보를 띄워야하는지 알수가 없다.