import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillList = [
        { title:'Front-End',
          content: "React.js · JavaScript (ES6+) · HTML5 · CSS3 · react-intersection-observer · React Route",
          contentSummary: '컴포넌트 기반 구조 설계와 상태 관리에 익숙하며, 직관적인 반응형 UI 구현 경험이 있습니다.'
        },
        { title:'Tools & Environment',
          content: "Git · GitHub · Vite · Netlify · JSON-server · Axios",
          contentSummary: '프로젝트 버전 관리, API 통신, 배포 환경 구성에 능숙합니다.'
        },
        { title:'Design & UI',
          content: "CSS Animation · Responsive Design · Bootstrap",
          contentSummary: '디자인 감각을 살린 레이아웃 구성과 부드러운 인터랙션 구현에 강점이 있습니다.'
        },
        { title:'Etc',
          content: "Python · Java · C · MySQL",
          contentSummary: '기초 문법 및 자료형 이해, Python 기반 데이터 처리 프로젝트 경험 보유, SQL 기본 쿼리 및 테이블 설계 이해'
        }
    ]
  return (
    <div className='skill-section'>
      <h1>skills</h1>

    {skillList.map((item, index)=>(

            <div className='skill-card'>
                <div className={`skill-title ${index%2==0?"":"oddNum"}`}>{item.title}</div>
                <div className={`skill-content ${index%2==0?"":"oddNum"}`}>
                    <div>📚 {item?.content}</div>
                    <div className='content-summary'>💭 {item?.contentSummary}</div>
                </div>
            </div>

    ))}
      
    </div>
  )
}

export default Skills
