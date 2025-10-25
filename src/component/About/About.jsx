import React from 'react'
import './About.css'
import ProjectCard from '../Project/ProjectCard'
import { FaUser } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";




const About = () => {
    const infoList = [
        {
            icons : <FaUser/>,
            title : '이름',
            content : '노재희',
            link : false
        },
        {
            icons : <FaGraduationCap />,
            title : '학력',
            content : '건국대학교 화학공학부 학사',
            link : false
        },
        {
            icons : <TbCertificate />,
            title : '자격증',
            content : '정보처리기사 · ADsP',
            link : false
        },
        {
            icons : <MdLanguage />,
            title : '어학',
            content : 'OPIc IH',
            link : false
        },
        {
            icons : <IoIosMail />,
            title : '이메일',
            content : 'snowcat3b@gmail.com',
            link : false
        },
        {
            icons : <IoLogoGithub />,
            title : 'Github',
            content : 'https://github.com/blackcattt3',
            link : true
        },
        {
            icons : <SiVelog />,
            title : 'Velog',
            content : 'https://velog.io/@snowcat',
            link : true
        }
    ]
    
  return (
    <div className='about-section'>
      <h1>About me</h1>
      <div className='info'>
        {infoList.map((item, i)=>(
            <div key={i} className='info-item'>
                <div>{item.icons}</div>
                <div>
                    <h5>{item.title}</h5>
                    {item.link?<a className='link-style' href={item.content}>{item.content}</a>:<h3>{item.content}</h3>}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default About

// react-spring -> 개별 프로젝트 카드 만들때 사용.
// intersection observer -> 스크롤 내렸을때 요소 나타나게 하기 + 애니메이션