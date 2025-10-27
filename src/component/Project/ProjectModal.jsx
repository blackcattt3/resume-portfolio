import React from 'react'
import './ProjectModal.css'

const ProjectModal = ({activeProject, setActiveProject}) => {
    console.log(activeProject)
    return (
    <div className='overlay'>
        <h2 onClick={()=>setActiveProject(null)}>x</h2>
        <div className='modal'>
            <h2>{activeProject.title}</h2>
            <h2>{activeProject.title}</h2>
            <h2>{activeProject.title}</h2>
            <h2>{activeProject.title}</h2>
        </div>
    </div>
  )
}

export default ProjectModal
