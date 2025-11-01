import React from 'react'
import './ProjectCard.css'
import { useInView } from 'react-intersection-observer'
import { FaTools } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { text } from '../../animations/animationVariants';
import {motion} from 'framer-motion'

const ProjectCard = ({item, i, delayBase, duration, onDetailClick, activeProject}) => {
  const { title, subtitle, content, skills, projectImg, github, demo } = item
  const [detailOpen, setDetailOpen] = useState(false);
  // useEffect(()=>{
  //   console.log(activeProject)
  // },[activeProject])


  return (

    <motion.div className='card-wrapper' variants={text}>

        <div className='project-card'>
          <div className='content'>

            <div className='title-part'>
              <h2>{title}</h2>
              <h4 className='subtitle'>{subtitle}</h4>
              <h5 className='skill-part'><FaTools />{skills.map((skill)=>(
                <div>{skill}</div>
              ))}</h5>
            </div>

            <div className='button-area'>
              <div className='demo-btn' onClick={() => window.open(demo)}>Demo</div>
              <div className='git-btn' onClick={() => window.open(github)}>Git Repo</div>
            </div>

            {detailOpen && <ul className='detail-area'>
              {content.map((el)=>(
                <li>⭐️  {el}</li>
              ))}
            </ul>}
      
          </div>

          <div className='img-part' onClick={onDetailClick}>
            <img className='card-img' src={projectImg.find(img=>img.includes('thumbnail')) || projectImg[0]}/>
          </div>
        </div>

        <div className='detail-btn' onClick={()=>setDetailOpen(!detailOpen)}>
          {detailOpen?<><CiCirclePlus/>Close Details</>:<><CiCircleMinus />More Details</>}</div>
  
    </motion.div>

  )
}

export default ProjectCard


// 원래는 animista로 애니메이션 효과 주려고 했지만 이렇게 되면 화면에 보일때 실행할수가 없게 됌. 렌더링 즉시 실행되어버려서
// 타이밍까지 제어하려면 추가로 react-intersection-observer로 따로 타이밍 제어까지 해줘야함.
// 그래서 그냥 framers motion으로 한번에 제어해주기로 했다!
