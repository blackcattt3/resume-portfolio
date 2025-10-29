import React from 'react'
import './ProjectModal.css'
import { useEffect, useState, useRef } from 'react'

const ProjectModal = ({activeProject, setActiveProject, onClose}) => {
    // console.log(activeProject)
    const { title, subtitle, content, skills, projectImg, github, demo } = activeProject;


    return (
    <div className='overlay' onClick={onClose}>
        <h2 onClick={onClose}>x</h2>
        <div className='modal' onClick={(e)=>{e.stopPropagation()}}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            {content.map((el)=>(
                <div>{el}</div>
            ))}
            <h2>{title}</h2>
            <h2>{title}</h2>
            {projectImg.map((img)=>(
                <img className='modal-project-img'src={img}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectModal


// useEffect(()=>{
//     console.log("useEffect 실행")
//     const closeModal = (e)=>{
//         if(activeProject && ref.current && !ref.current.contains(e.target)){
//             setActiveProject(null)
//             console.log('null입니다');
//         }}
//     if (activeProject) {
//         // 모달 생성 직후, 클릭 이벤트 한 템포 늦게 등록
//         const timer = setTimeout(() => {
//         document.addEventListener("click", closeModal);
//         }, 0);

//         return () => {
//         clearTimeout(timer);
//         console.log("close!!")
//         document.removeEventListener("click", closeModal);
//         };
//     }
// },[activeProject])