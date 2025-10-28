import React from 'react'
import './ProjectModal.css'

const ProjectModal = ({activeProject, setActiveProject}) => {
    console.log(activeProject)
    const { title, subtitle, content, skills, projectImg, github, demo } = activeProject

    return (
    <div className='overlay'>
        <h2 onClick={()=>setActiveProject(null)}>x</h2>
        <div className='modal'>
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
