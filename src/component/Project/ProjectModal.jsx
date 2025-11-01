import React from 'react'
import './ProjectModal.css'
import { useEffect, useState } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const ProjectModal = ({activeProject, setActiveProject, onClose}) => {
    // console.log(activeProject)
    const { title, subtitle, content, skills, projectImg, github, demo } = activeProject;
    const [currentImg, setCurrentImg] = useState(0);

    return (
    <div className='overlay' onClick={onClose}>
        < div className='modal' onClick={(e)=>e.stopPropagation()}>
            <div className='modal-top'>
                <IoIosArrowDropleftCircle className='modal-icon' onClick={()=>{currentImg>0? setCurrentImg(prev => prev-1):setCurrentImg(projectImg.length-1)}}/>
                <img className='modal-main-img' src={projectImg[currentImg]}/>
                <IoIosArrowDroprightCircle className='modal-icon' onClick={()=>{currentImg<projectImg.length-1? setCurrentImg(prev => prev+1):setCurrentImg(0)}}/>
            </div>
            <div className='modal-img-list'>
                {projectImg.map((img, i)=>(
                <img className={`modal-project-img ${i==currentImg?'current' : ''}`} src={img}
                    onClick={()=>setCurrentImg(i)}/>
                ))}
            </div>
            
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